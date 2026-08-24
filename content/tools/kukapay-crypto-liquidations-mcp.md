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
    - t: '2026-08-21T06:36:16.911Z'
      v: 90
    - t: '2026-08-21T12:35:31.433Z'
      v: 90
    - t: '2026-08-21T18:28:23.545Z'
      v: 90
    - t: '2026-08-22T00:55:30.004Z'
      v: 90
    - t: '2026-08-22T06:30:10.117Z'
      v: 90
    - t: '2026-08-22T12:27:23.216Z'
      v: 90
    - t: '2026-08-22T18:20:48.228Z'
      v: 90
    - t: '2026-08-23T00:59:33.141Z'
      v: 90
    - t: '2026-08-23T06:31:31.498Z'
      v: 90
    - t: '2026-08-23T12:28:57.891Z'
      v: 90
    - t: '2026-08-23T18:20:28.688Z'
      v: 90
    - t: '2026-08-24T00:57:32.090Z'
      v: 90
  lastAutoUpdated: '2026-08-24T00:57:32.090Z'
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
  lastFetched: '2026-08-24T00:57:40.991Z'
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
