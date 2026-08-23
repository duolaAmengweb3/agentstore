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
  githubStars: 382
  weeklyGrowthPct: 0
  lastPush: '2026-08-01T15:41:26Z'
  archived: false
  _history:
    - t: '2026-08-21T00:58:52.568Z'
      v: 12741
    - t: '2026-08-21T06:36:18.135Z'
      v: 12741
    - t: '2026-08-21T12:35:32.954Z'
      v: 12751
    - t: '2026-08-21T18:28:24.867Z'
      v: 12751
    - t: '2026-08-22T00:55:31.063Z'
      v: 12751
    - t: '2026-08-22T06:30:11.800Z'
      v: 12751
    - t: '2026-08-22T12:27:24.530Z'
      v: 12751
    - t: '2026-08-22T18:20:50.028Z'
      v: 12751
    - t: '2026-08-23T00:59:34.666Z'
      v: 12751
    - t: '2026-08-23T06:31:32.669Z'
      v: 12751
    - t: '2026-08-23T12:28:59.942Z'
      v: 12751
    - t: '2026-08-23T18:20:29.810Z'
      v: 12741
  lastAutoUpdated: '2026-08-23T18:20:29.810Z'
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
  lastFetched: '2026-08-23T18:20:38.092Z'
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
  openIssues: 13
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
