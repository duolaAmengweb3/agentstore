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
    - t: '2026-06-30T19:47:26.285Z'
      v: 40
    - t: '2026-07-01T02:56:03.477Z'
      v: 40
    - t: '2026-07-01T09:37:14.667Z'
      v: 40
    - t: '2026-07-01T14:23:56.066Z'
      v: 40
    - t: '2026-07-01T19:46:08.544Z'
      v: 40
    - t: '2026-07-02T02:46:19.291Z'
      v: 40
    - t: '2026-07-02T08:48:48.559Z'
      v: 40
    - t: '2026-07-02T13:47:14.937Z'
      v: 40
    - t: '2026-07-02T19:16:49.050Z'
      v: 40
    - t: '2026-07-03T02:28:32.358Z'
      v: 40
    - t: '2026-07-03T08:55:05.091Z'
      v: 40
    - t: '2026-07-03T13:51:56.232Z'
      v: 40
  lastAutoUpdated: '2026-07-03T13:51:56.232Z'
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
  lastFetched: '2026-07-03T13:52:05.877Z'
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
