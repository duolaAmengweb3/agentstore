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
  pypiMonthly: 25
  _history:
    - t: '2026-04-30T13:45:04.820Z'
      v: 98
    - t: '2026-04-30T19:12:53.291Z'
      v: 98
    - t: '2026-05-01T02:37:10.650Z'
      v: 98
    - t: '2026-05-01T08:06:53.102Z'
      v: 98
    - t: '2026-05-01T13:09:42.347Z'
      v: 98
    - t: '2026-05-01T19:05:36.351Z'
      v: 98
    - t: '2026-05-02T02:12:42.091Z'
      v: 99
    - t: '2026-05-02T07:25:32.522Z'
      v: 99
    - t: '2026-05-02T12:59:37.849Z'
      v: 99
    - t: '2026-05-02T18:52:32.919Z'
      v: 99
    - t: '2026-05-03T02:28:59.856Z'
      v: 95
    - t: '2026-05-03T07:55:23.431Z'
      v: 95
  lastAutoUpdated: '2026-05-03T07:55:23.431Z'
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
  lastFetched: '2026-05-03T07:55:29.628Z'
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
