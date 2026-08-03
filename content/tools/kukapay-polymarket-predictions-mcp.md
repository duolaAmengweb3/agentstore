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
    - t: '2026-07-31T19:16:35.176Z'
      v: 50
    - t: '2026-08-01T02:21:12.963Z'
      v: 50
    - t: '2026-08-01T08:11:35.022Z'
      v: 50
    - t: '2026-08-01T13:06:44.284Z'
      v: 50
    - t: '2026-08-01T19:00:39.766Z'
      v: 50
    - t: '2026-08-02T02:12:37.527Z'
      v: 50
    - t: '2026-08-02T08:13:01.735Z'
      v: 50
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
  lastAutoUpdated: '2026-08-03T14:27:10.602Z'
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
  lastFetched: '2026-08-03T14:27:20.748Z'
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
