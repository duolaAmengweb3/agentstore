#!/usr/bin/env node
/**
 * 根据 content/discoveries/{YYYY-MM-DD}.json 生成 GitHub Issue body。
 * 输出到 stdout。workflow 用 `> /tmp/issue_body.md` 接住。
 *
 * 用法:
 *   node scripts/build-issue-body.mjs content/discoveries/2026-04-22.json
 */

import fs from 'node:fs/promises';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/build-issue-body.mjs <discoveries.json>');
  process.exit(1);
}

const raw = await fs.readFile(file, 'utf8');
const d = JSON.parse(raw);
const review = (d.review || []).slice(0, 20);
const onboardedCount = d.onboarded || 0;

const lines = [];
lines.push(`### ${review.length} candidates need your review`);
lines.push('');
lines.push(`Auto-onboarded trusted sources this run: **${onboardedCount}**`);
lines.push('');
lines.push('For each candidate below:');
lines.push('- ✅ **Onboard**: reply with `/onboard <slug>` — bot will create a PR');
lines.push('- ❌ **Skip**: no action needed, candidates expire with next scan');
lines.push('');
lines.push('---');
lines.push('');

for (const c of review) {
  const badge = c.source === 'smithery' ? '📦' : c.source === 'npm' ? '📘' : '🐙';
  lines.push(`#### ${badge} \`${c.slug}\`  [${c.source}]`);
  lines.push('');
  const name = c.displayName || c.slug;
  const desc = (c.description || 'no description').slice(0, 200);
  lines.push(`**${name}** — ${desc}`);
  lines.push('');

  const metrics = [];
  if (c.stars) metrics.push(`⭐ ${c.stars}`);
  if (c.useCount) metrics.push(`📊 ${c.useCount} calls`);
  if (c.score) metrics.push(`score ${c.score.toFixed(2)}`);
  if (metrics.length) lines.push(metrics.join(' · '));
  if (c.url) lines.push(`<${c.url}>`);
  lines.push('');
  lines.push(`To add: \`/onboard ${c.slug}\``);
  lines.push('');
  lines.push('---');
  lines.push('');
}

const total = (d.review || []).length;
if (total > 20) {
  lines.push(`*(${total - 20} more in \`${file}\`)*`);
}

process.stdout.write(lines.join('\n'));
