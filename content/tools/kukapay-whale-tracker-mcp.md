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
    - t: '2026-10-11T11:58:36.991Z'
      v: 570
    - t: '2026-10-11T17:30:48.736Z'
      v: 570
    - t: '2026-10-11T21:22:58.033Z'
      v: 570
    - t: '2026-10-12T03:55:08.152Z'
      v: 570
    - t: '2026-10-12T14:12:07.290Z'
      v: 570
    - t: '2026-10-13T00:03:26.777Z'
      v: 570
    - t: '2026-10-13T13:22:58.138Z'
      v: 570
    - t: '2026-10-13T22:12:16.798Z'
      v: 570
    - t: '2026-10-14T03:11:48.214Z'
      v: 570
    - t: '2026-10-14T11:02:30.469Z'
      v: 570
    - t: '2026-10-14T16:21:58.038Z'
      v: 570
    - t: '2026-10-14T21:13:01.852Z'
      v: 570
  lastAutoUpdated: '2026-10-14T21:13:01.852Z'
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
  lastFetched: '2026-10-14T21:13:16.640Z'
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
