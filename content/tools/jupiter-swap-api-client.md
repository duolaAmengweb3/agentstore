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
    - t: '2026-06-06T08:28:08.296Z'
      v: 1940
    - t: '2026-06-06T13:21:14.352Z'
      v: 1940
    - t: '2026-06-06T19:13:44.229Z'
      v: 1940
    - t: '2026-06-07T02:59:20.221Z'
      v: 1940
    - t: '2026-06-07T08:49:15.988Z'
      v: 1940
    - t: '2026-06-07T13:41:39.052Z'
      v: 1940
    - t: '2026-06-07T19:14:27.857Z'
      v: 1940
    - t: '2026-06-08T03:29:09.424Z'
      v: 1940
    - t: '2026-06-08T10:27:29.282Z'
      v: 1940
    - t: '2026-06-08T15:39:24.173Z'
      v: 1940
    - t: '2026-06-08T20:07:27.480Z'
      v: 1940
    - t: '2026-06-09T02:39:40.523Z'
      v: 1940
  lastAutoUpdated: '2026-06-09T02:39:40.523Z'
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
  lastFetched: '2026-06-09T02:39:47.586Z'
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
