#!/usr/bin/env node
/**
 * 给有 fetch.github 源的工具拉 README + 深度 repo 数据,
 * 解析成"关于 / 功能 / 示例 / 活跃度"写回 frontmatter。
 *
 * 让每个工具详情页看起来都不一样,真正有深度。
 *
 * 用法:
 *   node scripts/fetch-readme.mjs                # 拉所有
 *   node scripts/fetch-readme.mjs polymarket-mcp # 只拉一个
 *   DRY_RUN=1 node scripts/fetch-readme.mjs      # 不写文件
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'content/tools');
const DRY = !!process.env.DRY_RUN;
const GH_TOKEN = process.env.GITHUB_TOKEN || '';

const onlySlugs = process.argv.slice(2);

// ---------- README 解析 ----------

/** 找到真正的 description:跳过 H1 / badge / table / comment,取第一段实质内容 */
function extractDescription(md) {
  const lines = md.split('\n');
  let inBadgeBlock = false;
  let skipNext = false;
  const paragraph = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      if (paragraph.length > 0) break;
      continue;
    }
    // 跳过 H1 title
    if (/^#\s/.test(trimmed)) continue;
    // 跳过 HTML 注释
    if (trimmed.startsWith('<!--')) continue;
    // 跳过 HTML div(badge block)
    if (/^<(div|p|a|img|br|center|picture|source)[\s>]/i.test(trimmed)) continue;
    if (/^<\//.test(trimmed)) continue;
    // 跳过 badge / image 行(纯图片或链接)
    if (/^\[!\[.*\]\(.*\)\]\(.*\)$/.test(trimmed)) continue;
    if (/^!\[.*\]\(.*\)$/.test(trimmed)) continue;
    if (/^\[.*\]:\s/.test(trimmed)) continue; // 引用链接定义
    // 跳过表格
    if (/^\|/.test(trimmed)) continue;
    // 遇到下一个标题 → 结束
    if (/^#{2,}\s/.test(trimmed) && paragraph.length > 0) break;
    if (/^#{2,}\s/.test(trimmed)) continue;
    // 跳过分隔符
    if (/^[-=*]{3,}$/.test(trimmed)) continue;

    // 清理 markdown 内联标记 + HTML 标签
    const clean = trimmed
      .replace(/^>\s+/, '')                     // quote
      .replace(/<[^>]+>/g, '')                  // 内联 HTML 标签(如 <h1 style=...>)
      .replace(/&[a-z]+;/gi, ' ')               // HTML 实体
      .replace(/\*\*(.*?)\*\*/g, '$1')          // bold
      .replace(/\*(.*?)\*/g, '$1')              // italic
      .replace(/`(.*?)`/g, '$1')                // code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // links
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')     // images
      .replace(/\s+/g, ' ')
      .trim();

    // 跳过只剩很少字的行(HTML 标签去完几乎为空)
    if (clean.length < 10) continue;

    if (clean.length > 0) paragraph.push(clean);
    if (paragraph.join(' ').length > 400) break;
  }

  const text = paragraph.join(' ').trim();
  return text.length > 20 ? text.slice(0, 500) : null;
}

/** 从 ## Features / ## What it does / ## Key features 下面抽 bullet */
function extractFeatures(md) {
  const headingRegex = /^#{2,3}\s+(features|what.*it.*does|why|key\s*features|capabilities|what\'?s\s*included|whats\s*inside|overview)\s*$/im;
  const lines = md.split('\n');
  const features = [];
  let collecting = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (headingRegex.test(trimmed)) {
      collecting = true;
      continue;
    }
    if (!collecting) continue;
    // 遇到下一个 heading 停
    if (/^#{1,3}\s/.test(trimmed) && features.length > 0) break;
    if (/^#{1,3}\s/.test(trimmed)) continue;

    // bullet 提取
    const m = /^(?:[-*+]\s+|\d+\.\s+)(.+)/.exec(trimmed);
    if (m) {
      const clean = m[1]
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/`(.*?)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^(.+?):\s+(.+)$/, '$1 — $2')  // "Name: desc" → "Name — desc"
        .trim();
      if (clean.length > 5 && clean.length < 200) {
        features.push(clean);
        if (features.length >= 6) break;
      }
    } else if (features.length > 0 && trimmed === '') {
      // 空行可能意味着 bullet 列表结束(宽松,再看一眼)
      continue;
    } else if (features.length > 0 && !/^\s*(?:[-*+]|\d+\.)/.test(line)) {
      break;
    }
  }
  return features.length > 0 ? features : null;
}

/** 抽第一段 install 代码块 */
function extractInstallCommand(md) {
  const headingRegex = /^#{2,3}\s+(install|installation|getting\s*started|quick\s*start|quickstart|setup|usage)\s*$/im;
  const lines = md.split('\n');
  let collecting = false;
  const block = [];
  let inBlock = false;

  for (const line of lines) {
    if (headingRegex.test(line.trim())) {
      collecting = true;
      continue;
    }
    if (!collecting) continue;
    if (/^#{1,3}\s/.test(line.trim()) && !inBlock) break;
    if (/^```/.test(line.trim())) {
      if (inBlock) break;
      inBlock = true;
      continue;
    }
    if (inBlock) block.push(line);
  }

  const code = block.join('\n').trim();
  if (!code || code.length > 500) return null;
  return code;
}

// ---------- GitHub API ----------

const ghHeaders = GH_TOKEN
  ? { Authorization: `Bearer ${GH_TOKEN}`, 'User-Agent': 'agentstore-readme' }
  : { 'User-Agent': 'agentstore-readme' };

async function fetchRepoMeta(repo) {
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}`, { headers: ghHeaders });
    if (!r.ok) return null;
    const d = await r.json();
    return {
      description: d.description,
      language: d.language,
      license: d.license?.spdx_id || null,
      defaultBranch: d.default_branch || 'main',
      contributors: null,  // 下面单独拉
      openIssues: d.open_issues_count,
      pushedAt: d.pushed_at,
      createdAt: d.created_at,
      archived: d.archived,
      size: d.size,
      topics: d.topics || [],
    };
  } catch (e) {
    console.warn(`  meta fail ${repo}:`, e.message);
    return null;
  }
}

async function fetchContributorCount(repo) {
  try {
    // 仅拉第一页,看总数的 Link header
    const r = await fetch(`https://api.github.com/repos/${repo}/contributors?per_page=1`, { headers: ghHeaders });
    if (!r.ok) return null;
    const link = r.headers.get('link') || '';
    const m = /<[^>]+[?&]page=(\d+)[^>]*>;\s*rel="last"/.exec(link);
    if (m) return Number(m[1]);
    const arr = await r.json();
    return Array.isArray(arr) ? arr.length : null;
  } catch {
    return null;
  }
}

async function fetchReadme(repo, branch = 'main') {
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}/readme`, { headers: ghHeaders });
    if (!r.ok) return null;
    const d = await r.json();
    if (!d.content) return null;
    return Buffer.from(d.content, 'base64').toString('utf8');
  } catch {
    return null;
  }
}

// ---------- 主流程 ----------

async function processFile(filepath, slug) {
  const raw = await fs.readFile(filepath, 'utf8');
  const { data, content } = matter(raw);
  if (!data.fetch?.github) return { changed: false, reason: 'no github source' };

  const repo = data.fetch.github;
  console.log(`  ${slug}  (${repo})`);

  const [meta, readme, contributors] = await Promise.all([
    fetchRepoMeta(repo),
    fetchReadme(repo),
    fetchContributorCount(repo),
  ]);

  if (!meta && !readme) return { changed: false, reason: 'fetch failed' };

  const parsed = readme
    ? {
        about: extractDescription(readme) || meta?.description || null,
        features: extractFeatures(readme),
        installCmd: extractInstallCommand(readme),
      }
    : { about: meta?.description || null };

  const repoInfo = meta
    ? {
        language: meta.language,
        license: meta.license,
        topics: meta.topics?.slice(0, 8),
        contributors,
        openIssues: meta.openIssues,
        archived: meta.archived,
        createdAt: meta.createdAt,
        defaultBranch: meta.defaultBranch,
      }
    : null;

  const updated = {
    ...data,
    readme: {
      ...(parsed.about && { about: parsed.about }),
      ...(parsed.features && { features: parsed.features }),
      ...(parsed.installCmd && { installCmd: parsed.installCmd }),
      lastFetched: new Date().toISOString(),
    },
    ...(repoInfo && { repoInfo }),
  };

  if (!DRY) {
    await fs.writeFile(filepath, matter.stringify(content, updated), 'utf8');
  }
  return {
    changed: true,
    slug,
    about: !!parsed.about,
    features: parsed.features?.length || 0,
    hasInstall: !!parsed.installCmd,
  };
}

async function main() {
  console.log(`[readme] ${DRY ? 'DRY' : 'LIVE'} — scanning`);
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.md'));

  const targets = files.filter((f) => {
    const slug = f.replace(/\.md$/, '');
    return onlySlugs.length === 0 || onlySlugs.includes(slug);
  });

  console.log(`[readme] processing ${targets.length} files...`);

  const results = [];
  // 限制并发避免 GitHub rate limit
  const CONCURRENCY = 3;
  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const batch = targets.slice(i, i + CONCURRENCY);
    const batchRes = await Promise.all(
      batch.map((f) => {
        const slug = f.replace(/\.md$/, '');
        return processFile(path.join(DIR, f), slug).catch((e) => ({
          changed: false, slug, reason: e.message,
        }));
      })
    );
    results.push(...batchRes);
  }

  const changed = results.filter((r) => r.changed);
  const withFeatures = changed.filter((r) => r.features > 0);
  console.log(`\n[readme] updated ${changed.length} / ${targets.length}`);
  console.log(`         got features: ${withFeatures.length}`);
  console.log(`         got install:  ${changed.filter((r) => r.hasInstall).length}`);

  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT, `enriched=${changed.length}\n`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
