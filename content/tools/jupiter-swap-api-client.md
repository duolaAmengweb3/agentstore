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
    - t: '2026-04-30T02:31:51.194Z'
      v: 1920
    - t: '2026-04-30T08:12:46.492Z'
      v: 1920
    - t: '2026-04-30T13:45:03.291Z'
      v: 1930
    - t: '2026-04-30T19:12:52.353Z'
      v: 1930
    - t: '2026-05-01T02:37:09.793Z'
      v: 1930
    - t: '2026-05-01T08:06:52.223Z'
      v: 1930
    - t: '2026-05-01T13:09:41.244Z'
      v: 1930
    - t: '2026-05-01T19:05:35.477Z'
      v: 1930
    - t: '2026-05-02T02:12:41.292Z'
      v: 1930
    - t: '2026-05-02T07:25:31.693Z'
      v: 1930
    - t: '2026-05-02T12:59:36.926Z'
      v: 1930
    - t: '2026-05-02T18:52:31.943Z'
      v: 1930
  lastAutoUpdated: '2026-05-02T18:52:31.943Z'
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
  lastFetched: '2026-05-02T18:52:40.250Z'
repoInfo:
  language: Rust
  license: null
  topics: []
  contributors: 9
  openIssues: 20
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
