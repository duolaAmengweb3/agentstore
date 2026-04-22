#!/usr/bin/env node
/**
 * 修正 seed 时猜错的 github repo URL
 * 有真 github 就改成真的;没公开 repo 的就删掉 fetch.github(留 npm 或无)
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content/tools');

// slug → { github?: string | null, npm?: string | null, smithery?: string }
// null 表示"删除这个字段"
const FIXES = {
  'moralis-mcp': { github: 'a6b8/moralis-mcp' },
  'helius-mcp': { github: 'helius-labs/core-ai' },
  'chainstack-mcp': { github: 'chainstacklabs/mcp-server' },

  // 这些是 hosted 服务,没有公开 github repo — 删掉 github 源
  '1inch-mcp':        { github: null },
  '0x-agent-skills':  { github: null },
  'gate-for-ai':      { github: null },
  'openbroker-cli':   { github: null },
  'quicknode-mcp':    { github: null },

  // Smithery 平台本身
  'smithery':  { github: 'smithery-ai/sdk' },
};

async function main() {
  let fixed = 0;
  for (const [slug, changes] of Object.entries(FIXES)) {
    const filepath = path.join(DIR, `${slug}.md`);
    try {
      const raw = await fs.readFile(filepath, 'utf8');
      const { data, content } = matter(raw);
      const fetch = { ...(data.fetch || {}) };

      for (const [k, v] of Object.entries(changes)) {
        if (v === null) delete fetch[k];
        else fetch[k] = v;
      }

      data.fetch = fetch;
      // 清掉之前失败的 readme / repoInfo 占位(让下次重新拉)
      delete data.readme;
      delete data.repoInfo;

      await fs.writeFile(filepath, matter.stringify(content, data), 'utf8');
      console.log(`  ✓ ${slug}  ${JSON.stringify(fetch)}`);
      fixed++;
    } catch (e) {
      console.warn(`  fail ${slug}:`, e.message);
    }
  }
  console.log(`\n[fix] patched ${fixed} / ${Object.keys(FIXES).length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
