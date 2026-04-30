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
  githubStars: 569
  weeklyGrowthPct: 2
  lastPush: '2026-04-20T08:19:01Z'
  archived: false
  _history:
    - t: '2026-04-27T19:12:05.521Z'
      v: 5580
    - t: '2026-04-28T02:31:04.732Z'
      v: 5590
    - t: '2026-04-28T08:16:19.428Z'
      v: 5590
    - t: '2026-04-28T19:27:08.449Z'
      v: 5620
    - t: '2026-04-29T02:30:56.948Z'
      v: 5630
    - t: '2026-04-29T08:08:47.764Z'
      v: 5640
    - t: '2026-04-29T13:45:48.525Z'
      v: 5640
    - t: '2026-04-29T19:17:46.936Z'
      v: 5640
    - t: '2026-04-30T02:31:51.533Z'
      v: 5660
    - t: '2026-04-30T08:12:46.725Z'
      v: 5670
    - t: '2026-04-30T13:45:03.734Z'
      v: 5690
    - t: '2026-04-30T19:12:52.618Z'
      v: 5690
  lastAutoUpdated: '2026-04-30T19:12:52.618Z'
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
  lastFetched: '2026-04-30T19:13:00.605Z'
repoInfo:
  language: Rust
  license: MIT
  topics:
    - cli
    - crypto
    - kraken
    - mcp
    - trading
  contributors: 3
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
