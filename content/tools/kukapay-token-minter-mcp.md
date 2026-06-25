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
    - t: '2026-06-22T11:43:55.168Z'
      v: 190
    - t: '2026-06-22T16:46:01.158Z'
      v: 190
    - t: '2026-06-22T20:38:39.952Z'
      v: 190
    - t: '2026-06-23T02:45:13.666Z'
      v: 190
    - t: '2026-06-23T09:29:34.667Z'
      v: 190
    - t: '2026-06-23T14:38:10.791Z'
      v: 190
    - t: '2026-06-23T19:54:23.889Z'
      v: 190
    - t: '2026-06-24T02:45:40.995Z'
      v: 190
    - t: '2026-06-24T08:58:37.318Z'
      v: 190
    - t: '2026-06-24T14:17:48.191Z'
      v: 190
    - t: '2026-06-24T19:39:08.138Z'
      v: 190
    - t: '2026-06-25T02:46:11.014Z'
      v: 190
  lastAutoUpdated: '2026-06-25T02:46:11.014Z'
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
  lastFetched: '2026-06-25T02:46:21.471Z'
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
