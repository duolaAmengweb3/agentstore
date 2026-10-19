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
    - t: '2026-10-16T15:56:54.704Z'
      v: 300
    - t: '2026-10-16T20:24:36.584Z'
      v: 300
    - t: '2026-10-17T02:39:30.747Z'
      v: 300
    - t: '2026-10-17T10:01:37.606Z'
      v: 300
    - t: '2026-10-17T14:50:02.458Z'
      v: 300
    - t: '2026-10-17T19:58:46.740Z'
      v: 300
    - t: '2026-10-18T02:40:46.598Z'
      v: 300
    - t: '2026-10-18T10:14:28.701Z'
      v: 300
    - t: '2026-10-18T15:15:22.502Z'
      v: 300
    - t: '2026-10-18T19:58:24.268Z'
      v: 300
    - t: '2026-10-19T02:54:12.882Z'
      v: 300
    - t: '2026-10-19T11:52:52.736Z'
      v: 300
  lastAutoUpdated: '2026-10-19T11:52:52.736Z'
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
  lastFetched: '2026-10-19T11:53:02.873Z'
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
