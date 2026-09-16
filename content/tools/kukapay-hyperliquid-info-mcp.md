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
    - t: '2026-09-14T02:58:49.979Z'
      v: 290
    - t: '2026-09-14T11:32:26.541Z'
      v: 290
    - t: '2026-09-14T17:28:13.399Z'
      v: 290
    - t: '2026-09-14T21:19:40.166Z'
      v: 290
    - t: '2026-09-15T03:00:43.523Z'
      v: 290
    - t: '2026-09-15T10:53:11.231Z'
      v: 290
    - t: '2026-09-15T16:05:17.058Z'
      v: 290
    - t: '2026-09-15T20:46:28.190Z'
      v: 290
    - t: '2026-09-16T02:57:24.468Z'
      v: 290
    - t: '2026-09-16T10:42:18.403Z'
      v: 290
    - t: '2026-09-16T15:57:59.491Z'
      v: 290
    - t: '2026-09-16T20:46:14.650Z'
      v: 290
  lastAutoUpdated: '2026-09-16T20:46:14.650Z'
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
  lastFetched: '2026-09-16T20:46:25.604Z'
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
