---
slug: kukapay-whale-tracker-mcp
name: Whale Tracker MCP
author: kukapay
category: data
icon: "\U0001F433"
official: false
score: 7.4
tagline_en: 'kukapay whale tracker — Whale Alert API wrapper, 52 stars'
tagline_zh: 'kukapay 鲸鱼追踪:Whale Alert API 封装,52 star'
metrics:
  smitheryCalls: 421
  githubStars: 57
  lastPush: '2025-05-07T17:24:04Z'
  archived: false
  _history:
    - t: '2026-08-15T18:20:16.486Z'
      v: 570
    - t: '2026-08-16T00:58:21.757Z'
      v: 570
    - t: '2026-08-16T06:30:00.515Z'
      v: 570
    - t: '2026-08-16T12:28:03.848Z'
      v: 570
    - t: '2026-08-16T18:20:05.337Z'
      v: 570
    - t: '2026-08-17T00:56:29.627Z'
      v: 570
    - t: '2026-08-17T06:42:09.406Z'
      v: 570
    - t: '2026-08-17T12:33:04.549Z'
      v: 570
    - t: '2026-08-17T18:30:31.234Z'
      v: 570
    - t: '2026-08-18T00:54:36.798Z'
      v: 570
    - t: '2026-08-18T06:33:21.226Z'
      v: 570
    - t: '2026-08-18T12:34:09.718Z'
      v: 570
  lastAutoUpdated: '2026-08-18T12:34:09.718Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/whale-tracker-mcp
readme:
  about: >-
    A Model Context Protocol (MCP) server for tracking cryptocurrency whale
    transactions using the Whale Alert API
  features:
    - 'Tools:'
    - >-
      get_recent_transactions — Fetch recent whale transactions with optional
      filters for blockchain, minimum value, and limit.
    - >-
      get_transaction_details — Retrieve detailed information about a specific
      transaction by its ID.
    - 'Resources:'
    - >-
      whale://transactions/{blockchain} — Expose recent transactions for a
      specified blockchain as contextual data.
    - 'Prompts:'
    - >-
      query_whale_activity — A reusable template for analyzing whale transaction
      patterns, optionally filtered by blockchain.
    - >-
      Asynchronous API Calls — Uses httpx for efficient, non-blocking requests
      to the Whale Alert API.
  examples:
    - mcp dev whale_tracker.py --with-editable .
  lastFetched: '2026-08-18T12:34:20.400Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 2
  openIssues: 5
  archived: false
  createdAt: '2025-03-13T16:19:15Z'
  defaultBranch: main
summary_en: >-
  The most-starred kukapay (52). Watches >$1M transfers across chains. Tracks
  the chain not individual addresses — for per-address, use wallet-inspector.
summary_zh: 'kukapay 里 star 最高的一个(52)。查 >$1M 大额转账流。盯的是"链"不是"单个地址",地址级追踪请用 wallet-inspector。'
---


## Whale Tracker MCP

Whale Alert wrapper — >$1M transfers feed

> Whale Alert 封装 — >$1M 转账流
