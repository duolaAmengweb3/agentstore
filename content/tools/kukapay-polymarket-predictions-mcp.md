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
  githubStars: 4
  lastPush: '2025-09-23T08:30:54Z'
  archived: false
  _history:
    - t: '2026-06-07T13:41:39.577Z'
      v: 40
    - t: '2026-06-07T19:14:28.504Z'
      v: 40
    - t: '2026-06-08T03:29:09.934Z'
      v: 40
    - t: '2026-06-08T10:27:29.916Z'
      v: 40
    - t: '2026-06-08T15:39:25.014Z'
      v: 40
    - t: '2026-06-08T20:07:28.060Z'
      v: 40
    - t: '2026-06-09T02:39:41.121Z'
      v: 40
    - t: '2026-06-09T09:32:45.648Z'
      v: 40
    - t: '2026-06-09T14:38:20.727Z'
      v: 40
    - t: '2026-06-09T20:02:16.156Z'
      v: 40
    - t: '2026-06-10T02:53:41.496Z'
      v: 40
    - t: '2026-06-10T09:49:04.202Z'
      v: 40
  lastAutoUpdated: '2026-06-10T09:49:04.202Z'
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
  lastFetched: '2026-06-10T09:49:14.082Z'
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
