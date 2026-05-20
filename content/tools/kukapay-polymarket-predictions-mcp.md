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
    - t: '2026-05-17T13:09:01.484Z'
      v: 40
    - t: '2026-05-17T19:01:15.398Z'
      v: 40
    - t: '2026-05-18T02:49:18.912Z'
      v: 40
    - t: '2026-05-18T09:52:25.778Z'
      v: 40
    - t: '2026-05-18T15:19:15.101Z'
      v: 40
    - t: '2026-05-18T19:40:22.113Z'
      v: 40
    - t: '2026-05-19T02:46:21.731Z'
      v: 40
    - t: '2026-05-19T09:34:20.828Z'
      v: 40
    - t: '2026-05-19T14:49:35.649Z'
      v: 40
    - t: '2026-05-19T19:47:06.606Z'
      v: 40
    - t: '2026-05-20T02:46:58.940Z'
      v: 40
    - t: '2026-05-20T08:59:10.459Z'
      v: 40
  lastAutoUpdated: '2026-05-20T08:59:10.459Z'
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
  lastFetched: '2026-05-20T08:59:20.067Z'
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
