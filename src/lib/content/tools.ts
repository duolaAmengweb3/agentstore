/**
 * 工具内容系统 loader
 *
 * 从 content/tools/*.md 读取 frontmatter,转成 Tool[]
 * mock-data.ts 会调用本 loader 合并它的硬编码 fallback 数据
 *
 * 为什么这样切:
 *  - 新工具走 markdown(可 PR 贡献、有 git history)
 *  - 旧工具不强制迁移,有兜底数据
 *  - 构建时读一次,零运行时开销(Next.js SSG/ISR 友好)
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type ToolFromMarkdown = {
  slug: string;
  name: string;
  author: string;
  tagline: { en: string; zh: string };
  /** 编辑写的 2-3 句判断(editorial-content.mjs) */
  summary?: { en: string; zh: string };
  category: 'cex' | 'dex' | 'wallet' | 'data' | 'framework' | 'infra';
  icon: string;
  official?: boolean;
  metrics: {
    smitheryCalls?: number;
    npmMonthly?: number;
    githubStars?: number;
    weeklyGrowthPct?: number;
  };
  score: number;
};

/** 详情页专用:含 README / repoInfo 等服务端字段 */
export type ToolDetailData = {
  /** 编辑写的 2-3 句判断(editorial-content.mjs,详情页 hero 下面展示) */
  summary?: { en: string; zh: string };
  // README 自动抓取
  readme?: {
    about?: string;
    features?: string[];
    modules?: { name: string; count?: number; description: string }[];
    examples?: string[];
    installCmd?: string;
    lastFetched?: string;
  };
  // GitHub repo meta 自动抓取
  repoInfo?: {
    language?: string;
    license?: string;
    topics?: string[];
    contributors?: number;
    openIssues?: number;
    archived?: boolean;
    createdAt?: string;
    defaultBranch?: string;
  };
  // fetch 数据源(给"官方链接"区域用)
  fetch?: {
    github?: string;
    npm?: string;
    smithery?: string;
    pypi?: string;
  };
};

const CONTENT_DIR = path.join(process.cwd(), 'content/tools');

/** 读一次,整进程生命周期缓存 */
let cache: ToolFromMarkdown[] | null = null;

export function loadToolsFromMarkdown(): ToolFromMarkdown[] {
  if (cache) return cache;
  if (!fs.existsSync(CONTENT_DIR)) {
    cache = [];
    return cache;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  const list: ToolFromMarkdown[] = [];

  for (const filename of files) {
    const filepath = path.join(CONTENT_DIR, filename);
    try {
      const raw = fs.readFileSync(filepath, 'utf8');
      const { data } = matter(raw);
      const slug = String(data.slug || filename.replace(/\.md$/, ''));
      list.push({
        slug,
        name: String(data.name || slug),
        author: String(data.author || 'unknown'),
        tagline: {
          en: String(data.tagline_en || ''),
          zh: String(data.tagline_zh || data.tagline_en || ''),
        },
        summary: data.summary_en || data.summary_zh
          ? {
              en: String(data.summary_en || data.summary_zh || ''),
              zh: String(data.summary_zh || data.summary_en || ''),
            }
          : undefined,
        category: (data.category || 'data') as ToolFromMarkdown['category'],
        icon: String(data.icon || '📦'),
        official: !!data.official,
        metrics: {
          smitheryCalls: data.metrics?.smitheryCalls,
          npmMonthly: data.metrics?.npmMonthly,
          githubStars: data.metrics?.githubStars,
          weeklyGrowthPct: data.metrics?.weeklyGrowthPct,
        },
        score: typeof data.score === 'number' ? data.score : 7.0,
      });
    } catch (err) {
      console.warn(`[content] skip ${filename}:`, (err as Error).message);
    }
  }

  cache = list;
  return list;
}

/**
 * 服务端专用:读某个工具的完整 detail 数据(含 readme / repoInfo)
 * 不会进 client bundle(因为只在 server component 里 import)
 */
export function getToolDetailData(slug: string): ToolDetailData | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  try {
    const raw = fs.readFileSync(filepath, 'utf8');
    const { data } = matter(raw);
    const summary = data.summary_en || data.summary_zh
      ? {
          en: String(data.summary_en || data.summary_zh || ''),
          zh: String(data.summary_zh || data.summary_en || ''),
        }
      : undefined;
    return {
      summary,
      readme: data.readme,
      repoInfo: data.repoInfo,
      fetch: data.fetch,
    };
  } catch {
    return null;
  }
}

/** 合并 md 源 + 内存 fallback,按 slug 去重(md 优先) */
export function mergeWithMarkdown<T extends { slug: string }>(fallback: T[]): (T | ToolFromMarkdown)[] {
  const md = loadToolsFromMarkdown();
  const mdSlugs = new Set(md.map((t) => t.slug));
  // mock 里有的、md 里没有的,保留 mock
  const mockOnly = fallback.filter((t) => !mdSlugs.has(t.slug));
  return [...md, ...mockOnly];
}
