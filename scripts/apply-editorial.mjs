#!/usr/bin/env node
/**
 * 把 scripts/editorial-content.mjs 里人写的 tagline + summary 同步进
 * content/tools/{slug}.md 的 frontmatter。
 *
 * - tagline_zh / tagline_en:覆盖现有
 * - summary_zh / summary_en:新字段
 *
 * 一次性脚本:跑完 commit diff 即生效。之后可以手动改 md,下次再跑会再次覆盖。
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

import { editorial } from './editorial-content.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'content/tools');

async function main() {
  const files = new Set((await fs.readdir(TOOLS_DIR)).filter((f) => f.endsWith('.md')));
  const slugs = Object.keys(editorial);

  let patched = 0;
  let missing = [];

  for (const slug of slugs) {
    const filename = `${slug}.md`;
    if (!files.has(filename)) {
      missing.push(slug);
      continue;
    }
    const filepath = path.join(TOOLS_DIR, filename);
    const raw = await fs.readFile(filepath, 'utf8');
    const parsed = matter(raw);
    const data = parsed.data;
    const body = parsed.content;
    const e = editorial[slug];

    data.tagline_en = e.tagline_en;
    data.tagline_zh = e.tagline_zh;
    data.summary_en = e.summary_en;
    data.summary_zh = e.summary_zh;

    const out = matter.stringify(body, data);
    await fs.writeFile(filepath, out, 'utf8');
    patched++;
  }

  // 统计:还有哪些 md 没被 editorial 覆盖
  const covered = new Set(slugs);
  const uncovered = [...files]
    .map((f) => f.replace(/\.md$/, ''))
    .filter((s) => !covered.has(s));

  console.log(`✅ patched ${patched} tools`);
  if (missing.length) {
    console.log(`⚠️  editorial 里有但没 md 文件:${missing.length}`);
    missing.forEach((s) => console.log(`   - ${s}`));
  }
  if (uncovered.length) {
    console.log(`⚠️  md 文件里有但 editorial 没覆盖:${uncovered.length}`);
    uncovered.forEach((s) => console.log(`   - ${s}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
