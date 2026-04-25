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
    - t: '2026-04-22T07:25:59.284Z'
      v: 270
    - t: '2026-04-22T13:16:42.122Z'
      v: 270
    - t: '2026-04-22T19:06:42.862Z'
      v: 270
    - t: '2026-04-23T02:08:46.453Z'
      v: 270
    - t: '2026-04-23T07:29:48.620Z'
      v: 270
    - t: '2026-04-23T13:16:40.484Z'
      v: 270
    - t: '2026-04-23T19:01:55.642Z'
      v: 270
    - t: '2026-04-24T02:09:03.975Z'
      v: 270
    - t: '2026-04-24T07:55:28.794Z'
      v: 270
    - t: '2026-04-24T13:12:49.217Z'
      v: 270
    - t: '2026-04-24T18:42:08.988Z'
      v: 270
    - t: '2026-04-25T01:59:09.236Z'
      v: 270
  lastAutoUpdated: '2026-04-25T01:59:09.236Z'
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
  lastFetched: '2026-04-25T01:59:18.256Z'
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
