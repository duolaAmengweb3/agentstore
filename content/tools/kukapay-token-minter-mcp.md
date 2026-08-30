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
    - t: '2026-08-26T00:58:24.566Z'
      v: 210
    - t: '2026-08-26T06:38:07.400Z'
      v: 210
    - t: '2026-08-26T12:40:14.630Z'
      v: 210
    - t: '2026-08-26T19:41:16.897Z'
      v: 210
    - t: '2026-08-27T06:50:17.044Z'
      v: 210
    - t: '2026-08-27T21:37:02.464Z'
      v: 210
    - t: '2026-08-28T08:37:53.082Z'
      v: 210
    - t: '2026-08-28T21:39:43.708Z'
      v: 210
    - t: '2026-08-29T05:16:38.061Z'
      v: 210
    - t: '2026-08-29T12:08:37.017Z'
      v: 210
    - t: '2026-08-29T20:18:13.072Z'
      v: 210
    - t: '2026-08-30T03:09:53.571Z'
      v: 210
  lastAutoUpdated: '2026-08-30T03:09:53.571Z'
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
  lastFetched: '2026-08-30T03:10:04.589Z'
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
