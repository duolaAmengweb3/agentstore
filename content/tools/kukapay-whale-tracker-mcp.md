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
  githubStars: 56
  lastPush: '2025-05-07T17:24:04Z'
  archived: false
  _history:
    - t: '2026-09-21T21:35:43.731Z'
      v: 560
    - t: '2026-09-22T02:56:13.136Z'
      v: 560
    - t: '2026-09-22T10:48:56.303Z'
      v: 560
    - t: '2026-09-22T16:07:37.497Z'
      v: 560
    - t: '2026-09-22T20:46:54.005Z'
      v: 560
    - t: '2026-09-23T02:56:34.439Z'
      v: 560
    - t: '2026-09-23T10:38:16.117Z'
      v: 560
    - t: '2026-09-23T15:57:30.309Z'
      v: 560
    - t: '2026-09-23T20:58:35.093Z'
      v: 560
    - t: '2026-09-24T02:46:52.896Z'
      v: 560
    - t: '2026-09-24T10:58:20.467Z'
      v: 560
    - t: '2026-09-24T16:20:41.819Z'
      v: 560
  lastAutoUpdated: '2026-09-24T16:20:41.819Z'
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
  lastFetched: '2026-09-24T16:20:54.182Z'
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
