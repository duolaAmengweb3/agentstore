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
    - t: '2026-10-06T04:26:51.290Z'
      v: 80
    - t: '2026-10-06T12:37:23.153Z'
      v: 80
    - t: '2026-10-06T22:11:12.418Z'
      v: 80
    - t: '2026-10-07T03:52:44.810Z'
      v: 80
    - t: '2026-10-07T12:30:28.752Z'
      v: 80
    - t: '2026-10-07T22:33:04.033Z'
      v: 80
    - t: '2026-10-08T04:06:13.031Z'
      v: 80
    - t: '2026-10-08T12:40:07.237Z'
      v: 80
    - t: '2026-10-08T22:45:34.406Z'
      v: 80
    - t: '2026-10-09T04:11:16.790Z'
      v: 80
    - t: '2026-10-09T12:32:08.803Z'
      v: 80
    - t: '2026-10-09T22:08:24.538Z'
      v: 80
  lastAutoUpdated: '2026-10-09T22:08:24.538Z'
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
  lastFetched: '2026-10-09T22:08:33.989Z'
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
