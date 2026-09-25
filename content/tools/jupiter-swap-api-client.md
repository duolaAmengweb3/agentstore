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
    - t: '2026-09-22T20:46:52.335Z'
      v: 2000
    - t: '2026-09-23T02:56:33.324Z'
      v: 2000
    - t: '2026-09-23T10:38:15.024Z'
      v: 2000
    - t: '2026-09-23T15:57:28.628Z'
      v: 2000
    - t: '2026-09-23T20:58:33.927Z'
      v: 2000
    - t: '2026-09-24T02:46:51.855Z'
      v: 2000
    - t: '2026-09-24T10:58:19.529Z'
      v: 2000
    - t: '2026-09-24T16:20:39.941Z'
      v: 2000
    - t: '2026-09-24T21:03:20.462Z'
      v: 2000
    - t: '2026-09-25T03:03:22.856Z'
      v: 2000
    - t: '2026-09-25T10:58:53.708Z'
      v: 2000
    - t: '2026-09-25T16:21:06.250Z'
      v: 2000
  lastAutoUpdated: '2026-09-25T16:21:06.250Z'
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
  lastFetched: '2026-09-25T16:21:16.593Z'
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
