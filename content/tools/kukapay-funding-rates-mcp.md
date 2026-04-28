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
    - t: '2026-04-25T18:42:37.905Z'
      v: 100
    - t: '2026-04-26T02:12:43.978Z'
      v: 100
    - t: '2026-04-26T07:22:24.215Z'
      v: 100
    - t: '2026-04-26T12:56:25.058Z'
      v: 100
    - t: '2026-04-26T18:43:44.088Z'
      v: 100
    - t: '2026-04-27T02:14:45.672Z'
      v: 98
    - t: '2026-04-27T08:14:04.408Z'
      v: 98
    - t: '2026-04-27T13:29:07.341Z'
      v: 98
    - t: '2026-04-27T19:12:06.459Z'
      v: 98
    - t: '2026-04-28T02:31:05.401Z'
      v: 105
    - t: '2026-04-28T08:16:20.230Z'
      v: 105
    - t: '2026-04-28T19:27:09.526Z'
      v: 105
  lastAutoUpdated: '2026-04-28T19:27:09.526Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: 5
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
  lastFetched: '2026-04-28T19:27:20.673Z'
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
