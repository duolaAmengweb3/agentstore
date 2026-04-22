'use client';

import * as React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, RotateCcw, Check, Star, Activity } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn, formatCompact } from '@/lib/utils';
import { tools, type Tool, type Category } from '@/lib/mock-data';
import { GetButton } from '@/components/tool/get-button';

type Role = 'degen' | 'dev' | 'quant' | 'beginner';
type Goal = 'hl' | 'memecoin' | 'arb' | 'safety' | 'build' | 'data';
type Runtime = 'claude' | 'cursor' | 'eliza' | 'chatgpt';

type Answers = {
  role?: Role;
  goals: Goal[];
  runtime?: Runtime;
  budget?: 'free' | 'cheap' | 'any';
};

const steps = [
  { id: 'role', titleEn: 'Who are you?', titleZh: '你是谁?' },
  { id: 'goals', titleEn: 'What do you want to do?', titleZh: '你想干什么?' },
  { id: 'runtime', titleEn: 'Which AI do you use?', titleZh: '你用哪个 AI?' },
  { id: 'budget', titleEn: 'Budget?', titleZh: '预算?' },
  { id: 'result', titleEn: 'Here\'s your kit', titleZh: '这是你的工具箱' },
] as const;

export function WizardFlow({ locale }: { locale: 'en' | 'zh' }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({ goals: [] });

  const canNext =
    (step === 0 && answers.role) ||
    (step === 1 && answers.goals.length > 0) ||
    (step === 2 && answers.runtime) ||
    (step === 3 && answers.budget);

  const recommended = React.useMemo(() => recommend(answers), [answers]);

  const reset = () => {
    setStep(0);
    setAnswers({ goals: [] });
  };

  return (
    <div>
      {/* Progress */}
      <div className="mb-8 max-w-2xl">
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                'flex-1 h-1 rounded-full transition',
                i <= step ? 'bg-gradient-to-r from-violet-500 to-cyan-500' : 'bg-muted'
              )}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {locale === 'zh' ? `第 ${step + 1} 步 / 共 ${steps.length} 步` : `Step ${step + 1} / ${steps.length}`}
          </span>
          {step > 0 && step < 4 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              <RotateCcw className="h-3 w-3" />
              {locale === 'zh' ? '重置' : 'Reset'}
            </button>
          )}
        </div>
      </div>

      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-8">
        {locale === 'zh' ? steps[step].titleZh : steps[step].titleEn}
      </h2>

      {/* Step body */}
      {step === 0 && <RoleStep value={answers.role} onChange={(v) => setAnswers({ ...answers, role: v })} locale={locale} />}
      {step === 1 && <GoalsStep value={answers.goals} onChange={(v) => setAnswers({ ...answers, goals: v })} locale={locale} />}
      {step === 2 && <RuntimeStep value={answers.runtime} onChange={(v) => setAnswers({ ...answers, runtime: v })} locale={locale} />}
      {step === 3 && <BudgetStep value={answers.budget} onChange={(v) => setAnswers({ ...answers, budget: v })} locale={locale} />}
      {step === 4 && <ResultStep tools={recommended} locale={locale} />}

      {/* Nav buttons */}
      {step < 4 && (
        <div className="mt-10 flex items-center gap-3">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '上一步' : 'Back'}
            </button>
          )}
          <button
            disabled={!canNext}
            onClick={() => setStep(step + 1)}
            className={cn(
              'group inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold transition',
              canNext
                ? 'bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] text-white shadow-lg shadow-primary/30 hover:brightness-110'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            )}
          >
            {step === 3
              ? (locale === 'zh' ? '生成推荐' : 'Generate kit')
              : (locale === 'zh' ? '下一步' : 'Next')}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="mt-8">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {locale === 'zh' ? '再做一次' : 'Start over'}
          </button>
        </div>
      )}
    </div>
  );
}

// ===== Step components =====

function Option<T extends string>({
  active, onClick, icon, title, desc,
}: {
  active: boolean; onClick: () => void; icon: string;
  title: string; desc: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative text-left rounded-2xl border p-5 transition lift-on-hover',
        active
          ? 'border-primary bg-primary/10'
          : 'border-border/60 bg-card/40 hover:border-border'
      )}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
      {active && (
        <div className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
          <Check className="h-3 w-3 text-primary-foreground" />
        </div>
      )}
    </button>
  );
}

function RoleStep({ value, onChange, locale }: { value?: Role; onChange: (r: Role) => void; locale: 'en' | 'zh' }) {
  const opts: { id: Role; icon: string; titleEn: string; titleZh: string; descEn: string; descZh: string }[] = [
    { id: 'degen',    icon: '🔥', titleEn: 'Degen trader',     titleZh: 'Degen 交易者', descEn: 'Daily crypto Twitter, want your AI to hunt alpha.', descZh: '每天刷加密推特,想让 AI 帮你找 alpha。' },
    { id: 'dev',      icon: '💻', titleEn: 'Agent builder',    titleZh: 'Agent 开发者', descEn: 'Build Eliza / Virtuals / custom agents.',          descZh: '做 Eliza / Virtuals / 自定义 agent。' },
    { id: 'quant',    icon: '🧮', titleEn: 'Quant / researcher', titleZh: '量化 / 研究',  descEn: 'Use Cursor / Claude Code, write strategies.',     descZh: '用 Cursor / Claude Code 写策略。' },
    { id: 'beginner', icon: '🌱', titleEn: 'Beginner',         titleZh: '新手',        descEn: 'First time playing with AI and crypto.',            descZh: '第一次玩 AI + 加密。' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
      {opts.map((o) => (
        <Option
          key={o.id}
          active={value === o.id}
          onClick={() => onChange(o.id)}
          icon={o.icon}
          title={locale === 'zh' ? o.titleZh : o.titleEn}
          desc={locale === 'zh' ? o.descZh : o.descEn}
        />
      ))}
    </div>
  );
}

function GoalsStep({ value, onChange, locale }: { value: Goal[]; onChange: (v: Goal[]) => void; locale: 'en' | 'zh' }) {
  const opts: { id: Goal; icon: string; en: string; zh: string }[] = [
    { id: 'hl',       icon: '⚡', en: 'Trade Hyperliquid',       zh: '玩 Hyperliquid' },
    { id: 'memecoin', icon: '🔥', en: 'Hunt memecoins',          zh: '狙击 memecoin' },
    { id: 'arb',      icon: '⚖️', en: 'Find funding arb',        zh: '找 funding 套利' },
    { id: 'safety',   icon: '🛡️', en: 'Avoid rugs / scams',      zh: '避免 rug / 骗局' },
    { id: 'build',    icon: '🧱', en: 'Build my own agent',      zh: '做自己的 agent' },
    { id: 'data',     icon: '📊', en: 'Analyze onchain data',    zh: '分析链上数据' },
  ];
  const toggle = (id: Goal) =>
    onChange(value.includes(id) ? value.filter((x) => x !== id) : [...value, id]);
  return (
    <>
      <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
        {locale === 'zh' ? '可多选。' : 'Pick as many as you want.'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
        {opts.map((o) => (
          <Option
            key={o.id}
            active={value.includes(o.id)}
            onClick={() => toggle(o.id)}
            icon={o.icon}
            title={locale === 'zh' ? o.zh : o.en}
            desc=""
          />
        ))}
      </div>
    </>
  );
}

function RuntimeStep({ value, onChange, locale }: { value?: Runtime; onChange: (v: Runtime) => void; locale: 'en' | 'zh' }) {
  const opts: { id: Runtime; icon: string; en: string; zh: string; descEn: string; descZh: string }[] = [
    { id: 'claude',  icon: '🤖', en: 'Claude Desktop', zh: 'Claude Desktop', descEn: 'Anthropic\'s desktop app, MCP native.', descZh: 'Anthropic 桌面客户端,原生支持 MCP。' },
    { id: 'cursor',  icon: '↗️', en: 'Cursor',         zh: 'Cursor',         descEn: 'AI-first code editor.',                 descZh: 'AI 原生代码编辑器。' },
    { id: 'eliza',   icon: '🧬', en: 'Eliza / custom', zh: 'Eliza / 自建',    descEn: 'Autonomous agent frameworks.',          descZh: '自治 agent 框架。' },
    { id: 'chatgpt', icon: '💬', en: 'ChatGPT + tools', zh: 'ChatGPT + 工具', descEn: 'OpenAI\'s assistant ecosystem.',       descZh: 'OpenAI 生态。' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
      {opts.map((o) => (
        <Option
          key={o.id}
          active={value === o.id}
          onClick={() => onChange(o.id)}
          icon={o.icon}
          title={locale === 'zh' ? o.zh : o.en}
          desc={locale === 'zh' ? o.descZh : o.descEn}
        />
      ))}
    </div>
  );
}

function BudgetStep({ value, onChange, locale }: { value?: 'free' | 'cheap' | 'any'; onChange: (v: 'free' | 'cheap' | 'any') => void; locale: 'en' | 'zh' }) {
  const opts: { id: 'free' | 'cheap' | 'any'; icon: string; en: string; zh: string; descEn: string; descZh: string }[] = [
    { id: 'free',  icon: '🌱', en: 'Free only',        zh: '只要免费的',  descEn: 'No credit card.',                     descZh: '不掏钱。' },
    { id: 'cheap', icon: '💵', en: 'Under $20 / month', zh: '月 $20 以内', descEn: 'Willing to pay for the good ones.', descZh: '愿意为精品付点钱。' },
    { id: 'any',   icon: '🚀', en: 'Whatever works',    zh: '不在乎预算',  descEn: 'Want the best tool regardless.',    descZh: '要最好的,不在乎。' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
      {opts.map((o) => (
        <Option
          key={o.id}
          active={value === o.id}
          onClick={() => onChange(o.id)}
          icon={o.icon}
          title={locale === 'zh' ? o.zh : o.en}
          desc={locale === 'zh' ? o.descZh : o.descEn}
        />
      ))}
    </div>
  );
}

function ResultStep({ tools, locale }: { tools: Tool[]; locale: 'en' | 'zh' }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs text-primary mb-5">
        <Sparkles className="h-3 w-3" />
        {locale === 'zh' ? `${tools.length} 个工具推荐` : `${tools.length} tools picked for you`}
      </div>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        {locale === 'zh'
          ? '基于你的回答,下面是最匹配的工具。装第一个就够开始用了,再慢慢补齐。'
          : 'Based on your answers. Install the top one to get started, add more later.'}
      </p>

      <div className="space-y-3">
        {tools.map((tool, i) => (
          <div
            key={tool.slug}
            className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5 lift-on-hover"
          >
            <div className="w-8 text-center shrink-0 text-xs font-mono text-muted-foreground">
              #{i + 1}
            </div>
            <Link
              href={`/apps/${tool.slug}`}
              className="flex items-center gap-4 flex-1 min-w-0"
            >
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold truncate">{tool.name}</span>
                  {tool.official && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider shrink-0">
                      Official
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                  {tool.tagline[locale]}
                </div>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  {tool.metrics.smitheryCalls != null && (
                    <span className="inline-flex items-center gap-1">
                      <Activity className="h-3 w-3" />
                      {formatCompact(tool.metrics.smitheryCalls)}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {tool.score}
                  </span>
                </div>
              </div>
            </Link>
            <GetButton locale={locale} size="md" />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <div className="font-semibold mb-0.5">
            {locale === 'zh' ? '一键装整套' : 'Install the whole set'}
          </div>
          <div className="text-xs text-muted-foreground">
            {locale === 'zh' ? '生成合并 config,直接粘贴到 Claude Desktop。' : 'Get a merged config for Claude Desktop.'}
          </div>
        </div>
        <button className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:brightness-110 transition whitespace-nowrap">
          <Sparkles className="h-3.5 w-3.5" />
          {locale === 'zh' ? '生成 config' : 'Generate config'}
        </button>
      </div>
    </div>
  );
}

// ===== 推荐引擎(简单规则)=====
function recommend(answers: Answers): Tool[] {
  // 推荐只引用 tools 数组里确实存在的 slug
  const goalTo: Record<Goal, string[]> = {
    hl:       ['hyperliquid-python-sdk', 'mektigboy-server-hyperliquid', 'kukapay-hyperliquid-info-mcp', 'openbroker-cli'],
    memecoin: ['cryptoiz-mcp', 'jupiter-ultra', 'kukapay-memecoin-radar-mcp', 'goplus-mcp', 'kukapay-rug-check-mcp'],
    arb:      ['kukapay-funding-rates-mcp', 'ccxt-mcp'],
    safety:   ['goplus-mcp', 'kukapay-rug-check-mcp', 'kukapay-honeypot-detector-mcp'],
    build:    ['elizaos', 'solana-agent-kit', 'coinbase-agentkit', 'goat-sdk'],
    data:     ['blockscout-mcp', 'coingecko-mcp', 'etherscan-mcp', 'quantoracle-mcp', 'moralis-mcp'],
  };

  const wanted = new Set<string>();
  answers.goals.forEach((g) => goalTo[g].forEach((s) => wanted.add(s)));

  // 根据 role 加底
  if (answers.role === 'beginner') {
    wanted.add('coingecko-mcp');
    wanted.add('blockscout-mcp');
  }
  if (answers.role === 'degen') {
    wanted.add('jupiter-ultra');
    wanted.add('cryptoiz-mcp');
  }
  if (answers.role === 'dev') {
    wanted.add('elizaos');
    wanted.add('solana-agent-kit');
  }
  if (answers.role === 'quant') {
    wanted.add('quantoracle-mcp');
    wanted.add('kukapay-funding-rates-mcp');
  }

  // 至少 5 个,不够从 overall top 补
  let picked = tools.filter((t) => wanted.has(t.slug));
  if (picked.length < 5) {
    const extras = [...tools]
      .sort((a, b) => b.score - a.score)
      .filter((t) => !wanted.has(t.slug))
      .slice(0, 5 - picked.length);
    picked = [...picked, ...extras];
  }
  // 免费预算:过滤付费 ... mock 里没付费字段,跳过
  return picked.slice(0, 8).sort((a, b) => b.score - a.score);
}
