#!/usr/bin/env node
/**
 * 一次性脚本:给已有的 content/tools/*.md 加 `fetch:` frontmatter 字段
 * 跑完之后 fetch-metrics.mjs 就能拉真实数据了
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(path.resolve(__dirname, '..'), 'content/tools');

// slug → fetch source 映射。基于调研文档里的真实 repo / npm 包名。
const SOURCES = {
  // 官方 AgentKit / 钱包
  'coinbase-agentkit':   { github: 'coinbase/agentkit', npm: '@coinbase/agentkit' },
  'base-mcp':            { github: 'base/base-mcp' },
  'phantom-mcp':         { npm: '@phantom/mcp-server' },
  'crossmint-agent-wallet': { github: 'Crossmint/mcp-crossmint-checkout' },
  'near-mcp':            { github: 'nearai/near-mcp' },
  'alby-nwc-mcp':        { github: 'getalby/nwc-mcp-server' },
  'bitcoin-mcp':         { github: 'AbdelStark/bitcoin-mcp' },
  'mcpdotdirect-evm':    { github: 'mcpdotdirect/evm-mcp-server' },
  'bsc-mcp-termix':      { github: 'TermiX-official/bsc-mcp' },
  'thirdweb-mcp':        { npm: 'thirdweb' },
  'armor-crypto-mcp':    { github: 'armorwallet/armor-crypto-mcp' },

  // CEX 官方
  'okx-agent-trade-kit':   { github: 'okx/agent-trade-kit', npm: '@okx_ai/okx-trade-mcp' },
  'binance-skills-hub':    { github: 'binance/binance-skills-hub' },
  'binance-cli':           { github: 'binance/binance-cli' },
  'kraken-cli':            { github: 'krakenfx/kraken-cli' },
  'bitget-agent-hub':      { github: 'BitgetLimited/agent_hub' },
  'gate-for-ai':           { github: 'gate-mirror/gate-for-ai' },  // 镜像名
  'kucoin-skills-hub':     { github: 'Kucoin/kucoin-skills-hub' },
  'bybit-mcp':             { github: 'bybit-exchange/bybit-mcp' },
  'bybit-mcp-sammcj':      { github: 'sammcj/bybit-mcp' },
  'binance-mcp-nirholas':  { github: 'nirholas/Binance-MCP' },
  'coinbase-payments-mcp': { github: 'coinbase/payments-mcp' },
  'ccxt-mcp':              { github: 'lazy-dinosaur/ccxt-mcp' },

  // DEX
  'hyperliquid-python-sdk': { github: 'hyperliquid-dex/hyperliquid-python-sdk' },
  'mektigboy-server-hyperliquid': { github: 'mektigboy/server-hyperliquid' },
  '1inch-mcp':              { github: '1inch/1inch-mcp' },
  'jupiter-ultra':          { github: 'jup-ag/jupiter-swap-api-client' },
  'jupiter-swap-api-client': { github: 'jup-ag/jupiter-swap-api-client' },
  'dydx-v4-clients':        { github: 'dydxprotocol/v4-clients' },
  'driftpy':                { github: 'drift-labs/driftpy' },
  'vertex-python-sdk':      { github: 'vertex-protocol/vertex-python-sdk' },
  'aevo-trading-skills':    { github: 'ribbon-finance/aevo-trading-skills' },
  'lighter-python':         { github: 'elliottech/lighter-python' },
  'gmx-ai':                 { github: 'gmx-io/gmx-ai' },
  'paradex-mcp':            { github: 'sv/mcp-paradex-py' },
  'uniswap-ai-toolkit':     { github: 'Uniswap/ai-toolkit' },
  'pancakeswap-ai':         { github: 'pancakeswap/pancakeswap-ai' },
  '0x-agent-skills':        { github: '0xProject/0x-agent-skills' },
  'openbroker-cli':         { github: 'openbroker/open-broker' },

  // AI 框架
  'elizaos':             { github: 'elizaOS/eliza', npm: '@elizaos/core' },
  'solana-agent-kit':    { github: 'sendaifun/solana-agent-kit', npm: 'solana-agent-kit' },
  'solana-mcp-sendai':   { github: 'sendaifun/solana-mcp' },
  'goat-sdk':            { github: 'goat-sdk/goat' },
  'virtuals-game':       { github: 'game-by-virtuals/game-node' },
  'fetchai-uagents':     { github: 'fetchai/uAgents' },
  'giza-agents':         { github: 'gizatechxyz/giza-agents' },

  // 数据分析
  'polymarket-mcp':         { github: 'aryankeluskar/polymarket-mcp' },
  'blockscout-mcp':         { github: 'blockscout/mcp-server' },
  'coingecko-mcp':          { npm: '@coingecko/coingecko-mcp' },
  'etherscan-mcp':          { github: 'crazyrabbitLTC/mcp-etherscan-server' },
  'helius-mcp':             { github: 'helius-labs/helius-mcp' },
  'chainstack-mcp':         { github: 'chainstack/chainstack-mcp' },
  'quicknode-mcp':          { github: 'quicknode/quicknode-mcp' },
  'moralis-mcp':            { github: 'MoralisWeb3/moralis-mcp-server' },
  'codex-mcp':              { github: 'Codex-Data/codex-mcp' },
  'bankless-onchain-mcp':   { github: 'Bankless/onchain-mcp' },
  'nodit-mcp':              { github: 'noditlabs/nodit-mcp-server' },
  'goplus-mcp':             { github: 'GoPlusSecurity/goplus-mcp' },
  'dexscreener-mcp':        { github: 'openSVM/dexscreener-mcp-server' },
  'tradingview-mcp':        { github: 'atilaahmettaner/tradingview-mcp' },
  'pyth-mcp':               { github: 'itsOmSarraf/pyth-network-mcp' },
  'defillama-mcp':          { github: 'dcSpark/mcp-server-defillama' },
  'web3-research-mcp':      { github: 'aaronjmars/web3-research-mcp' },
  'heurist-mesh-mcp':       { github: 'heurist-network/heurist-mesh-mcp-server' },
  'dune-analytics-mcp':     { github: 'kukapay/dune-analytics-mcp' },
  'chainlink-feeds-mcp':    { github: 'kukapay/chainlink-feeds-mcp' },

  // kukapay 系列(一批同作者)
  'kukapay-funding-rates-mcp':     { github: 'kukapay/funding-rates-mcp',     pypi: 'funding-rates-mcp' },
  'kukapay-crypto-orderbook-mcp':  { github: 'kukapay/crypto-orderbook-mcp' },
  'kukapay-crypto-indicators-mcp': { github: 'kukapay/crypto-indicators-mcp' },
  'kukapay-whale-tracker-mcp':     { github: 'kukapay/whale-tracker-mcp' },
  'kukapay-hyperliquid-info-mcp':  { github: 'kukapay/hyperliquid-info-mcp' },
  'kukapay-crypto-feargreed-mcp':  { github: 'kukapay/crypto-feargreed-mcp' },
  'kukapay-crypto-liquidations-mcp': { github: 'kukapay/crypto-liquidations-mcp' },
  'kukapay-rug-check-mcp':         { github: 'kukapay/rug-check-mcp' },
  'kukapay-polymarket-predictions-mcp': { github: 'kukapay/polymarket-predictions-mcp' },
  'kukapay-wallet-inspector-mcp':  { github: 'kukapay/wallet-inspector-mcp' },
  'kukapay-memecoin-radar-mcp':    { github: 'kukapay/memecoin-radar-mcp' },
  'kukapay-crypto-news-mcp':       { github: 'kukapay/crypto-news-mcp' },
  'kukapay-crypto-sentiment-mcp':  { github: 'kukapay/crypto-sentiment-mcp' },
  'kukapay-etf-flow-mcp':          { github: 'kukapay/etf-flow-mcp' },
  'kukapay-token-minter-mcp':      { github: 'kukapay/token-minter-mcp' },
  'kukapay-honeypot-detector-mcp': { github: 'kukapay/honeypot-detector-mcp' },

  // 基础设施
  'smithery':    { github: 'smithery-ai/smithery' },
  'mcp-so':      { github: 'chatmcp/mcp-directory' },
  'openclaw':    { github: 'OpenClaw/openclaw' },
  'goose':       { github: 'block/goose' },
};

async function main() {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.md'));
  let patched = 0;
  for (const filename of files) {
    const slug = filename.replace(/\.md$/, '');
    const src = SOURCES[slug];
    if (!src) continue;

    const filepath = path.join(DIR, filename);
    const raw = await fs.readFile(filepath, 'utf8');
    const { data, content } = matter(raw);

    // 已有 fetch 就不覆盖(允许手工编辑)
    if (data.fetch) continue;

    const newData = { ...data, fetch: src };
    await fs.writeFile(filepath, matter.stringify(content, newData), 'utf8');
    patched++;
    console.log(`  + ${slug}  ${JSON.stringify(src)}`);
  }
  console.log(`\n[seed] patched ${patched} / ${files.length} files with fetch sources`);
  console.log(`    剩余 ${files.length - patched} 个还没映射源(可选后补)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
