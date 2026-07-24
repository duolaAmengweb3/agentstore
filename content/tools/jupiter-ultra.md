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
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-07-22T02:06:45.486Z'
      v: 14433
    - t: '2026-07-22T08:18:28.721Z'
      v: 14433
    - t: '2026-07-22T13:38:53.624Z'
      v: 14433
    - t: '2026-07-22T19:05:54.465Z'
      v: 14433
    - t: '2026-07-23T02:13:10.857Z'
      v: 14433
    - t: '2026-07-23T08:21:54.601Z'
      v: 14433
    - t: '2026-07-23T13:44:10.943Z'
      v: 14433
    - t: '2026-07-23T19:06:43.721Z'
      v: 14443
    - t: '2026-07-24T02:10:02.048Z'
      v: 14443
    - t: '2026-07-24T08:16:17.139Z'
      v: 14443
    - t: '2026-07-24T13:25:22.582Z'
      v: 14443
    - t: '2026-07-24T19:17:24.851Z'
      v: 14443
  lastAutoUpdated: '2026-07-24T19:17:24.851Z'
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
  lastFetched: '2026-07-24T19:17:35.734Z'
repoInfo:
  language: Rust
  license: null
  topics: []
  contributors: 9
  openIssues: 18
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
