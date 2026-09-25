---
slug: chainlink-feeds-mcp
name: Chainlink Feeds MCP
author: kukapay
category: data
icon: "\U0001F517"
official: false
score: 7.3
tagline_en: Chainlink onchain price feeds MCP
tagline_zh: Chainlink 链上价格源 MCP
metrics:
  githubStars: 7
  lastPush: '2025-07-24T13:18:32Z'
  archived: false
  _history:
    - t: '2026-09-22T16:07:33.873Z'
      v: 70
    - t: '2026-09-22T20:46:50.172Z'
      v: 70
    - t: '2026-09-23T02:56:30.987Z'
      v: 70
    - t: '2026-09-23T10:38:12.585Z'
      v: 70
    - t: '2026-09-23T15:57:26.305Z'
      v: 70
    - t: '2026-09-23T20:58:31.371Z'
      v: 70
    - t: '2026-09-24T02:46:49.477Z'
      v: 70
    - t: '2026-09-24T10:58:17.249Z'
      v: 70
    - t: '2026-09-24T16:20:36.445Z'
      v: 70
    - t: '2026-09-24T21:03:18.047Z'
      v: 70
    - t: '2026-09-25T03:03:20.827Z'
      v: 70
    - t: '2026-09-25T10:58:51.377Z'
      v: 70
  lastAutoUpdated: '2026-09-25T10:58:51.377Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/chainlink-feeds-mcp
readme:
  about: >-
    An MCP server that provides real-time access to Chainlink's decentralized
    on-chain price feeds, optimized for seamless integration into AI agents and
    autonomous systems
  features:
    - >-
      Query Latest Price — Fetch the latest price for a specified price feed
      pair (e.g., FIL/ETH) on a given chain (e.g., ethereum), including price,
      decimals, round ID, and timestamp.
    - >-
      Query Price by Round ID — Retrieve price data for a specific round ID
      (currently a placeholder due to on-chain historical data limitations).
    - >-
      List Supported Chains — Get a comma-separated list of supported blockchain
      networks (e.g., ethereum,base).
    - >-
      List All Feeds — Retrieve a Markdown-formatted list of all chains and
      their price feed names (e.g., - ethereum: FIL/ETH,FDUSD/USD).
    - >-
      List Feeds by Chain — Obtain a comma-separated list of price feed names
      for a specific chain (e.g., FIL/ETH,FDUSD/USD for ethereum).
    - >-
      Configurable Feeds — Define price feeds and RPC endpoints in a feeds.json
      file, supporting multiple chains and feed categories.
  installCmd: |-
    git clone https://github.com/kukapay/chainlink-feeds-mcp.git
       cd chainlink-feeds-mcp
  lastFetched: '2026-09-25T10:59:00.323Z'
repoInfo:
  language: JavaScript
  license: MIT
  topics: []
  contributors: 2
  openIssues: 2
  archived: false
  createdAt: '2025-04-17T09:37:04Z'
  defaultBranch: main
summary_en: >-
  Chainlink is the canonical decentralized oracle. When the agent needs a
  "verifiable onchain price," Chainlink feeds is the standard.
summary_zh: 'Chainlink 是最老牌的去中心化预言机。agent 要"链上可验证的价",Chainlink feeds 是标准。'
---


## Chainlink Feeds MCP

On-chain Chainlink price feeds for any agent

> 任意 agent 可用的 Chainlink 链上价格源
