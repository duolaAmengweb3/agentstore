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
  githubStars: 204
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-11-18T00:23:39.882Z'
      v: 2030
    - t: '2026-11-18T14:57:53.892Z'
      v: 2030
    - t: '2026-11-18T23:48:40.339Z'
      v: 2030
    - t: '2026-11-19T05:35:38.210Z'
      v: 2030
    - t: '2026-11-19T15:05:32.168Z'
      v: 2030
    - t: '2026-11-20T00:11:14.956Z'
      v: 2030
    - t: '2026-11-20T14:46:17.660Z'
      v: 2030
    - t: '2026-11-20T23:35:18.154Z'
      v: 2030
    - t: '2026-11-21T05:16:34.027Z'
      v: 2030
    - t: '2026-11-21T14:01:40.735Z'
      v: 2030
    - t: '2026-11-21T22:41:27.084Z'
      v: 2030
    - t: '2026-11-22T04:42:12.521Z'
      v: 2040
  lastAutoUpdated: '2026-11-22T04:42:12.521Z'
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
  lastFetched: '2026-11-22T04:42:21.112Z'
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
