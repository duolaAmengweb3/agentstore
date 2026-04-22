'use client';

import * as React from 'react';
import { Download, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Hero 区被滚出视口后,右下角浮一个 GET 按钮
 * 滚到安装区域(id="install")后隐藏(用户在看安装)
 */
export function StickyGet({
  toolName,
  toolIcon,
  score,
  locale,
}: {
  toolName: string;
  toolIcon: string;
  score: number;
  locale: 'en' | 'zh';
}) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const install = document.getElementById('install');
      const installTop = install ? install.getBoundingClientRect().top : Infinity;
      // 滚过 400px 且没看到安装区域时浮出
      setShow(window.scrollY > 400 && installTop > window.innerHeight * 0.4);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handle = () => {
    document.getElementById('install')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-40 transition-all duration-300',
        show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      )}
    >
      <button
        onClick={handle}
        className="group flex items-center gap-3 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl shadow-black/30 p-2 pr-4 hover:scale-[1.02] active:scale-[0.98] transition"
      >
        <div className="h-11 w-11 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
          {toolIcon}
        </div>
        <div className="flex flex-col items-start">
          <div className="text-xs text-muted-foreground leading-tight">{toolName}</div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="tabular-nums">{score.toFixed(1)}</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] text-white text-sm font-semibold shadow-lg shadow-primary/40 group-hover:brightness-110 transition">
          <Download className="h-3.5 w-3.5" />
          {locale === 'zh' ? '装上' : 'GET'}
        </div>
      </button>
    </div>
  );
}
