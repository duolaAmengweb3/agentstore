---
slug: jupiter-ultra
name: Jupiter Ultra
author: jup-ag
category: dex
icon: "\U0001FA90"
official: true
score: 9
tagline_en: >-
  Jupiter Ultra — Solana best-route aggregation + RFQ, clearing 90% of Solana
  swap volume
tagline_zh: 'Jupiter Ultra:Solana 最佳路由聚合 + RFQ,吞吐 Solana 90% swap 成交'
metrics:
  npmMonthly: 12453
  githubStars: 200
  weeklyGrowthPct: 0
  lastPush: '2026-08-04T10:21:51Z'
  archived: false
  _history:
    - t: '2026-09-18T15:40:29.081Z'
      v: 14453
    - t: '2026-09-18T20:17:19.294Z'
      v: 14453
    - t: '2026-09-19T02:46:39.852Z'
      v: 14453
    - t: '2026-09-19T10:09:59.942Z'
      v: 14453
    - t: '2026-09-19T15:12:33.528Z'
      v: 14453
    - t: '2026-09-19T19:55:50.223Z'
      v: 14453
    - t: '2026-09-20T02:58:38.682Z'
      v: 14453
    - t: '2026-09-20T10:28:36.429Z'
      v: 14453
    - t: '2026-09-20T15:17:19.400Z'
      v: 14453
    - t: '2026-09-20T20:10:47.107Z'
      v: 14453
    - t: '2026-09-21T02:56:01.521Z'
      v: 14453
    - t: '2026-09-21T11:46:12.824Z'
      v: 14453
  lastAutoUpdated: '2026-09-21T11:46:12.824Z'
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
  lastFetched: '2026-09-21T11:46:22.077Z'
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
  Skipping Jupiter basically means skipping Solana spot. Jupiter docs call
  themselves "built for AI agents and LLM-powered development" with pre-built
  context files + MCP. Default inside Solana Agent Kit.
summary_zh: >-
  不接 Jupiter 基本等于没接 Solana 现货。Jupiter docs 自称"为 AI agent 和开发者同时设计",有 pre-built
  context files + MCP 访问。Solana Agent Kit 默认内置。
---


## Jupiter Ultra

Best-route Solana swaps for AI agents

> Solana 最优路由 swap
