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
  pypiMonthly: 59
  _history:
    - t: '2026-11-16T04:24:19.558Z'
      v: 143
    - t: '2026-11-16T14:32:55.888Z'
      v: 143
    - t: '2026-11-17T01:27:25.050Z'
      v: 143
    - t: '2026-11-17T15:23:24.495Z'
      v: 143
    - t: '2026-11-18T00:23:41.085Z'
      v: 143
    - t: '2026-11-18T14:57:55.283Z'
      v: 143
    - t: '2026-11-18T23:48:41.528Z'
      v: 143
    - t: '2026-11-19T05:35:39.427Z'
      v: 141
    - t: '2026-11-19T15:05:33.648Z'
      v: 141
    - t: '2026-11-20T00:11:15.955Z'
      v: 141
    - t: '2026-11-20T14:46:19.057Z'
      v: 139
    - t: '2026-11-20T23:35:19.416Z'
      v: 139
  lastAutoUpdated: '2026-11-20T23:35:19.416Z'
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
  lastFetched: '2026-11-20T23:35:28.982Z'
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
