---
slug: kukapay-funding-rates-mcp
name: Funding Rates MCP
author: kukapay
category: data
icon: ⚖️
official: false
score: 7.5
tagline_en: kukapay cross-CEX funding rates — one table to spot arbitrage
tagline_zh: 'kukapay 跨 CEX 资金费率合并,一张表看套利机会'
metrics:
  smitheryCalls: 1170
  githubStars: 8
  pypiMonthly: 31
  _history:
    - t: '2026-07-07T02:36:43.355Z'
      v: 115
    - t: '2026-07-07T09:32:18.362Z'
      v: 115
    - t: '2026-07-07T14:19:20.050Z'
      v: 115
    - t: '2026-07-07T19:47:32.807Z'
      v: 115
    - t: '2026-07-08T02:10:04.774Z'
      v: 115
    - t: '2026-07-08T08:18:09.891Z'
      v: 115
    - t: '2026-07-08T13:50:57.249Z'
      v: 115
    - t: '2026-07-08T19:16:48.982Z'
      v: 110
    - t: '2026-07-09T02:28:41.442Z'
      v: 111
    - t: '2026-07-09T09:34:08.258Z'
      v: 111
    - t: '2026-07-09T14:45:52.150Z'
      v: 111
    - t: '2026-07-09T19:37:03.123Z'
      v: 111
  lastAutoUpdated: '2026-07-09T19:37:03.123Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -3
fetch:
  github: kukapay/funding-rates-mcp
  pypi: funding-rates-mcp
readme:
  about: >-
    An MCP server that provides real-time funding rate data across major crypto
    exchanges, enabling agents to detect arbitrage opportunities.
  features:
    - >-
      Real-Time Funding Rates — Fetches current funding across Binance, OKX,
      Bybit, Bitget, Gate and CoinEx.
    - >-
      Pivoted Table Output — Displays symbols as rows, exchanges as columns, and
      includes a Divergence column for max funding rate difference.
    - >-
      Claude Desktop Integration — Runs as an MCP server for interactive
      queries.
  lastFetched: '2026-07-09T19:37:13.358Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 1
  archived: false
  createdAt: '2025-04-21T08:32:37Z'
  defaultBranch: main
summary_en: >-
  Merges funding rates across 6 CEXes (Binance/OKX/Bybit/Bitget/Gate/CoinEx)
  into a markdown table with divergence column. Does NOT cover DEXes
  (Hyperliquid / dYdX / GMX) — a clear gap.
summary_zh: >-
  6 家 CEX(Binance/OKX/Bybit/Bitget/Gate/CoinEx)的 funding rate 合并输出 markdown 表 +
  divergence 列。不包括 DEX(Hyperliquid / dYdX / GMX),这是空白。
---


## Funding Rates MCP

Cross-CEX funding rates consolidated in one table

> 跨 CEX 资金费率合并成一张表
