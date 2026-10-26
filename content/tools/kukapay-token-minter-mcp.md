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
    - t: '2026-10-23T20:53:53.715Z'
      v: 220
    - t: '2026-10-24T02:57:57.021Z'
      v: 220
    - t: '2026-10-24T10:08:20.746Z'
      v: 220
    - t: '2026-10-24T15:15:24.559Z'
      v: 220
    - t: '2026-10-24T20:05:13.848Z'
      v: 220
    - t: '2026-10-25T02:50:46.600Z'
      v: 220
    - t: '2026-10-25T10:33:36.470Z'
      v: 220
    - t: '2026-10-25T15:25:49.516Z'
      v: 220
    - t: '2026-10-25T20:17:45.071Z'
      v: 220
    - t: '2026-10-26T02:49:17.956Z'
      v: 220
    - t: '2026-10-26T12:06:53.780Z'
      v: 220
    - t: '2026-10-26T22:12:08.298Z'
      v: 220
  lastAutoUpdated: '2026-10-26T22:12:08.298Z'
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
  lastFetched: '2026-10-26T22:12:18.714Z'
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
