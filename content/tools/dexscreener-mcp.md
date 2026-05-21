---
slug: dexscreener-mcp
name: DexScreener MCP
author: openSVM
category: data
icon: "\U0001F4CA"
official: false
score: 7.7
tagline_en: 'DexScreener MCP — pair data + charts + new-pool discovery, free API'
tagline_zh: 'DexScreener MCP:pair 数据 + K 线 + 新池发现,免费 API'
metrics:
  githubStars: 21
  lastPush: '2025-01-06T14:59:12Z'
  archived: false
  _history:
    - t: '2026-05-18T15:19:12.747Z'
      v: 210
    - t: '2026-05-18T19:40:20.283Z'
      v: 210
    - t: '2026-05-19T02:46:20.060Z'
      v: 210
    - t: '2026-05-19T09:34:18.721Z'
      v: 210
    - t: '2026-05-19T14:49:33.370Z'
      v: 210
    - t: '2026-05-19T19:47:04.900Z'
      v: 210
    - t: '2026-05-20T02:46:57.470Z'
      v: 210
    - t: '2026-05-20T08:59:08.813Z'
      v: 210
    - t: '2026-05-20T14:50:34.458Z'
      v: 210
    - t: '2026-05-20T20:07:35.667Z'
      v: 210
    - t: '2026-05-21T02:49:32.161Z'
      v: 210
    - t: '2026-05-21T09:30:41.919Z'
      v: 210
  lastAutoUpdated: '2026-05-21T09:30:41.919Z'
  weeklyGrowthPct: 0
fetch:
  github: openSVM/dexscreener-mcp-server
readme:
  about: >-
    An MCP server implementation for accessing the DexScreener API, providing
    real-time access to DEX pair data, token information, and market statistics
    across multiple blockchains.
  features:
    - Rate-limited API access (respects DexScreener's rate limits)
    - Comprehensive error handling
    - Type-safe interfaces
    - Support for all DexScreener API endpoints
    - Integration tests
  installCmd: |-
    npm install
    npm run build
    npm run setup
  lastFetched: '2026-05-21T09:30:52.067Z'
repoInfo:
  language: JavaScript
  license: Unlicense
  topics: []
  contributors: 1
  openIssues: 1
  archived: false
  createdAt: '2025-01-05T14:23:42Z'
  defaultBranch: main
summary_en: >-
  DexScreener is the best free DEX-data layer, though risk labels come from
  GoPlus (not their own). Use it when the agent looks up a pair or hunts new
  pools.
summary_zh: 'DexScreener 是 DEX 数据免费层最好用的,但它自带 GoPlus 风控标记(不是自研)。agent 查某个币对 / 找新池用它。'
---


## DexScreener MCP

DexScreener pairs + charts + new pool feed

> DexScreener 交易对 + K 线 + 新池
