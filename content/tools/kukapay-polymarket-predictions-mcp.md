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
    - t: '2026-05-11T14:38:32.074Z'
      v: 40
    - t: '2026-05-11T19:41:30.865Z'
      v: 40
    - t: '2026-05-12T02:34:07.150Z'
      v: 40
    - t: '2026-05-12T08:33:10.426Z'
      v: 40
    - t: '2026-05-12T14:09:33.431Z'
      v: 40
    - t: '2026-05-12T19:43:52.846Z'
      v: 40
    - t: '2026-05-13T02:40:41.124Z'
      v: 40
    - t: '2026-05-13T08:38:32.093Z'
      v: 40
    - t: '2026-05-13T14:22:02.626Z'
      v: 40
    - t: '2026-05-13T19:48:16.970Z'
      v: 40
    - t: '2026-05-14T02:41:06.014Z'
      v: 40
    - t: '2026-05-14T08:32:11.435Z'
      v: 40
  lastAutoUpdated: '2026-05-14T08:32:11.435Z'
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
  lastFetched: '2026-05-14T08:32:19.733Z'
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
