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
  githubStars: 20
  lastPush: '2025-01-06T14:59:12Z'
  archived: false
  _history:
    - t: '2026-05-01T02:37:08.677Z'
      v: 200
    - t: '2026-05-01T08:06:51.107Z'
      v: 200
    - t: '2026-05-01T13:09:40.123Z'
      v: 200
    - t: '2026-05-01T19:05:34.343Z'
      v: 200
    - t: '2026-05-02T02:12:40.122Z'
      v: 200
    - t: '2026-05-02T07:25:31.007Z'
      v: 200
    - t: '2026-05-02T12:59:35.960Z'
      v: 200
    - t: '2026-05-02T18:52:30.841Z'
      v: 200
    - t: '2026-05-03T02:28:58.000Z'
      v: 200
    - t: '2026-05-03T07:55:21.855Z'
      v: 200
    - t: '2026-05-03T12:58:41.459Z'
      v: 200
    - t: '2026-05-03T18:52:42.800Z'
      v: 200
  lastAutoUpdated: '2026-05-03T18:52:42.800Z'
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
  lastFetched: '2026-05-03T18:52:50.806Z'
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
