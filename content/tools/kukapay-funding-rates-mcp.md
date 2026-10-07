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
  pypiMonthly: 20
  _history:
    - t: '2026-10-04T03:53:34.854Z'
      v: 96
    - t: '2026-10-04T11:40:58.544Z'
      v: 96
    - t: '2026-10-04T16:19:30.887Z'
      v: 96
    - t: '2026-10-04T20:47:03.577Z'
      v: 96
    - t: '2026-10-05T03:38:50.534Z'
      v: 96
    - t: '2026-10-05T13:22:20.917Z'
      v: 96
    - t: '2026-10-05T23:36:58.587Z'
      v: 96
    - t: '2026-10-06T04:26:51.955Z'
      v: 100
    - t: '2026-10-06T12:37:24.126Z'
      v: 100
    - t: '2026-10-06T22:11:13.281Z'
      v: 100
    - t: '2026-10-07T03:52:45.623Z'
      v: 100
    - t: '2026-10-07T12:30:29.559Z'
      v: 100
  lastAutoUpdated: '2026-10-07T12:30:29.559Z'
  lastPush: '2025-04-21T08:32:58Z'
  archived: false
  weeklyGrowthPct: 4
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
  lastFetched: '2026-10-07T12:30:39.665Z'
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
