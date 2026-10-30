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
  githubStars: 789
  weeklyGrowthPct: 1
  lastPush: '2026-10-29T10:32:10Z'
  archived: false
  _history:
    - t: '2026-10-27T17:16:50.617Z'
      v: 7810
    - t: '2026-10-27T21:43:27.914Z'
      v: 7810
    - t: '2026-10-28T03:39:00.303Z'
      v: 7810
    - t: '2026-10-28T11:58:38.617Z'
      v: 7810
    - t: '2026-10-28T18:05:03.215Z'
      v: 7810
    - t: '2026-10-29T03:59:09.657Z'
      v: 7820
    - t: '2026-10-29T12:08:38.300Z'
      v: 7830
    - t: '2026-10-29T22:20:35.714Z'
      v: 7850
    - t: '2026-10-30T04:00:32.067Z'
      v: 7870
    - t: '2026-10-30T11:59:37.429Z'
      v: 7870
    - t: '2026-10-30T17:54:37.331Z'
      v: 7890
    - t: '2026-10-30T21:52:46.290Z'
      v: 7890
  lastAutoUpdated: '2026-10-30T21:52:46.290Z'
fetch:
  github: krakenfx/kraken-cli
readme:
  about: >-
    Trade on Kraken from your terminal, or let your AI agent trade for you. One
    install covers crypto, tokenized U.S. stocks and ETFs (for non-U.S.
    customers), forex, and futures. Every command can answer in JSON. A built-in
    MCP server connects the CLI to Claude, Cursor, Codex and other agents, and
    paper trading runs on live prices with no account.
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
      count: 17
      description: Mixed · Spot WebSocket v2 streaming and request/response
    - name: paper
      count: 17
      description: >-
        No · Spot paper trading simulation with live prices, P&L explanation,
        and the Autoresearch Lab
    - name: workspace
      count: 25
      description: >-
        No · Strategy workspaces, recorded sessions, recipes, and extension
        scaffolds: per-strategy ledgers, session windows, decision logs,
        reports, promotion
    - name: feedback
      count: 1
      description: No · Product feedback upload to Kraken
    - name: auth
      count: 6
      description: Mixed · OAuth browser sign-in and credential management
    - name: utility
      count: 1
      description: No · Interactive setup (the REPL is the kraken-shell binary)
  lastFetched: '2026-10-30T21:52:56.041Z'
repoInfo:
  language: Rust
  license: MIT
  topics: []
  contributors: 5
  openIssues: 3
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
