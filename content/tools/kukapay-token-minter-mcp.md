---
slug: kukapay-token-minter-mcp
name: Token Minter
author: kukapay
category: data
icon: "\U0001FA99"
official: false
score: 7
tagline_en: ERC-20 minting across 21 chains
tagline_zh: 21 链 ERC-20 铸币 MCP
metrics:
  githubStars: 18
  lastPush: '2025-04-28T12:09:32Z'
  archived: false
  _history:
    - t: '2026-05-14T19:40:38.946Z'
      v: 180
    - t: '2026-05-15T02:41:46.170Z'
      v: 180
    - t: '2026-05-15T08:43:55.799Z'
      v: 180
    - t: '2026-05-15T13:55:21.397Z'
      v: 180
    - t: '2026-05-15T19:24:31.035Z'
      v: 180
    - t: '2026-05-16T02:31:16.024Z'
      v: 180
    - t: '2026-05-16T07:57:18.055Z'
      v: 180
    - t: '2026-05-16T13:11:56.251Z'
      v: 180
    - t: '2026-05-16T18:57:50.144Z'
      v: 180
    - t: '2026-05-17T02:38:39.933Z'
      v: 180
    - t: '2026-05-17T08:14:32.904Z'
      v: 180
    - t: '2026-05-17T13:09:01.823Z'
      v: 180
  lastAutoUpdated: '2026-05-17T13:09:01.823Z'
  weeklyGrowthPct: 0
fetch:
  github: kukapay/token-minter-mcp
readme:
  about: >-
    An MCP server providing tools for AI agents to mint ERC-20 tokens,
    supporting 21 blockchains.
  features:
    - Deploy new ERC-20 tokens with customizable parameters.
    - 'Query token metadata (name, symbol, decimals, total supply).'
    - Initiate token transfers (returns transaction hash without confirmation).
    - Retrieve transaction details by hash.
    - Check native token balance of the current account.
    - Access token metadata via URI.
    - Interactive prompt for deployment guidance.
  examples:
    - 'Token deployment initiated on Arbitrum (chainId: 42161)!'
    - 'Name: RewardToken'
    - 'Symbol: RWD'
    - 'Decimals: 6'
    - 'Initial Supply: 5000000 tokens'
    - 'Transaction Hash: 0xabc123...'
    - 'Note: Use ''getTransactionInfo'' to check deployment status.'
    - 'Account Balance on Polygon (chainId: 137):'
  installCmd: |-
    git clone https://github.com/kukapay/token-minter-mcp.git
       cd token-minter-mcp/server
  lastFetched: '2026-05-17T13:09:09.663Z'
repoInfo:
  language: JavaScript
  license: MIT
  topics: []
  contributors: 2
  openIssues: 4
  archived: false
  createdAt: '2025-03-19T14:18:31Z'
  defaultBranch: main
summary_en: >-
  Lets the agent mint ERC-20s for you — uncommon need. Fits memecoin-launchpad
  agents.
summary_zh: '让 agent 帮你发 ERC-20,不常见需求。适合做 memecoin launchpad agent。'
---


## Token Minter

Mint ERC-20 across 21 chains via MCP

> 21 链 ERC-20 铸币 MCP
