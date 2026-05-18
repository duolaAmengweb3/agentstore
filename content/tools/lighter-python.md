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
  lastPush: '2026-05-09T14:46:39Z'
  archived: false
  _history:
    - t: '2026-05-15T08:43:55.858Z'
      v: 3447
    - t: '2026-05-15T13:55:21.479Z'
      v: 3447
    - t: '2026-05-15T19:24:31.034Z'
      v: 3447
    - t: '2026-05-16T02:31:16.014Z'
      v: 3447
    - t: '2026-05-16T07:57:18.069Z'
      v: 3447
    - t: '2026-05-16T13:11:56.294Z'
      v: 3447
    - t: '2026-05-16T18:57:50.148Z'
      v: 3457
    - t: '2026-05-17T02:38:39.965Z'
      v: 3447
    - t: '2026-05-17T08:14:32.901Z'
      v: 3447
    - t: '2026-05-17T13:09:01.847Z'
      v: 3447
    - t: '2026-05-17T19:01:15.930Z'
      v: 3447
    - t: '2026-05-18T02:49:19.246Z'
      v: 3447
  lastAutoUpdated: '2026-05-18T02:49:19.246Z'
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
  lastFetched: '2026-05-18T02:49:27.852Z'
repoInfo:
  language: Python
  license: Apache-2.0
  topics: []
  contributors: 19
  openIssues: 43
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
