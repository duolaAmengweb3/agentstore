---
slug: toreva
name: Toreva
author: Toreva
category: framework
icon: "\U0001F3AF"
official: true
score: 7.0
tagline_en: Durable goals and governed plans for AI agents
tagline_zh: 面向 AI agent 的持久目标与受控计划
fetch:
  github: toreva/kit
summary_en: >-
  Turn an outcome and its constraints into a plan you can review, refine, and
  reopen after the chat.
summary_zh: >-
  将目标和约束转化为可审查、可完善，并可在聊天结束后重新打开的计划。
---

## Toreva

Toreva is a hosted MCP connector for durable, user-controlled goals. Inside
Claude, it turns an outcome and its constraints into a governed plan the person
can review, refine, and reopen after the chat.

> Toreva 是一个用于持久、用户可控目标的托管 MCP 连接器。它可在 Claude 中将目标和约束转化为用户可审查、完善并在聊天结束后重新打开的受控计划。

### Connect

- Remote MCP URL: `https://gateway.toreva.com/mcp`
- [Claude installation guide](https://toreva.com/connect-claude?utm_source=agentstore&utm_medium=directory&utm_campaign=first_real_goal&utm_content=toreva)
- [Public kit](https://github.com/toreva/kit)
- [Website](https://toreva.com)

### Representative actions

- Turn a stated outcome and its constraints into a reviewable plan
- List and reopen durable goals and plans after the chat
- Inspect plans, objects, and receipts
- Refine a goal with a versioned decision or rejection
- Save blocked goals so another agent can resume them
- Open protected views without placing secrets in the model context
- Record decision-point outcomes and continue from the observed result

### Example prompts

- “Turn this outcome and its constraints into a Toreva plan.”
- “Show my active Toreva goals and open the one about customer acquisition.”
- “Refine this goal without changing its terminal.”
- “Save this blocked goal so another agent can continue it.”
- “Show the receipts for the work completed on this goal.”
- “Record what I did after the decision point.”

### Security and pricing

Toreva is hosted as a remote MCP server and requires OAuth. The initial
connector rung exposes goal and planning tools only. It does not expose
money-moving tools, and this listing does not represent financial execution as
generally available.
