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
    - t: '2026-05-27T02:53:55.532Z'
      v: 120
    - t: '2026-05-27T09:37:17.270Z'
      v: 120
    - t: '2026-05-27T15:26:03.516Z'
      v: 120
    - t: '2026-05-27T20:08:27.241Z'
      v: 120
    - t: '2026-05-28T02:41:27.759Z'
      v: 120
    - t: '2026-05-28T09:53:43.954Z'
      v: 113
    - t: '2026-05-28T15:38:59.376Z'
      v: 113
    - t: '2026-05-28T20:12:58.214Z'
      v: 113
    - t: '2026-05-29T02:45:08.040Z'
      v: 113
    - t: '2026-05-29T09:44:07.489Z'
      v: 113
    - t: '2026-05-29T14:52:07.417Z'
      v: 113
    - t: '2026-05-29T20:13:38.436Z'
      v: 113
  lastAutoUpdated: '2026-05-29T20:13:38.436Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -6
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
  lastFetched: '2026-05-29T20:13:46.501Z'
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
