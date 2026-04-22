import { setRequestLocale } from 'next-intl/server';
import { Github, Mail, Check, X } from 'lucide-react';
import { PageShell, SectionBlock, KV } from '@/components/marketing/page-shell';

export const metadata = { title: 'Submit a tool · AgentStore' };

export default async function SubmitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  const zh = locale === 'zh';

  return (
    <PageShell
      label={zh ? '投稿' : 'Submit'}
      title={zh ? '把你的工具加进来' : 'Submit your tool'}
      subtitle={zh
        ? '任何面向 AI agent 的加密工具都可以投稿 — 不限 MCP / CLI / SDK / Agent Skill。48 小时内审核完。'
        : 'Any crypto tool made for AI agents can be submitted — MCP / CLI / SDK / Agent Skill all welcome. Review within 48 hours.'}
      accent="cyan"
    >
      <SectionBlock number="01" title={zh ? '两种提交方式' : 'Two ways to submit'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <Github className="h-6 w-6 text-primary mb-3" />
            <div className="font-semibold mb-2">
              {zh ? 'GitHub PR(推荐)' : 'GitHub PR (preferred)'}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed mb-4">
              {zh
                ? '在 agentstore 仓库 content/tools/ 目录新加一个 markdown 文件。有审查历史,贡献者可署名。'
                : 'Add a markdown file to content/tools/ in the agentstore repo. Review history public, contributors credited.'}
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              {zh ? '打开 GitHub' : 'Open GitHub'} →
            </a>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <Mail className="h-6 w-6 text-primary mb-3" />
            <div className="font-semibold mb-2">
              {zh ? '邮件投稿' : 'Email submission'}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed mb-4">
              {zh
                ? '不熟悉 GitHub 也没关系 — 发邮件把工具信息给我们,我们帮你录入。'
                : 'Not a GitHub person? Email us the details and we\'ll create the entry.'}
            </div>
            <a href="mailto:submit@agentstore.xyz" className="text-sm text-primary hover:underline">
              submit@agentstore.xyz →
            </a>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock number="02" title={zh ? '需要准备什么' : 'What to prepare'}>
        <div className="rounded-2xl border border-border/60 bg-card/30">
          <div className="p-5 space-y-1">
            <KV k={zh ? '名称' : 'Name'}              v={zh ? '比如 OKX Agent Trade Kit' : 'e.g. OKX Agent Trade Kit'} />
            <KV k={zh ? '一句话简介' : 'Tagline'}     v={zh ? '≤ 80 字,中英双语' : '≤ 80 chars, bilingual'} />
            <KV k={zh ? '作者 / 组织' : 'Author'}     v={zh ? '个人 handle 或组织名' : 'Personal handle or org name'} />
            <KV k={zh ? '类别' : 'Category'}          v="CEX / DEX / Wallet / Data / Framework / Infra" />
            <KV k={zh ? '主页链接' : 'Homepage'}      v={zh ? 'GitHub / npm / 官网 任意' : 'GitHub / npm / website URL'} />
            <KV k={zh ? '安装命令' : 'Install'}       v={zh ? '每个 runtime 一段(Claude Desktop / Cursor / ...)' : 'Per runtime (Claude Desktop / Cursor / ...)'} />
            <KV k={zh ? '动作清单' : 'Actions'}       v={zh ? '工具暴露的 tools 列表 + 描述' : 'List of tools/actions with descriptions'} />
            <KV k={zh ? '示例 prompt' : 'Prompts'}    v={zh ? '5-8 条用户会怎么问 Claude 的示例' : '5-8 example prompts users would ask Claude'} />
            <KV k={zh ? '安全画像' : 'Security'}      v={zh ? '开源? 审计过? 密钥如何处理? 付费?' : 'Open-source? Audited? Key handling? Paid?'} />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock number="03" title={zh ? '我们会收录的工具' : 'Tools we include'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-3">
              <Check className="h-4 w-4" />
              {zh ? '收录' : 'Accept'}
            </div>
            <ul className="space-y-2 text-sm">
              <Bullet>{zh ? 'MCP servers / Agent Skills / CLI / SDK' : 'MCP servers / Agent Skills / CLI / SDK'}</Bullet>
              <Bullet>{zh ? '和加密货币 / Web3 / DeFi 相关' : 'Crypto / Web3 / DeFi related'}</Bullet>
              <Bullet>{zh ? '有可访问的源代码或 API 文档' : 'Source code or API docs accessible'}</Bullet>
              <Bullet>{zh ? '明确的维护者 / 发布方' : 'Clear maintainer / publisher'}</Bullet>
              <Bullet>{zh ? '最近 6 个月有更新' : 'Updated in the last 6 months'}</Bullet>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
            <div className="inline-flex items-center gap-2 text-rose-400 font-semibold mb-3">
              <X className="h-4 w-4" />
              {zh ? '拒绝' : 'Reject'}
            </div>
            <ul className="space-y-2 text-sm">
              <Negative>{zh ? '不能验证真实存在的 vaporware' : 'Vaporware we can\'t verify exists'}</Negative>
              <Negative>{zh ? '明显抄袭另一个工具的壳包装' : 'Obvious thin wrappers of another tool'}</Negative>
              <Negative>{zh ? '涉及诈骗 / 洗钱 / 绕过合规的项目' : 'Scams / money laundering / compliance-evasion tools'}</Negative>
              <Negative>{zh ? '超过 12 个月无更新且无响应' : 'Abandoned >12 months, maintainer unresponsive'}</Negative>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock number="04" title={zh ? '审核节奏' : 'Review timeline'}>
        <p>
          {zh
            ? '我们每周一 / 四审一次新投稿(24-72 小时内)。通过后 48 小时内上线,工具作者署名显示。'
            : 'We triage on Mondays and Thursdays (24-72 hours). Accepted tools appear within 48 hours, with author credit.'}
        </p>
      </SectionBlock>
    </PageShell>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />
      <span>{children}</span>
    </li>
  );
}
function Negative({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <X className="h-3.5 w-3.5 shrink-0 mt-0.5 text-rose-400" />
      <span>{children}</span>
    </li>
  );
}
