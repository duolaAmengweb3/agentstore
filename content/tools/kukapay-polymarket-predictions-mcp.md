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
    - t: '2026-07-13T19:17:46.906Z'
      v: 50
    - t: '2026-07-14T01:58:55.706Z'
      v: 50
    - t: '2026-07-14T07:53:43.085Z'
      v: 50
    - t: '2026-07-14T13:21:47.368Z'
      v: 50
    - t: '2026-07-14T19:10:39.961Z'
      v: 50
    - t: '2026-07-15T01:55:20.291Z'
      v: 50
    - t: '2026-07-15T07:58:27.065Z'
      v: 50
    - t: '2026-07-15T13:24:54.403Z'
      v: 50
    - t: '2026-07-15T19:03:02.493Z'
      v: 50
    - t: '2026-07-16T02:06:07.729Z'
      v: 50
    - t: '2026-07-16T08:03:37.019Z'
      v: 50
    - t: '2026-07-16T13:39:12.522Z'
      v: 50
  lastAutoUpdated: '2026-07-16T13:39:12.522Z'
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
  lastFetched: '2026-07-16T13:39:21.995Z'
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
