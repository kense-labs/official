import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

const MEDIA = {
  hero: '/site/insight-hero.svg',
  heroWidth: 1080,
  heroHeight: 484,
  problem: [
    '/site/insight-illust-drift.svg',
    '/site/insight-illust-coupled.svg',
    '/site/insight-illust-cost.svg',
  ] as [string, string, string],
  preview: '/site/insight-preview.svg',
  arch: '/site/insight-arch.svg',
  flow: '/site/insight-flow.svg',
  ctaVisual: '/site/insight-hero.svg',
};

export function InsightSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'insight') ?? t.solutions.items[0];
  const page = t.solutions.insight;
  useTitle(page.documentTitle);

  return (
    <SolutionDetailPage
      item={item}
      page={page}
      media={MEDIA}
      solutionsLabel={t.nav.solutions}
      homeLabel={t.nav.home}
      startLabel={t.nav.start}
      demoLabel={t.nav.demo}
    />
  );
}
