import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化大数字为紧凑形式:12,345 → 12.3K
 */
export function formatCompact(n: number): string {
  if (n < 1000) return n.toString();
  if (n < 10_000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  if (n < 1_000_000) return Math.round(n / 1000) + 'K';
  return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
}

/**
 * 格式化带千位分隔符:12345 → 12,345
 */
export function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

/**
 * "3 min ago" / "2h ago" — 极简相对时间
 */
export function timeAgo(d: Date | string | number, locale: 'en' | 'zh' = 'en'): string {
  const date = d instanceof Date ? d : new Date(d);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const units = [
    { limit: 60, div: 1, suffixEn: 's', suffixZh: '秒前' },
    { limit: 3600, div: 60, suffixEn: 'min', suffixZh: '分钟前' },
    { limit: 86400, div: 3600, suffixEn: 'h', suffixZh: '小时前' },
    { limit: 604800, div: 86400, suffixEn: 'd', suffixZh: '天前' },
    { limit: Infinity, div: 604800, suffixEn: 'w', suffixZh: '周前' },
  ];
  for (const u of units) {
    if (seconds < u.limit) {
      const v = Math.max(1, Math.floor(seconds / u.div));
      return locale === 'zh'
        ? `${v} ${u.suffixZh}`
        : `${v} ${u.suffixEn} ago`;
    }
  }
  return '';
}
