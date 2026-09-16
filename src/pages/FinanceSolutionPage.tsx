import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

const MEDIA = {
  hero: '/site/finance-hero.svg',
  heroWidth: 1080,
  heroHeight: 484,
  problem: [
    '/site/finance-illust-silos.svg',
    '/site/finance-illust-reconnect.svg',
    '/site/finance-illust-agent.svg',
  ] as [string, string, string],
  preview: '/site/finance-preview.svg',
  arch: '/site/finance-arch.svg',
  flow: '/site/finance-flow.svg',
  ctaVisual: '/site/finance-hero.svg',
};

export function FinanceSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'finance') ?? t.solutions.items[0];
  const page = t.solutions.finance;
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
