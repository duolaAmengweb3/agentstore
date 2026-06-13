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
    - t: '2026-06-10T09:49:04.202Z'
      v: 40
    - t: '2026-06-10T15:21:54.564Z'
      v: 40
    - t: '2026-06-10T20:22:51.834Z'
      v: 40
    - t: '2026-06-11T03:27:01.957Z'
      v: 40
    - t: '2026-06-11T10:15:16.697Z'
      v: 40
    - t: '2026-06-11T15:48:11.509Z'
      v: 40
    - t: '2026-06-11T20:14:14.600Z'
      v: 40
    - t: '2026-06-12T03:25:40.771Z'
      v: 40
    - t: '2026-06-12T10:02:55.557Z'
      v: 40
    - t: '2026-06-12T14:47:40.859Z'
      v: 40
    - t: '2026-06-12T20:03:15.884Z'
      v: 40
    - t: '2026-06-13T02:52:53.164Z'
      v: 40
  lastAutoUpdated: '2026-06-13T02:52:53.164Z'
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
  lastFetched: '2026-06-13T02:53:00.859Z'
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
