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
  githubStars: 582
  weeklyGrowthPct: 1
  lastPush: '2026-04-20T08:19:01Z'
  archived: false
  _history:
    - t: '2026-05-04T19:22:23.174Z'
      v: 5760
    - t: '2026-05-05T02:22:41.229Z'
      v: 5750
    - t: '2026-05-05T08:02:38.761Z'
      v: 5760
    - t: '2026-05-05T13:27:25.023Z'
      v: 5760
    - t: '2026-05-05T19:12:29.155Z'
      v: 5770
    - t: '2026-05-06T02:26:24.842Z'
      v: 5780
    - t: '2026-05-06T08:16:53.438Z'
      v: 5780
    - t: '2026-05-06T13:56:37.139Z'
      v: 5790
    - t: '2026-05-06T19:30:12.201Z'
      v: 5790
    - t: '2026-05-07T02:28:00.878Z'
      v: 5810
    - t: '2026-05-07T08:27:12.433Z'
      v: 5820
    - t: '2026-05-07T13:54:35.397Z'
      v: 5820
  lastAutoUpdated: '2026-05-07T13:54:35.397Z'
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
  lastFetched: '2026-05-07T13:54:44.568Z'
repoInfo:
  language: Rust
  license: MIT
  topics: []
  contributors: 3
  openIssues: 5
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
