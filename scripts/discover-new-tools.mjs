#!/usr/bin/env node
/**
 * 每日扫描 Smithery / npm / GitHub 的 "新增加密 AI 工具"。
 * 输出候选到 content/discoveries/{YYYY-MM-DD}.json
 * 同时把"信任源"的候选分到一个单独文件,给 workflow 自动 onboard。
 *
 * 本地测试: node scripts/discover-new-tools.mjs
 * 只查不写: DRY_RUN=1 node scripts/discover-new-tools.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'content/tools');
const OUT_DIR = path.join(ROOT, 'content/discoveries');
const DRY = !!process.env.DRY_RUN;
const GH_TOKEN = process.env.GITHUB_TOKEN || '';

// "crypto" 关键词清单 — 候选至少要命中一个才算加密相关
// 注意:不要加过于通用的短词(如 "base")会误判 Node.js 生态里的包
const CRYPTO_KEYWORDS = [
  'crypto', 'web3', 'defi', 'dex', 'cex', 'solana', 'ethereum', 'evm',
  'hyperliquid', 'jupiter ', 'okx', 'binance', 'coinbase', 'bitcoin',
  'polymarket', 'uniswap', '1inch', 'pump.fun', 'memecoin', 'stablecoin',
  'tron', 'aptos protocol', 'sui network', 'near protocol', 'cosmos sdk',
  'polygon', 'arbitrum', 'blockchain', 'onchain', 'on-chain', 'on chain',
  'wallet', 'nft', 'token ', 'perp', 'liquidation', 'dydx', 'gmx',
  ' base chain', ' base network', ' base l2', 'base-l2',
];

// "agent tool" 关键词 — 必须命中一个才是 AI agent 工具(避免把 SDK 底层库误收)
const AGENT_KEYWORDS = [
  'mcp', 'agent', 'skill', 'claude', 'llm', 'anthropic', 'openai',
  'model context protocol', 'agent kit', 'agentkit',
];

// "信任源" — 这些作者/scope 的新工具可自动 onboard
const TRUSTED_AUTHORS = new Set([
  'binance', 'coinbase', 'okx', 'krakenfx', 'bitgetlimited', 'kucoin',
  'bybit-exchange', 'gate-mirror', 'hyperliquid-dex', 'jup-ag',
  'elizaos', 'sendaifun', 'goat-sdk', 'fetchai', 'gizatechxyz',
  'coingecko', 'etherscan', 'helius-labs', 'chainstack', 'moralisweb3',
  'blockscout', 'codex-data', 'bankless', 'noditlabs', 'goplussecurity',
  'phantom', 'crossmint', 'thirdweb', 'nearai', 'getalby', 'breez',
  'kukapay', // kukapay 社区信任,自动收
  '1inch', '0xproject', 'uniswap', 'pancakeswap', 'ribbon-finance',
  'dydxprotocol', 'drift-labs', 'vertex-protocol', 'gmx-io',
  'anthropic', 'base',
]);

const TRUSTED_NPM_SCOPES = new Set([
  '@binance', '@coinbase', '@okx_ai', '@phantom', '@modelcontextprotocol',
  '@solana', '@thirdweb', '@crossmint', '@elizaos', '@coingecko',
  '@anthropic-ai', '@near', '@chainstack',
]);

// ---------- 已有 slugs(跳过去重)----------

async function loadExistingSlugs() {
  const files = await fs.readdir(TOOLS_DIR).catch(() => []);
  const slugs = new Set();
  const slugRoots = new Set();   // slug 里的"核心词",避免 author-repo 和 repo 重复收录
  const githubRepos = new Set();
  const npmPackages = new Set();

  for (const filename of files) {
    if (!filename.endsWith('.md')) continue;
    const slug = filename.replace(/\.md$/, '');
    slugs.add(slug);
    // 简单取 slug 里最长的关键 token 作为 root(如 polymarket-mcp → polymarket)
    const parts = slug.split('-').filter((p) => p.length > 3 && !['mcp', 'the', 'for', 'sdk', 'cli', 'info'].includes(p));
    parts.forEach((p) => slugRoots.add(p));

    try {
      const raw = await fs.readFile(path.join(TOOLS_DIR, filename), 'utf8');
      const { data } = matter(raw);
      if (data.fetch?.github) githubRepos.add(data.fetch.github.toLowerCase());
      if (data.fetch?.npm) npmPackages.add(data.fetch.npm.toLowerCase());
    } catch {}
  }
  return { slugs, slugRoots, githubRepos, npmPackages };
}

const SLUG_STOP_WORDS = new Set([
  'mcp', 'sdk', 'cli', 'agent', 'agents', 'server', 'servers', 'tool', 'tools',
  'the', 'for', 'and', 'with', 'info', 'api', 'protocol', 'v1', 'v2', 'v3',
  'client', 'core', 'lib',
]);

/** 检查 candidate slug 是否已经以某种形式被收录 */
function isDuplicate(candidate, slug, existing) {
  if (existing.slugs.has(slug)) return true;
  if (candidate.repo && existing.githubRepos.has(candidate.repo.toLowerCase())) return true;
  if (candidate.source === 'npm' && existing.npmPackages.has(candidate.id.toLowerCase())) return true;

  // Smithery "owner/repo" — 把 owner 也检查一下
  if (candidate.source === 'smithery' && candidate.id.includes('/')) {
    const owner = candidate.id.split('/')[0];
    if (existing.slugRoots.has(owner)) return true;
  }

  // 核心词集合完全被 existing slugRoots 覆盖 → 视为重复
  //   - 'quantoracle' vs existing 'quantoracle-mcp' → core=['quantoracle'] 全在 roots → dup
  //   - 'polymarket-edge' vs existing 'polymarket-mcp' → core=['polymarket','edge'] 不全在 → 不 dup
  const parts = slug.split('-');
  const coreParts = parts.filter((p) => p.length > 3 && !SLUG_STOP_WORDS.has(p));
  if (coreParts.length > 0 && coreParts.every((p) => existing.slugRoots.has(p))) return true;

  return false;
}

// ---------- 来源 1:Smithery ----------

async function fetchSmithery() {
  // Smithery 公开 registry API,按 crypto 关键词搜
  const keywords = ['crypto', 'blockchain', 'defi', 'solana', 'ethereum', 'hyperliquid', 'polymarket'];
  const candidates = [];
  for (const kw of keywords) {
    try {
      const r = await fetch(`https://registry.smithery.ai/servers?q=${encodeURIComponent(kw)}&pageSize=30`);
      if (!r.ok) continue;
      const d = await r.json();
      const items = d.servers || d.results || d.data || [];
      for (const item of items) {
        const qualifiedName = item.qualifiedName || item.name || '';
        if (!qualifiedName) continue;
        const text = `${qualifiedName} ${item.displayName || ''} ${item.description || ''}`;
        // Smithery 天然是 MCP 服务器,只要过加密过滤即可
        if (!hasCryptoKeyword(text)) continue;
        candidates.push({
          source: 'smithery',
          id: qualifiedName,
          displayName: item.displayName || item.name || qualifiedName,
          description: item.description || '',
          url: `https://smithery.ai/server/${qualifiedName}`,
          useCount: item.useCount || item.calls || 0,
          createdAt: item.createdAt || item.publishedAt,
        });
      }
    } catch (e) {
      console.warn(`  smithery "${kw}" fail:`, e.message);
    }
  }
  // 去重(qualifiedName 可能被多个关键词命中)
  const unique = new Map();
  for (const c of candidates) if (!unique.has(c.id)) unique.set(c.id, c);
  return Array.from(unique.values());
}

// ---------- 来源 2:npm ----------

async function fetchNpm() {
  const queries = ['mcp crypto', 'mcp defi', 'mcp solana', 'mcp blockchain', 'agent crypto mcp'];
  const candidates = [];
  for (const q of queries) {
    try {
      const r = await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(q)}&size=40&popularity=1.0`);
      if (!r.ok) continue;
      const d = await r.json();
      const items = d.objects || [];
      for (const item of items) {
        const pkg = item.package || {};
        const name = pkg.name;
        if (!name) continue;
        const keywords = Array.isArray(pkg.keywords) ? pkg.keywords.join(' ') : '';
        const text = `${name} ${pkg.description || ''} ${keywords}`;
        // 必须同时是加密 + agent 工具
        if (!isRelevant(text)) continue;
        candidates.push({
          source: 'npm',
          id: name,
          displayName: pkg.name,
          description: pkg.description || '',
          url: pkg.links?.npm || `https://www.npmjs.com/package/${name}`,
          repo: pkg.links?.repository?.replace(/^.*github\.com[/:]/, '').replace(/\.git$/, '') || null,
          author: pkg.publisher?.username || pkg.author?.name || null,
          score: item.score?.final || 0,
          version: pkg.version,
          createdAt: pkg.date,
        });
      }
    } catch (e) {
      console.warn(`  npm "${q}" fail:`, e.message);
    }
  }
  // 按包名去重
  const unique = new Map();
  for (const c of candidates) if (!unique.has(c.id)) unique.set(c.id, c);
  return Array.from(unique.values());
}

// ---------- 来源 3:GitHub ----------

async function fetchGithubRepos() {
  // 过去 60 天新建的 "mcp" 相关 repo
  const since = new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString().slice(0, 10);
  const queries = [
    `mcp crypto created:>${since}`,
    `mcp defi created:>${since}`,
    `mcp solana created:>${since}`,
    `mcp hyperliquid created:>${since}`,
    `agent crypto mcp created:>${since}`,
  ];
  const headers = GH_TOKEN
    ? { Authorization: `Bearer ${GH_TOKEN}`, 'User-Agent': 'agentstore-discover' }
    : { 'User-Agent': 'agentstore-discover' };

  const candidates = [];
  for (const q of queries) {
    try {
      const r = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=30`, { headers });
      if (!r.ok) continue;
      const d = await r.json();
      for (const repo of d.items || []) {
        const text = `${repo.full_name} ${repo.description || ''}`;
        // github search 已带 "mcp" 关键词,这里再过一次加密
        if (!hasCryptoKeyword(text.toLowerCase())) continue;
        candidates.push({
          source: 'github',
          id: repo.full_name,
          displayName: repo.name,
          description: repo.description || '',
          url: repo.html_url,
          repo: repo.full_name,
          author: repo.owner?.login,
          stars: repo.stargazers_count,
          createdAt: repo.created_at,
          pushedAt: repo.pushed_at,
        });
      }
    } catch (e) {
      console.warn(`  github "${q}" fail:`, e.message);
    }
  }
  // 按 full_name 去重
  const unique = new Map();
  for (const c of candidates) if (!unique.has(c.id)) unique.set(c.id, c);
  return Array.from(unique.values());
}

function hasCryptoKeyword(text) {
  const t = (text || '').toLowerCase();
  return CRYPTO_KEYWORDS.some((kw) => t.includes(kw));
}

function hasAgentKeyword(text) {
  const t = (text || '').toLowerCase();
  return AGENT_KEYWORDS.some((kw) => t.includes(kw));
}

/** 必须同时是"加密"且"AI agent 工具"才是真正的候选 */
function isRelevant(text) {
  return hasCryptoKeyword(text) && hasAgentKeyword(text);
}

// ---------- 信任源判定 ----------

function isTrusted(candidate) {
  if (candidate.source === 'npm' && candidate.id.startsWith('@')) {
    const scope = candidate.id.split('/')[0].toLowerCase();
    if (TRUSTED_NPM_SCOPES.has(scope)) return true;
  }
  if (candidate.author && TRUSTED_AUTHORS.has(candidate.author.toLowerCase())) return true;
  if (candidate.repo) {
    const owner = candidate.repo.split('/')[0].toLowerCase();
    if (TRUSTED_AUTHORS.has(owner)) return true;
  }
  return false;
}

// ---------- slug 规范化 ----------

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/@[\w-]+\//g, '')   // 去 npm scope
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function candidateSlug(c) {
  if (c.source === 'npm' && c.id.startsWith('@')) {
    // @scope/name → scope-name
    const parts = c.id.replace(/^@/, '').split('/');
    return slugify(parts.join('-'));
  }
  if (c.source === 'github') return slugify(c.id.split('/')[1]);  // 只用 repo 名
  if (c.source === 'smithery') {
    // qualifiedName: "owner/repo" — 只取 repo,和 github 一致
    const parts = c.id.split('/');
    return slugify(parts[parts.length - 1]);
  }
  return slugify(c.id);
}

// ---------- 主流程 ----------

async function main() {
  console.log(`[discover] ${DRY ? 'DRY' : 'LIVE'} — scanning sources`);

  const existing = await loadExistingSlugs();
  console.log(`[discover] already have ${existing.slugs.size} tools indexed`);

  const [smitheryList, npmList, githubList] = await Promise.all([
    fetchSmithery(),
    fetchNpm(),
    fetchGithubRepos(),
  ]);

  console.log(`[discover] raw: smithery ${smitheryList.length} / npm ${npmList.length} / github ${githubList.length}`);

  // 合并 + 去重(按 normalized slug)
  const all = [...smitheryList, ...npmList, ...githubList];
  const byslug = new Map();
  for (const c of all) {
    const slug = candidateSlug(c);
    if (!slug) continue;
    if (isDuplicate(c, slug, existing)) continue;
    if (!byslug.has(slug)) {
      byslug.set(slug, { ...c, slug, trusted: isTrusted(c) });
    }
  }

  const candidates = Array.from(byslug.values());
  candidates.sort((a, b) => {
    // 排序:trusted 优先,然后按各自 score
    if (a.trusted !== b.trusted) return a.trusted ? -1 : 1;
    const sa = (a.useCount || 0) + (a.stars || 0) + (a.score || 0) * 100;
    const sb = (b.useCount || 0) + (b.stars || 0) + (b.score || 0) * 100;
    return sb - sa;
  });

  const trusted = candidates.filter((c) => c.trusted);
  const review = candidates.filter((c) => !c.trusted);

  console.log(`[discover] new candidates: ${candidates.length}`);
  console.log(`             trusted (auto-onboard): ${trusted.length}`);
  console.log(`             review needed: ${review.length}`);

  if (!DRY) {
    await fs.mkdir(OUT_DIR, { recursive: true });
    const date = new Date().toISOString().slice(0, 10);
    const outFile = path.join(OUT_DIR, `${date}.json`);
    await fs.writeFile(outFile, JSON.stringify({ date, trusted, review }, null, 2), 'utf8');
    console.log(`[discover] wrote ${path.relative(ROOT, outFile)}`);
  }

  // 给 GH Actions 使
  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT, `trusted_count=${trusted.length}\n`);
    await fs.appendFile(process.env.GITHUB_OUTPUT, `review_count=${review.length}\n`);
    await fs.appendFile(process.env.GITHUB_OUTPUT, `total=${candidates.length}\n`);
  }

  // 打印 top 10 供 log 查看
  console.log('\nTop 10 candidates:');
  candidates.slice(0, 10).forEach((c) => {
    const flag = c.trusted ? '⭐' : '  ';
    console.log(`  ${flag} [${c.source}] ${c.slug}  (${c.description?.slice(0, 60) || ''}...)`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
