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
    - t: '2026-08-19T06:34:29.275Z'
      v: 50
    - t: '2026-08-19T12:34:55.314Z'
      v: 50
    - t: '2026-08-19T18:25:58.630Z'
      v: 50
    - t: '2026-08-20T00:55:02.693Z'
      v: 50
    - t: '2026-08-20T06:36:39.879Z'
      v: 50
    - t: '2026-08-20T12:36:30.027Z'
      v: 50
    - t: '2026-08-20T18:30:39.159Z'
      v: 50
    - t: '2026-08-21T00:58:51.800Z'
      v: 50
    - t: '2026-08-21T06:36:17.368Z'
      v: 50
    - t: '2026-08-21T12:35:32.181Z'
      v: 50
    - t: '2026-08-21T18:28:24.033Z'
      v: 50
    - t: '2026-08-22T00:55:30.421Z'
      v: 50
  lastAutoUpdated: '2026-08-22T00:55:30.421Z'
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
  lastFetched: '2026-08-22T00:55:38.658Z'
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
