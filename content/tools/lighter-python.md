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
    - t: '2026-05-10T02:31:35.543Z'
      v: 3447
    - t: '2026-05-10T08:02:49.907Z'
      v: 3447
    - t: '2026-05-10T13:07:07.052Z'
      v: 3447
    - t: '2026-05-10T18:54:54.101Z'
      v: 3447
    - t: '2026-05-11T02:41:06.885Z'
      v: 3447
    - t: '2026-05-11T09:31:52.610Z'
      v: 3447
    - t: '2026-05-11T14:38:32.545Z'
      v: 3447
    - t: '2026-05-11T19:41:31.398Z'
      v: 3447
    - t: '2026-05-12T02:34:07.666Z'
      v: 3447
    - t: '2026-05-12T08:33:10.891Z'
      v: 3447
    - t: '2026-05-12T14:09:33.910Z'
      v: 3447
    - t: '2026-05-12T19:43:53.458Z'
      v: 3447
  lastAutoUpdated: '2026-05-12T19:43:53.458Z'
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
  lastFetched: '2026-05-12T19:44:02.697Z'
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
