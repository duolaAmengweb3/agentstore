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
  pypiMonthly: 44
  _history:
    - t: '2026-05-10T08:02:49.647Z'
      v: 118
    - t: '2026-05-10T13:07:06.764Z'
      v: 118
    - t: '2026-05-10T18:54:53.896Z'
      v: 118
    - t: '2026-05-11T02:41:06.704Z'
      v: 118
    - t: '2026-05-11T09:31:52.348Z'
      v: 118
    - t: '2026-05-11T14:38:32.312Z'
      v: 118
    - t: '2026-05-11T19:41:31.091Z'
      v: 118
    - t: '2026-05-12T02:34:07.492Z'
      v: 118
    - t: '2026-05-12T08:33:10.627Z'
      v: 115
    - t: '2026-05-12T14:09:33.638Z'
      v: 115
    - t: '2026-05-12T19:43:53.244Z'
      v: 115
    - t: '2026-05-13T02:40:41.460Z'
      v: 114
  lastAutoUpdated: '2026-05-13T02:40:41.460Z'
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
  lastFetched: '2026-05-13T02:40:48.106Z'
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
