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
  githubStars: 197
  lastPush: '2026-05-05T04:08:48Z'
  archived: false
  _history:
    - t: '2026-07-12T18:58:26.526Z'
      v: 1960
    - t: '2026-07-13T02:13:13.214Z'
      v: 1960
    - t: '2026-07-13T08:58:21.616Z'
      v: 1960
    - t: '2026-07-13T14:21:44.289Z'
      v: 1960
    - t: '2026-07-13T19:17:46.206Z'
      v: 1970
    - t: '2026-07-14T01:58:55.037Z'
      v: 1970
    - t: '2026-07-14T07:53:42.291Z'
      v: 1970
    - t: '2026-07-14T13:21:46.696Z'
      v: 1970
    - t: '2026-07-14T19:10:39.273Z'
      v: 1970
    - t: '2026-07-15T01:55:19.683Z'
      v: 1970
    - t: '2026-07-15T07:58:26.037Z'
      v: 1970
    - t: '2026-07-15T13:24:53.366Z'
      v: 1970
  lastAutoUpdated: '2026-07-15T13:24:53.366Z'
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
  lastFetched: '2026-07-15T13:25:04.290Z'
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
