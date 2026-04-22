#!/usr/bin/env node
/**
 * 每 6 小时跑一次(GitHub Actions)。
 * 读所有 content/tools/*.md,对带 `fetch` frontmatter 的工具去 GitHub / npm 拉真实数据,
 * 把 metrics 写回 frontmatter,git commit+push。
 *
 * frontmatter 示例:
 * ---
 * slug: coinbase-agentkit
 * fetch:
 *   github: coinbase/agentkit        # owner/repo
 *   npm: "@coinbase/agentkit"        # npm 包名
 *   pypi: funding-rates-mcp          # PyPI 包名(如适用)
 * metrics:
 *   githubStars: 1204   # 会被自动刷新
 *   npmMonthly: 73652
 * ---
 *
 * 本地测试:  node scripts/fetch-metrics.mjs
 * 只更新不提交:  DRY_RUN=1 node scripts/fetch-metrics.mjs
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

// ---------- 数据源 ----------

async function fetchGithub(repo) {
  const url = `https://api.github.com/repos/${repo}`;
  const headers = GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}`, 'User-Agent': 'agentstore-bot' } : { 'User-Agent': 'agentstore-bot' };
  try {
    const r = await fetch(url, { headers });
    if (!r.ok) return null;
    const d = await r.json();
    return {
      githubStars: d.stargazers_count,
      githubForks: d.forks_count,
      lastPush: d.pushed_at,
      openIssues: d.open_issues_count,
      archived: d.archived,
    };
  } catch (e) {
    console.warn(`  github fail ${repo}:`, e.message);
    return null;
  }
}

async function fetchNpmMonthly(pkg) {
  const url = `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(pkg)}`;
  try {
    const r = await fetch(url);
    if (!r.ok) return null;
    const d = await r.json();
    return typeof d.downloads === 'number' ? d.downloads : null;
  } catch (e) {
    console.warn(`  npm fail ${pkg}:`, e.message);
    return null;
  }
}

async function fetchPypiMonthly(pkg) {
  // pypistats API — 用最近 30 天总和
  const url = `https://pypistats.org/api/packages/${encodeURIComponent(pkg)}/recent`;
  try {
    const r = await fetch(url);
    if (!r.ok) return null;
    const d = await r.json();
    return d?.data?.last_month ?? null;
  } catch (e) {
    console.warn(`  pypi fail ${pkg}:`, e.message);
    return null;
  }
}

// ---------- 周增长 ----------
// 每次 fetch 会把当前 snapshot 存到 metrics._history,算法:
//    last7d = history 里 >= 7 天前最近的那一条
//    weeklyGrowthPct = (current - last7d) / last7d * 100
// 保留最近 12 条(快 3 个月)

function pickLastWeek(history) {
  if (!history || history.length < 2) return null;
  const cutoff = Date.now() - 7 * 24 * 3600 * 1000;
  // 从最老的里找 >= 7 天前且最近的
  const older = history.filter((h) => new Date(h.t).getTime() <= cutoff);
  return older[older.length - 1] || history[0];
}

function pct(cur, prev) {
  if (prev == null || prev === 0) return null;
  return Math.round(((cur - prev) / prev) * 100);
}

// ---------- 主流程 ----------

async function processFile(filepath) {
  const raw = await fs.readFile(filepath, 'utf8');
  const { data, content } = matter(raw);
  if (!data.fetch) return { changed: false };

  const updates = { ...(data.metrics || {}) };
  const sources = data.fetch;
  let touched = false;

  // GitHub
  if (sources.github) {
    const gh = await fetchGithub(sources.github);
    if (gh) {
      if (gh.githubStars != null) {
        updates.githubStars = gh.githubStars;
        touched = true;
      }
      if (gh.lastPush) {
        updates.lastPush = gh.lastPush;
        touched = true;
      }
      if (gh.archived !== undefined) {
        updates.archived = gh.archived;
        touched = true;
      }
    }
  }

  // npm
  if (sources.npm) {
    const npm = await fetchNpmMonthly(sources.npm);
    if (npm != null) {
      updates.npmMonthly = npm;
      touched = true;
    }
  }

  // PyPI
  if (sources.pypi) {
    const py = await fetchPypiMonthly(sources.pypi);
    if (py != null) {
      updates.pypiMonthly = py;
      touched = true;
    }
  }

  if (!touched) return { changed: false };

  // 维护 history + 算周增长
  const history = Array.isArray(data.metrics?._history) ? [...data.metrics._history] : [];
  const stampNow = new Date().toISOString();
  // push 当前总量 snapshot(用 npm+stars 的综合流量代理)
  const currentMetric =
    (updates.npmMonthly || 0) +
    (updates.githubStars || 0) * 10 +
    (updates.pypiMonthly || 0);
  history.push({ t: stampNow, v: currentMetric });
  // 限制最多 12 条
  while (history.length > 12) history.shift();
  const lastWeek = pickLastWeek(history.slice(0, -1)); // 不含刚加的
  if (lastWeek) {
    const growth = pct(currentMetric, lastWeek.v);
    if (growth != null) updates.weeklyGrowthPct = growth;
  }
  updates._history = history;
  updates.lastAutoUpdated = stampNow;

  const newFrontmatter = { ...data, metrics: updates };
  const serialized = matter.stringify(content, newFrontmatter);

  if (!DRY) {
    await fs.writeFile(filepath, serialized, 'utf8');
  }
  return {
    changed: true,
    slug: data.slug,
    changes: {
      githubStars: updates.githubStars,
      npmMonthly: updates.npmMonthly,
      growth: updates.weeklyGrowthPct,
    },
  };
}

async function main() {
  console.log(`[metrics] ${DRY ? 'DRY RUN' : 'LIVE'} — scanning ${DIR}`);
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.md'));

  const results = [];
  // 限制并发,避开 GitHub/npm API 突发
  const CONCURRENCY = 5;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map((f) => processFile(path.join(DIR, f)).catch((e) => ({ changed: false, error: e.message })))
    );
    results.push(...batchResults);
  }

  const changed = results.filter((r) => r.changed);
  console.log(`[metrics] processed ${files.length} files, updated ${changed.length}`);
  changed.forEach((r) => {
    const parts = [];
    if (r.changes.githubStars != null) parts.push(`★${r.changes.githubStars}`);
    if (r.changes.npmMonthly != null) parts.push(`npm ${r.changes.npmMonthly}/mo`);
    if (r.changes.growth != null) parts.push(`${r.changes.growth > 0 ? '+' : ''}${r.changes.growth}%`);
    console.log(`  ✓ ${r.slug}  ${parts.join('  ')}`);
  });

  // 统计给 GH Actions 用
  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT, `updated=${changed.length}\n`);
  }

  if (changed.length === 0) {
    console.log('[metrics] no changes — skipping commit');
    process.exit(0);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
