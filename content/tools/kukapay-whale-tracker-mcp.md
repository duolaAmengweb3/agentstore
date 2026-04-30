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
  githubStars: 54
  lastPush: '2025-05-07T17:24:04Z'
  archived: false
  _history:
    - t: '2026-04-27T13:29:07.548Z'
      v: 530
    - t: '2026-04-27T19:12:06.623Z'
      v: 530
    - t: '2026-04-28T02:31:05.681Z'
      v: 530
    - t: '2026-04-28T08:16:20.402Z'
      v: 530
    - t: '2026-04-28T19:27:09.805Z'
      v: 540
    - t: '2026-04-29T02:30:57.941Z'
      v: 540
    - t: '2026-04-29T08:08:48.734Z'
      v: 540
    - t: '2026-04-29T13:45:49.646Z'
      v: 540
    - t: '2026-04-29T19:17:47.822Z'
      v: 540
    - t: '2026-04-30T02:31:52.568Z'
      v: 540
    - t: '2026-04-30T08:12:47.898Z'
      v: 540
    - t: '2026-04-30T13:45:05.252Z'
      v: 540
  lastAutoUpdated: '2026-04-30T13:45:05.252Z'
  weeklyGrowthPct: 2
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
  lastFetched: '2026-04-30T13:45:27.504Z'
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
