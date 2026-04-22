#!/usr/bin/env node
/**
 * 一次性脚本:读 src/lib/mock-data.ts 里的 tools,输出到 content/tools/*.md
 *
 * 用法:  node scripts/generate-tool-md.mjs
 *
 * 设计目标:
 *  - mock-data.ts 继续作为编译期 fallback(没对应 md 文件时用它)
 *  - 新工具优先走 markdown(可 PR 贡献,versioned)
 *  - loader 在 lib/content/tools.ts 里合并两边
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ===== 读 mock-data.ts 里的 tools 数组 =====
// 简单 regex 解析,不引入 ts-node
const mockDataPath = path.join(ROOT, 'src/lib/mock-data.ts');
const mockDataSrc = await fs.readFile(mockDataPath, 'utf8');

// 抓取 export const tools: Tool[] = [ ... ] 的整段,然后 eval 安全版本
// 更干脆的做法:提取每个 tool 对象字面量,用 Function() 解析
const toolsStart = mockDataSrc.indexOf('export const tools: Tool[] = [');
if (toolsStart === -1) {
  throw new Error('Cannot find tools array in mock-data.ts');
}
const afterStart = mockDataSrc.slice(toolsStart + 'export const tools: Tool[] = '.length);
// 找到匹配的 ];
let depth = 0, endIdx = -1;
for (let i = 0; i < afterStart.length; i++) {
  const c = afterStart[i];
  if (c === '[') depth++;
  else if (c === ']') {
    depth--;
    if (depth === 0) { endIdx = i; break; }
  }
}
if (endIdx === -1) throw new Error('Cannot find end of tools array');
const arrayText = afterStart.slice(0, endIdx + 1);

// 用 Function 安全 eval(没有引用外部变量,纯字面量)
let tools;
try {
  // eslint-disable-next-line no-new-func
  tools = new Function('return ' + arrayText)();
} catch (err) {
  console.error('Parse error:', err.message);
  process.exit(1);
}

console.log(`Parsed ${tools.length} tools from mock-data.ts`);

// ===== 写 content/tools/*.md =====
const outDir = path.join(ROOT, 'content/tools');
await fs.mkdir(outDir, { recursive: true });

// YAML frontmatter 序列化(简化版 — 只处理我们用的字段)
function yaml(v, indent = '') {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') {
    // 安全字符串:用单引号,内部单引号转义成两个
    return `'${v.replace(/'/g, "''")}'`;
  }
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    return '\n' + v.map((it) => `${indent}  - ${yaml(it, indent + '  ').replace(/^\n/, '')}`).join('\n');
  }
  if (typeof v === 'object') {
    const entries = Object.entries(v);
    if (entries.length === 0) return '{}';
    return '\n' + entries.map(([k, val]) => `${indent}  ${k}: ${yaml(val, indent + '  ').replace(/^\n/, '')}`).join('\n');
  }
  return String(v);
}

function serialize(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    lines.push(`${k}: ${yaml(v, '').replace(/^\n/, '\n')}`.replace(/\n$/, ''));
  }
  lines.push('---', '', '');
  return lines.join('\n');
}

let written = 0;
for (const tool of tools) {
  const frontmatter = {
    slug: tool.slug,
    name: tool.name,
    author: tool.author,
    category: tool.category,
    icon: tool.icon,
    official: !!tool.official,
    score: tool.score,
    tagline_en: tool.tagline?.en ?? '',
    tagline_zh: tool.tagline?.zh ?? '',
    metrics: tool.metrics || {},
  };

  const content = serialize(frontmatter) +
    `\n## ${tool.name}\n\n${tool.tagline?.en ?? ''}\n\n> ${tool.tagline?.zh ?? ''}\n`;

  const file = path.join(outDir, `${tool.slug}.md`);
  await fs.writeFile(file, content, 'utf8');
  written++;
}

console.log(`Wrote ${written} markdown files to ${path.relative(ROOT, outDir)}/`);
