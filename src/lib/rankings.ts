import { tools, type Tool } from './mock-data';

export type RankingType = 'overall' | 'growth' | 'new' | 'underrated' | 'overrated' | 'dead';

export type RankingMeta = {
  type: RankingType;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  accent: string;
  icon: string;
};

export const rankingMeta: Record<RankingType, RankingMeta> = {
  overall: {
    type: 'overall',
    title: { en: 'Overall', zh: '综合榜' },
    subtitle: {
      en: 'Agent Score = 40% calls + 30% activity + 30% rating. Refreshed weekly.',
      zh: 'AgentStore 分 = 调用量 40% + 活跃度 30% + 评分 30%,每周刷新。',
    },
    accent: 'from-amber-500 via-orange-500 to-rose-500',
    icon: '🏆',
  },
  growth: {
    type: 'growth',
    title: { en: 'Weekly growth', zh: '本周增长' },
    subtitle: {
      en: 'Tools that grew the most in the last 7 days (Smithery + npm).',
      zh: '近 7 天增长最快的工具(Smithery + npm 综合)。',
    },
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: '📈',
  },
  new: {
    type: 'new',
    title: { en: 'Rising stars', zh: '新星榜' },
    subtitle: {
      en: 'Launched in the last 60 days, climbing fast.',
      zh: '近 60 天上线,爬升最快。',
    },
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
    icon: '✨',
  },
  underrated: {
    type: 'underrated',
    title: { en: 'Underrated', zh: '低调真品' },
    subtitle: {
      en: 'Low on GitHub stars, high on real-world install count. The opposite of a meme repo.',
      zh: 'GitHub star 少,但真实装机量高。不是刷 star 的空气项目。',
    },
    accent: 'from-sky-500 via-blue-500 to-indigo-500',
    icon: '💎',
  },
  overrated: {
    type: 'overrated',
    title: { en: 'Overrated', zh: '华而不实' },
    subtitle: {
      en: 'GitHub stars but no one installs. Skip these, check the ones they\'re copying.',
      zh: 'star 高但没人装。别装,去看它们在抄的那个。',
    },
    accent: 'from-rose-500 via-red-500 to-orange-500',
    icon: '⚠️',
  },
  dead: {
    type: 'dead',
    title: { en: 'Dead', zh: '已死' },
    subtitle: {
      en: 'No commits in 6+ months. Repo archived or silent.',
      zh: '6 个月没更新。repo 归档或长期沉默。',
    },
    accent: 'from-zinc-500 via-slate-500 to-neutral-600',
    icon: '⚰️',
  },
};

export function rankTools(type: RankingType): Tool[] {
  const t = [...tools];
  switch (type) {
    case 'overall':
      return t.sort((a, b) => b.score - a.score);
    case 'growth':
      return t
        .filter((x) => x.metrics.weeklyGrowthPct != null)
        .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0));
    case 'new':
      // mock:调用量 < 5000 且增长 > 100% 视为新星
      return t
        .filter((x) => (x.metrics.smitheryCalls || 0) < 5000 && (x.metrics.weeklyGrowthPct || 0) > 100)
        .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0));
    case 'underrated':
      // 低 star 高 calls
      return t
        .filter((x) => (x.metrics.smitheryCalls || 0) > 1000 && (x.metrics.githubStars || 0) < 100)
        .sort((a, b) => {
          const ratioA = (a.metrics.smitheryCalls || 0) / Math.max(1, a.metrics.githubStars || 1);
          const ratioB = (b.metrics.smitheryCalls || 0) / Math.max(1, b.metrics.githubStars || 1);
          return ratioB - ratioA;
        });
    case 'overrated':
      // 高 star 低 calls — mock 保留几个样本
      return t
        .filter((x) => (x.metrics.githubStars || 0) > 200 && (x.metrics.smitheryCalls || 0) < 500)
        .sort((a, b) => (b.metrics.githubStars || 0) - (a.metrics.githubStars || 0));
    case 'dead':
      // mock:没有实际 last_push,挑几个低增长 + 小调用的
      return t
        .filter((x) => (x.metrics.weeklyGrowthPct || 0) < 15 && (x.metrics.smitheryCalls || 0) < 2000)
        .slice(0, 6);
  }
}
