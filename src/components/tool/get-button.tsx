'use client';

import * as React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 行为:
 *  - 有 smitheryId(工具在 Smithery 上)→ 新标签打开 Smithery 安装页(他们能一键装)
 *  - 否则 → 滚到同页 #install 区域
 *
 * AgentStore 是目录 / 策展站,不承担 runtime 分发,所以不会装装饰性假按钮。
 */
export function GetButton({
  locale,
  className,
  size = 'md',
  smitheryId,
}: {
  locale: 'en' | 'zh';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Smithery server id(e.g. "polymarket-mcp"),有就直链出去 */
  smitheryId?: string;
}) {
  const sizeCls =
    size === 'lg' ? 'h-12 px-7 text-base' :
    size === 'sm' ? 'h-8 px-3.5 text-xs' :
    'h-10 px-5 text-sm';
  const iconCls =
    size === 'lg' ? 'h-4 w-4' :
    size === 'sm' ? 'h-3 w-3' :
    'h-3.5 w-3.5';

  const label = smitheryId
    ? (locale === 'zh' ? '去 Smithery 装' : 'Install via Smithery')
    : (locale === 'zh' ? '查看安装' : 'View install');

  const baseCls = cn(
    'group relative inline-flex items-center gap-2 rounded-full font-semibold transition active:scale-[0.98]',
    'bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_50%,#06B6D4_100%)] text-white',
    'shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110',
    sizeCls,
    className,
  );

  const iconEl = <Download className={cn('shrink-0', iconCls)} />;
  const extIconEl = smitheryId ? <ExternalLink className={cn('shrink-0 opacity-70', iconCls)} /> : null;
  const overlay = <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition bg-white/20 pointer-events-none" />;

  if (smitheryId) {
    return (
      <a
        href={`https://smithery.ai/server/${smitheryId}`}
        target="_blank"
        rel="noopener noreferrer"
        className={baseCls}
      >
        {iconEl}
        {label}
        {extIconEl}
        {overlay}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        const el = typeof document !== 'undefined' ? document.getElementById('install') : null;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      className={baseCls}
    >
      {iconEl}
      {label}
      {overlay}
    </button>
  );
}
