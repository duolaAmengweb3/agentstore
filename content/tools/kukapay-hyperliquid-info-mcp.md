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
  githubStars: 27
  lastPush: '2025-05-31T08:00:16Z'
  archived: false
  _history:
    - t: '2026-05-04T13:47:43.930Z'
      v: 270
    - t: '2026-05-04T19:22:23.565Z'
      v: 270
    - t: '2026-05-05T02:22:41.597Z'
      v: 270
    - t: '2026-05-05T08:02:39.255Z'
      v: 270
    - t: '2026-05-05T13:27:25.532Z'
      v: 270
    - t: '2026-05-05T19:12:29.656Z'
      v: 270
    - t: '2026-05-06T02:26:25.206Z'
      v: 270
    - t: '2026-05-06T08:16:54.200Z'
      v: 270
    - t: '2026-05-06T13:56:37.705Z'
      v: 270
    - t: '2026-05-06T19:30:13.036Z'
      v: 270
    - t: '2026-05-07T02:28:01.421Z'
      v: 270
    - t: '2026-05-07T08:27:12.998Z'
      v: 270
  lastAutoUpdated: '2026-05-07T08:27:12.998Z'
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
  lastFetched: '2026-05-07T08:27:24.454Z'
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
