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
    - t: '2026-05-31T08:38:52.201Z'
      v: 180
    - t: '2026-05-31T13:26:14.270Z'
      v: 180
    - t: '2026-05-31T19:08:36.977Z'
      v: 180
    - t: '2026-06-01T03:32:12.333Z'
      v: 180
    - t: '2026-06-01T11:22:41.585Z'
      v: 180
    - t: '2026-06-01T17:28:47.564Z'
      v: 180
    - t: '2026-06-01T21:26:42.422Z'
      v: 180
    - t: '2026-06-02T03:29:21.187Z'
      v: 180
    - t: '2026-06-02T10:13:55.703Z'
      v: 180
    - t: '2026-06-02T16:13:13.915Z'
      v: 180
    - t: '2026-06-02T20:41:18.837Z'
      v: 180
    - t: '2026-06-03T03:36:47.845Z'
      v: 180
  lastAutoUpdated: '2026-06-03T03:36:47.845Z'
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
  lastFetched: '2026-06-03T03:36:57.804Z'
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
