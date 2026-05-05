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
  githubStars: 6
  lastPush: '2025-07-24T13:18:32Z'
  archived: false
  _history:
    - t: '2026-05-02T07:25:30.014Z'
      v: 60
    - t: '2026-05-02T12:59:35.171Z'
      v: 60
    - t: '2026-05-02T18:52:29.860Z'
      v: 60
    - t: '2026-05-03T02:28:57.097Z'
      v: 60
    - t: '2026-05-03T07:55:21.014Z'
      v: 60
    - t: '2026-05-03T12:58:40.566Z'
      v: 60
    - t: '2026-05-03T18:52:41.898Z'
      v: 60
    - t: '2026-05-04T02:27:35.089Z'
      v: 60
    - t: '2026-05-04T08:23:54.229Z'
      v: 60
    - t: '2026-05-04T13:47:40.469Z'
      v: 60
    - t: '2026-05-04T19:22:20.424Z'
      v: 60
    - t: '2026-05-05T02:22:38.667Z'
      v: 60
  lastAutoUpdated: '2026-05-05T02:22:38.667Z'
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
  lastFetched: '2026-05-05T02:22:46.350Z'
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
