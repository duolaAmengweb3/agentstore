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
    - t: '2026-08-08T12:35:51.260Z'
      v: 50
    - t: '2026-08-08T18:28:37.063Z'
      v: 50
    - t: '2026-08-09T01:15:27.177Z'
      v: 50
    - t: '2026-08-09T06:45:44.127Z'
      v: 50
    - t: '2026-08-09T12:38:53.845Z'
      v: 50
    - t: '2026-08-09T18:32:06.241Z'
      v: 50
    - t: '2026-08-10T01:17:41.984Z'
      v: 50
    - t: '2026-08-10T07:20:27.931Z'
      v: 50
    - t: '2026-08-10T12:55:21.285Z'
      v: 50
    - t: '2026-08-10T18:49:16.754Z'
      v: 50
    - t: '2026-08-11T01:15:48.663Z'
      v: 50
    - t: '2026-08-11T06:56:47.853Z'
      v: 50
  lastAutoUpdated: '2026-08-11T06:56:47.853Z'
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
  lastFetched: '2026-08-11T06:56:56.617Z'
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
