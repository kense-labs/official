import { Link, useParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import { DocsShell } from '../components/docs/DocsShell';
import { adjacentDocs, getDoc } from '../content/docs';
import { loc } from '../content/types';
import { useI18n } from '../i18n/useI18n';

export function DocsArticlePage() {
  const { slug = '' } = useParams();
  const { t, locale } = useI18n();
  const doc = getDoc(slug);
  const { prev, next } = adjacentDocs(slug);

  useTitle(doc ? `${loc(locale, doc.title)} — ${t.docs.title}` : t.meta.docsTitle);

  if (!doc) {
    return (
      <div className="content-page">
        <div className="container-pricing">
          <DocsShell>
            <h1 className="content-title">{t.docs.notFound.title}</h1>
            <p className="content-lead">{t.docs.notFound.description}</p>
            <Link to="/docs" className="content-primary-link">
              {t.docs.notFound.back}
            </Link>
          </DocsShell>
        </div>
      </div>
    );
  }

  const Content = loc(locale, doc.Content);
  const headings = doc.headings;

  return (
    <div className="content-page">
      <div className="container-pricing">
        <DocsShell currentSlug={doc.slug}>
          <div className="docs-article">
            <article>
              <nav className="content-breadcrumb" aria-label="breadcrumb">
                <Link to="/docs">{t.docs.title}</Link>
                <span>/</span>
                <span>{t.docs.sections[doc.section]}</span>
              </nav>
              <h1 className="content-title">{loc(locale, doc.title)}</h1>
              <p className="content-lead">{loc(locale, doc.description)}</p>
              <p className="content-meta">
                {t.docs.updated} {doc.updated}
              </p>
              <div className="article-prose mdx-prose">
                <Content />
              </div>
              <nav className="docs-pager">
                {prev ? (
                  <Link to={`/docs/${prev.slug}`} className="docs-pager-link">
                    <span>{t.docs.prev}</span>
                    <strong>{loc(locale, prev.title)}</strong>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link to={`/docs/${next.slug}`} className="docs-pager-link docs-pager-link--next">
                    <span>{t.docs.next}</span>
                    <strong>{loc(locale, next.title)}</strong>
                  </Link>
                ) : null}
              </nav>
            </article>
            {headings.length > 0 ? (
              <nav className="docs-toc" aria-label={t.docs.onThisPage}>
                <p>{t.docs.onThisPage}</p>
                <ul>
                  {headings.map((heading) => (
                    <li key={heading.id} className={heading.depth === 3 ? 'is-sub' : undefined}>
                      <a href={`#${heading.id}`}>{loc(locale, heading.title)}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        </DocsShell>
      </div>
    </div>
  );
}
