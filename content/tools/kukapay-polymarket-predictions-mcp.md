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
    - t: '2026-08-02T13:08:35.490Z'
      v: 50
    - t: '2026-08-02T19:02:04.729Z'
      v: 50
    - t: '2026-08-03T02:14:44.709Z'
      v: 50
    - t: '2026-08-03T09:33:09.791Z'
      v: 50
    - t: '2026-08-03T14:27:10.602Z'
      v: 50
    - t: '2026-08-03T19:23:54.617Z'
      v: 50
    - t: '2026-08-04T02:01:00.772Z'
      v: 50
    - t: '2026-08-04T08:28:29.162Z'
      v: 50
    - t: '2026-08-04T13:57:24.507Z'
      v: 50
    - t: '2026-08-04T19:23:22.130Z'
      v: 50
    - t: '2026-08-05T02:00:07.913Z'
      v: 50
    - t: '2026-08-05T08:27:22.018Z'
      v: 50
  lastAutoUpdated: '2026-08-05T08:27:22.018Z'
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
  lastFetched: '2026-08-05T08:27:33.454Z'
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
