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
    - t: '2026-10-21T02:58:43.596Z'
      v: 50
    - t: '2026-10-21T11:01:31.587Z'
      v: 50
    - t: '2026-10-21T16:28:11.994Z'
      v: 50
    - t: '2026-10-21T21:08:03.398Z'
      v: 50
    - t: '2026-10-22T03:04:32.438Z'
      v: 50
    - t: '2026-10-22T11:00:18.238Z'
      v: 50
    - t: '2026-10-22T16:28:44.080Z'
      v: 50
    - t: '2026-10-22T21:07:09.850Z'
      v: 50
    - t: '2026-10-23T03:01:04.138Z'
      v: 50
    - t: '2026-10-23T10:53:45.304Z'
      v: 50
    - t: '2026-10-23T16:18:22.077Z'
      v: 50
    - t: '2026-10-23T20:53:53.177Z'
      v: 50
  lastAutoUpdated: '2026-10-23T20:53:53.177Z'
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
  lastFetched: '2026-10-23T20:54:04.061Z'
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
