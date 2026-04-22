#!/usr/bin/env node
/**
 * 接受某个 discoveries 里的候选,生成 content/tools/{slug}.md
 *
 * 用法:
 *   node scripts/onboard-candidate.mjs <candidate-slug> [--date 2026-04-22]
 *
 * 不指定 date 时,找最新一天的 discoveries/{YYYY-MM-DD}.json
 *
 * 作用:
 *  - GH Actions 自动 onboard 信任源
 *  - 手工 onboard:在 Issue 里回复 "onboard polymarket-v2" → workflow 跑这个
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'content/tools');
const DISCOVERIES_DIR = path.join(ROOT, 'content/discoveries');

// 根据描述猜分类
function guessCategory(desc) {
  const t = (desc || '').toLowerCase();
  if (/\b(wallet|sign|key|custody)\b/.test(t)) return 'wallet';
  if (/\b(ex|exchange|spot|perp|options|futures|trading|trader)\b/.test(t)) {
    if (/\b(dex|uniswap|jupiter|pancakeswap|1inch|hyperliquid)\b/.test(t)) return 'dex';
    return 'cex';
  }
  if (/\b(agent kit|framework|eliza|autogen|langchain|agents library)\b/.test(t)) return 'framework';
  if (/\b(rpc|indexer|mcp server|registry|explorer)\b/.test(t)) return 'infra';
  return 'data';
}

function guessIcon(category, name) {
  if (/hyperliquid/i.test(name)) return '⚡';
  if (/polymarket/i.test(name)) return '🎯';
  if (/solana|sol/i.test(name)) return '🟣';
  if (/bitcoin|btc/i.test(name)) return '🟠';
  if (/wallet/i.test(name)) return '🔐';
  if (/chart|tradingview|ta/i.test(name)) return '📈';
  const pool = {
    cex: '⚫', dex: '🦄', wallet: '🔐', data: '📊', framework: '🧬', infra: '🛠️',
  };
  return pool[category] || '📦';
}

async function findCandidateInLatest(slug) {
  const files = (await fs.readdir(DISCOVERIES_DIR).catch(() => [])).filter((f) => f.endsWith('.json'));
  if (files.length === 0) throw new Error(`no discoveries found in ${DISCOVERIES_DIR}`);
  // 按日期降序
  files.sort().reverse();
  for (const f of files) {
    try {
      const raw = await fs.readFile(path.join(DISCOVERIES_DIR, f), 'utf8');
      const d = JSON.parse(raw);
      const found = [...(d.trusted || []), ...(d.review || [])].find((c) => c.slug === slug);
      if (found) return { candidate: found, date: d.date };
    } catch {}
  }
  throw new Error(`candidate "${slug}" not found in any discoveries file`);
}

async function onboardOne(candidate) {
  const slug = candidate.slug;
  const outPath = path.join(TOOLS_DIR, `${slug}.md`);
  try {
    await fs.access(outPath);
    console.log(`  skip: ${slug}.md already exists`);
    return false;
  } catch {}

  const category = guessCategory(candidate.description);
  const icon = guessIcon(category, slug);

  const fetchSrc = {};
  if (candidate.source === 'github' || candidate.repo) fetchSrc.github = candidate.repo || candidate.id;
  if (candidate.source === 'npm') fetchSrc.npm = candidate.id;
  if (candidate.source === 'smithery') {
    // 也保留 smithery qualifiedName(未来 fetch-metrics 可以扩展查 Smithery)
    fetchSrc.smithery = candidate.id;
  }

  const frontmatter = {
    slug,
    name: candidate.displayName || slug,
    author: candidate.author || (candidate.repo ? candidate.repo.split('/')[0] : 'unknown'),
    category,
    icon,
    official: false,
    score: 7.0,                 // 新品起步 7.0,后续数据进来可调
    tagline_en: candidate.description?.slice(0, 140) || '',
    tagline_zh: candidate.description?.slice(0, 140) || '',  // 初始同 en,社区后续翻译
    metrics: {
      ...(candidate.stars != null && { githubStars: candidate.stars }),
      ...(candidate.useCount != null && { smitheryCalls: candidate.useCount }),
    },
    fetch: fetchSrc,
    onboardedAt: new Date().toISOString(),
    onboardedFrom: candidate.source,
  };

  const body = `## ${candidate.displayName || slug}

${candidate.description || ''}

${candidate.url ? `[${candidate.source} ↗](${candidate.url})` : ''}
`;

  await fs.writeFile(outPath, matter.stringify(body, frontmatter), 'utf8');
  console.log(`  ✓ ${slug}.md created`);
  return true;
}

async function main() {
  const args = process.argv.slice(2);
  const slugs = args.filter((a) => !a.startsWith('--'));
  if (slugs.length === 0) {
    console.error('Usage: node scripts/onboard-candidate.mjs <slug> [<slug2> ...]');
    console.error('  Or:   node scripts/onboard-candidate.mjs --all-trusted');
    process.exit(1);
  }

  // --all-trusted: 从最新 discoveries 拿所有 trusted 的一次性 onboard
  if (slugs.includes('--all-trusted') || args.includes('--all-trusted')) {
    const files = (await fs.readdir(DISCOVERIES_DIR).catch(() => [])).filter((f) => f.endsWith('.json')).sort().reverse();
    if (files.length === 0) {
      console.log('no discoveries, nothing to onboard');
      return;
    }
    const latest = JSON.parse(await fs.readFile(path.join(DISCOVERIES_DIR, files[0]), 'utf8'));
    const trusted = latest.trusted || [];
    console.log(`[onboard] auto-onboarding ${trusted.length} trusted candidates from ${files[0]}`);
    let count = 0;
    for (const c of trusted) {
      try {
        const created = await onboardOne(c);
        if (created) count++;
      } catch (e) {
        console.warn(`  fail ${c.slug}:`, e.message);
      }
    }
    console.log(`[onboard] created ${count} md files`);
    if (process.env.GITHUB_OUTPUT) {
      await fs.appendFile(process.env.GITHUB_OUTPUT, `onboarded=${count}\n`);
    }
    return;
  }

  // 逐个 onboard
  let count = 0;
  for (const slug of slugs) {
    try {
      const { candidate } = await findCandidateInLatest(slug);
      const created = await onboardOne(candidate);
      if (created) count++;
    } catch (e) {
      console.error(`  fail ${slug}:`, e.message);
    }
  }
  console.log(`[onboard] created ${count} md files`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
