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
    - t: '2026-07-15T19:03:02.493Z'
      v: 50
    - t: '2026-07-16T02:06:07.729Z'
      v: 50
    - t: '2026-07-16T08:03:37.019Z'
      v: 50
    - t: '2026-07-16T13:39:12.522Z'
      v: 50
    - t: '2026-07-16T19:02:01.932Z'
      v: 50
    - t: '2026-07-17T02:09:15.442Z'
      v: 50
    - t: '2026-07-17T08:00:34.064Z'
      v: 50
    - t: '2026-07-17T13:16:43.195Z'
      v: 50
    - t: '2026-07-17T18:59:48.927Z'
      v: 50
    - t: '2026-07-18T01:58:28.748Z'
      v: 50
    - t: '2026-07-18T07:40:27.826Z'
      v: 50
    - t: '2026-07-18T13:02:41.637Z'
      v: 50
  lastAutoUpdated: '2026-07-18T13:02:41.637Z'
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
  lastFetched: '2026-07-18T13:02:51.111Z'
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
