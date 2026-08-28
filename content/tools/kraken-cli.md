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
  githubStars: 699
  weeklyGrowthPct: 1
  lastPush: '2026-08-07T13:43:41Z'
  archived: false
  _history:
    - t: '2026-08-25T00:57:11.330Z'
      v: 6940
    - t: '2026-08-25T06:36:27.898Z'
      v: 6940
    - t: '2026-08-25T12:36:55.626Z'
      v: 6940
    - t: '2026-08-25T18:31:50.066Z'
      v: 6940
    - t: '2026-08-26T00:58:23.663Z'
      v: 6940
    - t: '2026-08-26T06:38:06.463Z'
      v: 6940
    - t: '2026-08-26T12:40:13.193Z'
      v: 6940
    - t: '2026-08-26T19:41:15.528Z'
      v: 6940
    - t: '2026-08-27T06:50:16.328Z'
      v: 6940
    - t: '2026-08-27T21:37:01.534Z'
      v: 6960
    - t: '2026-08-28T08:37:52.182Z'
      v: 6980
    - t: '2026-08-28T21:39:42.731Z'
      v: 6990
  lastAutoUpdated: '2026-08-28T21:39:42.731Z'
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
  lastFetched: '2026-08-28T21:39:52.487Z'
repoInfo:
  language: Rust
  license: MIT
  topics: []
  contributors: 4
  openIssues: 1
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
