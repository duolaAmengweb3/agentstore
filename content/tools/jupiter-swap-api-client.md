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
  githubStars: 194
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-05-02T18:52:31.943Z'
      v: 1930
    - t: '2026-05-03T02:28:58.991Z'
      v: 1940
    - t: '2026-05-03T07:55:22.592Z'
      v: 1940
    - t: '2026-05-03T12:58:42.530Z'
      v: 1940
    - t: '2026-05-03T18:52:43.812Z'
      v: 1940
    - t: '2026-05-04T02:27:37.079Z'
      v: 1940
    - t: '2026-05-04T08:23:56.480Z'
      v: 1940
    - t: '2026-05-04T13:47:43.010Z'
      v: 1940
    - t: '2026-05-04T19:22:22.887Z'
      v: 1940
    - t: '2026-05-05T02:22:40.964Z'
      v: 1940
    - t: '2026-05-05T08:02:38.526Z'
      v: 1940
    - t: '2026-05-05T13:27:24.564Z'
      v: 1940
  lastAutoUpdated: '2026-05-05T13:27:24.564Z'
  weeklyGrowthPct: 1
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
  lastFetched: '2026-05-05T13:27:34.166Z'
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
