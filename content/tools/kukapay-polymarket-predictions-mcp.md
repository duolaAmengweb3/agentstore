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
    - t: '2026-05-09T02:28:30.864Z'
      v: 40
    - t: '2026-05-09T07:50:04.567Z'
      v: 40
    - t: '2026-05-09T13:05:24.439Z'
      v: 40
    - t: '2026-05-09T18:53:41.611Z'
      v: 40
    - t: '2026-05-10T02:31:34.998Z'
      v: 40
    - t: '2026-05-10T08:02:49.239Z'
      v: 40
    - t: '2026-05-10T13:07:06.513Z'
      v: 40
    - t: '2026-05-10T18:54:53.436Z'
      v: 40
    - t: '2026-05-11T02:41:06.366Z'
      v: 40
    - t: '2026-05-11T09:31:52.174Z'
      v: 40
    - t: '2026-05-11T14:38:32.074Z'
      v: 40
    - t: '2026-05-11T19:41:30.865Z'
      v: 40
  lastAutoUpdated: '2026-05-11T19:41:30.865Z'
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
  lastFetched: '2026-05-11T19:41:42.331Z'
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
