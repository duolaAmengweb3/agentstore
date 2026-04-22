'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LocaleSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'zh' ? 'en' : 'zh';
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 text-xs font-medium text-muted-foreground transition hover:text-foreground hover:border-border"
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      {locale === 'zh' ? 'EN' : '中'}
    </button>
  );
}
