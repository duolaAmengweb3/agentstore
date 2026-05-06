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
    - t: '2026-05-03T18:52:44.405Z'
      v: 40
    - t: '2026-05-04T02:27:37.776Z'
      v: 40
    - t: '2026-05-04T08:23:57.014Z'
      v: 40
    - t: '2026-05-04T13:47:43.911Z'
      v: 40
    - t: '2026-05-04T19:22:23.569Z'
      v: 40
    - t: '2026-05-05T02:22:41.611Z'
      v: 40
    - t: '2026-05-05T08:02:39.117Z'
      v: 40
    - t: '2026-05-05T13:27:25.459Z'
      v: 40
    - t: '2026-05-05T19:12:29.700Z'
      v: 40
    - t: '2026-05-06T02:26:25.174Z'
      v: 40
    - t: '2026-05-06T08:16:54.010Z'
      v: 40
    - t: '2026-05-06T13:56:37.879Z'
      v: 40
  lastAutoUpdated: '2026-05-06T13:56:37.879Z'
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
  lastFetched: '2026-05-06T13:56:50.974Z'
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
