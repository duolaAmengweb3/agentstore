---
slug: kukapay-hyperliquid-info-mcp
name: Hyperliquid Info MCP
author: kukapay
category: data
icon: ⚡
official: false
score: 7.5
tagline_en: kukapay Hyperliquid info query — 27 stars
tagline_zh: 'kukapay HL 信息查询,27 star'
metrics:
  smitheryCalls: 1023
  githubStars: 30
  lastPush: '2025-05-31T08:00:16Z'
  archived: false
  _history:
    - t: '2026-08-21T12:35:32.131Z'
      v: 300
    - t: '2026-08-21T18:28:24.025Z'
      v: 300
    - t: '2026-08-22T00:55:30.460Z'
      v: 300
    - t: '2026-08-22T06:30:10.641Z'
      v: 300
    - t: '2026-08-22T12:27:23.594Z'
      v: 300
    - t: '2026-08-22T18:20:48.762Z'
      v: 300
    - t: '2026-08-23T00:59:33.631Z'
      v: 300
    - t: '2026-08-23T06:31:32.079Z'
      v: 300
    - t: '2026-08-23T12:28:58.506Z'
      v: 300
    - t: '2026-08-23T18:20:29.112Z'
      v: 300
    - t: '2026-08-24T00:57:32.598Z'
      v: 300
    - t: '2026-08-24T06:44:13.600Z'
      v: 300
  lastAutoUpdated: '2026-08-24T06:44:13.600Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/hyperliquid-info-mcp
readme:
  about: >-
    An MCP server that provides real-time data and insights from the Hyperliquid
    perp DEX for use in bots, dashboards, and analytics.
  features:
    - 'User Data Queries:'
    - >-
      get_user_state — Fetch user positions, margin, and withdrawable balance
      for perpetuals or spot markets.
    - get_user_open_orders — Retrieve all open orders for a user account.
    - >-
      get_user_trade_history — Get trade fill history with details like symbol,
      size, and price.
    - >-
      get_user_funding_history — Query funding payment history with customizable
      time ranges.
    - get_user_fees — Fetch user-specific fee structures (maker/taker rates).
    - >-
      get_user_staking_summary & get_user_staking_rewards — Access staking
      details and rewards.
    - >-
      get_user_order_by_oid & get_user_order_by_cloid — Retrieve specific order
      details by order ID or client order ID.
  lastFetched: '2026-08-24T06:44:22.594Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 0
  archived: false
  createdAt: '2025-05-31T07:59:59Z'
  defaultBranch: main
summary_en: >-
  Wraps HL public endpoints (mids / candles / L2 book). Read-only. Slightly more
  active than mektigboy's version.
summary_zh: Hyperliquid 公开数据(mids / candles / L2 book)封装。只读。比 mektigboy 的版本活跃度高一点。
---


## Hyperliquid Info MCP

Hyperliquid public data wrapped for LLMs

> HL 公开数据封装给 LLM
