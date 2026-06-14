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
    - t: '2026-06-12T03:25:41.191Z'
      v: 180
    - t: '2026-06-12T10:02:55.982Z'
      v: 180
    - t: '2026-06-12T14:47:41.428Z'
      v: 180
    - t: '2026-06-12T20:03:16.402Z'
      v: 180
    - t: '2026-06-13T02:52:53.586Z'
      v: 180
    - t: '2026-06-13T08:51:35.858Z'
      v: 180
    - t: '2026-06-13T13:49:20.741Z'
      v: 180
    - t: '2026-06-13T19:17:42.610Z'
      v: 180
    - t: '2026-06-14T03:30:14.911Z'
      v: 180
    - t: '2026-06-14T09:25:24.580Z'
      v: 180
    - t: '2026-06-14T13:51:13.057Z'
      v: 180
    - t: '2026-06-14T19:18:32.004Z'
      v: 180
  lastAutoUpdated: '2026-06-14T19:18:32.004Z'
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
  lastFetched: '2026-06-14T19:18:39.278Z'
repoInfo:
  language: JavaScript
  license: MIT
  topics: []
  contributors: 2
  openIssues: 3
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
