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
    - t: '2026-10-23T03:01:04.138Z'
      v: 50
    - t: '2026-10-23T10:53:45.304Z'
      v: 50
    - t: '2026-10-23T16:18:22.077Z'
      v: 50
    - t: '2026-10-23T20:53:53.177Z'
      v: 50
    - t: '2026-10-24T02:57:56.460Z'
      v: 50
    - t: '2026-10-24T10:08:20.047Z'
      v: 50
    - t: '2026-10-24T15:15:24.074Z'
      v: 50
    - t: '2026-10-24T20:05:13.288Z'
      v: 50
    - t: '2026-10-25T02:50:46.060Z'
      v: 50
    - t: '2026-10-25T10:33:35.908Z'
      v: 50
    - t: '2026-10-25T15:25:49.000Z'
      v: 50
    - t: '2026-10-25T20:17:44.380Z'
      v: 50
  lastAutoUpdated: '2026-10-25T20:17:44.380Z'
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
  lastFetched: '2026-10-25T20:17:54.668Z'
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
