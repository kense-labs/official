import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

export function ScienceSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'science') ?? t.solutions.items[0];
  const page = t.solutions.science;
  useTitle(page.documentTitle);

  return (
    <SolutionDetailPage
      item={item}
      page={page}
      tone="science"
      startLabel={t.nav.start}
      demoLabel={t.nav.demo}
    />
  );
}
