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
  githubStars: 55
  lastPush: '2025-05-07T17:24:04Z'
  archived: false
  _history:
    - t: '2026-04-30T02:31:52.568Z'
      v: 540
    - t: '2026-04-30T08:12:47.898Z'
      v: 540
    - t: '2026-04-30T13:45:05.252Z'
      v: 540
    - t: '2026-04-30T19:12:53.462Z'
      v: 540
    - t: '2026-05-01T02:37:10.807Z'
      v: 540
    - t: '2026-05-01T08:06:53.241Z'
      v: 540
    - t: '2026-05-01T13:09:42.584Z'
      v: 540
    - t: '2026-05-01T19:05:36.501Z'
      v: 540
    - t: '2026-05-02T02:12:42.335Z'
      v: 540
    - t: '2026-05-02T07:25:32.661Z'
      v: 540
    - t: '2026-05-02T12:59:38.013Z'
      v: 540
    - t: '2026-05-02T18:52:33.147Z'
      v: 550
  lastAutoUpdated: '2026-05-02T18:52:33.147Z'
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
  lastFetched: '2026-05-02T18:52:41.802Z'
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
