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
  githubStars: 678
  weeklyGrowthPct: 0
  lastPush: '2026-08-05T16:41:21Z'
  archived: false
  _history:
    - t: '2026-08-03T02:14:44.332Z'
      v: 6780
    - t: '2026-08-03T09:33:09.175Z'
      v: 6780
    - t: '2026-08-03T14:27:09.977Z'
      v: 6790
    - t: '2026-08-03T19:23:54.172Z'
      v: 6790
    - t: '2026-08-04T02:00:59.200Z'
      v: 6790
    - t: '2026-08-04T08:28:28.724Z'
      v: 6790
    - t: '2026-08-04T13:57:24.069Z'
      v: 6790
    - t: '2026-08-04T19:23:21.674Z'
      v: 6790
    - t: '2026-08-05T02:00:07.297Z'
      v: 6790
    - t: '2026-08-05T08:27:21.376Z'
      v: 6790
    - t: '2026-08-05T13:55:03.992Z'
      v: 6790
    - t: '2026-08-05T19:22:11.904Z'
      v: 6780
  lastAutoUpdated: '2026-08-05T19:22:11.904Z'
fetch:
  github: krakenfx/kraken-cli
readme:
  about: 'The first AI-native CLI for trading crypto, stocks, forex, and derivatives.'
  modules:
    - name: market
      count: 10
      description: 'No · Ticker, orderbook, OHLC, trades, spreads, asset info'
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
      count: 10
      description: No · Spot paper trading simulation with live prices
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
  lastFetched: '2026-08-05T19:22:21.611Z'
repoInfo:
  language: Rust
  license: MIT
  topics: []
  contributors: 3
  openIssues: 10
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
