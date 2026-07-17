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
  pypiMonthly: 28
  _history:
    - t: '2026-07-14T07:53:43.591Z'
      v: 110
    - t: '2026-07-14T13:21:47.636Z'
      v: 110
    - t: '2026-07-14T19:10:40.210Z'
      v: 110
    - t: '2026-07-15T01:55:20.536Z'
      v: 110
    - t: '2026-07-15T07:58:27.295Z'
      v: 110
    - t: '2026-07-15T13:24:54.790Z'
      v: 110
    - t: '2026-07-15T19:03:02.988Z'
      v: 110
    - t: '2026-07-16T02:06:07.944Z'
      v: 110
    - t: '2026-07-16T08:03:37.299Z'
      v: 110
    - t: '2026-07-16T13:39:12.696Z'
      v: 108
    - t: '2026-07-16T19:02:02.008Z'
      v: 108
    - t: '2026-07-17T02:09:15.817Z'
      v: 108
  lastAutoUpdated: '2026-07-17T02:09:15.817Z'
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
  lastFetched: '2026-07-17T02:09:24.927Z'
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
