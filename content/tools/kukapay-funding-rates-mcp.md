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
  pypiMonthly: 26
  _history:
    - t: '2026-07-17T18:59:49.186Z'
      v: 108
    - t: '2026-07-18T01:58:28.992Z'
      v: 108
    - t: '2026-07-18T07:40:28.090Z'
      v: 107
    - t: '2026-07-18T13:02:42.108Z'
      v: 107
    - t: '2026-07-18T18:55:15.953Z'
      v: 107
    - t: '2026-07-19T02:09:40.681Z'
      v: 107
    - t: '2026-07-19T08:07:20.880Z'
      v: 107
    - t: '2026-07-19T13:05:01.064Z'
      v: 106
    - t: '2026-07-19T18:58:24.970Z'
      v: 106
    - t: '2026-07-20T02:30:15.607Z'
      v: 106
    - t: '2026-07-20T08:48:41.497Z'
      v: 106
    - t: '2026-07-20T13:54:53.180Z'
      v: 106
  lastAutoUpdated: '2026-07-20T13:54:53.180Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -2
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
  lastFetched: '2026-07-20T13:55:01.326Z'
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
