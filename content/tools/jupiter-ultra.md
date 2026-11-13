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
  githubStars: 203
  weeklyGrowthPct: 0
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-11-10T01:05:00.263Z'
      v: 14483
    - t: '2026-11-10T14:09:50.308Z'
      v: 14483
    - t: '2026-11-10T22:44:29.702Z'
      v: 14483
    - t: '2026-11-11T04:16:02.071Z'
      v: 14483
    - t: '2026-11-11T13:25:53.655Z'
      v: 14483
    - t: '2026-11-11T23:57:26.164Z'
      v: 14483
    - t: '2026-11-12T05:58:26.229Z'
      v: 14483
    - t: '2026-11-12T14:49:23.302Z'
      v: 14483
    - t: '2026-11-12T23:06:02.355Z'
      v: 14483
    - t: '2026-11-13T04:42:21.389Z'
      v: 14483
    - t: '2026-11-13T13:47:53.717Z'
      v: 14483
    - t: '2026-11-13T23:09:27.362Z'
      v: 14483
  lastAutoUpdated: '2026-11-13T23:09:27.362Z'
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
  lastFetched: '2026-11-13T23:09:37.573Z'
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
