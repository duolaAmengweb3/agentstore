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
  githubStars: 7
  lastPush: '2025-05-06T08:53:13Z'
  archived: false
  _history:
    - t: '2026-05-14T08:32:11.038Z'
      v: 70
    - t: '2026-05-14T13:58:14.086Z'
      v: 70
    - t: '2026-05-14T19:40:37.761Z'
      v: 70
    - t: '2026-05-15T02:41:45.168Z'
      v: 70
    - t: '2026-05-15T08:43:54.958Z'
      v: 70
    - t: '2026-05-15T13:55:20.381Z'
      v: 70
    - t: '2026-05-15T19:24:30.093Z'
      v: 70
    - t: '2026-05-16T02:31:15.040Z'
      v: 70
    - t: '2026-05-16T07:57:17.256Z'
      v: 70
    - t: '2026-05-16T13:11:55.360Z'
      v: 70
    - t: '2026-05-16T18:57:49.217Z'
      v: 70
    - t: '2026-05-17T02:38:39.187Z'
      v: 70
  lastAutoUpdated: '2026-05-17T02:38:39.187Z'
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
  lastFetched: '2026-05-17T02:38:46.212Z'
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
