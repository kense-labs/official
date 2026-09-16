import { useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOC_PRODUCTS, getDocProduct, type DocProductId } from '../../content/docs';
import { useI18n } from '../../i18n/useI18n';

export function DocsProductSwitch({ productId }: { productId: DocProductId }) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = getDocProduct(productId);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="docs-product-switch" ref={rootRef}>
      <p className="docs-product-switch-label">{t.docs.productSwitch.label}</p>
      <button
        type="button"
        className={`docs-product-switch-trigger${open ? ' is-open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="docs-product-switch-current">
          <span className="docs-product-switch-name">{t.docs.products[current.id].name}</span>
          <span className="docs-product-switch-desc">{t.docs.products[current.id].blurb}</span>
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3.5 5.25 7 8.75l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul id={listId} className="docs-product-switch-menu" role="listbox" aria-label={t.docs.productSwitch.label}>
          {DOC_PRODUCTS.map((product) => {
            const active = product.id === productId;
            const copy = t.docs.products[product.id];
            return (
              <li key={product.id} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`docs-product-switch-option${active ? ' is-active' : ''}`}
                  onClick={() => {
                    setOpen(false);
                    if (product.id !== productId) {
                      navigate(`/docs/${product.entrySlug}`);
                    }
                  }}
                >
                  <span className="docs-product-switch-name">{copy.name}</span>
                  <span className="docs-product-switch-desc">{copy.blurb}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
