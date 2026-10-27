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
    - t: '2026-10-24T02:57:53.544Z'
      v: 70
    - t: '2026-10-24T10:08:16.270Z'
      v: 70
    - t: '2026-10-24T15:15:20.969Z'
      v: 70
    - t: '2026-10-24T20:05:09.906Z'
      v: 70
    - t: '2026-10-25T02:50:43.383Z'
      v: 70
    - t: '2026-10-25T10:33:33.120Z'
      v: 70
    - t: '2026-10-25T15:25:46.201Z'
      v: 70
    - t: '2026-10-25T20:17:40.623Z'
      v: 70
    - t: '2026-10-26T02:49:14.118Z'
      v: 70
    - t: '2026-10-26T12:06:49.370Z'
      v: 70
    - t: '2026-10-26T22:12:04.105Z'
      v: 70
    - t: '2026-10-27T03:22:50.968Z'
      v: 70
  lastAutoUpdated: '2026-10-27T03:22:50.968Z'
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
  lastFetched: '2026-10-27T03:22:59.928Z'
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
