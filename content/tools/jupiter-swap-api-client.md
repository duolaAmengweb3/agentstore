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
  githubStars: 193
  lastPush: '2026-04-02T16:29:44Z'
  archived: false
  _history:
    - t: '2026-04-25T01:59:08.588Z'
      v: 1920
    - t: '2026-04-25T07:08:00.847Z'
      v: 1920
    - t: '2026-04-25T12:54:43.389Z'
      v: 1920
    - t: '2026-04-25T18:42:36.778Z'
      v: 1920
    - t: '2026-04-26T02:12:43.012Z'
      v: 1920
    - t: '2026-04-26T07:22:23.521Z'
      v: 1920
    - t: '2026-04-26T12:56:24.226Z'
      v: 1920
    - t: '2026-04-26T18:43:42.788Z'
      v: 1920
    - t: '2026-04-27T02:14:44.725Z'
      v: 1920
    - t: '2026-04-27T08:14:03.367Z'
      v: 1920
    - t: '2026-04-27T13:29:06.023Z'
      v: 1920
    - t: '2026-04-27T19:12:05.291Z'
      v: 1930
  lastAutoUpdated: '2026-04-27T19:12:05.291Z'
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
  lastFetched: '2026-04-27T19:12:13.916Z'
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
