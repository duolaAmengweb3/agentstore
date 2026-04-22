import type { MetadataRoute } from 'next';
import { tools, collections } from '@/lib/mock-data';
import { tutorials } from '@/lib/mock-tutorials';
import { routing } from '@/i18n/routing';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agentstore.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '',
    '/apps',
    '/collections',
    '/rankings',
    '/rankings/overall',
    '/rankings/growth',
    '/rankings/new',
    '/rankings/underrated',
    '/rankings/overrated',
    '/rankings/dead',
    '/updates',
    '/learn',
    '/wizard',
    '/search',
    '/compare',
    '/about',
    '/about/submit',
    '/about/methodology',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    // 静态路由
    for (const r of staticRoutes) {
      entries.push({
        url: `${BASE}/${locale}${r}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: r === '' ? 1.0 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${BASE}/${l}${r}`])
          ),
        },
      });
    }

    // 工具详情
    for (const t of tools) {
      entries.push({
        url: `${BASE}/${locale}/apps/${t.slug}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.8,
      });
    }

    // 合集详情
    for (const c of collections) {
      entries.push({
        url: `${BASE}/${locale}/collections/${c.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    // 教程
    for (const tut of tutorials) {
      entries.push({
        url: `${BASE}/${locale}/learn/${tut.slug}`,
        lastModified: new Date(tut.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // 创作者
    const authors = Array.from(new Set(tools.map((t) => t.author)));
    for (const a of authors) {
      entries.push({
        url: `${BASE}/${locale}/creators/${a}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.5,
      });
    }
  }

  return entries;
}
