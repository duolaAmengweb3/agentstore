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
    - t: '2026-08-04T19:23:22.674Z'
      v: 210
    - t: '2026-08-05T02:00:08.756Z'
      v: 210
    - t: '2026-08-05T08:27:22.632Z'
      v: 210
    - t: '2026-08-05T13:55:05.005Z'
      v: 210
    - t: '2026-08-05T19:22:12.929Z'
      v: 210
    - t: '2026-08-06T02:03:44.243Z'
      v: 210
    - t: '2026-08-06T08:25:37.392Z'
      v: 210
    - t: '2026-08-06T13:52:21.950Z'
      v: 210
    - t: '2026-08-06T23:53:20.235Z'
      v: 210
    - t: '2026-08-07T02:24:07.252Z'
      v: 210
    - t: '2026-08-07T07:06:09.366Z'
      v: 210
    - t: '2026-08-07T12:51:09.203Z'
      v: 210
  lastAutoUpdated: '2026-08-07T12:51:09.203Z'
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
  lastFetched: '2026-08-07T12:51:17.329Z'
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
