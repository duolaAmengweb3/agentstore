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
    - t: '2026-07-01T02:56:03.956Z'
      v: 190
    - t: '2026-07-01T09:37:15.431Z'
      v: 190
    - t: '2026-07-01T14:23:56.627Z'
      v: 190
    - t: '2026-07-01T19:46:09.091Z'
      v: 190
    - t: '2026-07-02T02:46:19.793Z'
      v: 190
    - t: '2026-07-02T08:48:48.933Z'
      v: 190
    - t: '2026-07-02T13:47:16.297Z'
      v: 190
    - t: '2026-07-02T19:16:49.416Z'
      v: 190
    - t: '2026-07-03T02:28:32.753Z'
      v: 190
    - t: '2026-07-03T08:55:05.457Z'
      v: 190
    - t: '2026-07-03T13:51:56.730Z'
      v: 190
    - t: '2026-07-03T19:11:36.129Z'
      v: 190
  lastAutoUpdated: '2026-07-03T19:11:36.129Z'
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
  lastFetched: '2026-07-03T19:11:45.674Z'
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
