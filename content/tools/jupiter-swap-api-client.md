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
    - t: '2026-05-26T14:57:00.042Z'
      v: 1930
    - t: '2026-05-26T20:02:48.616Z'
      v: 1930
    - t: '2026-05-27T02:53:54.563Z'
      v: 1930
    - t: '2026-05-27T09:37:16.116Z'
      v: 1940
    - t: '2026-05-27T15:26:02.114Z'
      v: 1940
    - t: '2026-05-27T20:08:26.151Z'
      v: 1940
    - t: '2026-05-28T02:41:26.977Z'
      v: 1940
    - t: '2026-05-28T09:53:42.019Z'
      v: 1940
    - t: '2026-05-28T15:38:58.254Z'
      v: 1940
    - t: '2026-05-28T20:12:56.925Z'
      v: 1940
    - t: '2026-05-29T02:45:07.264Z'
      v: 1940
    - t: '2026-05-29T09:44:06.391Z'
      v: 1940
  lastAutoUpdated: '2026-05-29T09:44:06.391Z'
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
  lastFetched: '2026-05-29T09:44:16.139Z'
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
