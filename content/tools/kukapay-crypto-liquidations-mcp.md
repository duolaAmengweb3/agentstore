---
slug: kukapay-crypto-liquidations-mcp
name: Liquidations MCP
author: kukapay
category: data
icon: "\U0001F4A5"
official: false
score: 7
tagline_en: Binance liquidation real-time stream
tagline_zh: Binance 清算实时流
metrics:
  smitheryCalls: 312
  githubStars: 8
  lastPush: '2025-05-06T08:53:13Z'
  archived: false
  _history:
    - t: '2026-09-01T20:25:11.443Z'
      v: 80
    - t: '2026-09-02T02:29:03.171Z'
      v: 80
    - t: '2026-09-02T10:26:41.949Z'
      v: 80
    - t: '2026-09-02T15:49:46.336Z'
      v: 80
    - t: '2026-09-02T20:24:57.458Z'
      v: 80
    - t: '2026-09-03T02:36:41.367Z'
      v: 80
    - t: '2026-09-03T10:33:27.933Z'
      v: 80
    - t: '2026-09-03T15:39:16.176Z'
      v: 80
    - t: '2026-09-03T20:24:13.541Z'
      v: 80
    - t: '2026-09-04T02:35:13.609Z'
      v: 80
    - t: '2026-09-04T10:24:41.760Z'
      v: 80
    - t: '2026-09-04T15:37:42.475Z'
      v: 80
  lastAutoUpdated: '2026-09-04T15:37:42.475Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/crypto-liquidations-mcp
readme:
  about: >-
    An MCP server that streams real-time cryptocurrency liquidation events from
    Binance, enabling AI agents to react instantly to high-volatility market
    movements.
  features:
    - >-
      Real-time Liquidation Streaming — Connects to Binance WebSocket to capture
      liquidation events.
    - >-
      Liquidation Data Storage — Maintains an in-memory list of up to 1000
      liquidation events, with no persistent storage.
    - 'Tool — get_latest_liquidations:'
    - Retrieves the latest liquidation events in a Markdown table.
    - 'Columns — Symbol, Side, Price, Quantity, Time (HH:MM:SS format).'
    - Parameters — limit (default 10).
    - 'Prompt — analyze_liquidations:'
    - >-
      Generates a prompt to analyze liquidation trends across all symbols,
      leveraging the get_latest_liquidations tool.
  lastFetched: '2026-09-04T15:37:52.507Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 2
  openIssues: 1
  archived: false
  createdAt: '2025-05-02T07:38:40Z'
  defaultBranch: main
summary_en: >-
  Plugs into Binance's liquidation feed — which coin, which side, how big. 7
  stars, niche but valuable for high-frequency traders.
summary_zh: '接 Binance liquidation feed,看哪个币、哪个方向、多大规模爆仓。7 star,小众但高频交易者有用。'
---


## Liquidations MCP

Real-time Binance liquidation stream

> 实时 Binance 清算流
