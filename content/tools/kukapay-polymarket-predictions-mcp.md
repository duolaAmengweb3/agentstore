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
    - t: '2026-08-05T13:55:04.516Z'
      v: 50
    - t: '2026-08-05T19:22:12.392Z'
      v: 50
    - t: '2026-08-06T02:03:43.795Z'
      v: 50
    - t: '2026-08-06T08:25:36.980Z'
      v: 50
    - t: '2026-08-06T13:52:21.452Z'
      v: 50
    - t: '2026-08-06T23:53:19.756Z'
      v: 50
    - t: '2026-08-07T02:24:06.785Z'
      v: 50
    - t: '2026-08-07T07:06:08.707Z'
      v: 50
    - t: '2026-08-07T12:51:08.875Z'
      v: 50
    - t: '2026-08-07T18:46:50.997Z'
      v: 50
    - t: '2026-08-08T01:10:48.693Z'
      v: 50
    - t: '2026-08-08T06:41:43.583Z'
      v: 50
  lastAutoUpdated: '2026-08-08T06:41:43.583Z'
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
  lastFetched: '2026-08-08T06:41:54.067Z'
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
