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
  githubStars: 317
  lastPush: '2026-05-01T12:57:12Z'
  archived: false
  _history:
    - t: '2026-04-28T19:27:09.814Z'
      v: 3457
    - t: '2026-04-29T02:30:57.977Z'
      v: 3457
    - t: '2026-04-29T08:08:48.730Z'
      v: 3457
    - t: '2026-04-29T13:45:49.705Z'
      v: 3457
    - t: '2026-04-29T19:17:47.856Z'
      v: 3457
    - t: '2026-04-30T02:31:52.656Z'
      v: 3457
    - t: '2026-04-30T08:12:47.918Z'
      v: 3457
    - t: '2026-04-30T13:45:05.093Z'
      v: 3457
    - t: '2026-04-30T19:12:53.529Z'
      v: 3457
    - t: '2026-05-01T02:37:10.819Z'
      v: 3457
    - t: '2026-05-01T08:06:53.273Z'
      v: 3457
    - t: '2026-05-01T13:09:42.531Z'
      v: 3457
  lastAutoUpdated: '2026-05-01T13:09:42.531Z'
  weeklyGrowthPct: 0
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
  lastFetched: '2026-05-01T13:09:50.683Z'
repoInfo:
  language: Python
  license: Apache-2.0
  topics: []
  contributors: 19
  openIssues: 45
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
