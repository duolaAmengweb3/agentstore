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
  githubStars: 812
  weeklyGrowthPct: 0
  lastPush: '2026-10-29T10:32:10Z'
  archived: false
  _history:
    - t: '2026-11-12T23:06:02.740Z'
      v: 8120
    - t: '2026-11-13T04:42:21.663Z'
      v: 8120
    - t: '2026-11-13T13:47:53.989Z'
      v: 8120
    - t: '2026-11-13T23:09:27.637Z'
      v: 8120
    - t: '2026-11-14T04:37:36.771Z'
      v: 8120
    - t: '2026-11-14T12:51:40.308Z'
      v: 8120
    - t: '2026-11-14T21:54:11.245Z'
      v: 8120
    - t: '2026-11-15T04:27:21.210Z'
      v: 8120
    - t: '2026-11-15T13:19:05.426Z'
      v: 8120
    - t: '2026-11-15T22:24:15.878Z'
      v: 8120
    - t: '2026-11-16T04:24:18.436Z'
      v: 8120
    - t: '2026-11-16T14:32:54.932Z'
      v: 8120
  lastAutoUpdated: '2026-11-16T14:32:54.932Z'
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
  lastFetched: '2026-11-16T14:33:09.344Z'
repoInfo:
  language: Rust
  license: MIT
  topics:
    - ai-agents
    - algorithmic-trading
    - claude
    - claude-code
    - cli
    - codex
    - crypto
    - cryptocurrency
  contributors: 5
  openIssues: 6
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
