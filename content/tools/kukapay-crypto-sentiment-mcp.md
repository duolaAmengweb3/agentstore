---
slug: kukapay-crypto-sentiment-mcp
name: Crypto Sentiment MCP
author: kukapay
category: data
icon: "\U0001F3AD"
official: false
score: 7.1
tagline_en: Top-coin sentiment index — 47 stars
tagline_zh: '头部币种情绪指数,47 star'
metrics:
  githubStars: 49
  lastPush: '2025-03-27T22:59:59Z'
  archived: false
  _history:
    - t: '2026-07-06T10:07:33.234Z'
      v: 500
    - t: '2026-07-06T15:20:28.100Z'
      v: 490
    - t: '2026-07-06T19:49:02.717Z'
      v: 490
    - t: '2026-07-07T02:36:43.030Z'
      v: 490
    - t: '2026-07-07T09:32:17.799Z'
      v: 490
    - t: '2026-07-07T14:19:19.546Z'
      v: 490
    - t: '2026-07-07T19:47:32.260Z'
      v: 490
    - t: '2026-07-08T02:10:04.229Z'
      v: 490
    - t: '2026-07-08T08:18:09.243Z'
      v: 490
    - t: '2026-07-08T13:50:56.762Z'
      v: 490
    - t: '2026-07-08T19:16:48.459Z'
      v: 490
    - t: '2026-07-09T02:28:40.829Z'
      v: 490
  lastAutoUpdated: '2026-07-09T02:28:40.829Z'
  weeklyGrowthPct: -2
fetch:
  github: kukapay/crypto-sentiment-mcp
readme:
  about: >-
    An MCP server that delivers cryptocurrency sentiment analysis to AI agents,
    leveraging Santiment's aggregated social media and news data to track market
    mood and detect emerging trends.
  features:
    - >-
      Sentiment Analysis — Retrieve sentiment balance (positive vs. negative)
      for specific cryptocurrencies.
    - >-
      Social Volume Tracking — Monitor total social media mentions and detect
      significant shifts (spikes or drops).
    - >-
      Social Dominance — Measure the share of discussions an asset occupies in
      crypto media.
    - >-
      Trending Words — Identify the most popular terms trending in
      cryptocurrency discussions.
  modules:
    - name: get_sentiment_balance
      description: >-
        Get the average sentiment balance for an asset over a specified period.
        · asset: str, days: int = 7
    - name: get_social_volume
      description: >-
        Fetch the total number of social media mentions for an asset. · asset:
        str, days: int = 7
    - name: alert_social_shift
      description: >-
        Detect significant spikes or drops in social volume compared to the
        previous average. · asset: str, threshold: float = 50.0, days: int = 7
    - name: get_trending_words
      description: >-
        Retrieve the top trending words in crypto discussions, ranked by score
        over a period. · days: int = 7, top_n: int = 5
    - name: get_social_dominance
      description: >-
        Measure the percentage of crypto media discussions dominated by an
        asset. · asset: str, days: int = 7
  installCmd: |-
    git clone https://github.com/kukapay/crypto-sentiment-mcp.git
       cd crypto-sentiment-mcp
  lastFetched: '2026-07-09T02:28:49.348Z'
repoInfo:
  language: Python
  license: MIT
  topics: []
  contributors: 1
  openIssues: 3
  archived: false
  createdAt: '2025-03-23T16:00:02Z'
  defaultBranch: main
summary_en: >-
  Gives the agent a "market buzz / panic / euphoria" dimension. Pairs well with
  the fear-greed index.
summary_zh: 给 agent 一个"市场热度 / 恐慌 / 狂热"的数值维度。配 fear-greed 指数用。
---


## Crypto Sentiment MCP

Sentiment index for top coins

> 头部币种情绪指数
