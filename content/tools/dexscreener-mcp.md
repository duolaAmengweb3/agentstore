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
    - t: '2026-07-31T02:13:56.480Z'
      v: 210
    - t: '2026-07-31T08:41:17.874Z'
      v: 210
    - t: '2026-07-31T13:51:38.984Z'
      v: 210
    - t: '2026-07-31T19:16:32.931Z'
      v: 210
    - t: '2026-08-01T02:21:11.078Z'
      v: 210
    - t: '2026-08-01T08:11:32.976Z'
      v: 210
    - t: '2026-08-01T13:06:42.446Z'
      v: 210
    - t: '2026-08-01T19:00:37.886Z'
      v: 210
    - t: '2026-08-02T02:12:35.142Z'
      v: 220
    - t: '2026-08-02T08:12:59.480Z'
      v: 220
    - t: '2026-08-02T13:08:34.065Z'
      v: 220
    - t: '2026-08-02T19:02:02.410Z'
      v: 220
  lastAutoUpdated: '2026-08-02T19:02:02.410Z'
  weeklyGrowthPct: 5
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
  lastFetched: '2026-08-02T19:02:12.162Z'
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
