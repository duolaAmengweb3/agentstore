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
    - t: '2026-08-19T12:34:56.248Z'
      v: 570
    - t: '2026-08-19T18:25:58.933Z'
      v: 570
    - t: '2026-08-20T00:55:03.309Z'
      v: 570
    - t: '2026-08-20T06:36:40.518Z'
      v: 570
    - t: '2026-08-20T12:36:30.622Z'
      v: 570
    - t: '2026-08-20T18:30:39.662Z'
      v: 570
    - t: '2026-08-21T00:58:52.214Z'
      v: 570
    - t: '2026-08-21T06:36:17.830Z'
      v: 570
    - t: '2026-08-21T12:35:32.629Z'
      v: 570
    - t: '2026-08-21T18:28:24.428Z'
      v: 570
    - t: '2026-08-22T00:55:30.708Z'
      v: 570
    - t: '2026-08-22T06:30:11.330Z'
      v: 570
  lastAutoUpdated: '2026-08-22T06:30:11.330Z'
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
  lastFetched: '2026-08-22T06:30:21.357Z'
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
