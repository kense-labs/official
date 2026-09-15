import { ClayAvatar } from './ClayAvatar';
import type { ClayBotId } from './clayPresets';

export type ExpertSpec = {
  id: ClayBotId;
  code: string;
  sku: string;
};

export const EXPERT_SPECS: Record<ClayBotId, ExpertSpec> = {
  docs: { id: 'docs', code: 'DOC-01', sku: 'KX-DOC-2401' },
  code: { id: 'code', code: 'DEV-02', sku: 'KX-DEV-2402' },
  science: { id: 'science', code: 'SCI-03', sku: 'KX-SCI-2403' },
  finance: { id: 'finance', code: 'FIN-04', sku: 'KX-FIN-2404' },
};

export const EXPERT_ORDER: ClayBotId[] = [
  'docs',
  'code',
  'science',
  'finance',
];

function RoleIcon({ id }: { id: ClayBotId }) {
  if (id === 'docs') {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
        <path d="M7 3h7l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M14 3v4h4M9 12h6M9 16h5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === 'code') {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
        <path
          d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === 'science') {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
        <path
          d="M9 3h6M10 3v6L6 18a3 3 0 0 0 2.7 4h6.6A3 3 0 0 0 18 18l-4-9V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8v8M9.5 10.5c.8-1 2-1.5 2.5-1.5s1.8.4 2.5 1.5M9.5 13.5c.8 1 2 1.5 2.5 1.5s1.8-.4 2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type ExpertPackProps = {
  id: ClayBotId;
  name: string;
  role: string;
  className?: string;
  /** Compact: ClayAvatar only (hero greeting) */
  compact?: boolean;
};

export function ExpertPack({
  id,
  name,
  role,
  className = '',
  compact = false,
}: ExpertPackProps) {
  const spec = EXPERT_SPECS[id];
  const shortLabel = name.replace(/\s*EXPERT\s*/i, '').trim() || name;

  if (compact) {
    return (
      <div className={`expert-pack is-compact ${className}`}>
        <ClayAvatar
          bot={id}
          size={44}
          autoPlay
          followPointer={false}
          showGround={false}
          aria-label={name}
        />
      </div>
    );
  }

  return (
    <article
      className={`expert-pack expert-pack--${id} ${className}`}
      aria-label={`${name} — ${role}`}
    >
      <div className="expert-pack-hang" aria-hidden>
        <span className="expert-pack-hang-hole" />
      </div>
      <div className="expert-pack-shell">
        <div className="expert-pack-glass" aria-hidden />
        <div className="expert-pack-icon" aria-hidden>
          <RoleIcon id={id} />
        </div>

        <p className="expert-pack-role" aria-hidden>
          {shortLabel}
        </p>

        <div className="expert-pack-figure">
          <ClayAvatar
            bot={id}
            size={120}
            autoPlay
            followPointer={false}
            showGround={false}
            aria-label={name}
          />
        </div>

        <div className="expert-pack-sticker" aria-hidden>
          <div className="expert-pack-sticker-brand">
            <span className="expert-pack-sticker-mark">
              <span className="expert-pack-sticker-glyph" />
              KENSE
            </span>
            <span>{spec.code}</span>
          </div>
          <div className="expert-pack-sticker-meta">
            <span>{spec.sku}</span>
            <span>SPEC / 01</span>
          </div>
          <div className="expert-pack-sticker-row">
            <div className="expert-pack-barcode" />
            <svg className="expert-pack-wire" viewBox="0 0 28 28" aria-hidden>
              <circle cx="14" cy="11" r="6" fill="none" stroke="#111" strokeWidth="1.2" />
              <rect
                x="10"
                y="17"
                width="8"
                height="7"
                rx="1"
                fill="none"
                stroke="#111"
                strokeWidth="1.2"
              />
              <path d="M11 9h6M14 6v3" stroke="#111" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="expert-pack-caption">{role}</p>
    </article>
  );
}
