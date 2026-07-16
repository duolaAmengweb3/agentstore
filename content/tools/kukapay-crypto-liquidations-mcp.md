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
    - t: '2026-07-14T01:58:55.302Z'
      v: 90
    - t: '2026-07-14T07:53:42.509Z'
      v: 90
    - t: '2026-07-14T13:21:46.958Z'
      v: 90
    - t: '2026-07-14T19:10:39.534Z'
      v: 90
    - t: '2026-07-15T01:55:19.896Z'
      v: 90
    - t: '2026-07-15T07:58:26.652Z'
      v: 90
    - t: '2026-07-15T13:24:53.594Z'
      v: 90
    - t: '2026-07-15T19:03:01.810Z'
      v: 90
    - t: '2026-07-16T02:06:07.262Z'
      v: 90
    - t: '2026-07-16T08:03:36.579Z'
      v: 90
    - t: '2026-07-16T13:39:12.028Z'
      v: 90
    - t: '2026-07-16T19:02:01.339Z'
      v: 90
  lastAutoUpdated: '2026-07-16T19:02:01.339Z'
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
  lastFetched: '2026-07-16T19:02:09.607Z'
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
