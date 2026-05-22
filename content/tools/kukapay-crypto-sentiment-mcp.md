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
  githubStars: 48
  lastPush: '2025-03-27T22:59:59Z'
  archived: false
  _history:
    - t: '2026-05-19T14:49:35.361Z'
      v: 470
    - t: '2026-05-19T19:47:06.416Z'
      v: 480
    - t: '2026-05-20T02:46:58.746Z'
      v: 480
    - t: '2026-05-20T08:59:10.260Z'
      v: 480
    - t: '2026-05-20T14:50:36.334Z'
      v: 480
    - t: '2026-05-20T20:07:37.581Z'
      v: 480
    - t: '2026-05-21T02:49:33.524Z'
      v: 480
    - t: '2026-05-21T09:30:43.788Z'
      v: 480
    - t: '2026-05-21T14:54:51.639Z'
      v: 480
    - t: '2026-05-21T19:47:41.432Z'
      v: 480
    - t: '2026-05-22T02:50:18.797Z'
      v: 480
    - t: '2026-05-22T08:54:38.602Z'
      v: 480
  lastAutoUpdated: '2026-05-22T08:54:38.602Z'
  weeklyGrowthPct: 2
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
  lastFetched: '2026-05-22T08:54:46.405Z'
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
