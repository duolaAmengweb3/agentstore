---
slug: mcpdotdirect-evm
name: EVM MCP Server
author: mcpdotdirect
category: wallet
icon: "\U0001F537"
official: false
score: 8.3
tagline_en: 'Generic EVM MCP — any chain, any wallet, ERC-20 support, 374 stars'
tagline_zh: '通用 EVM MCP:任意 EVM 链 + 任意钱包 + ERC-20 + 签名,374 star'
metrics:
  npmMonthly: 8921
  githubStars: 379
  weeklyGrowthPct: 0
  lastPush: '2026-10-03T16:56:41Z'
  archived: false
  _history:
    - t: '2026-10-19T18:12:29.412Z'
      v: 12701
    - t: '2026-10-20T03:04:12.979Z'
      v: 12701
    - t: '2026-10-20T10:49:20.491Z'
      v: 12701
    - t: '2026-10-20T16:13:05.325Z'
      v: 12701
    - t: '2026-10-20T21:09:18.096Z'
      v: 12701
    - t: '2026-10-21T02:58:44.505Z'
      v: 12701
    - t: '2026-10-21T11:01:32.822Z'
      v: 12701
    - t: '2026-10-21T16:28:13.213Z'
      v: 12701
    - t: '2026-10-21T21:08:04.861Z'
      v: 12711
    - t: '2026-10-22T03:04:33.237Z'
      v: 12711
    - t: '2026-10-22T11:00:19.317Z'
      v: 12711
    - t: '2026-10-22T16:28:45.232Z'
      v: 12711
  lastAutoUpdated: '2026-10-22T16:28:45.232Z'
fetch:
  github: mcpdotdirect/evm-mcp-server
readme:
  about: >-
    A comprehensive Model Context Protocol (MCP) server that provides blockchain
    services across 60+ EVM-compatible networks. This server enables AI agents
    to interact with Ethereum, Optimism, Arbitrum, Base, Polygon, and many other
    EVM chains with a unified interface through 22 tools and 10 AI-guided
    prompts.
  modules:
    - name: get_wallet_address
      description: Get the address of the configured wallet (from EVM_PRIVATE_KEY) · none
    - name: Tool Name
      description: Description · Key Parameters
    - name: '------------------------'
      description: '----------------------------------- · --------------'
    - name: get_chain_info
      description: Get network information · network
    - name: get_supported_networks
      description: List all supported EVM networks · none
    - name: get_gas_price
      description: Get current gas prices on a network · network
    - name: Tool Name
      description: Description · Key Parameters
    - name: '--------------------'
      description: '---------------------------------- · --------------------'
    - name: resolve_ens_name
      description: 'Resolve ENS name to address · ensName, network'
    - name: lookup_ens_address
      description: 'Reverse lookup address to ENS name · address, network'
    - name: Tool Name
      description: Description · Key Parameters
    - name: '-------------------------'
      description: >-
        --------------------------------- ·
        ---------------------------------------
    - name: get_block
      description: 'Get block data · blockNumber or blockHash, network'
    - name: get_latest_block
      description: Get latest block data · network
    - name: get_transaction
      description: 'Get transaction details · txHash, network'
  lastFetched: '2026-10-22T16:28:56.183Z'
repoInfo:
  language: TypeScript
  license: MIT
  topics:
    - agent
    - blockchain
    - ethereum
    - evm
    - mcp
    - mcp-server
  contributors: 9
  openIssues: 14
  archived: false
  createdAt: '2025-03-08T23:00:04Z'
  defaultBranch: main
summary_en: >-
  The most popular community generic-EVM MCP. Configurable RPC, wallet + token
  transfers + contract interactions. Caveat: raw private key in env —
  custodial-ish, not truly non-custodial.
summary_zh: '社区最流行的通用 EVM MCP。可配任意 RPC,支持钱包 + 代币转账 + 合约交互。注意:私钥在 env 里,是原始密钥模式,不非托管。'
---


## EVM MCP Server

Generic EVM MCP — any chain, wallet, ERC-20, tx sign

> 通用 EVM MCP — 任意链 / 钱包 / ERC-20 / 签名
