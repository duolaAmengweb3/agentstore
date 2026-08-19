---
slug: jupiter-ultra
name: Jupiter Ultra
author: jup-ag
category: dex
icon: "\U0001FA90"
official: true
score: 9
tagline_en: >-
  Jupiter Ultra — Solana best-route aggregation + RFQ, clearing 90% of Solana
  swap volume
tagline_zh: 'Jupiter Ultra:Solana 最佳路由聚合 + RFQ,吞吐 Solana 90% swap 成交'
metrics:
  npmMonthly: 12453
  githubStars: 199
  weeklyGrowthPct: 0
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-08-16T12:28:02.741Z'
      v: 14443
    - t: '2026-08-16T18:20:03.893Z'
      v: 14443
    - t: '2026-08-17T00:56:28.496Z'
      v: 14443
    - t: '2026-08-17T06:42:08.292Z'
      v: 14443
    - t: '2026-08-17T12:33:02.998Z'
      v: 14443
    - t: '2026-08-17T18:30:27.059Z'
      v: 14443
    - t: '2026-08-18T00:54:35.705Z'
      v: 14443
    - t: '2026-08-18T06:33:20.199Z'
      v: 14443
    - t: '2026-08-18T12:34:08.507Z'
      v: 14443
    - t: '2026-08-18T18:29:11.748Z'
      v: 14443
    - t: '2026-08-19T00:55:36.071Z'
      v: 14443
    - t: '2026-08-19T06:34:28.183Z'
      v: 14443
  lastAutoUpdated: '2026-08-19T06:34:28.183Z'
fetch:
  github: jup-ag/jupiter-swap-api-client
readme:
  about: >-
    The jup-swap-api-client is a Rust client library designed to simplify the
    integration of the Jupiter Swap API, enabling seamless swaps on the Solana
    blockchain.
  examples:
    - >-
      quote::QuoteRequest, swap::SwapRequest,
      transaction_config::TransactionConfig,
    - 'JupiterSwapApiClient,'
    - '};'
    - 'use solana_sdk::pubkey::Pubkey;'
    - >-
      const USDC_MINT: Pubkey =
      pubkey!("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
    - >-
      const NATIVE_MINT: Pubkey =
      pubkey!("So11111111111111111111111111111111111111112");
    - >-
      const TEST_WALLET: Pubkey =
      pubkey!("2AQdpHJ2JpcEgPiATUXjQxA8QmafFegfQwSLWSprPicm");
    - >-
      let jupiter_swap_api_client =
      JupiterSwapApiClient::new("https://quote-api.jup.ag/v6");
  installCmd: |-
    [dependencies]
        jupiter-swap-api-client = { git = "https://github.com/jup-ag/jupiter-swap-api-client.git", package = "jupiter-swap-api-client"}
  lastFetched: '2026-08-19T06:34:39.079Z'
repoInfo:
  language: Rust
  license: null
  topics: []
  contributors: 9
  openIssues: 19
  archived: false
  createdAt: '2023-08-25T00:08:27Z'
  defaultBranch: main
summary_en: >-
  Skipping Jupiter basically means skipping Solana spot. Jupiter docs call
  themselves "built for AI agents and LLM-powered development" with pre-built
  context files + MCP. Default inside Solana Agent Kit.
summary_zh: >-
  不接 Jupiter 基本等于没接 Solana 现货。Jupiter docs 自称"为 AI agent 和开发者同时设计",有 pre-built
  context files + MCP 访问。Solana Agent Kit 默认内置。
---


## Jupiter Ultra

Best-route Solana swaps for AI agents

> Solana 最优路由 swap
