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
  pypiMonthly: 45
  _history:
    - t: '2026-07-25T13:12:57.287Z'
      v: 109
    - t: '2026-07-25T18:59:45.142Z'
      v: 109
    - t: '2026-07-26T02:14:12.711Z'
      v: 114
    - t: '2026-07-26T08:16:59.594Z'
      v: 114
    - t: '2026-07-26T13:08:18.455Z'
      v: 114
    - t: '2026-07-26T19:02:57.459Z'
      v: 114
    - t: '2026-07-27T02:26:58.564Z'
      v: 114
    - t: '2026-07-27T09:40:11.879Z'
      v: 120
    - t: '2026-07-27T14:20:39.332Z'
      v: 120
    - t: '2026-07-27T19:18:57.667Z'
      v: 120
    - t: '2026-07-28T02:02:49.754Z'
      v: 125
    - t: '2026-07-28T08:24:51.762Z'
      v: 125
  lastAutoUpdated: '2026-07-28T08:24:51.762Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: 15
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
  lastFetched: '2026-07-28T08:24:59.045Z'
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
