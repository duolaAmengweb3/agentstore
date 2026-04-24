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
  githubStars: 315
  lastPush: '2026-04-24T10:48:39Z'
  archived: false
  _history:
    - t: '2026-04-22T02:27:43.827Z'
      v: 3427
    - t: '2026-04-22T07:25:59.796Z'
      v: 3427
    - t: '2026-04-22T13:16:42.567Z'
      v: 3427
    - t: '2026-04-22T19:06:43.231Z'
      v: 3427
    - t: '2026-04-23T02:08:46.951Z'
      v: 3427
    - t: '2026-04-23T07:29:49.117Z'
      v: 3427
    - t: '2026-04-23T13:16:40.900Z'
      v: 3437
    - t: '2026-04-23T19:01:56.252Z'
      v: 3437
    - t: '2026-04-24T02:09:04.493Z'
      v: 3437
    - t: '2026-04-24T07:55:29.084Z'
      v: 3437
    - t: '2026-04-24T13:12:49.771Z'
      v: 3437
    - t: '2026-04-24T18:42:09.436Z'
      v: 3437
  lastAutoUpdated: '2026-04-24T18:42:09.436Z'
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
  lastFetched: '2026-04-24T18:42:18.655Z'
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
