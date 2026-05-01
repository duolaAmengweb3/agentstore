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
    - t: '2026-04-28T02:31:05.606Z'
      v: 180
    - t: '2026-04-28T08:16:20.445Z'
      v: 180
    - t: '2026-04-28T19:27:09.823Z'
      v: 180
    - t: '2026-04-29T02:30:57.974Z'
      v: 180
    - t: '2026-04-29T08:08:48.714Z'
      v: 180
    - t: '2026-04-29T13:45:49.648Z'
      v: 180
    - t: '2026-04-29T19:17:47.824Z'
      v: 180
    - t: '2026-04-30T02:31:52.559Z'
      v: 180
    - t: '2026-04-30T08:12:47.872Z'
      v: 180
    - t: '2026-04-30T13:45:05.024Z'
      v: 180
    - t: '2026-04-30T19:12:53.504Z'
      v: 180
    - t: '2026-05-01T02:37:10.831Z'
      v: 180
  lastAutoUpdated: '2026-05-01T02:37:10.831Z'
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
  lastFetched: '2026-05-01T02:37:18.213Z'
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
