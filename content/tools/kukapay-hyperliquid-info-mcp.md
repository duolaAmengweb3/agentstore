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
  githubStars: 29
  lastPush: '2025-05-31T08:00:16Z'
  archived: false
  _history:
    - t: '2026-07-20T19:37:54.173Z'
      v: 290
    - t: '2026-07-21T02:08:33.351Z'
      v: 290
    - t: '2026-07-21T08:17:20.288Z'
      v: 290
    - t: '2026-07-21T13:26:41.431Z'
      v: 290
    - t: '2026-07-21T19:12:00.589Z'
      v: 290
    - t: '2026-07-22T02:06:46.115Z'
      v: 290
    - t: '2026-07-22T08:18:29.423Z'
      v: 290
    - t: '2026-07-22T13:38:54.793Z'
      v: 290
    - t: '2026-07-22T19:05:55.284Z'
      v: 290
    - t: '2026-07-23T02:13:11.482Z'
      v: 290
    - t: '2026-07-23T08:21:55.547Z'
      v: 290
    - t: '2026-07-23T13:44:12.081Z'
      v: 290
  lastAutoUpdated: '2026-07-23T13:44:12.081Z'
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
  lastFetched: '2026-07-23T13:44:26.479Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 1
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
