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
  pypiMonthly: 32
  _history:
    - t: '2026-08-21T18:28:24.237Z'
      v: 118
    - t: '2026-08-22T00:55:30.539Z'
      v: 118
    - t: '2026-08-22T06:30:11.108Z'
      v: 118
    - t: '2026-08-22T12:27:23.855Z'
      v: 118
    - t: '2026-08-22T18:20:49.242Z'
      v: 118
    - t: '2026-08-23T00:59:33.987Z'
      v: 118
    - t: '2026-08-23T06:31:32.229Z'
      v: 111
    - t: '2026-08-23T12:28:59.134Z'
      v: 111
    - t: '2026-08-23T18:20:29.256Z'
      v: 111
    - t: '2026-08-24T00:57:32.908Z'
      v: 111
    - t: '2026-08-24T06:44:13.787Z'
      v: 112
    - t: '2026-08-24T12:37:49.777Z'
      v: 112
  lastAutoUpdated: '2026-08-24T12:37:49.777Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -5
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
  lastFetched: '2026-08-24T12:38:00.859Z'
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
