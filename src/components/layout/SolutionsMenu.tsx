import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../lib/publicUrl';
import { useI18n } from '../../i18n/useI18n';

const OPEN_DELAY = 60;
const CLOSE_DELAY = 140;

export function SolutionsMenu() {
  const { t } = useI18n();
  const items = t.solutions.items;
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const active = items.find((item) => item.id === activeId) ?? items[0];

  function clearTimers() {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }

  function scheduleOpen() {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY);
  }

  function scheduleClose() {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  }

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      className={`nav-mega${open ? ' is-open' : ''}`}
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={scheduleOpen}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        className="nav-mega-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        {t.nav.solutions}
        <svg
          className="nav-mega-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 4.5 L6 7.5 L9 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={panelId}
        className="nav-mega-panel"
        role="region"
        aria-label={t.solutions.panelAria}
        aria-hidden={!open}
      >
        <div className="nav-mega-panel-inner">
          <div className="nav-mega-list" role="list" aria-label={t.solutions.listLabel}>
            {items.map((item) => {
              const selected = item.id === active.id;
              return (
                <Link
                  key={item.id}
                  role="listitem"
                  to={item.to}
                  className={`nav-mega-item${selected ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-mega-item-name">{item.name}</span>
                  <span className="nav-mega-item-tagline">{item.tagline}</span>
                </Link>
              );
            })}
          </div>

          <div className="nav-mega-preview">
            <div className="nav-mega-cover">
              <img
                src={publicUrl(active.cover)}
                alt=""
                width={480}
                height={320}
                decoding="async"
              />
            </div>
            <div className="nav-mega-preview-copy">
              <p className="nav-mega-preview-name">{active.name}</p>
              <p className="nav-mega-preview-tagline">{active.tagline}</p>
              <p className="nav-mega-preview-desc">{active.description}</p>
              <Link
                to={active.to}
                className="nav-mega-preview-link"
                onClick={() => setOpen(false)}
              >
                {t.solutions.learnMore}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
