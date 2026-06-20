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
  githubStars: 19
  lastPush: '2025-04-28T12:09:32Z'
  archived: false
  _history:
    - t: '2026-06-17T15:14:38.864Z'
      v: 190
    - t: '2026-06-17T20:06:44.356Z'
      v: 190
    - t: '2026-06-18T03:25:05.632Z'
      v: 190
    - t: '2026-06-18T10:14:02.492Z'
      v: 190
    - t: '2026-06-18T14:56:49.422Z'
      v: 190
    - t: '2026-06-18T20:18:13.054Z'
      v: 190
    - t: '2026-06-19T03:48:16.656Z'
      v: 190
    - t: '2026-06-19T10:19:03.014Z'
      v: 190
    - t: '2026-06-19T14:53:18.088Z'
      v: 190
    - t: '2026-06-19T19:42:14.504Z'
      v: 190
    - t: '2026-06-20T02:51:35.988Z'
      v: 190
    - t: '2026-06-20T08:47:11.759Z'
      v: 190
  lastAutoUpdated: '2026-06-20T08:47:11.759Z'
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
  lastFetched: '2026-06-20T08:47:19.966Z'
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
