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
    - t: '2026-05-24T08:23:10.781Z'
      v: 40
    - t: '2026-05-24T13:14:38.158Z'
      v: 40
    - t: '2026-05-24T19:10:13.959Z'
      v: 40
    - t: '2026-05-25T02:55:20.438Z'
      v: 40
    - t: '2026-05-25T09:56:51.481Z'
      v: 40
    - t: '2026-05-25T14:44:54.649Z'
      v: 40
    - t: '2026-05-25T19:22:31.324Z'
      v: 40
    - t: '2026-05-26T02:43:20.556Z'
      v: 40
    - t: '2026-05-26T09:43:16.551Z'
      v: 40
    - t: '2026-05-26T14:57:01.089Z'
      v: 40
    - t: '2026-05-26T20:02:49.528Z'
      v: 40
    - t: '2026-05-27T02:53:55.227Z'
      v: 40
  lastAutoUpdated: '2026-05-27T02:53:55.227Z'
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
  lastFetched: '2026-05-27T02:54:04.863Z'
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
