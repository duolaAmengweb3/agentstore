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
  githubStars: 199
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-08-18T06:33:20.209Z'
      v: 1990
    - t: '2026-08-18T12:34:08.520Z'
      v: 1990
    - t: '2026-08-18T18:29:11.726Z'
      v: 1990
    - t: '2026-08-19T00:55:36.096Z'
      v: 1990
    - t: '2026-08-19T06:34:28.209Z'
      v: 1990
    - t: '2026-08-19T12:34:54.407Z'
      v: 1990
    - t: '2026-08-19T18:25:57.986Z'
      v: 1990
    - t: '2026-08-20T00:55:02.006Z'
      v: 1990
    - t: '2026-08-20T06:36:38.969Z'
      v: 1990
    - t: '2026-08-20T12:36:29.311Z'
      v: 1990
    - t: '2026-08-20T18:30:38.308Z'
      v: 1990
    - t: '2026-08-21T00:58:51.105Z'
      v: 1990
  lastAutoUpdated: '2026-08-21T00:58:51.105Z'
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
  lastFetched: '2026-08-21T00:58:59.330Z'
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
