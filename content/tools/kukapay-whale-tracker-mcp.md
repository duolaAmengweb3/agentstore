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
  githubStars: 58
  lastPush: '2025-05-07T17:24:04Z'
  archived: false
  _history:
    - t: '2026-10-27T03:22:54.723Z'
      v: 580
    - t: '2026-10-27T11:27:35.768Z'
      v: 580
    - t: '2026-10-27T17:16:51.866Z'
      v: 580
    - t: '2026-10-27T21:43:28.926Z'
      v: 580
    - t: '2026-10-28T03:39:01.300Z'
      v: 580
    - t: '2026-10-28T11:58:39.881Z'
      v: 580
    - t: '2026-10-28T18:05:04.399Z'
      v: 580
    - t: '2026-10-29T03:59:10.800Z'
      v: 580
    - t: '2026-10-29T12:08:39.511Z'
      v: 580
    - t: '2026-10-29T22:20:36.894Z'
      v: 580
    - t: '2026-10-30T04:00:33.591Z'
      v: 580
    - t: '2026-10-30T11:59:38.302Z'
      v: 580
  lastAutoUpdated: '2026-10-30T11:59:38.302Z'
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
  lastFetched: '2026-10-30T11:59:48.174Z'
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
