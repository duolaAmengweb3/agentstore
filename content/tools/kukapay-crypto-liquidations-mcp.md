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
    - t: '2026-04-25T12:54:43.521Z'
      v: 70
    - t: '2026-04-25T18:42:37.009Z'
      v: 70
    - t: '2026-04-26T02:12:43.237Z'
      v: 70
    - t: '2026-04-26T07:22:23.720Z'
      v: 70
    - t: '2026-04-26T12:56:24.382Z'
      v: 70
    - t: '2026-04-26T18:43:43.175Z'
      v: 70
    - t: '2026-04-27T02:14:44.887Z'
      v: 70
    - t: '2026-04-27T08:14:03.581Z'
      v: 70
    - t: '2026-04-27T13:29:06.543Z'
      v: 70
    - t: '2026-04-27T19:12:05.529Z'
      v: 70
    - t: '2026-04-28T02:31:04.694Z'
      v: 70
    - t: '2026-04-28T08:16:19.424Z'
      v: 70
  lastAutoUpdated: '2026-04-28T08:16:19.424Z'
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
  lastFetched: '2026-04-28T08:16:28.683Z'
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
