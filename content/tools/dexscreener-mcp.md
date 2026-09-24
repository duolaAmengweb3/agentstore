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
    - t: '2026-09-22T02:56:10.714Z'
      v: 230
    - t: '2026-09-22T10:48:53.862Z'
      v: 230
    - t: '2026-09-22T16:07:35.055Z'
      v: 230
    - t: '2026-09-22T20:46:51.192Z'
      v: 240
    - t: '2026-09-23T02:56:31.982Z'
      v: 240
    - t: '2026-09-23T10:38:13.579Z'
      v: 240
    - t: '2026-09-23T15:57:27.357Z'
      v: 240
    - t: '2026-09-23T20:58:32.654Z'
      v: 240
    - t: '2026-09-24T02:46:50.588Z'
      v: 240
    - t: '2026-09-24T10:58:18.166Z'
      v: 240
    - t: '2026-09-24T16:20:38.424Z'
      v: 240
    - t: '2026-09-24T21:03:19.214Z'
      v: 240
  lastAutoUpdated: '2026-09-24T21:03:19.214Z'
  weeklyGrowthPct: 4
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
  lastFetched: '2026-09-24T21:03:28.889Z'
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
