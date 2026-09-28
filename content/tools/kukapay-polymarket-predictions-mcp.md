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
    - t: '2026-09-25T21:00:53.879Z'
      v: 50
    - t: '2026-09-26T03:07:18.376Z'
      v: 50
    - t: '2026-09-26T10:40:22.667Z'
      v: 50
    - t: '2026-09-26T15:35:21.924Z'
      v: 50
    - t: '2026-09-26T20:33:26.895Z'
      v: 50
    - t: '2026-09-27T03:13:38.803Z'
      v: 50
    - t: '2026-09-27T11:14:05.054Z'
      v: 50
    - t: '2026-09-27T16:14:48.316Z'
      v: 50
    - t: '2026-09-27T20:43:55.282Z'
      v: 50
    - t: '2026-09-28T03:10:24.840Z'
      v: 50
    - t: '2026-09-28T12:41:31.664Z'
      v: 50
    - t: '2026-09-28T22:52:11.039Z'
      v: 50
  lastAutoUpdated: '2026-09-28T22:52:11.039Z'
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
  lastFetched: '2026-09-28T22:52:19.671Z'
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
