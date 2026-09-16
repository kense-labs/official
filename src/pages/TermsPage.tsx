import { useTitle } from 'ahooks';
import { LegalDoc } from '../components/content/LegalDoc';
import { useI18n } from '../i18n/useI18n';

export function TermsPage() {
  const { t } = useI18n();
  const copy = t.site.terms;
  useTitle(copy.documentTitle);

  return (
    <LegalDoc
      kicker={copy.kicker}
      title={copy.title}
      updated={copy.updated}
      lead={copy.lead}
      tocLabel={t.site.tocLabel}
      sections={copy.sections}
    />
  );
}
