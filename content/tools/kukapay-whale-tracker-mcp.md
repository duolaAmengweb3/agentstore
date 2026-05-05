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
    - t: '2026-05-02T18:52:33.147Z'
      v: 550
    - t: '2026-05-03T02:29:00.014Z'
      v: 550
    - t: '2026-05-03T07:55:23.583Z'
      v: 550
    - t: '2026-05-03T12:58:43.664Z'
      v: 550
    - t: '2026-05-03T18:52:44.910Z'
      v: 550
    - t: '2026-05-04T02:27:38.304Z'
      v: 550
    - t: '2026-05-04T08:23:57.444Z'
      v: 550
    - t: '2026-05-04T13:47:44.494Z'
      v: 550
    - t: '2026-05-04T19:22:24.048Z'
      v: 550
    - t: '2026-05-05T02:22:41.982Z'
      v: 550
    - t: '2026-05-05T08:02:39.502Z'
      v: 550
    - t: '2026-05-05T13:27:26.061Z'
      v: 550
  lastAutoUpdated: '2026-05-05T13:27:26.061Z'
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
  lastFetched: '2026-05-05T13:27:36.554Z'
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
