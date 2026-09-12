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
  githubStars: 21
  lastPush: '2025-04-28T12:09:32Z'
  archived: false
  _history:
    - t: '2026-09-09T20:18:12.794Z'
      v: 210
    - t: '2026-09-10T02:43:07.084Z'
      v: 210
    - t: '2026-09-10T10:25:37.381Z'
      v: 210
    - t: '2026-09-10T15:42:04.517Z'
      v: 210
    - t: '2026-09-10T20:20:25.646Z'
      v: 210
    - t: '2026-09-11T02:36:15.358Z'
      v: 210
    - t: '2026-09-11T10:28:00.446Z'
      v: 210
    - t: '2026-09-11T15:43:35.227Z'
      v: 210
    - t: '2026-09-11T20:20:28.969Z'
      v: 210
    - t: '2026-09-12T02:45:20.126Z'
      v: 210
    - t: '2026-09-12T09:56:38.196Z'
      v: 210
    - t: '2026-09-12T14:51:43.693Z'
      v: 210
  lastAutoUpdated: '2026-09-12T14:51:43.693Z'
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
  lastFetched: '2026-09-12T14:51:51.497Z'
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
