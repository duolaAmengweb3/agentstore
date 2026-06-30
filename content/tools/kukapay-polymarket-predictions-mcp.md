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
    - t: '2026-06-28T02:56:11.109Z'
      v: 40
    - t: '2026-06-28T08:45:22.921Z'
      v: 40
    - t: '2026-06-28T13:25:56.670Z'
      v: 40
    - t: '2026-06-28T19:11:19.396Z'
      v: 40
    - t: '2026-06-29T02:56:40.668Z'
      v: 40
    - t: '2026-06-29T10:47:07.771Z'
      v: 40
    - t: '2026-06-29T15:37:57.484Z'
      v: 40
    - t: '2026-06-29T19:49:50.290Z'
      v: 40
    - t: '2026-06-30T02:50:42.752Z'
      v: 40
    - t: '2026-06-30T09:24:59.563Z'
      v: 40
    - t: '2026-06-30T14:07:53.024Z'
      v: 40
    - t: '2026-06-30T19:47:26.285Z'
      v: 40
  lastAutoUpdated: '2026-06-30T19:47:26.285Z'
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
  lastFetched: '2026-06-30T19:47:35.312Z'
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
