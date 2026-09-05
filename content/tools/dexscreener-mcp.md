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
  githubStars: 22
  lastPush: '2025-01-06T14:59:12Z'
  archived: false
  _history:
    - t: '2026-09-03T02:36:40.256Z'
      v: 220
    - t: '2026-09-03T10:33:26.195Z'
      v: 220
    - t: '2026-09-03T15:39:14.521Z'
      v: 220
    - t: '2026-09-03T20:24:12.152Z'
      v: 220
    - t: '2026-09-04T02:35:11.804Z'
      v: 220
    - t: '2026-09-04T10:24:40.039Z'
      v: 220
    - t: '2026-09-04T15:37:41.075Z'
      v: 220
    - t: '2026-09-04T20:09:55.582Z'
      v: 220
    - t: '2026-09-05T02:33:34.035Z'
      v: 220
    - t: '2026-09-05T09:51:05.227Z'
      v: 220
    - t: '2026-09-05T14:25:22.360Z'
      v: 220
    - t: '2026-09-05T19:49:32.856Z'
      v: 220
  lastAutoUpdated: '2026-09-05T19:49:32.856Z'
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
  lastFetched: '2026-09-05T19:49:41.997Z'
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
