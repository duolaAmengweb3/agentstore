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
  githubStars: 22
  lastPush: '2025-04-28T12:09:32Z'
  archived: false
  _history:
    - t: '2026-10-27T11:27:35.740Z'
      v: 220
    - t: '2026-10-27T17:16:51.865Z'
      v: 220
    - t: '2026-10-27T21:43:28.906Z'
      v: 220
    - t: '2026-10-28T03:39:01.332Z'
      v: 220
    - t: '2026-10-28T11:58:39.833Z'
      v: 220
    - t: '2026-10-28T18:05:04.403Z'
      v: 220
    - t: '2026-10-29T03:59:10.778Z'
      v: 220
    - t: '2026-10-29T12:08:39.506Z'
      v: 220
    - t: '2026-10-29T22:20:36.816Z'
      v: 220
    - t: '2026-10-30T04:00:33.537Z'
      v: 220
    - t: '2026-10-30T11:59:38.361Z'
      v: 220
    - t: '2026-10-30T17:54:38.938Z'
      v: 220
  lastAutoUpdated: '2026-10-30T17:54:38.938Z'
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
  lastFetched: '2026-10-30T17:54:53.941Z'
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
