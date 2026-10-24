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
  githubStars: 203
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-10-21T21:08:02.609Z'
      v: 2030
    - t: '2026-10-22T03:04:31.682Z'
      v: 2030
    - t: '2026-10-22T11:00:17.282Z'
      v: 2030
    - t: '2026-10-22T16:28:43.145Z'
      v: 2030
    - t: '2026-10-22T21:07:08.936Z'
      v: 2030
    - t: '2026-10-23T03:01:03.320Z'
      v: 2030
    - t: '2026-10-23T10:53:44.367Z'
      v: 2030
    - t: '2026-10-23T16:18:21.097Z'
      v: 2030
    - t: '2026-10-23T20:53:52.373Z'
      v: 2030
    - t: '2026-10-24T02:57:55.702Z'
      v: 2030
    - t: '2026-10-24T10:08:19.058Z'
      v: 2030
    - t: '2026-10-24T15:15:23.319Z'
      v: 2030
  lastAutoUpdated: '2026-10-24T15:15:23.319Z'
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
  lastFetched: '2026-10-24T15:15:32.446Z'
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
