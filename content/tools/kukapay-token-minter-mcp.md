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
    - t: '2026-06-07T19:14:29.076Z'
      v: 180
    - t: '2026-06-08T03:29:10.397Z'
      v: 180
    - t: '2026-06-08T10:27:30.938Z'
      v: 180
    - t: '2026-06-08T15:39:25.636Z'
      v: 180
    - t: '2026-06-08T20:07:28.562Z'
      v: 180
    - t: '2026-06-09T02:39:41.583Z'
      v: 180
    - t: '2026-06-09T09:32:46.176Z'
      v: 180
    - t: '2026-06-09T14:38:21.219Z'
      v: 180
    - t: '2026-06-09T20:02:16.740Z'
      v: 180
    - t: '2026-06-10T02:53:41.962Z'
      v: 180
    - t: '2026-06-10T09:49:04.787Z'
      v: 180
    - t: '2026-06-10T15:21:55.187Z'
      v: 180
  lastAutoUpdated: '2026-06-10T15:21:55.187Z'
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
  lastFetched: '2026-06-10T15:22:06.366Z'
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
