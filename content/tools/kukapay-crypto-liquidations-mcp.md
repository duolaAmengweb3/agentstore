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
    - t: '2026-10-20T10:49:18.981Z'
      v: 80
    - t: '2026-10-20T16:13:03.691Z'
      v: 80
    - t: '2026-10-20T21:09:13.301Z'
      v: 80
    - t: '2026-10-21T02:58:43.127Z'
      v: 80
    - t: '2026-10-21T11:01:30.955Z'
      v: 80
    - t: '2026-10-21T16:28:11.382Z'
      v: 80
    - t: '2026-10-21T21:08:02.844Z'
      v: 80
    - t: '2026-10-22T03:04:31.942Z'
      v: 80
    - t: '2026-10-22T11:00:17.549Z'
      v: 80
    - t: '2026-10-22T16:28:43.476Z'
      v: 80
    - t: '2026-10-22T21:07:09.195Z'
      v: 80
    - t: '2026-10-23T03:01:03.583Z'
      v: 80
  lastAutoUpdated: '2026-10-23T03:01:03.583Z'
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
  lastFetched: '2026-10-23T03:01:13.450Z'
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
