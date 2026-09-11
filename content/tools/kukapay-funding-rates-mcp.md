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
  pypiMonthly: 14
  _history:
    - t: '2026-09-08T10:27:16.446Z'
      v: 96
    - t: '2026-09-08T15:51:22.538Z'
      v: 96
    - t: '2026-09-08T20:35:37.769Z'
      v: 96
    - t: '2026-09-09T02:40:46.951Z'
      v: 96
    - t: '2026-09-09T10:37:53.269Z'
      v: 94
    - t: '2026-09-09T15:47:02.135Z'
      v: 94
    - t: '2026-09-09T20:18:12.607Z'
      v: 94
    - t: '2026-09-10T02:43:06.928Z'
      v: 94
    - t: '2026-09-10T10:25:37.157Z'
      v: 94
    - t: '2026-09-10T15:42:04.310Z'
      v: 94
    - t: '2026-09-10T20:20:25.373Z'
      v: 94
    - t: '2026-09-11T02:36:15.066Z'
      v: 94
  lastAutoUpdated: '2026-09-11T02:36:15.066Z'
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
  lastFetched: '2026-09-11T02:36:25.395Z'
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
