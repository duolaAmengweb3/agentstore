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
    - t: '2026-05-27T09:37:17.492Z'
      v: 180
    - t: '2026-05-27T15:26:03.748Z'
      v: 180
    - t: '2026-05-27T20:08:27.446Z'
      v: 180
    - t: '2026-05-28T02:41:27.900Z'
      v: 180
    - t: '2026-05-28T09:53:44.243Z'
      v: 180
    - t: '2026-05-28T15:38:59.626Z'
      v: 180
    - t: '2026-05-28T20:12:58.517Z'
      v: 180
    - t: '2026-05-29T02:45:08.186Z'
      v: 180
    - t: '2026-05-29T09:44:07.736Z'
      v: 180
    - t: '2026-05-29T14:52:07.596Z'
      v: 180
    - t: '2026-05-29T20:13:38.627Z'
      v: 180
    - t: '2026-05-30T02:38:41.454Z'
      v: 180
  lastAutoUpdated: '2026-05-30T02:38:41.454Z'
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
  lastFetched: '2026-05-30T02:38:49.393Z'
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
