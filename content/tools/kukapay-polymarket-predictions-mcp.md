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
    - t: '2026-08-11T18:54:47.514Z'
      v: 50
    - t: '2026-08-12T01:23:45.888Z'
      v: 50
    - t: '2026-08-12T07:15:54.215Z'
      v: 50
    - t: '2026-08-12T12:56:32.779Z'
      v: 50
    - t: '2026-08-12T18:56:06.494Z'
      v: 50
    - t: '2026-08-13T01:25:39.864Z'
      v: 50
    - t: '2026-08-13T07:18:11.873Z'
      v: 50
    - t: '2026-08-13T12:57:39.828Z'
      v: 50
    - t: '2026-08-13T18:55:14.473Z'
      v: 50
    - t: '2026-08-14T01:24:52.691Z'
      v: 50
    - t: '2026-08-14T07:16:18.665Z'
      v: 50
    - t: '2026-08-14T12:53:10.848Z'
      v: 50
  lastAutoUpdated: '2026-08-14T12:53:10.848Z'
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
  lastFetched: '2026-08-14T12:53:20.621Z'
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
