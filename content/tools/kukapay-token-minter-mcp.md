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
    - t: '2026-11-10T22:44:31.273Z'
      v: 220
    - t: '2026-11-11T04:16:03.479Z'
      v: 220
    - t: '2026-11-11T13:25:55.645Z'
      v: 220
    - t: '2026-11-11T23:57:27.417Z'
      v: 220
    - t: '2026-11-12T05:58:27.720Z'
      v: 220
    - t: '2026-11-12T14:49:25.161Z'
      v: 220
    - t: '2026-11-12T23:06:03.806Z'
      v: 220
    - t: '2026-11-13T04:42:23.822Z'
      v: 220
    - t: '2026-11-13T13:47:54.942Z'
      v: 220
    - t: '2026-11-13T23:09:28.679Z'
      v: 220
    - t: '2026-11-14T04:37:37.702Z'
      v: 220
    - t: '2026-11-14T12:51:41.179Z'
      v: 220
  lastAutoUpdated: '2026-11-14T12:51:41.179Z'
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
  lastFetched: '2026-11-14T12:51:49.654Z'
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
