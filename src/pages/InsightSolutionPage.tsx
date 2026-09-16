import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

export function InsightSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'insight') ?? t.solutions.items[0];
  const page = t.solutions.insight;
  useTitle(page.documentTitle);

  return (
    <SolutionDetailPage
      item={item}
      page={page}
      tone="insight"
      startLabel={t.nav.start}
      demoLabel={t.nav.demo}
    />
  );
}
