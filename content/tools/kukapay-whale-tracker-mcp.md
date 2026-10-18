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
    - t: '2026-10-15T16:09:39.902Z'
      v: 570
    - t: '2026-10-15T20:50:48.693Z'
      v: 570
    - t: '2026-10-16T02:47:49.656Z'
      v: 570
    - t: '2026-10-16T10:31:46.721Z'
      v: 570
    - t: '2026-10-16T15:56:55.348Z'
      v: 570
    - t: '2026-10-16T20:24:37.160Z'
      v: 570
    - t: '2026-10-17T02:39:31.654Z'
      v: 570
    - t: '2026-10-17T10:01:38.445Z'
      v: 570
    - t: '2026-10-17T14:50:03.853Z'
      v: 570
    - t: '2026-10-17T19:58:47.283Z'
      v: 570
    - t: '2026-10-18T02:40:47.097Z'
      v: 570
    - t: '2026-10-18T10:14:29.201Z'
      v: 570
  lastAutoUpdated: '2026-10-18T10:14:29.201Z'
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
  lastFetched: '2026-10-18T10:14:38.689Z'
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
