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
    - t: '2026-09-26T15:35:21.940Z'
      v: 300
    - t: '2026-09-26T20:33:26.883Z'
      v: 300
    - t: '2026-09-27T03:13:38.823Z'
      v: 300
    - t: '2026-09-27T11:14:05.061Z'
      v: 300
    - t: '2026-09-27T16:14:48.329Z'
      v: 300
    - t: '2026-09-27T20:43:55.255Z'
      v: 300
    - t: '2026-09-28T03:10:24.814Z'
      v: 300
    - t: '2026-09-28T12:41:31.754Z'
      v: 300
    - t: '2026-09-28T22:52:11.035Z'
      v: 300
    - t: '2026-09-29T03:48:41.634Z'
      v: 300
    - t: '2026-09-29T11:59:06.241Z'
      v: 300
    - t: '2026-09-29T17:54:49.830Z'
      v: 300
  lastAutoUpdated: '2026-09-29T17:54:49.830Z'
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
  lastFetched: '2026-09-29T17:55:00.588Z'
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
