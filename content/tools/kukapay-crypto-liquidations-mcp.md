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
  githubStars: 9
  lastPush: '2025-05-06T08:53:13Z'
  archived: false
  _history:
    - t: '2026-07-21T13:26:40.814Z'
      v: 90
    - t: '2026-07-21T19:11:59.876Z'
      v: 90
    - t: '2026-07-22T02:06:45.701Z'
      v: 90
    - t: '2026-07-22T08:18:28.925Z'
      v: 90
    - t: '2026-07-22T13:38:53.967Z'
      v: 90
    - t: '2026-07-22T19:05:54.783Z'
      v: 90
    - t: '2026-07-23T02:13:11.090Z'
      v: 90
    - t: '2026-07-23T08:21:54.897Z'
      v: 90
    - t: '2026-07-23T13:44:11.631Z'
      v: 90
    - t: '2026-07-23T19:06:44.106Z'
      v: 90
    - t: '2026-07-24T02:10:02.281Z'
      v: 90
    - t: '2026-07-24T08:16:17.350Z'
      v: 90
  lastAutoUpdated: '2026-07-24T08:16:17.350Z'
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
  lastFetched: '2026-07-24T08:16:26.021Z'
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
