# `content/` — AgentStore 内容系统

这个目录是 AgentStore 的 **single source of truth**(单一数据源),所有内容以 markdown + frontmatter 形式组织,可 PR 贡献。

## 为什么是 markdown 不是数据库

1. **零运维**:不需要数据库,git 仓库本身就是数据库
2. **版本可追溯**:每次改动都有 git history
3. **社区可 PR 贡献**:开发者 fork 仓库 + 改 md 文件 + 提 PR,标准 GitHub 流程
4. **构建时生成静态页**:Vercel CDN 直接缓存,访问极快,SEO 友好
5. **机器可读 + 人类可读**:AI agent / 爬虫可以直接吃 md

## 目录结构

```
content/
├── tools/          ← 每个工具一个 .md(frontmatter 结构化数据 + 正文介绍)
├── collections/    (未来)   主题合集
├── creators/       (未来)   创作者主页
└── learn/          (未来)   教程
```

## Tools frontmatter 格式

```yaml
---
slug: hyperliquid-radar                 # URL 用,必填,kebab-case
name: Hyperliquid Radar
author: agentstore                       # 对应 content/creators/<author>.md (未来)
category: dex                            # cex | dex | wallet | data | framework | infra
icon: ⚡                                 # emoji 占位(未来换成真 logo 文件)
official: false                          # 官方出品?
score: 8.6                               # 编辑分 0-10

tagline_en: Top liquidation risks + whale positions on HL
tagline_zh: HL 上最危险仓位 + 鲸鱼仓

metrics:                                 # 每 6 小时自动刷新
  smitheryCalls: 2413
  npmMonthly: ~
  githubStars: 48
  weeklyGrowthPct: 340
---

## About

(markdown 正文,可选,用于工具页"关于"部分)
```

## 怎么加新工具

1. fork [agentstore 仓库](https://github.com/agentstore)
2. 在 `content/tools/` 新建 `<your-slug>.md`
3. 按上面模板填 frontmatter
4. 提 PR
5. 审核团队 48 小时内回复

## 自动抓取的字段

这些由定时 cron 刷新(你投稿时可以填初始值):

- `metrics.smitheryCalls` — 从 Smithery API
- `metrics.npmMonthly` — 从 npmjs.org
- `metrics.githubStars` — 从 GitHub API
- `metrics.weeklyGrowthPct` — 计算得出

## 数据流(重要)

```
content/tools/*.md               ← 真源(你 PR 改这里)
     │
     │   scripts/sync-tools-from-md.mjs
     ▼
src/lib/generated/tools.ts       ← 编译产物(auto-generated,别手改)
     │
     ▼
src/lib/mock-data.ts             ← 当前运行时源(批次 A 保留)
     │
     ▼
React 组件(client + server 都能 import)
```

**为什么这么拐弯?**
- `node:fs` 不能进 client bundle(React Server/Client 边界)
- 直接在 loader 里 `fs.readdir` 会让所有 client 组件打包炸掉
- "md → 编译成 ts" 是 Next.js 生态的标准解法

## 命令

```bash
npm run sync:tools   # content/tools/*.md → src/lib/generated/tools.ts
npm run gen:tools    # 反向:src/lib/mock-data.ts 的 tools → content/tools/*.md(一次性初始化)
npm run build        # 会自动跑 sync:tools + next build
```

## 现状

- `content/tools/*.md` — **109 个工具**
- `src/lib/generated/tools.ts` — 109 个工具的 TS 导出(build 时重新生成)
- `src/lib/mock-data.ts` — 仍是运行时源;批次 B 会改为 re-export generated/tools.ts

## 下一步(批次 B)

- [ ] mock-data.ts 的 `tools` 切换到 `import { toolsFromMarkdown } from './generated/tools'`
- [ ] collections / tutorials / creators 同步迁到 markdown
- [ ] `npm run sync:metrics` cron(每 6 小时从 Smithery / npm / GitHub 抓真数据回填到 md)
- [ ] GitHub Action 自动审核 PR 结构合法性
