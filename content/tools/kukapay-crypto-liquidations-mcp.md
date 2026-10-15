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
    - t: '2026-10-12T03:55:07.229Z'
      v: 80
    - t: '2026-10-12T14:12:05.079Z'
      v: 80
    - t: '2026-10-13T00:03:25.321Z'
      v: 80
    - t: '2026-10-13T13:22:57.012Z'
      v: 80
    - t: '2026-10-13T22:12:15.801Z'
      v: 80
    - t: '2026-10-14T03:11:46.999Z'
      v: 80
    - t: '2026-10-14T11:02:29.237Z'
      v: 80
    - t: '2026-10-14T16:21:56.693Z'
      v: 80
    - t: '2026-10-14T21:13:00.783Z'
      v: 80
    - t: '2026-10-15T02:50:45.991Z'
      v: 80
    - t: '2026-10-15T10:44:28.418Z'
      v: 80
    - t: '2026-10-15T16:09:37.826Z'
      v: 80
  lastAutoUpdated: '2026-10-15T16:09:37.826Z'
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
  lastFetched: '2026-10-15T16:09:50.968Z'
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
