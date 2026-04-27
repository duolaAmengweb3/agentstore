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
  githubStars: 3
  lastPush: '2025-09-23T08:30:54Z'
  archived: false
  _history:
    - t: '2026-04-24T13:12:49.224Z'
      v: 30
    - t: '2026-04-24T18:42:08.970Z'
      v: 30
    - t: '2026-04-25T01:59:09.233Z'
      v: 30
    - t: '2026-04-25T07:08:01.362Z'
      v: 30
    - t: '2026-04-25T12:54:43.879Z'
      v: 30
    - t: '2026-04-25T18:42:37.697Z'
      v: 30
    - t: '2026-04-26T02:12:43.733Z'
      v: 30
    - t: '2026-04-26T07:22:24.071Z'
      v: 30
    - t: '2026-04-26T12:56:24.730Z'
      v: 30
    - t: '2026-04-26T18:43:43.694Z'
      v: 30
    - t: '2026-04-27T02:14:45.315Z'
      v: 30
    - t: '2026-04-27T08:14:04.136Z'
      v: 30
  lastAutoUpdated: '2026-04-27T08:14:04.136Z'
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
  lastFetched: '2026-04-27T08:14:16.090Z'
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
