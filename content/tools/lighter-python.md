---
slug: lighter-python
name: Lighter Python SDK
author: elliottech
category: dex
icon: ⚡
official: true
score: 6.5
tagline_en: Lighter (ETH zkRollup perp) official Python SDK — with onchain signer
tagline_zh: 'Lighter(ETH zkRollup perp)官方 Python SDK,含链上 signer'
metrics:
  npmMonthly: 287
  githubStars: 316
  lastPush: '2026-05-06T11:41:12Z'
  archived: false
  _history:
    - t: '2026-05-05T02:22:42.012Z'
      v: 3457
    - t: '2026-05-05T08:02:39.578Z'
      v: 3457
    - t: '2026-05-05T13:27:26.031Z'
      v: 3457
    - t: '2026-05-05T19:12:30.296Z'
      v: 3457
    - t: '2026-05-06T02:26:25.621Z'
      v: 3447
    - t: '2026-05-06T08:16:54.553Z'
      v: 3447
    - t: '2026-05-06T13:56:38.093Z'
      v: 3447
    - t: '2026-05-06T19:30:13.498Z'
      v: 3447
    - t: '2026-05-07T02:28:01.985Z'
      v: 3447
    - t: '2026-05-07T08:27:13.519Z'
      v: 3447
    - t: '2026-05-07T13:54:36.321Z'
      v: 3447
    - t: '2026-05-07T19:38:44.783Z'
      v: 3447
  lastAutoUpdated: '2026-05-07T19:38:44.783Z'
  weeklyGrowthPct: -0.0
fetch:
  github: elliottech/lighter-python
readme:
  about: Python SDK for Lighter
  installCmd: |-
    import lighter
    import asyncio

    async def main():
        client = lighter.ApiClient()
        try:
            account_api = lighter.AccountApi(client)
            account = await account_api.account(by="index", value="1")
            print(account)
        finally:
            await client.close()  # Make sure connection is cleanly closed

    if __name__ == "__main__":
        asyncio.run(main())
  lastFetched: '2026-05-07T19:38:55.144Z'
repoInfo:
  language: Python
  license: Apache-2.0
  topics: []
  contributors: 19
  openIssues: 44
  archived: false
  createdAt: '2025-02-03T09:58:17Z'
  defaultBranch: main
summary_en: >-
  One of the weakest AI-agent stories among mainstream perp DEXes. Mature SDK
  but no MCP, no agent-wallet primitive. BYOB (bring your own bridge).
summary_zh: >-
  agent 叙事最弱的主流 perp DEX 之一。SDK 成熟但没 MCP / 没 agent-wallet 原语。要用 Lighter 做
  agent,自己封装。
---


## Lighter Python SDK

zkRollup perp DEX SDK with onchain signer

> zkRollup 永续 DEX SDK,含链上签名器
