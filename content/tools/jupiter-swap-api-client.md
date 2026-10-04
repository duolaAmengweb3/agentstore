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
  githubStars: 201
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-10-01T12:16:34.655Z'
      v: 2000
    - t: '2026-10-01T22:15:03.600Z'
      v: 2000
    - t: '2026-10-02T03:41:38.322Z'
      v: 2000
    - t: '2026-10-02T11:45:15.835Z'
      v: 2000
    - t: '2026-10-02T17:17:35.576Z'
      v: 2000
    - t: '2026-10-02T21:43:31.932Z'
      v: 2000
    - t: '2026-10-03T03:26:28.113Z'
      v: 2000
    - t: '2026-10-03T10:58:46.382Z'
      v: 2000
    - t: '2026-10-03T15:35:32.860Z'
      v: 2000
    - t: '2026-10-03T20:29:52.276Z'
      v: 2000
    - t: '2026-10-04T03:53:33.635Z'
      v: 2000
    - t: '2026-10-04T11:40:57.399Z'
      v: 2010
  lastAutoUpdated: '2026-10-04T11:40:57.399Z'
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
  lastFetched: '2026-10-04T11:41:05.504Z'
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
