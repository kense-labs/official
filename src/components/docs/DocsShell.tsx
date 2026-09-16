import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { DocsProductSwitch } from './DocsProductSwitch';
import {
  docsByProduct,
  getDocProduct,
  productForSlug,
} from '../../content/docs';
import { loc } from '../../content/types';
import { useI18n } from '../../i18n/useI18n';

export function DocsShell({
  children,
  currentSlug,
}: {
  children: ReactNode;
  currentSlug?: string;
}) {
  const { t, locale } = useI18n();
  const productId = productForSlug(currentSlug);
  const product = getDocProduct(productId);
  const entries = docsByProduct(productId);

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar" aria-label={t.docs.contents}>
        <DocsProductSwitch productId={productId} />

        <div className="docs-sidebar-nav">
          <p className="docs-sidebar-heading">{t.docs.sections[product.sections[0]]}</p>
          <ul>
            {entries.map((doc) => {
              const active = doc.slug === currentSlug;
              return (
                <li key={doc.slug}>
                  <NavLink
                    to={`/docs/${doc.slug}`}
                    className={`docs-sidebar-link${active ? ' is-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {loc(locale, doc.title)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="docs-main">{children}</div>
    </div>
  );
}
