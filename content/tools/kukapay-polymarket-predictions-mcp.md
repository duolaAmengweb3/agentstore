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
    - t: '2026-07-19T08:07:20.595Z'
      v: 50
    - t: '2026-07-19T13:05:00.874Z'
      v: 50
    - t: '2026-07-19T18:58:24.744Z'
      v: 50
    - t: '2026-07-20T02:30:15.533Z'
      v: 50
    - t: '2026-07-20T08:48:41.215Z'
      v: 50
    - t: '2026-07-20T13:54:52.849Z'
      v: 50
    - t: '2026-07-20T19:37:53.990Z'
      v: 50
    - t: '2026-07-21T02:08:33.305Z'
      v: 50
    - t: '2026-07-21T08:17:20.343Z'
      v: 50
    - t: '2026-07-21T13:26:41.478Z'
      v: 50
    - t: '2026-07-21T19:12:00.719Z'
      v: 50
    - t: '2026-07-22T02:06:46.099Z'
      v: 50
  lastAutoUpdated: '2026-07-22T02:06:46.099Z'
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
  lastFetched: '2026-07-22T02:06:54.336Z'
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
