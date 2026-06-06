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
    - t: '2026-06-04T03:32:03.417Z'
      v: 40
    - t: '2026-06-04T09:49:24.053Z'
      v: 40
    - t: '2026-06-04T14:47:16.333Z'
      v: 40
    - t: '2026-06-04T19:59:07.041Z'
      v: 40
    - t: '2026-06-05T02:54:08.964Z'
      v: 40
    - t: '2026-06-05T09:37:53.130Z'
      v: 40
    - t: '2026-06-05T14:38:09.536Z'
      v: 40
    - t: '2026-06-05T19:47:49.438Z'
      v: 40
    - t: '2026-06-06T02:40:59.434Z'
      v: 40
    - t: '2026-06-06T08:28:08.727Z'
      v: 40
    - t: '2026-06-06T13:21:14.910Z'
      v: 40
    - t: '2026-06-06T19:13:44.885Z'
      v: 40
  lastAutoUpdated: '2026-06-06T19:13:44.885Z'
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
  lastFetched: '2026-06-06T19:13:54.256Z'
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
