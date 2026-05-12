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
    - t: '2026-05-09T07:50:04.235Z'
      v: 70
    - t: '2026-05-09T13:05:24.047Z'
      v: 70
    - t: '2026-05-09T18:53:41.138Z'
      v: 70
    - t: '2026-05-10T02:31:34.673Z'
      v: 70
    - t: '2026-05-10T08:02:48.729Z'
      v: 70
    - t: '2026-05-10T13:07:05.987Z'
      v: 70
    - t: '2026-05-10T18:54:53.055Z'
      v: 70
    - t: '2026-05-11T02:41:05.960Z'
      v: 70
    - t: '2026-05-11T09:31:51.507Z'
      v: 70
    - t: '2026-05-11T14:38:31.538Z'
      v: 70
    - t: '2026-05-11T19:41:30.157Z'
      v: 70
    - t: '2026-05-12T02:34:06.783Z'
      v: 70
  lastAutoUpdated: '2026-05-12T02:34:06.783Z'
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
  lastFetched: '2026-05-12T02:34:14.728Z'
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
