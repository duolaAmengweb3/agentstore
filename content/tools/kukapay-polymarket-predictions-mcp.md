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
    - t: '2026-06-15T20:50:12.122Z'
      v: 40
    - t: '2026-06-16T03:35:01.566Z'
      v: 40
    - t: '2026-06-16T11:02:23.423Z'
      v: 40
    - t: '2026-06-16T16:41:07.616Z'
      v: 40
    - t: '2026-06-16T20:44:08.086Z'
      v: 40
    - t: '2026-06-17T03:33:37.051Z'
      v: 40
    - t: '2026-06-17T10:46:13.664Z'
      v: 40
    - t: '2026-06-17T15:14:38.326Z'
      v: 40
    - t: '2026-06-17T20:06:43.804Z'
      v: 40
    - t: '2026-06-18T03:25:05.236Z'
      v: 40
    - t: '2026-06-18T10:14:01.783Z'
      v: 40
    - t: '2026-06-18T14:56:48.882Z'
      v: 40
  lastAutoUpdated: '2026-06-18T14:56:48.882Z'
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
  lastFetched: '2026-06-18T14:57:01.762Z'
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
