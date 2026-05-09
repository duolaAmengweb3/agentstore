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
    - t: '2026-05-06T13:56:35.105Z'
      v: 200
    - t: '2026-05-06T19:30:10.194Z'
      v: 200
    - t: '2026-05-07T02:27:59.023Z'
      v: 200
    - t: '2026-05-07T08:27:10.758Z'
      v: 200
    - t: '2026-05-07T13:54:33.807Z'
      v: 200
    - t: '2026-05-07T19:38:42.118Z'
      v: 200
    - t: '2026-05-08T02:35:28.862Z'
      v: 200
    - t: '2026-05-08T07:22:49.570Z'
      v: 200
    - t: '2026-05-08T13:21:46.970Z'
      v: 200
    - t: '2026-05-08T19:10:18.087Z'
      v: 200
    - t: '2026-05-09T02:28:29.407Z'
      v: 200
    - t: '2026-05-09T07:50:03.258Z'
      v: 200
  lastAutoUpdated: '2026-05-09T07:50:03.258Z'
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
  lastFetched: '2026-05-09T07:50:10.067Z'
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
