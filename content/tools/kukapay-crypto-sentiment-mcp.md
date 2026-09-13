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
    - t: '2026-09-10T10:25:36.565Z'
      v: 470
    - t: '2026-09-10T15:42:03.714Z'
      v: 470
    - t: '2026-09-10T20:20:24.504Z'
      v: 470
    - t: '2026-09-11T02:36:14.566Z'
      v: 470
    - t: '2026-09-11T10:27:59.550Z'
      v: 470
    - t: '2026-09-11T15:43:34.669Z'
      v: 470
    - t: '2026-09-11T20:20:28.286Z'
      v: 470
    - t: '2026-09-12T02:45:19.563Z'
      v: 470
    - t: '2026-09-12T09:56:37.508Z'
      v: 470
    - t: '2026-09-12T14:51:43.103Z'
      v: 470
    - t: '2026-09-12T20:03:30.977Z'
      v: 470
    - t: '2026-09-13T02:43:38.723Z'
      v: 470
  lastAutoUpdated: '2026-09-13T02:43:38.723Z'
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
  lastFetched: '2026-09-13T02:43:46.614Z'
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
