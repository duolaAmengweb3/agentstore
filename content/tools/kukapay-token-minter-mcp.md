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
    - t: '2026-08-16T00:58:21.759Z'
      v: 210
    - t: '2026-08-16T06:30:00.496Z'
      v: 210
    - t: '2026-08-16T12:28:03.826Z'
      v: 210
    - t: '2026-08-16T18:20:05.373Z'
      v: 210
    - t: '2026-08-17T00:56:29.642Z'
      v: 210
    - t: '2026-08-17T06:42:09.428Z'
      v: 210
    - t: '2026-08-17T12:33:04.486Z'
      v: 210
    - t: '2026-08-17T18:30:31.224Z'
      v: 210
    - t: '2026-08-18T00:54:36.819Z'
      v: 210
    - t: '2026-08-18T06:33:21.253Z'
      v: 210
    - t: '2026-08-18T12:34:09.721Z'
      v: 210
    - t: '2026-08-18T18:29:13.140Z'
      v: 210
  lastAutoUpdated: '2026-08-18T18:29:13.140Z'
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
  lastFetched: '2026-08-18T18:29:21.984Z'
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
