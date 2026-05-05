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
  pypiMonthly: 35
  _history:
    - t: '2026-05-02T18:52:32.919Z'
      v: 99
    - t: '2026-05-03T02:28:59.856Z'
      v: 95
    - t: '2026-05-03T07:55:23.431Z'
      v: 95
    - t: '2026-05-03T12:58:43.493Z'
      v: 95
    - t: '2026-05-03T18:52:44.733Z'
      v: 95
    - t: '2026-05-04T02:27:38.125Z'
      v: 95
    - t: '2026-05-04T08:23:57.295Z'
      v: 93
    - t: '2026-05-04T13:47:44.258Z'
      v: 93
    - t: '2026-05-04T19:22:23.866Z'
      v: 93
    - t: '2026-05-05T02:22:41.814Z'
      v: 105
    - t: '2026-05-05T08:02:39.328Z'
      v: 105
    - t: '2026-05-05T13:27:25.803Z'
      v: 105
  lastAutoUpdated: '2026-05-05T13:27:25.803Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: 6
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
  lastFetched: '2026-05-05T13:27:35.684Z'
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
