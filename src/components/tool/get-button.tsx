'use client';

import * as React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

/** 带 sticky 行为的大 GET 按钮 — 滚动到安装区域后变为浮动 */
export function GetButton({
  locale,
  onClick,
  className,
  size = 'md',
}: {
  locale: 'en' | 'zh';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeCls =
    size === 'lg' ? 'h-12 px-7 text-base' :
    size === 'sm' ? 'h-8 px-3.5 text-xs' :
    'h-10 px-5 text-sm';
  const iconCls =
    size === 'lg' ? 'h-4 w-4' :
    size === 'sm' ? 'h-3 w-3' :
    'h-3.5 w-3.5';

  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full font-semibold transition active:scale-[0.98]',
        'bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_50%,#06B6D4_100%)] text-white',
        'shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110',
        sizeCls,
        className
      )}
    >
      <Download className={cn('shrink-0', iconCls)} />
      {locale === 'zh' ? '装上' : 'GET'}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition bg-white/20 pointer-events-none" />
    </button>
  );
}
