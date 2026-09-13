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
    - t: '2026-09-10T10:25:36.221Z'
      v: 80
    - t: '2026-09-10T15:42:03.429Z'
      v: 80
    - t: '2026-09-10T20:20:24.202Z'
      v: 80
    - t: '2026-09-11T02:36:14.282Z'
      v: 80
    - t: '2026-09-11T10:27:59.330Z'
      v: 80
    - t: '2026-09-11T15:43:34.420Z'
      v: 80
    - t: '2026-09-11T20:20:27.933Z'
      v: 80
    - t: '2026-09-12T02:45:19.331Z'
      v: 80
    - t: '2026-09-12T09:56:37.182Z'
      v: 80
    - t: '2026-09-12T14:51:42.917Z'
      v: 80
    - t: '2026-09-12T20:03:30.640Z'
      v: 80
    - t: '2026-09-13T02:43:38.465Z'
      v: 80
  lastAutoUpdated: '2026-09-13T02:43:38.465Z'
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
  lastFetched: '2026-09-13T02:43:46.379Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 2
  openIssues: 2
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
