---
slug: okx-agent-trade-kit
name: OKX Agent Trade Kit
author: okx
category: cex
icon: ⚫
official: true
score: 8.9
tagline_en: OKX official MCP + CLI — 140 tools across spot / perp / options / bots / earn
tagline_zh: 'OKX 官方 MCP + CLI,140 个工具覆盖现货 / 合约 / 期权 / bot / earn'
metrics:
  npmMonthly: 10243
  githubStars: 274
  weeklyGrowthPct: -1
  _history:
    - t: '2026-04-30T08:12:49.105Z'
      v: 13106
    - t: '2026-04-30T13:45:06.346Z'
      v: 13210
    - t: '2026-04-30T19:12:54.291Z'
      v: 13220
    - t: '2026-05-01T02:37:11.793Z'
      v: 13220
    - t: '2026-05-01T08:06:54.021Z'
      v: 13067
    - t: '2026-05-01T13:09:43.586Z'
      v: 13087
    - t: '2026-05-01T19:05:37.180Z'
      v: 13087
    - t: '2026-05-02T02:12:43.199Z'
      v: 13097
    - t: '2026-05-02T07:25:33.593Z'
      v: 12963
    - t: '2026-05-02T12:59:38.978Z'
      v: 12973
    - t: '2026-05-02T18:52:34.165Z'
      v: 12973
    - t: '2026-05-03T02:29:00.655Z'
      v: 12983
  lastAutoUpdated: '2026-05-03T02:29:00.655Z'
  lastPush: '2026-04-27T05:54:21Z'
  archived: false
fetch:
  github: okx/agent-trade-kit
  npm: '@okx_ai/okx-trade-mcp'
readme:
  about: >-
    OKX trading MCP server — connect AI agents to spot, swap, futures, options &
    grid bots via the Model Context Protocol.  
  features:
    - >-
      145 tools across 11 modules — Full trading lifecycle: market data → orders
      → algo orders → account management → earn → trading bots → event contracts
      → news → smart money signals
    - >-
      Algo orders built-in — Conditional, OCO take-profit/stop-loss, trailing
      stop
    - >-
      Safety controls — --read-only flag, per-module filtering, built-in rate
      limiter
    - 'Zero infrastructure — Local stdio process, no server or database required'
    - >-
      MCP standard — Works with Claude Desktop, Cursor, openCxxW, and any
      MCP-compatible client
    - >-
      Agent Skills included — Pre-built skill files for AI agent frameworks —
      drop-in instructions covering market data, trading, portfolio, bots, and
      earn
    - 'Open source — MIT license, API keys never leave your machine'
  modules:
    - name: market
      count: 19
      description: >-
        Ticker, orderbook, candles (+history), index ticker, index candles,
        price limit, funding rate, mark price, open interest, stock tokens,
        technical indicators (70+ indicators:
        MA/EMA/RSI/MACD/BB/ATR/KDJ/BTCRAINBOW/AHR999 and more — no auth
        required), indicator list, market filter (screen by price/chan
    - name: spot
      count: 13
      description: >-
        Place/cancel/amend orders, batch orders, fills (+archive), order history
        (+archive), conditional orders, OCO ·
    - name: swap
      count: 17
      description: >-
        Perpetual trading, batch orders, positions, leverage, conditional
        orders, OCO, trailing stop ·
    - name: futures
      count: 18
      description: >-
        Delivery contract trading, positions, fills, order history,
        amend/close/leverage, batch orders, algo orders (TP/SL, OCO, trailing
        stop) ·
    - name: option
      count: 10
      description: >-
        Options trading: place/cancel/amend/batch-cancel, order history,
        positions (with Greeks), fills, option chain, IV + Greeks ·
    - name: account
      count: 14
      description: >-
        Balance, bills (+archive), positions, positions history, fee rates,
        config, position mode, max withdrawal, max avail size, audit log ·
    - name: event
      count: 9
      description: >-
        Event contract trading: browse, series, events, markets (query); place,
        amend, cancel, orders, fills (private). Semantic outcome values:
        UP/YES/DOWN/NO ·
    - name: earn
      count: 23
      description: >-
        Simple Earn: balance, purchase, redeem, lending rate, fixed-term orders
        (10). On-chain staking/DeFi (6). Dual Currency Deposit/双币赢 (6). Flash
        Earn (1). Sub-modules: earn.savings, earn.onchain, earn.dcd, earn.flash.
        Included in all. ·
    - name: bot
      count: 10
      description: >-
        Trading bots: Grid (5) and DCA — Spot & Contract (5). Sub-modules:
        bot.grid, bot.dca ·
    - name: news
      count: 7
      description: >-
        Crypto news: latest news, by-coin filter, full-text search, article
        detail, news sources, coin sentiment (snapshot + trend) ·
    - name: smartmoney
      count: 5
      description: >-
        Smart money signals: multi-currency overview, single-currency consensus
        signal, signal history timeline, trader leaderboard, trader detail
        (composite) — all read-only ·
  installCmd: >-
    # 1. Install

    npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli


    # 2. Configure OKX API credentials (interactive wizard)

    okx config init


    # 3. Register the MCP server with your AI client

    okx-trade-mcp setup --client claude-desktop

    okx-trade-mcp setup --client cursor

    okx-trade-mcp setup --client claude-code

    okx-trade-mcp setup --client vscode          # writes .mcp.json in current
    directory
  lastFetched: '2026-05-03T02:29:08.549Z'
repoInfo:
  language: TypeScript
  license: MIT
  topics:
    - ai-agent
    - crypto-trading
    - mcp
    - model-context-protocol
    - okx
    - typescript
  contributors: 1
  openIssues: 7
  archived: false
  createdAt: '2026-03-03T11:35:24Z'
  defaultBranch: master
summary_en: >-
  Most complete CEX agent toolkit (10 modules including 70+ TA indicators). API
  keys stay local, with built-in read-only mode, per-module filtering, and rate
  limiting. If you want to trade OKX via an agent, this is the only serious
  choice.
summary_zh: >-
  CEX 类功能覆盖最全的一家(10 模块,含 70+ 技术指标)。API key 只在本地,内置只读模式 + 模块过滤 + 限速。想用 OKX 做
  agent 交易直接选这个,没有替代方案。
---


## OKX Agent Trade Kit

140 tools covering spot, perp, options, bots and more

> 140 个工具覆盖现货 / 合约 / 期权 / bot
