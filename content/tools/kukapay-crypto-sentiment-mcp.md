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
  githubStars: 47
  lastPush: '2025-03-27T22:59:59Z'
  archived: false
  _history:
    - t: '2026-05-03T18:52:44.229Z'
      v: 470
    - t: '2026-05-04T02:27:37.557Z'
      v: 470
    - t: '2026-05-04T08:23:56.813Z'
      v: 470
    - t: '2026-05-04T13:47:43.580Z'
      v: 470
    - t: '2026-05-04T19:22:23.378Z'
      v: 470
    - t: '2026-05-05T02:22:41.428Z'
      v: 470
    - t: '2026-05-05T08:02:38.956Z'
      v: 470
    - t: '2026-05-05T13:27:25.214Z'
      v: 470
    - t: '2026-05-05T19:12:29.419Z'
      v: 470
    - t: '2026-05-06T02:26:25.016Z'
      v: 470
    - t: '2026-05-06T08:16:53.731Z'
      v: 470
    - t: '2026-05-06T13:56:37.373Z'
      v: 470
  lastAutoUpdated: '2026-05-06T13:56:37.373Z'
  weeklyGrowthPct: 0
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
  lastFetched: '2026-05-06T13:56:50.311Z'
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
