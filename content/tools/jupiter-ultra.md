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
  githubStars: 196
  weeklyGrowthPct: 0
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-07-06T10:07:32.796Z'
      v: 14413
    - t: '2026-07-06T15:20:27.656Z'
      v: 14413
    - t: '2026-07-06T19:49:02.234Z'
      v: 14413
    - t: '2026-07-07T02:36:42.594Z'
      v: 14413
    - t: '2026-07-07T09:32:17.282Z'
      v: 14413
    - t: '2026-07-07T14:19:19.018Z'
      v: 14413
    - t: '2026-07-07T19:47:31.635Z'
      v: 14413
    - t: '2026-07-08T02:10:03.705Z'
      v: 14413
    - t: '2026-07-08T08:18:08.654Z'
      v: 14413
    - t: '2026-07-08T13:50:56.251Z'
      v: 14413
    - t: '2026-07-08T19:16:47.983Z'
      v: 14413
    - t: '2026-07-09T02:28:40.325Z'
      v: 14413
  lastAutoUpdated: '2026-07-09T02:28:40.325Z'
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
  lastFetched: '2026-07-09T02:28:48.872Z'
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
