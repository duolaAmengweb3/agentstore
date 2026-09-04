---
slug: kraken-cli
name: Kraken CLI
author: krakenfx
category: cex
icon: "\U0001F991"
official: true
score: 9.1
tagline_en: >-
  Rust single-binary CLI with built-in MCP, NDJSON output — first truly
  AI-native CLI
tagline_zh: 'Rust 单文件二进制,内置 MCP,NDJSON 输出 — 首个真正 AI-native 的 CLI'
metrics:
  githubStars: 705
  weeklyGrowthPct: 0
  lastPush: '2026-08-07T13:43:41Z'
  archived: false
  _history:
    - t: '2026-09-01T20:25:11.458Z'
      v: 7040
    - t: '2026-09-02T02:29:03.185Z'
      v: 7040
    - t: '2026-09-02T10:26:41.965Z'
      v: 7040
    - t: '2026-09-02T15:49:46.353Z'
      v: 7040
    - t: '2026-09-02T20:24:57.555Z'
      v: 7040
    - t: '2026-09-03T02:36:41.426Z'
      v: 7040
    - t: '2026-09-03T10:33:28.074Z'
      v: 7040
    - t: '2026-09-03T15:39:16.226Z'
      v: 7040
    - t: '2026-09-03T20:24:13.437Z'
      v: 7040
    - t: '2026-09-04T02:35:13.711Z'
      v: 7050
    - t: '2026-09-04T10:24:41.770Z'
      v: 7050
    - t: '2026-09-04T15:37:42.516Z'
      v: 7050
  lastAutoUpdated: '2026-09-04T15:37:42.516Z'
fetch:
  github: krakenfx/kraken-cli
readme:
  about: 'The first AI-native CLI for trading crypto, stocks, forex, and derivatives.'
  modules:
    - name: market
      count: 11
      description: 'No · Ticker, orderbook, OHLC, trades, spreads, asset info, tape library'
    - name: account
      count: 18
      description: 'Yes · Balances, orders, trades, ledgers, positions, exports'
    - name: trade
      count: 9
      description: 'Yes · Order placement, amendment, cancellation (spot, xStocks, forex)'
    - name: funding
      count: 10
      description: 'Yes · Deposits, withdrawals, wallet transfers'
    - name: earn
      count: 6
      description: Yes · Staking strategies and allocations
    - name: subaccount
      count: 2
      description: 'Yes · Create subaccounts, transfer between accounts'
    - name: futures
      count: 39
      description: Mixed · Futures market data and trading
    - name: futures-paper
      count: 17
      description: No · Futures paper trading simulation with live prices
    - name: futures-ws
      count: 9
      description: Mixed · Futures WebSocket streaming
    - name: websocket
      count: 15
      description: Mixed · Spot WebSocket v2 streaming and request/response
    - name: paper
      count: 16
      description: >-
        No · Spot paper trading simulation with live prices, P&L explanation,
        and the Autoresearch Lab
    - name: workspace
      count: 15
      description: >-
        No · Strategy workspaces and recorded sessions: isolated accounts,
        session windows, decision logs, reports, promotion
    - name: feedback
      count: 1
      description: No · Product feedback upload to Kraken (local DuckDB mirror on success)
    - name: auth
      count: 4
      description: No · Credential management
    - name: utility
      count: 2
      description: No · Interactive setup and REPL shell
  examples:
    - kraken ticker BTCUSD -o json
    - kraken orderbook BTCUSD --count 10 -o json
    - kraken trades BTCUSD --count 20 -o json
    - kraken ohlc BTCUSD --interval 60 -o json
    - export KRAKEN_API_KEY="your-key"
    - export KRAKEN_API_SECRET="your-secret"
    - kraken balance -o json
    - kraken open-orders -o json
  lastFetched: '2026-09-04T15:37:52.153Z'
repoInfo:
  language: Rust
  license: MIT
  topics: []
  contributors: 4
  openIssues: 4
  archived: false
  createdAt: '2026-03-06T22:18:12Z'
  defaultBranch: main
summary_en: >-
  The developer experience benchmark for CEX agent tools. Zero-dependency Rust
  binary, NDJSON output (machine-first), built-in stdio MCP, danger-action
  confirmation by default. Covers crypto + 79 tokenized stocks + forex + 317
  perp contracts. Worth studying as a reference architecture.
summary_zh: >-
  整个 CEX 圈开发者体验天花板。Rust 零依赖单文件、NDJSON 输出(machine-first)、内置 stdio
  MCP、默认模式下危险操作要确认。覆盖 crypto / 股票 / 外汇 / 永续 317 合约。架构值得抄。
---


## Kraken CLI

The first AI-native CLI for crypto, stocks, forex

> 首个 AI 原生 CLI,覆盖加密 / 股票 / 外汇
