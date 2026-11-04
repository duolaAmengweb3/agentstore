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
    - t: '2026-10-31T11:34:41.130Z'
      v: 50
    - t: '2026-10-31T16:41:44.217Z'
      v: 50
    - t: '2026-10-31T20:53:39.332Z'
      v: 50
    - t: '2026-11-01T03:53:54.586Z'
      v: 50
    - t: '2026-11-01T12:32:10.637Z'
      v: 50
    - t: '2026-11-01T21:36:33.345Z'
      v: 50
    - t: '2026-11-02T03:57:52.295Z'
      v: 50
    - t: '2026-11-02T14:33:38.003Z'
      v: 50
    - t: '2026-11-03T00:21:36.352Z'
      v: 50
    - t: '2026-11-03T13:28:56.592Z'
      v: 50
    - t: '2026-11-03T22:47:52.209Z'
      v: 50
    - t: '2026-11-04T04:30:22.295Z'
      v: 50
  lastAutoUpdated: '2026-11-04T04:30:22.295Z'
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
  lastFetched: '2026-11-04T04:30:33.318Z'
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
