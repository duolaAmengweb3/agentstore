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
    - t: '2026-08-21T12:35:29.762Z'
      v: 220
    - t: '2026-08-21T18:28:22.326Z'
      v: 220
    - t: '2026-08-22T00:55:28.560Z'
      v: 220
    - t: '2026-08-22T06:30:08.250Z'
      v: 220
    - t: '2026-08-22T12:27:21.580Z'
      v: 220
    - t: '2026-08-22T18:20:46.621Z'
      v: 220
    - t: '2026-08-23T00:59:31.797Z'
      v: 220
    - t: '2026-08-23T06:31:30.081Z'
      v: 220
    - t: '2026-08-23T12:28:56.202Z'
      v: 220
    - t: '2026-08-23T18:20:27.371Z'
      v: 220
    - t: '2026-08-24T00:57:30.607Z'
      v: 220
    - t: '2026-08-24T06:44:11.782Z'
      v: 220
  lastAutoUpdated: '2026-08-24T06:44:11.782Z'
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
  lastFetched: '2026-08-24T06:44:19.425Z'
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
