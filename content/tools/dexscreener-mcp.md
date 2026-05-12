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
    - t: '2026-05-09T07:50:03.258Z'
      v: 200
    - t: '2026-05-09T13:05:22.943Z'
      v: 210
    - t: '2026-05-09T18:53:39.696Z'
      v: 210
    - t: '2026-05-10T02:31:33.442Z'
      v: 210
    - t: '2026-05-10T08:02:47.072Z'
      v: 210
    - t: '2026-05-10T13:07:04.071Z'
      v: 210
    - t: '2026-05-10T18:54:51.455Z'
      v: 210
    - t: '2026-05-11T02:41:04.863Z'
      v: 210
    - t: '2026-05-11T09:31:49.611Z'
      v: 210
    - t: '2026-05-11T14:38:29.968Z'
      v: 210
    - t: '2026-05-11T19:41:28.791Z'
      v: 210
    - t: '2026-05-12T02:34:05.480Z'
      v: 210
  lastAutoUpdated: '2026-05-12T02:34:05.480Z'
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
  lastFetched: '2026-05-12T02:34:12.844Z'
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
