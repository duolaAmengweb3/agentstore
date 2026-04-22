import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Github, Twitter, Send, Users, Package, GraduationCap, Scale } from 'lucide-react';
import { PageShell, SectionBlock } from '@/components/marketing/page-shell';

export const metadata = { title: 'About · AgentStore' };

export default async function AboutPage({
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
      label={zh ? '关于' : 'About'}
      title={zh ? '把散落的 Web3 AI 工具汇到一起' : 'We gather every Web3 AI tool in one place'}
      subtitle={zh
        ? 'AgentStore 是 Web3 AI 工具的应用商店。发现、安装、学会使用 — 所有数据来自真实调用,不是 GitHub star。'
        : 'AgentStore is the App Store for Web3 AI tools. Discover, install, master — powered by real install data, not GitHub stars.'}
    >
      {/* Mission */}
      <SectionBlock number="01" title={zh ? '我们在解决什么问题' : 'The problem'}>
        <p>
          {zh
            ? '加密 AI 工具现在有 160+ 个,散落在 GitHub、npm、Smithery、各交易所官方文档、开发者博客。用户找一个合适的工具平均要跳 4-5 个网站。'
            : 'There are 160+ crypto AI tools today, scattered across GitHub, npm, Smithery, exchange docs, and developer blogs. Finding the right one means jumping between 4-5 sites.'}
        </p>
        <p>
          {zh
            ? 'GitHub star 还会骗人 — 最火的那个加密预测市场 MCP 只有 6 个 star,但 Smithery 上被调用了 54,822 次。反过来,一个 122 star 的"技术指标工具"几乎没人装。'
            : 'GitHub stars lie. The most-used crypto prediction-market MCP has 6 stars but 54,822 Smithery calls. A 122-star "technical indicators" tool barely gets installed.'}
        </p>
        <p>
          {zh
            ? 'AgentStore 是为了解决这个:**把所有加密 AI 工具聚到一处,用真实装机量说话,加上教程、评测、合集,让你 30 秒找到要装的那个**。'
            : 'AgentStore exists to fix this: **all crypto AI tools in one place, ranked by real install data, enriched with tutorials, reviews, and collections — so you find what to install in 30 seconds.**'}
        </p>
      </SectionBlock>

      {/* Numbers */}
      <SectionBlock number="02" title={zh ? '现在的样子' : 'Where we are'}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard icon={<Package className="h-4 w-4" />} value="100+" label={zh ? '收录工具' : 'tools tracked'} />
          <StatCard icon={<Users className="h-4 w-4" />} value="14" label={zh ? '创作者' : 'creators'} />
          <StatCard icon={<GraduationCap className="h-4 w-4" />} value="10" label={zh ? '教程' : 'tutorials'} />
          <StatCard icon={<Scale className="h-4 w-4" />} value="8" label={zh ? '精选合集' : 'collections'} />
        </div>
        <p className="mt-6">
          {zh
            ? '所有数据每 6 小时从 Smithery / npm / GitHub / CoinGecko 等源头自动刷新。'
            : 'All metrics refresh every 6 hours from Smithery / npm / GitHub / CoinGecko and other sources.'}
        </p>
      </SectionBlock>

      {/* Principles */}
      <SectionBlock number="03" title={zh ? '我们的原则' : 'Our principles'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <PrincipleCard
            icon="🎯"
            title={zh ? '有观点,不是中立目录' : 'Opinionated, not neutral'}
            body={zh ? '我们给分、写评测、列优缺点。你可能不同意 — 公开说更好。' : 'We rank. We review. We list pros and cons. You may disagree — that\'s fine and we say so openly.'}
          />
          <PrincipleCard
            icon="📊"
            title={zh ? '真实数据 > star 数' : 'Install data beats stars'}
            body={zh ? 'Smithery 调用量、npm 下载、最后 commit 日期 — 比 star 更难造假。' : 'Smithery calls, npm downloads, last commit date — harder to fake than stars.'}
          />
          <PrincipleCard
            icon="🌐"
            title={zh ? '中英同步' : 'Bilingual from day one'}
            body={zh ? '每篇教程、每个工具描述都有中英两版。' : 'Every tutorial and tool entry exists in both English and Chinese.'}
          />
          <PrincipleCard
            icon="🔓"
            title={zh ? '对竞品公平' : 'Fair to competitors'}
            body={zh ? '我们自己也会做工具(AgentStore Studio)。但打分算法公开、同类公平列。' : 'We also build tools (AgentStore Studio). Rankings are transparent, competitors listed fairly.'}
          />
        </div>
      </SectionBlock>

      {/* Contact */}
      <SectionBlock number="04" title={zh ? '联系 / 加入' : 'Get in touch'}>
        <p>{zh ? '三种方式:' : 'Three ways:'}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 not-prose">
          <ContactCard icon={<Twitter className="h-5 w-5" />} label="Twitter" href="https://twitter.com" desc={zh ? '聊聊 + 每日更新' : 'Chat + daily updates'} />
          <ContactCard icon={<Github className="h-5 w-5" />} label="GitHub" href="https://github.com" desc={zh ? '贡献工具 / 报 bug' : 'Contribute / report bugs'} />
          <ContactCard icon={<Send className="h-5 w-5" />} label="Telegram" href="#" desc={zh ? '中文社区群' : 'Chinese community'} />
        </div>
        <p className="text-sm">
          {zh ? '想让你的工具上架?' : 'Want to list your tool?'}{' '}
          <Link href="/about/submit" className="text-primary hover:underline">
            {zh ? '看投稿指南' : 'See submission guide'}
          </Link>
          {' · '}
          {zh ? '想了解打分机制?' : 'Curious about our scoring?'}{' '}
          <Link href="/about/methodology" className="text-primary hover:underline">
            {zh ? '方法论文档' : 'Read the methodology'}
          </Link>
        </p>
      </SectionBlock>
    </PageShell>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        <span className="text-primary">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="text-2xl font-semibold tabular-nums glow-number text-foreground">
        {value}
      </div>
    </div>
  );
}

function PrincipleCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{body}</div>
    </div>
  );
}

function ContactCard({ icon, label, href, desc }: { icon: React.ReactNode; label: string; href: string; desc: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/40 transition"
    >
      <div className="flex items-center gap-3 mb-1">
        <span className="text-primary">{icon}</span>
        <span className="font-semibold">{label}</span>
      </div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </a>
  );
}
