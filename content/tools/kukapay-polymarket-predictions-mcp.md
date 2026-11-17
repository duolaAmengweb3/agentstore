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
    - t: '2026-11-13T13:47:54.551Z'
      v: 50
    - t: '2026-11-13T23:09:28.289Z'
      v: 50
    - t: '2026-11-14T04:37:37.288Z'
      v: 50
    - t: '2026-11-14T12:51:40.784Z'
      v: 50
    - t: '2026-11-14T21:54:11.887Z'
      v: 50
    - t: '2026-11-15T04:27:21.705Z'
      v: 50
    - t: '2026-11-15T13:19:05.917Z'
      v: 50
    - t: '2026-11-15T22:24:16.491Z'
      v: 50
    - t: '2026-11-16T04:24:18.986Z'
      v: 50
    - t: '2026-11-16T14:32:55.562Z'
      v: 50
    - t: '2026-11-17T01:27:24.839Z'
      v: 50
    - t: '2026-11-17T15:23:24.332Z'
      v: 50
  lastAutoUpdated: '2026-11-17T15:23:24.332Z'
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
  lastFetched: '2026-11-17T15:23:36.492Z'
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
