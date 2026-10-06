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
  githubStars: 24
  lastPush: '2025-01-06T14:59:12Z'
  archived: false
  _history:
    - t: '2026-10-03T10:58:45.315Z'
      v: 240
    - t: '2026-10-03T15:35:31.653Z'
      v: 240
    - t: '2026-10-03T20:29:51.308Z'
      v: 240
    - t: '2026-10-04T03:53:32.608Z'
      v: 240
    - t: '2026-10-04T11:40:56.151Z'
      v: 240
    - t: '2026-10-04T16:19:27.668Z'
      v: 240
    - t: '2026-10-04T20:47:01.650Z'
      v: 240
    - t: '2026-10-05T03:38:48.497Z'
      v: 240
    - t: '2026-10-05T13:22:18.539Z'
      v: 240
    - t: '2026-10-05T23:36:56.297Z'
      v: 240
    - t: '2026-10-06T04:26:49.880Z'
      v: 240
    - t: '2026-10-06T12:37:21.365Z'
      v: 240
  lastAutoUpdated: '2026-10-06T12:37:21.365Z'
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
  lastFetched: '2026-10-06T12:37:31.864Z'
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
