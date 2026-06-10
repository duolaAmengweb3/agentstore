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
    - t: '2026-06-08T03:29:09.585Z'
      v: 80
    - t: '2026-06-08T10:27:29.531Z'
      v: 80
    - t: '2026-06-08T15:39:24.466Z'
      v: 80
    - t: '2026-06-08T20:07:27.648Z'
      v: 80
    - t: '2026-06-09T02:39:40.691Z'
      v: 80
    - t: '2026-06-09T09:32:44.976Z'
      v: 80
    - t: '2026-06-09T14:38:20.245Z'
      v: 80
    - t: '2026-06-09T20:02:15.635Z'
      v: 80
    - t: '2026-06-10T02:53:41.130Z'
      v: 80
    - t: '2026-06-10T09:49:03.613Z'
      v: 80
    - t: '2026-06-10T15:21:54.030Z'
      v: 80
    - t: '2026-06-10T20:22:51.203Z'
      v: 80
  lastAutoUpdated: '2026-06-10T20:22:51.203Z'
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
  lastFetched: '2026-06-10T20:22:59.964Z'
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
