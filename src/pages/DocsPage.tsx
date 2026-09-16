import { Link } from 'react-router-dom';
import { DocsShell } from '../components/docs/DocsShell';
import { DOC_SECTION_ORDER, docsBySection, docsSorted } from '../content/docs';
import { loc } from '../content/types';
import { useI18n } from '../i18n/useI18n';
import { Reveal } from '@kense/ui';

export function DocsPage() {
  const { t, locale } = useI18n();
  const first = docsSorted()[0];

  return (
    <div className="content-page">
      <div className="container-pricing">
        <DocsShell>
          <Reveal>
            <p className="content-kicker">{t.nav.docs}</p>
            <h1 className="content-title">{t.docs.title}</h1>
            <p className="content-lead">{t.docs.description}</p>
            {first ? (
              <Link to={`/docs/${first.slug}`} className="content-primary-link">
                {t.docs.startCta}
              </Link>
            ) : null}
          </Reveal>

          <div className="docs-hub-grid">
            {DOC_SECTION_ORDER.map((section) => (
              <section key={section} className="docs-hub-card">
                <h2>{t.docs.sections[section]}</h2>
                <ul>
                  {docsBySection(section).map((doc) => (
                    <li key={doc.slug}>
                      <Link to={`/docs/${doc.slug}`}>
                        <span>{loc(locale, doc.title)}</span>
                        <small>{loc(locale, doc.description)}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </DocsShell>
      </div>
    </div>
  );
}
