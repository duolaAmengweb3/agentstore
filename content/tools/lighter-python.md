---
slug: lighter-python
name: Lighter Python SDK
author: elliottech
category: dex
icon: ⚡
official: true
score: 6.5
tagline_en: zkRollup perp DEX SDK with onchain signer
tagline_zh: 'zkRollup 永续 DEX SDK,含链上签名器'
metrics:
  npmMonthly: 287
  githubStars: 314
  lastPush: '2026-04-21T15:27:45Z'
  archived: false
  _history:
    - t: '2026-04-22T02:27:43.827Z'
      v: 3427
  lastAutoUpdated: '2026-04-22T02:27:43.827Z'
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
  lastFetched: '2026-04-22T02:58:54.795Z'
repoInfo:
  language: Python
  license: Apache-2.0
  topics: []
  contributors: 19
  openIssues: 41
  archived: false
  createdAt: '2025-02-03T09:58:17Z'
  defaultBranch: main
---


## Lighter Python SDK

zkRollup perp DEX SDK with onchain signer

> zkRollup 永续 DEX SDK,含链上签名器
