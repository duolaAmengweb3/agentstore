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
  githubStars: 377
  weeklyGrowthPct: 0
  lastPush: '2026-06-04T22:17:39Z'
  archived: false
  _history:
    - t: '2026-06-26T08:55:51.014Z'
      v: 12691
    - t: '2026-06-26T14:13:22.075Z'
      v: 12691
    - t: '2026-06-26T19:41:18.094Z'
      v: 12691
    - t: '2026-06-27T02:41:29.601Z'
      v: 12691
    - t: '2026-06-27T08:30:41.725Z'
      v: 12691
    - t: '2026-06-27T13:22:29.801Z'
      v: 12691
    - t: '2026-06-27T19:13:05.849Z'
      v: 12691
    - t: '2026-06-28T02:56:12.314Z'
      v: 12691
    - t: '2026-06-28T08:45:24.137Z'
      v: 12691
    - t: '2026-06-28T13:25:58.102Z'
      v: 12691
    - t: '2026-06-28T19:11:20.369Z'
      v: 12691
    - t: '2026-06-29T02:56:42.008Z'
      v: 12691
  lastAutoUpdated: '2026-06-29T02:56:42.008Z'
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
  lastFetched: '2026-06-29T02:56:54.332Z'
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
  contributors: 10
  openIssues: 7
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
