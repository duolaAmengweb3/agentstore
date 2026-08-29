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
  pypiMonthly: 16
  _history:
    - t: '2026-08-25T06:36:28.653Z'
      v: 108
    - t: '2026-08-25T12:36:56.360Z'
      v: 108
    - t: '2026-08-25T18:31:50.929Z'
      v: 108
    - t: '2026-08-26T00:58:24.392Z'
      v: 108
    - t: '2026-08-26T06:38:07.209Z'
      v: 102
    - t: '2026-08-26T12:40:14.365Z'
      v: 102
    - t: '2026-08-26T19:41:16.658Z'
      v: 102
    - t: '2026-08-27T06:50:16.847Z'
      v: 97
    - t: '2026-08-27T21:37:02.281Z'
      v: 97
    - t: '2026-08-28T08:37:52.882Z'
      v: 98
    - t: '2026-08-28T21:39:43.522Z'
      v: 98
    - t: '2026-08-29T05:16:37.805Z'
      v: 96
  lastAutoUpdated: '2026-08-29T05:16:37.805Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: -11
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
  lastFetched: '2026-08-29T05:16:47.207Z'
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
