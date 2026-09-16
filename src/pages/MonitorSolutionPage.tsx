import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

const MEDIA = {
  hero: '/site/monitor-illust-cover.png',
  heroWidth: 1080,
  heroHeight: 484,
  problem: [
    '/site/monitor-illust-signal-lag.jpg',
    '/site/monitor-illust-split-views.jpg',
    '/site/monitor-illust-no-replay.jpg',
  ] as [string, string, string],
  preview: '/site/monitor-preview-monitor.jpg',
  arch: '/site/monitor-arch-work-os-monitor.svg',
  flow: '/site/monitor-flow-decision-intel.png',
  ctaVisual: '/site/monitor-illust-cover.png',
};

export function MonitorSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'monitor') ?? t.solutions.items[0];
  const page = t.solutions.monitor;
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
