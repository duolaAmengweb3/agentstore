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
    - t: '2026-07-27T14:20:38.912Z'
      v: 50
    - t: '2026-07-27T19:18:57.362Z'
      v: 50
    - t: '2026-07-28T02:02:49.423Z'
      v: 50
    - t: '2026-07-28T08:24:51.597Z'
      v: 50
    - t: '2026-07-28T13:52:03.862Z'
      v: 50
    - t: '2026-07-28T19:15:23.395Z'
      v: 50
    - t: '2026-07-29T02:05:26.453Z'
      v: 50
    - t: '2026-07-29T08:30:37.084Z'
      v: 50
    - t: '2026-07-29T13:56:41.296Z'
      v: 50
    - t: '2026-07-29T19:05:52.747Z'
      v: 50
    - t: '2026-07-30T01:55:08.293Z'
      v: 50
    - t: '2026-07-30T08:15:09.246Z'
      v: 50
  lastAutoUpdated: '2026-07-30T08:15:09.246Z'
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
  lastFetched: '2026-07-30T08:15:18.470Z'
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
