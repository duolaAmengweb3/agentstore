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
    - t: '2026-07-07T19:47:32.522Z'
      v: 50
    - t: '2026-07-08T02:10:04.507Z'
      v: 50
    - t: '2026-07-08T08:18:09.514Z'
      v: 50
    - t: '2026-07-08T13:50:57.005Z'
      v: 50
    - t: '2026-07-08T19:16:48.715Z'
      v: 50
    - t: '2026-07-09T02:28:41.141Z'
      v: 50
    - t: '2026-07-09T09:34:08.101Z'
      v: 50
    - t: '2026-07-09T14:45:52.025Z'
      v: 50
    - t: '2026-07-09T19:37:02.771Z'
      v: 50
    - t: '2026-07-10T02:30:40.254Z'
      v: 50
    - t: '2026-07-10T09:25:37.534Z'
      v: 50
    - t: '2026-07-10T14:10:05.042Z'
      v: 50
  lastAutoUpdated: '2026-07-10T14:10:05.042Z'
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
  lastFetched: '2026-07-10T14:10:14.482Z'
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
