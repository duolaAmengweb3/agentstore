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
    - t: '2026-09-01T15:57:07.224Z'
      v: 50
    - t: '2026-09-01T20:25:12.009Z'
      v: 50
    - t: '2026-09-02T02:29:03.665Z'
      v: 50
    - t: '2026-09-02T10:26:42.433Z'
      v: 50
    - t: '2026-09-02T15:49:46.827Z'
      v: 50
    - t: '2026-09-02T20:24:58.169Z'
      v: 50
    - t: '2026-09-03T02:36:41.860Z'
      v: 50
    - t: '2026-09-03T10:33:28.635Z'
      v: 50
    - t: '2026-09-03T15:39:16.703Z'
      v: 50
    - t: '2026-09-03T20:24:14.068Z'
      v: 50
    - t: '2026-09-04T02:35:14.350Z'
      v: 50
    - t: '2026-09-04T10:24:42.381Z'
      v: 50
  lastAutoUpdated: '2026-09-04T10:24:42.381Z'
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
  lastFetched: '2026-09-04T10:24:53.636Z'
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
