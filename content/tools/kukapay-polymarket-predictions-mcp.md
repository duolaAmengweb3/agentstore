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
    - t: '2026-07-04T13:12:48.018Z'
      v: 40
    - t: '2026-07-04T19:02:36.756Z'
      v: 40
    - t: '2026-07-05T02:36:13.420Z'
      v: 40
    - t: '2026-07-05T08:46:11.127Z'
      v: 50
    - t: '2026-07-05T13:20:35.545Z'
      v: 50
    - t: '2026-07-05T19:08:54.347Z'
      v: 50
    - t: '2026-07-06T02:40:25.859Z'
      v: 50
    - t: '2026-07-06T10:07:33.487Z'
      v: 50
    - t: '2026-07-06T15:20:28.384Z'
      v: 50
    - t: '2026-07-06T19:49:02.978Z'
      v: 50
    - t: '2026-07-07T02:36:43.222Z'
      v: 50
    - t: '2026-07-07T09:32:18.085Z'
      v: 50
  lastAutoUpdated: '2026-07-07T09:32:18.085Z'
  weeklyGrowthPct: 25
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
  lastFetched: '2026-07-07T09:32:29.008Z'
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
