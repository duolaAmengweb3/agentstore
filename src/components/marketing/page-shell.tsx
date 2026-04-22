import * as React from 'react';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';

/**
 * 共享的"静态页"壳 — 顶部 orb 背景 + container 中等宽度
 */
export function PageShell({
  label,
  title,
  subtitle,
  accent = 'violet',
  children,
}: {
  label: string;
  title: string;
  subtitle?: string;
  accent?: 'violet' | 'cyan' | 'emerald';
  children: React.ReactNode;
}) {
  const orbColors: Record<string, string> = {
    violet: 'bg-violet-600',
    cyan: 'bg-cyan-500',
    emerald: 'bg-emerald-500',
  };
  return (
    <>
      <Nav />
      <main className="relative">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0">
            <div className={`orb ${orbColors[accent]} -left-20 -top-20 h-80 w-80 opacity-20 animate-float-slow`} />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>
          <div className="container relative py-10 md:py-14 max-w-4xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {label}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
              {title}
            </h1>
            {subtitle && <p className="text-muted-foreground max-w-2xl text-base md:text-lg">{subtitle}</p>}
          </div>
        </section>
        <section className="container py-10 md:py-14 max-w-4xl">
          <article className="space-y-8">{children}</article>
        </section>
      </main>
      <Footer />
    </>
  );
}

/** 样式化的 section,每一块独立卡片感 */
export function SectionBlock({
  title,
  children,
  number,
}: {
  title: string;
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-4">
        {number && (
          <span className="font-mono text-sm text-muted-foreground tabular-nums">
            {number}
          </span>
        )}
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}

/** 公式 / 权重 block */
export function FormulaCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-cyan-500/10 p-5 font-mono text-sm md:text-base">
      {children}
    </div>
  );
}

export function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-2.5 border-b border-border/60 last:border-b-0">
      <div className="w-40 shrink-0 text-sm text-muted-foreground">{k}</div>
      <div className="flex-1 text-sm">{v}</div>
    </div>
  );
}
