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
  pypiMonthly: 42
  _history:
    - t: '2026-07-28T19:15:23.701Z'
      v: 125
    - t: '2026-07-29T02:05:26.781Z'
      v: 124
    - t: '2026-07-29T08:30:37.664Z'
      v: 124
    - t: '2026-07-29T13:56:41.484Z'
      v: 124
    - t: '2026-07-29T19:05:53.139Z'
      v: 124
    - t: '2026-07-30T01:55:08.514Z'
      v: 125
    - t: '2026-07-30T08:15:09.556Z'
      v: 125
    - t: '2026-07-30T13:46:30.278Z'
      v: 125
    - t: '2026-07-30T19:17:23.267Z'
      v: 125
    - t: '2026-07-31T02:13:59.001Z'
      v: 122
    - t: '2026-07-31T08:41:19.983Z'
      v: 122
    - t: '2026-07-31T13:51:41.835Z'
      v: 122
  lastAutoUpdated: '2026-07-31T13:51:41.835Z'
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
  lastFetched: '2026-07-31T13:51:52.882Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 2
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
