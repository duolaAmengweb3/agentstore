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
    - t: '2026-09-18T15:40:30.402Z'
      v: 210
    - t: '2026-09-18T20:17:20.553Z'
      v: 210
    - t: '2026-09-19T02:46:41.143Z'
      v: 210
    - t: '2026-09-19T10:10:01.481Z'
      v: 210
    - t: '2026-09-19T15:12:34.614Z'
      v: 210
    - t: '2026-09-19T19:55:51.853Z'
      v: 210
    - t: '2026-09-20T02:58:39.931Z'
      v: 220
    - t: '2026-09-20T10:28:37.331Z'
      v: 220
    - t: '2026-09-20T15:17:20.537Z'
      v: 220
    - t: '2026-09-20T20:10:48.264Z'
      v: 220
    - t: '2026-09-21T02:56:02.596Z'
      v: 220
    - t: '2026-09-21T11:46:13.979Z'
      v: 220
  lastAutoUpdated: '2026-09-21T11:46:13.979Z'
  weeklyGrowthPct: 5
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
  lastFetched: '2026-09-21T11:46:23.493Z'
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
