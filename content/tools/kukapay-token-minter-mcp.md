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
    - t: '2026-05-07T08:27:13.525Z'
      v: 180
    - t: '2026-05-07T13:54:36.276Z'
      v: 180
    - t: '2026-05-07T19:38:44.725Z'
      v: 180
    - t: '2026-05-08T02:35:30.876Z'
      v: 180
    - t: '2026-05-08T07:22:52.483Z'
      v: 180
    - t: '2026-05-08T13:21:49.831Z'
      v: 180
    - t: '2026-05-08T19:10:20.510Z'
      v: 180
    - t: '2026-05-09T02:28:31.347Z'
      v: 180
    - t: '2026-05-09T07:50:04.899Z'
      v: 180
    - t: '2026-05-09T13:05:24.923Z'
      v: 180
    - t: '2026-05-09T18:53:42.171Z'
      v: 180
    - t: '2026-05-10T02:31:35.506Z'
      v: 180
  lastAutoUpdated: '2026-05-10T02:31:35.506Z'
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
  lastFetched: '2026-05-10T02:31:43.881Z'
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
