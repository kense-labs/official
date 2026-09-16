import { useTitle } from 'ahooks';
import { SolutionDetailPage } from '../components/content/SolutionDetailPage';
import { useI18n } from '../i18n/useI18n';

export function FinanceSolutionPage() {
  const { t } = useI18n();
  const item = t.solutions.items.find((entry) => entry.id === 'finance') ?? t.solutions.items[0];
  const page = t.solutions.finance;
  useTitle(page.documentTitle);

  return (
    <SolutionDetailPage
      item={item}
      page={page}
      tone="finance"
      startLabel={t.nav.start}
      demoLabel={t.nav.demo}
    />
  );
}
