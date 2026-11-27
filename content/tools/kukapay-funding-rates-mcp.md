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
  pypiMonthly: 51
  _history:
    - t: '2026-11-22T13:55:54.365Z'
      v: 134
    - t: '2026-11-22T23:06:52.028Z'
      v: 134
    - t: '2026-11-23T05:19:28.729Z'
      v: 136
    - t: '2026-11-23T17:09:11.055Z'
      v: 136
    - t: '2026-11-24T03:43:16.200Z'
      v: 137
    - t: '2026-11-24T16:52:02.958Z'
      v: 137
    - t: '2026-11-25T01:50:30.895Z'
      v: 135
    - t: '2026-11-25T16:40:21.530Z'
      v: 135
    - t: '2026-11-26T01:27:49.623Z'
      v: 135
    - t: '2026-11-26T16:13:54.412Z'
      v: 134
    - t: '2026-11-27T01:24:42.648Z'
      v: 134
    - t: '2026-11-27T15:58:53.159Z'
      v: 131
  lastAutoUpdated: '2026-11-27T15:58:53.159Z'
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
  lastFetched: '2026-11-27T15:59:02.117Z'
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
