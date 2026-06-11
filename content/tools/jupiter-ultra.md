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
  githubStars: 195
  weeklyGrowthPct: 0
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-06-08T15:39:24.229Z'
      v: 14393
    - t: '2026-06-08T20:07:27.463Z'
      v: 14393
    - t: '2026-06-09T02:39:40.490Z'
      v: 14393
    - t: '2026-06-09T09:32:44.699Z'
      v: 14393
    - t: '2026-06-09T14:38:20.000Z'
      v: 14393
    - t: '2026-06-09T20:02:15.390Z'
      v: 14393
    - t: '2026-06-10T02:53:40.982Z'
      v: 14393
    - t: '2026-06-10T09:49:03.357Z'
      v: 14393
    - t: '2026-06-10T15:21:53.752Z'
      v: 14393
    - t: '2026-06-10T20:22:50.951Z'
      v: 14393
    - t: '2026-06-11T03:27:01.421Z'
      v: 14403
    - t: '2026-06-11T10:15:15.665Z'
      v: 14403
  lastAutoUpdated: '2026-06-11T10:15:15.665Z'
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
  lastFetched: '2026-06-11T10:15:27.595Z'
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
