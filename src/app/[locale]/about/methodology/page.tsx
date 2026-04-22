import { setRequestLocale } from 'next-intl/server';
import { Activity, TrendingUp, Star } from 'lucide-react';
import { PageShell, SectionBlock, FormulaCard, KV } from '@/components/marketing/page-shell';

export const metadata = { title: 'Ranking methodology · AgentStore' };

export default async function MethodologyPage({
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
      label={zh ? '评分方法论' : 'Methodology'}
      title={zh ? '我们怎么打分和排名' : 'How we score and rank'}
      subtitle={zh
        ? '算法全部公开。如果你是工具作者,看完这个你就知道怎么"对付"我们 — 但我们设计时就假设你会看。'
        : 'Fully public. If you\'re a tool author, this tells you how to "game" us — by design, because we assume you will read it.'}
      accent="emerald"
    >
      <SectionBlock number="01" title={zh ? 'AgentStore 分公式' : 'AgentStore Score formula'}>
        <FormulaCard>
          <span className="text-primary font-semibold">AgentStore Score</span> ={' '}
          <br />
          <span className="text-cyan-400">0.40</span> × {zh ? '调用量分' : 'install_score'} +{' '}
          <span className="text-emerald-400">0.30</span> × {zh ? '活跃度分' : 'activity_score'} +{' '}
          <span className="text-violet-400">0.30</span> × {zh ? '用户评分' : 'rating_score'}
        </FormulaCard>
        <p>{zh ? '每周六 UTC 00:00 重算一次。' : 'Recalculated every Saturday at 00:00 UTC.'}</p>
      </SectionBlock>

      <SectionBlock number="02" title={zh ? '每一项怎么算' : 'How each component works'}>
        <div className="rounded-2xl border border-border/60 bg-card/30 p-5">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-3">
            <Activity className="h-4 w-4" />
            {zh ? '调用量分(40%)' : 'Install score (40%)'}
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {zh
              ? '真实使用量是最重要指标。取工具在 Smithery / npm / PyPI / GitHub 上的活动量化 + 标准化。'
              : 'Actual usage is the most important. We take Smithery calls, npm / PyPI monthly downloads, then normalize.'}
          </p>
          <FormulaCard>
            install_score = log10(smithery_calls + npm_monthly × 3 + pypi_monthly × 3) / 6
          </FormulaCard>
          <p className="text-xs text-muted-foreground mt-3">
            {zh
              ? 'npm / PyPI 月下载乘 3 倍是为了与 Smithery 累计调用可比。log10 平滑长尾。'
              : 'npm / PyPI monthly × 3 to be comparable to cumulative Smithery calls. log10 smooths the long tail.'}
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/30 p-5">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-3">
            <TrendingUp className="h-4 w-4" />
            {zh ? '活跃度分(30%)' : 'Activity score (30%)'}
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {zh ? '衡量维护情况和社区参与。' : 'Measures maintenance and community engagement.'}
          </p>
          <FormulaCard>
            activity_score = (commit_recency + contributors + issue_response) / 3
          </FormulaCard>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>· {zh ? 'commit_recency: 最后 commit 距今天数,<30d=1.0, >180d=0.0' : 'commit_recency: days since last commit, <30d=1.0, >180d=0.0'}</li>
            <li>· {zh ? 'contributors: log10(# contributors) / 2, max 1.0' : 'contributors: log10(# contributors) / 2, max 1.0'}</li>
            <li>· {zh ? 'issue_response: 中位响应时间 <48h=1.0' : 'issue_response: median response <48h=1.0'}</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/30 p-5">
          <div className="inline-flex items-center gap-2 text-violet-400 font-semibold mb-3">
            <Star className="h-4 w-4" />
            {zh ? '用户评分(30%)' : 'Rating score (30%)'}
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {zh ? 'AgentStore 用户评价和我们编辑打分的加权平均。' : 'Weighted blend of user reviews and our editors\' assessment.'}
          </p>
          <FormulaCard>
            rating_score = user_avg × min(count / 10, 1.0) + editor_score × (1 - min(count / 10, 1.0))
          </FormulaCard>
          <p className="text-xs text-muted-foreground mt-3">
            {zh
              ? '评价少于 10 条时,编辑分权重高;评价多了,用户评分占主导。'
              : 'Editor weight dominates below 10 reviews; user ratings take over above that threshold.'}
          </p>
        </div>
      </SectionBlock>

      <SectionBlock number="03" title={zh ? '6 张榜单怎么筛' : 'The 6 rankings'}>
        <div className="rounded-2xl border border-border/60 bg-card/30 divide-y divide-border/60">
          <KV k={zh ? '综合榜' : 'Overall'}        v={zh ? '按 AgentStore Score 降序,全部工具' : 'All tools sorted by AgentStore Score'} />
          <KV k={zh ? '本周增长' : 'Weekly growth'} v={zh ? '近 7 天(Smithery + npm)增长率,需至少 30 日有数据' : 'Past 7 days growth (Smithery + npm), ≥30 days of data required'} />
          <KV k={zh ? '新星榜' : 'Rising stars'}   v={zh ? '上线 ≤60 天 + 累计调用 ≥1,000' : 'Launched ≤60 days + cumulative calls ≥1,000'} />
          <KV k={zh ? '低调真品' : 'Underrated'}   v={zh ? 'GitHub star <100 + Smithery 调用 ≥1,000' : 'GitHub stars <100 + Smithery calls ≥1,000'} />
          <KV k={zh ? '华而不实' : 'Overrated'}    v={zh ? 'GitHub star >200 + Smithery 调用 <500' : 'GitHub stars >200 + Smithery calls <500'} />
          <KV k={zh ? '已死' : 'Dead'}             v={zh ? '最后 commit 距今 >180 天,或仓库归档' : 'Last commit >180 days ago, or repo archived'} />
        </div>
      </SectionBlock>

      <SectionBlock number="04" title={zh ? '防刷机制' : 'Anti-gaming measures'}>
        <ul className="space-y-2">
          <li>· {zh ? 'npm / PyPI 下载做了 CI 下载识别(固定时间段的规律性下载不计)' : 'npm / PyPI downloads filter out CI patterns (regular scheduled pulls don\'t count)'}</li>
          <li>· {zh ? '同 IP 短时间大量 Smithery 调用做限速' : 'Same-IP burst Smithery calls are rate-limited before counting'}</li>
          <li>· {zh ? '用户评分需要登录,新账号有冷却期' : 'User reviews require login; new accounts have a cooldown'}</li>
          <li>· {zh ? '我们会监测异常,被发现刷分会降权或除名' : 'Anomalies get flagged; proven gaming leads to deranking or removal'}</li>
        </ul>
      </SectionBlock>

      <SectionBlock number="05" title={zh ? '我们自己的工具怎么处理' : 'How our own tools are handled'}>
        <p>
          {zh
            ? 'AgentStore Studio 自营工具用同一套算法。在页面上会额外标 "AgentStore Studio" 徽章,但不加分也不减分。榜单里要是我们自己工具排第一,我们会公开解释数据。'
            : 'AgentStore Studio tools use the same algorithm. They display an "AgentStore Studio" badge for transparency, but receive no score bonus. If an in-house tool tops a ranking, we\'ll explain why in the data.'}
        </p>
      </SectionBlock>

      <SectionBlock number="06" title={zh ? '有异议?' : 'Disagree with a ranking?'}>
        <p>
          {zh
            ? '打开 GitHub issue,或者发邮件到 methodology@agentstore.xyz 附上你看到的数据。我们会公开回复。'
            : 'Open a GitHub issue, or email methodology@agentstore.xyz with the data you\'re seeing. We respond publicly.'}
        </p>
      </SectionBlock>
    </PageShell>
  );
}
