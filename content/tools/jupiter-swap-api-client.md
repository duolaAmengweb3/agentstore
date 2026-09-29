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
  githubStars: 200
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-09-26T10:40:21.874Z'
      v: 2000
    - t: '2026-09-26T15:35:21.206Z'
      v: 2000
    - t: '2026-09-26T20:33:25.860Z'
      v: 2000
    - t: '2026-09-27T03:13:37.926Z'
      v: 2000
    - t: '2026-09-27T11:14:04.359Z'
      v: 2000
    - t: '2026-09-27T16:14:47.316Z'
      v: 2000
    - t: '2026-09-27T20:43:54.518Z'
      v: 2000
    - t: '2026-09-28T03:10:24.032Z'
      v: 2000
    - t: '2026-09-28T12:41:30.893Z'
      v: 2000
    - t: '2026-09-28T22:52:10.421Z'
      v: 2000
    - t: '2026-09-29T03:48:40.832Z'
      v: 2000
    - t: '2026-09-29T11:59:05.585Z'
      v: 2000
  lastAutoUpdated: '2026-09-29T11:59:05.585Z'
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
  lastFetched: '2026-09-29T11:59:15.136Z'
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
