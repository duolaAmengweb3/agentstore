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
  pypiMonthly: 36
  _history:
    - t: '2026-08-13T18:55:14.724Z'
      v: 119
    - t: '2026-08-14T01:24:52.954Z'
      v: 116
    - t: '2026-08-14T07:16:18.873Z'
      v: 116
    - t: '2026-08-14T12:53:11.163Z'
      v: 116
    - t: '2026-08-14T18:45:00.892Z'
      v: 116
    - t: '2026-08-15T00:55:25.834Z'
      v: 116
    - t: '2026-08-15T06:27:37.475Z'
      v: 116
    - t: '2026-08-15T12:26:24.893Z'
      v: 118
    - t: '2026-08-15T18:20:16.285Z'
      v: 118
    - t: '2026-08-16T00:58:21.559Z'
      v: 118
    - t: '2026-08-16T06:30:00.317Z'
      v: 116
    - t: '2026-08-16T12:28:03.672Z'
      v: 116
  lastAutoUpdated: '2026-08-16T12:28:03.672Z'
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
  lastFetched: '2026-08-16T12:28:11.296Z'
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
