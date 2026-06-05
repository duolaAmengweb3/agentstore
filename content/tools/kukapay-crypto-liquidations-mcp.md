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
    - t: '2026-06-02T20:41:17.777Z'
      v: 80
    - t: '2026-06-03T03:36:46.623Z'
      v: 80
    - t: '2026-06-03T10:50:14.975Z'
      v: 80
    - t: '2026-06-03T16:28:30.957Z'
      v: 80
    - t: '2026-06-03T20:51:12.468Z'
      v: 80
    - t: '2026-06-04T03:32:02.972Z'
      v: 80
    - t: '2026-06-04T09:49:23.462Z'
      v: 80
    - t: '2026-06-04T14:47:15.798Z'
      v: 80
    - t: '2026-06-04T19:59:06.633Z'
      v: 80
    - t: '2026-06-05T02:54:08.657Z'
      v: 80
    - t: '2026-06-05T09:37:52.470Z'
      v: 80
    - t: '2026-06-05T14:38:09.121Z'
      v: 80
  lastAutoUpdated: '2026-06-05T14:38:09.121Z'
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
  lastFetched: '2026-06-05T14:38:17.275Z'
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
