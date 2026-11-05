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
    - t: '2026-11-01T12:32:08.749Z'
      v: 240
    - t: '2026-11-01T21:36:31.355Z'
      v: 240
    - t: '2026-11-02T03:57:49.729Z'
      v: 240
    - t: '2026-11-02T14:33:35.118Z'
      v: 240
    - t: '2026-11-03T00:21:34.089Z'
      v: 240
    - t: '2026-11-03T13:28:52.487Z'
      v: 240
    - t: '2026-11-03T22:47:49.070Z'
      v: 240
    - t: '2026-11-04T04:30:19.861Z'
      v: 240
    - t: '2026-11-04T13:39:53.951Z'
      v: 240
    - t: '2026-11-04T23:06:02.079Z'
      v: 240
    - t: '2026-11-05T04:46:22.984Z'
      v: 240
    - t: '2026-11-05T13:52:25.560Z'
      v: 240
  lastAutoUpdated: '2026-11-05T13:52:25.560Z'
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
  lastFetched: '2026-11-05T13:52:37.230Z'
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
