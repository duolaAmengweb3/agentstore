---
slug: jupiter-swap-api-client
name: Jupiter Swap API Client
author: jup-ag
category: dex
icon: "\U0001FA90"
official: true
score: 8.3
tagline_en: Jupiter official Rust SDK (Swap API V6) — quote → swap two-phase execution
tagline_zh: 'Jupiter 官方 Rust SDK(Swap API V6):quote → swap 两阶段执行'
metrics:
  githubStars: 196
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-07-03T08:55:04.450Z'
      v: 1960
    - t: '2026-07-03T13:51:55.394Z'
      v: 1960
    - t: '2026-07-03T19:11:34.281Z'
      v: 1960
    - t: '2026-07-04T02:26:52.109Z'
      v: 1960
    - t: '2026-07-04T08:29:51.545Z'
      v: 1960
    - t: '2026-07-04T13:12:47.078Z'
      v: 1960
    - t: '2026-07-04T19:02:35.934Z'
      v: 1960
    - t: '2026-07-05T02:36:11.593Z'
      v: 1960
    - t: '2026-07-05T08:46:10.456Z'
      v: 1960
    - t: '2026-07-05T13:20:34.816Z'
      v: 1960
    - t: '2026-07-05T19:08:53.677Z'
      v: 1960
    - t: '2026-07-06T02:40:25.211Z'
      v: 1960
  lastAutoUpdated: '2026-07-06T02:40:25.211Z'
  weeklyGrowthPct: 0
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
  lastFetched: '2026-07-06T02:40:32.653Z'
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
  If your agent is in Rust, use this directly. Otherwise stick to Jupiter's HTTP
  API or Solana Agent Kit.
summary_zh: '如果你的 agent 是 Rust,直接用这个。否则走 Jupiter HTTP API / Solana Agent Kit 即可。'
---


## Jupiter Swap API Client

Rust client for Jupiter Swap API V6 — quote + execute

> Jupiter Swap V6 Rust 客户端 — 报价 + 执行
