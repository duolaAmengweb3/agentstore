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
    - t: '2026-10-15T10:44:28.418Z'
      v: 80
    - t: '2026-10-15T16:09:37.826Z'
      v: 80
    - t: '2026-10-15T20:50:47.761Z'
      v: 80
    - t: '2026-10-16T02:47:48.643Z'
      v: 80
    - t: '2026-10-16T10:31:45.407Z'
      v: 80
    - t: '2026-10-16T15:56:54.126Z'
      v: 80
    - t: '2026-10-16T20:24:35.656Z'
      v: 80
    - t: '2026-10-17T02:39:30.333Z'
      v: 80
    - t: '2026-10-17T10:01:37.062Z'
      v: 80
    - t: '2026-10-17T14:50:01.981Z'
      v: 80
    - t: '2026-10-17T19:58:46.221Z'
      v: 80
    - t: '2026-10-18T02:40:46.163Z'
      v: 80
  lastAutoUpdated: '2026-10-18T02:40:46.163Z'
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
  lastFetched: '2026-10-18T02:40:55.803Z'
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
