---
slug: toreva
name: Toreva
author: Toreva
category: framework
icon: "\U0001F3AF"
official: true
score: 7.0
tagline_en: User-controlled goals and non-custodial Solana execution for AI agents
tagline_zh: 面向 AI agent 的用户可控目标与非托管 Solana 执行层
fetch:
  github: toreva/gateway
summary_en: >-
  Keep and hand off goals between agents, inspect strategies and receipts, and
  request governed execution without giving the agent custody.
summary_zh: >-
  跨 agent 保存和交接目标，查看策略与回执，并在不把资产托管权交给 agent 的前提下请求受控执行。
---

## Toreva

Toreva is a user-controlled goal and execution layer for AI agents. It lets an
agent persist and hand off goals, inspect plans and receipts, and request
non-custodial Solana execution subject to the user's authority.

> Toreva 是面向 AI agent 的用户可控目标与执行层。它支持跨 agent 保存和交接目标、查看计划与回执，并在用户授权下请求非托管 Solana 执行。

### Connect

- Remote MCP URL: `https://gateway.toreva.com/mcp`
- [Claude installation guide](https://toreva.com/connect-claude)
- [Source code](https://github.com/toreva/gateway)
- [Website](https://toreva.com)

### Representative actions

- Create, list, inspect, refine, continue, and hand off durable goals
- Compile intent and inspect plans, strategies, objects, and receipts
- Save blocked goals so another agent can resume them
- Open protected views without placing secrets in the model context
- Record decision-point outcomes and continue from the observed result
- In a linked full session, request governed non-custodial execution

### Example prompts

- “Keep this goal in Toreva and continue it next time.”
- “Show my active Toreva goals and open the one about customer acquisition.”
- “Refine this goal without changing its terminal.”
- “Save this blocked goal so another agent can continue it.”
- “Show the receipts for the work completed on this goal.”
- “Inspect the available strategies before any transaction.”
- “Prepare this action and show me what requires my authority.”
- “Record what I did after the decision point.”

### Security and pricing

Toreva is hosted as a remote MCP server and its gateway source is public. Read
and setup tools are separated from money-moving tools; money-moving tools are
not exposed in the initial access rung. Toreva is non-custodial and no money
moves without linked user authority. Data operations are free; value
transactions cost 2 bps.
