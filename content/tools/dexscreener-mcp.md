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
  githubStars: 19
  lastPush: '2025-01-06T14:59:12Z'
  archived: false
  _history:
    - t: '2026-04-22T02:27:41.594Z'
      v: 190
    - t: '2026-04-22T07:25:57.583Z'
      v: 190
    - t: '2026-04-22T13:16:40.120Z'
      v: 190
    - t: '2026-04-22T19:06:41.142Z'
      v: 190
    - t: '2026-04-23T02:08:45.015Z'
      v: 190
    - t: '2026-04-23T07:29:46.772Z'
      v: 190
    - t: '2026-04-23T13:16:38.589Z'
      v: 190
    - t: '2026-04-23T19:01:53.362Z'
      v: 190
    - t: '2026-04-24T02:09:02.743Z'
      v: 190
    - t: '2026-04-24T07:55:27.017Z'
      v: 190
  lastAutoUpdated: '2026-04-24T07:55:27.017Z'
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
  lastFetched: '2026-04-24T07:55:34.276Z'
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
