---
slug: blockvectra-docs-mcp
name: BlockVectra Docs MCP
author: blockvectra
category: data
icon: "📘"
official: true
tagline_en: Keyless EVM documentation search and reading for AI agents
tagline_zh: 面向 AI Agent 的免密钥 EVM 文档搜索与阅读
fetch:
  github: blockvectra/mcp
summary_en: >-
  Find and read BlockVectra documentation with source links, including Robinhood
  Chain setup and EVM RPC reference material. This entry uses the two-tool
  documentation connection; chain discovery, RPC and account operations use the
  separate full MCP endpoint.
summary_zh: >-
  搜索并阅读 BlockVectra 文档，获取 Robinhood Chain 接入和 EVM RPC 参考资料及来源链接。
  本条目使用双工具文档连接；链目录、RPC 与账户操作使用另一个完整 MCP 入口。
readme:
  about: >-
    Connect to https://docs.blockvectra.com/mcp/docs over Streamable HTTP.
    No account, API key, wallet or local bridge is needed for documentation lookup.
  features:
    - "search_docs: find relevant documentation by topic."
    - "read_doc: read a documentation page returned by search."
    - "Documentation connection only: these two tools do not execute RPC or transactions."
    - "Full MCP is a separate connection with tool-specific authentication and chain policies."
  installCmd: 'goose session --with-streamable-http-extension "https://docs.blockvectra.com/mcp/docs"'
  examples:
    - "Find the Robinhood Chain mainnet setup guide, read it, and cite the source."
    - "Find the testnet setup guide and explain how it differs from mainnet."
    - "Read the eth_getLogs documentation and cite its documented query limits."
    - "Find how to authenticate an indexed Data API request; cite the documentation."
    - "Find the WebSocket subscription guide and read the newHeads instructions."
---

## Start with documentation / 从文档开始

This listing is for the keyless documentation connection at
`https://docs.blockvectra.com/mcp/docs`. Its tools are `search_docs` and `read_doc`.
Ask it to find a guide, read the relevant page and cite the source; it retrieves
instructions rather than executing the API calls described in those instructions.

本条目对应免密钥文档连接，提供 `search_docs` 与 `read_doc`。先搜索，再阅读相关页面并引用来源；
工具检索的是调用说明，不会替你执行说明中的 API 请求。

### Cursor

Merge this entry into your existing `.cursor/mcp.json`, preserving other servers:

将下列条目合入已有 `.cursor/mcp.json`，保留其他服务器配置：

```json
{
  "mcpServers": {
    "blockvectra-docs": {
      "url": "https://docs.blockvectra.com/mcp/docs"
    }
  }
}
```

### goose

With goose installed and a model provider configured:

已安装 goose 并配置模型服务后：

```bash
goose session --with-streamable-http-extension "https://docs.blockvectra.com/mcp/docs"
```

This MCP connection exposes the two documentation tools. The host can also have
other extensions enabled; model-provider charges are separate.

该 MCP 连接提供两个文档工具；宿主仍可启用其他扩展，模型服务费用另计。

### Example tasks / 示例任务

- Find the Robinhood Chain mainnet setup guide and cite it. / 查找并阅读 Robinhood Chain 主网接入指南，引用来源。
- Compare mainnet and testnet connection instructions. / 比较主网与测试网接入说明。
- Read the documented limits for `eth_getLogs`. / 阅读 `eth_getLogs` 的文档限制。
- Find Data API authentication instructions. / 查找 Data API 鉴权说明。
- Read how to subscribe to `newHeads` over WebSocket. / 阅读 WebSocket `newHeads` 订阅说明。

## Access boundaries / 访问范围

The [full MCP endpoint](https://docs.blockvectra.com/mcp) is separate: it includes
chain discovery, RPC, indexed data and account tools, with authentication determined
by the tool and chain. It can also submit externally signed transactions; do not
classify that full connection as documentation-only or entirely read-only.
Do not put API keys, private keys or wallet recovery phrases into prompts.

[完整 MCP 入口](https://docs.blockvectra.com/mcp)另含链目录、RPC、索引数据及账户工具，
鉴权取决于工具与链；它还可提交外部已签名交易，不能把完整入口标为纯文档或全部只读。
不要把 API key、私钥或助记词放进提示词。

- [Setup and tool boundaries / 接入与工具范围](https://docs.blockvectra.com/en/guides/mcp-server/?ref=agentstore-20261102)
- [中文接入说明](https://docs.blockvectra.com/zh/guides/mcp-server/?ref=agentstore-20261102)
- [Maintained source / 维护源码](https://github.com/blockvectra/mcp)
- [Official MCP Registry identity / MCP Registry 标识](https://registry.modelcontextprotocol.io/v0.1/servers?search=com.blockvectra%2Fdocs): `com.blockvectra/docs`.
