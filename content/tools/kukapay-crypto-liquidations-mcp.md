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
    - t: '2026-05-12T14:09:33.012Z'
      v: 70
    - t: '2026-05-12T19:43:52.430Z'
      v: 70
    - t: '2026-05-13T02:40:40.810Z'
      v: 70
    - t: '2026-05-13T08:38:31.599Z'
      v: 70
    - t: '2026-05-13T14:22:02.051Z'
      v: 70
    - t: '2026-05-13T19:48:16.401Z'
      v: 70
    - t: '2026-05-14T02:41:05.464Z'
      v: 70
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
  lastAutoUpdated: '2026-05-15T08:43:54.958Z'
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
  lastFetched: '2026-05-15T08:44:04.223Z'
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
