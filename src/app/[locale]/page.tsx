import { setRequestLocale } from 'next-intl/server';
import { Nav } from '@/components/home/nav';
import { HeroSearch } from '@/components/home/hero-search';
import { Scenarios } from '@/components/home/scenarios';
import { EditorPicks } from '@/components/home/editor-picks';
import { LiveTicker } from '@/components/home/live-ticker';
import { RankingsGrid } from '@/components/home/rankings-grid';
import { CategoryTiles } from '@/components/home/category-tiles';
import { CollectionsGrid } from '@/components/home/collections-grid';
import { CategoryShowdown } from '@/components/home/category-showdown';
import { CreatorStories } from '@/components/home/creator-stories';
import { WizardCta } from '@/components/home/wizard-cta';
import { TopicTiles } from '@/components/home/topic-tiles';
import { LearnSubscribe } from '@/components/home/learn-subscribe';
import { Footer } from '@/components/home/footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="relative">
        <HeroSearch />
        {/* 编辑策展:先帮用户定位"你想做什么 + 编辑推荐谁" */}
        <Scenarios />
        <EditorPicks />
        {/* 按板块同类 top-3 对比 —— 让用户直观看到"同类选谁" */}
        <CategoryShowdown />
        {/* 浏览入口 */}
        <CategoryTiles />
        <CollectionsGrid />
        {/* 数据榜单 — 给愿意看 metric 的用户,位置下沉 */}
        <LiveTicker />
        <RankingsGrid />
        {/* 社区 + 学习 */}
        <CreatorStories />
        <WizardCta />
        <TopicTiles />
        <LearnSubscribe />
      </main>
      <Footer />
    </>
  );
}
