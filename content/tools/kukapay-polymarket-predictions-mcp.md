---
slug: kukapay-polymarket-predictions-mcp
name: Polymarket Predictions MCP
author: kukapay
category: data
icon: "\U0001F3AF"
official: false
score: 6.8
tagline_en: 'kukapay''s Polymarket odds query (read-only, no trading)'
tagline_zh: 'kukapay 的 Polymarket 赔率查询(只读,不交易)'
metrics:
  githubStars: 5
  lastPush: '2025-09-23T08:30:54Z'
  archived: false
  _history:
    - t: '2026-10-26T02:49:17.351Z'
      v: 50
    - t: '2026-10-26T12:06:53.059Z'
      v: 50
    - t: '2026-10-26T22:12:07.515Z'
      v: 50
    - t: '2026-10-27T03:22:54.265Z'
      v: 50
    - t: '2026-10-27T11:27:35.122Z'
      v: 50
    - t: '2026-10-27T17:16:51.340Z'
      v: 50
    - t: '2026-10-27T21:43:28.570Z'
      v: 50
    - t: '2026-10-28T03:39:00.822Z'
      v: 50
    - t: '2026-10-28T11:58:39.317Z'
      v: 50
    - t: '2026-10-28T18:05:04.014Z'
      v: 50
    - t: '2026-10-29T03:59:10.187Z'
      v: 50
    - t: '2026-10-29T12:08:38.879Z'
      v: 50
  lastAutoUpdated: '2026-10-29T12:08:38.879Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/polymarket-predictions-mcp
readme:
  about: >-
    An MCP server that delivers real-time market odds from Polymarket, enabling
    AI agents and analysts to access, compare, and act on decentralized
    prediction data.
  features:
    - >-
      Event Retrieval — Fetch Polymarket events with details (title,
      description, endDate, volume) and associated markets in a tabulated
      format.
    - >-
      Market Retrieval — Retrieve markets with key fields (question, zipped
      outcomes and outcomePrices, endDate, volume, closed) in a table.
    - >-
      Event Search — Search for events using Polymarket's /public-search
      endpoint with comprehensive query parameters.
    - >-
      Prompt Support — Includes a prompt template for analyzing specific
      markets.
    - >-
      Formatted Outputs — Uses tabulate for clean, readable table outputs and
      handles JSON parsing for outcomes and prices.
  lastFetched: '2026-10-29T12:08:50.670Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 0
  archived: false
  createdAt: '2025-09-23T08:30:36Z'
  defaultBranch: main
summary_en: >-
  Read-only version. For placing orders, use aryankeluskar/polymarket-mcp (the
  54,822-calls one).
summary_zh: '只读版。要下单请用 aryankeluskar/polymarket-mcp(54,822 调用那个)。'
---


## Polymarket Predictions MCP

Odds query wrapper (no trading, read-only)

> 赔率查询封装(只读,不交易)
