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
  pypiMonthly: 43
  _history:
    - t: '2026-06-01T21:26:42.206Z'
      v: 115
    - t: '2026-06-02T03:29:21.021Z'
      v: 117
    - t: '2026-06-02T10:13:55.485Z'
      v: 117
    - t: '2026-06-02T16:13:13.644Z'
      v: 117
    - t: '2026-06-02T20:41:18.602Z'
      v: 117
    - t: '2026-06-03T03:36:47.606Z'
      v: 117
    - t: '2026-06-03T10:50:15.811Z'
      v: 123
    - t: '2026-06-03T16:28:31.935Z'
      v: 123
    - t: '2026-06-03T20:51:13.180Z'
      v: 123
    - t: '2026-06-04T03:32:03.737Z'
      v: 113
    - t: '2026-06-04T09:49:24.386Z'
      v: 113
    - t: '2026-06-04T14:47:16.573Z'
      v: 113
  lastAutoUpdated: '2026-06-04T14:47:16.573Z'
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
  lastFetched: '2026-06-04T14:47:25.841Z'
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
