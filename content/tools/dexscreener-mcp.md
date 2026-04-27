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
    - t: '2026-04-24T18:42:07.134Z'
      v: 190
    - t: '2026-04-25T01:59:07.448Z'
      v: 200
    - t: '2026-04-25T07:07:59.790Z'
      v: 200
    - t: '2026-04-25T12:54:42.602Z'
      v: 200
    - t: '2026-04-25T18:42:35.574Z'
      v: 200
    - t: '2026-04-26T02:12:41.780Z'
      v: 200
    - t: '2026-04-26T07:22:22.586Z'
      v: 200
    - t: '2026-04-26T12:56:23.386Z'
      v: 200
    - t: '2026-04-26T18:43:41.627Z'
      v: 200
    - t: '2026-04-27T02:14:43.563Z'
      v: 200
    - t: '2026-04-27T08:14:02.009Z'
      v: 200
    - t: '2026-04-27T13:29:04.972Z'
      v: 200
  lastAutoUpdated: '2026-04-27T13:29:04.972Z'
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
  lastFetched: '2026-04-27T13:29:13.245Z'
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
