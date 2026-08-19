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
    - t: '2026-08-16T06:30:00.036Z'
      v: 50
    - t: '2026-08-16T12:28:03.376Z'
      v: 50
    - t: '2026-08-16T18:20:04.635Z'
      v: 50
    - t: '2026-08-17T00:56:29.200Z'
      v: 50
    - t: '2026-08-17T06:42:09.039Z'
      v: 50
    - t: '2026-08-17T12:33:03.921Z'
      v: 50
    - t: '2026-08-17T18:30:30.042Z'
      v: 50
    - t: '2026-08-18T00:54:36.309Z'
      v: 50
    - t: '2026-08-18T06:33:20.923Z'
      v: 50
    - t: '2026-08-18T12:34:09.269Z'
      v: 50
    - t: '2026-08-18T18:29:12.673Z'
      v: 50
    - t: '2026-08-19T00:55:36.684Z'
      v: 50
  lastAutoUpdated: '2026-08-19T00:55:36.684Z'
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
  lastFetched: '2026-08-19T00:55:46.583Z'
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
