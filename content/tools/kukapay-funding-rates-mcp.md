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
  githubStars: 7
  pypiMonthly: 36
  _history:
    - t: '2026-04-22T02:19:47.762Z'
      v: 544
    - t: '2026-04-22T02:27:43.591Z'
      v: 104
    - t: '2026-04-22T07:25:59.605Z'
      v: 104
    - t: '2026-04-22T13:16:42.376Z'
      v: 104
    - t: '2026-04-22T19:06:43.040Z'
      v: 104
    - t: '2026-04-23T02:08:46.780Z'
      v: 104
    - t: '2026-04-23T07:29:48.891Z'
      v: 104
    - t: '2026-04-23T13:16:40.694Z'
      v: 106
  lastAutoUpdated: '2026-04-23T13:16:40.694Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -81
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
  lastFetched: '2026-04-23T13:16:50.002Z'
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
