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
  githubStars: 202
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-10-05T13:22:19.655Z'
      v: 2010
    - t: '2026-10-05T23:36:57.553Z'
      v: 2010
    - t: '2026-10-06T04:26:51.076Z'
      v: 2020
    - t: '2026-10-06T12:37:22.822Z'
      v: 2020
    - t: '2026-10-06T22:11:12.128Z'
      v: 2020
    - t: '2026-10-07T03:52:44.584Z'
      v: 2020
    - t: '2026-10-07T12:30:28.518Z'
      v: 2020
    - t: '2026-10-07T22:33:03.772Z'
      v: 2020
    - t: '2026-10-08T04:06:12.792Z'
      v: 2020
    - t: '2026-10-08T12:40:06.931Z'
      v: 2020
    - t: '2026-10-08T22:45:34.132Z'
      v: 2020
    - t: '2026-10-09T04:11:16.113Z'
      v: 2020
  lastAutoUpdated: '2026-10-09T04:11:16.113Z'
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
  lastFetched: '2026-10-09T04:11:30.542Z'
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
  If your agent is in Rust, use this directly. Otherwise stick to Jupiter's HTTP
  API or Solana Agent Kit.
summary_zh: '如果你的 agent 是 Rust,直接用这个。否则走 Jupiter HTTP API / Solana Agent Kit 即可。'
---


## Jupiter Swap API Client

Rust client for Jupiter Swap API V6 — quote + execute

> Jupiter Swap V6 Rust 客户端 — 报价 + 执行
