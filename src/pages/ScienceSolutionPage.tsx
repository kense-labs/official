import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

const MEDIA = {
  hero: '/site/science-hero.svg',
  heroWidth: 1080,
  heroHeight: 484,
  problem: [
    '/site/science-illust-split.svg',
    '/site/science-illust-opaque.svg',
    '/site/science-illust-provenance.svg',
  ] as [string, string, string],
  preview: '/site/science-preview.svg',
  arch: '/site/science-arch.svg',
  flow: '/site/science-flow.svg',
  ctaVisual: '/site/science-hero.svg',
};

export function ScienceSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'science') ?? t.solutions.items[0];
  const page = t.solutions.science;
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
