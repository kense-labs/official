import { useI18n } from '../../i18n/useI18n';

const icons = [
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M27 23c2.73-.57 5-3.11 5-6a6 6 0 0 0-6-6 6 6 0 1 0-12 0 6 6 0 0 0-6 6c0 2.88 2.29 5.42 5 6"
        stroke="white"
        strokeLinecap="round"
      />
      <path d="M20 28V18M20 17l-3 4h6l-3-4Z" stroke="white" fill="white" />
      <path opacity=".32" d="M13 35v-3h14v3H13Z" fill="white" stroke="white" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="13" stroke="white" fill="url(#g1)" fillOpacity=".24" />
      <circle cx="20" cy="20" r="2" stroke="white" />
      <circle cx="20" cy="7" r="2" stroke="white" />
      <circle cx="20" cy="33" r="2" stroke="white" />
      <circle cx="7" cy="20" r="2" stroke="white" />
      <circle cx="33" cy="20" r="2" stroke="white" />
      <defs>
        <linearGradient id="g1" x1="20" y1="7" x2="20" y2="33">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="5" width="22" height="30" rx="3" stroke="white" />
      <path d="M21 21v-3h14v3H21Z" fill="white" stroke="white" />
      <path opacity=".32" d="M9 14v-3h14v3H9Z" fill="white" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M25 19v-3a5 5 0 0 0-10 0v3" stroke="white" />
      <rect x="13" y="19" width="14" height="10" rx="3" fill="white" />
      <rect
        x="5"
        y="5"
        width="30"
        height="30"
        rx="4"
        stroke="white"
        fill="white"
        fillOpacity=".08"
      />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="11" width="24" height="21" rx="3" stroke="white" />
      <path d="M8 15h24" stroke="white" />
      <path d="M12 8v3M28 8v3" stroke="white" strokeLinecap="round" />
      <path d="M13 19h2v2h-2zm0 6h2v2h-2zm6-6h2v2h-2zm6 0h2v2h-2z" fill="white" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M10 12h20v16H10z" stroke="white" />
      <path d="M14 8h12v4H14z" stroke="white" />
      <path d="M16 18h8M16 22h5" stroke="white" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="18" cy="18" r="8" stroke="white" />
      <path d="M24 24l7 7" stroke="white" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M12 20l6 6 10-14"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="6" y="6" width="28" height="28" rx="6" stroke="white" opacity=".4" />
    </svg>
  ),
];

export function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative z-[2] mx-auto mt-[-78px] w-full max-w-[1200px] px-0 md:px-4">
      <div className="pointer-events-none absolute inset-0 hidden justify-between md:flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-px ${
              i % 2 === 0
                ? 'bg-[linear-gradient(180deg,rgba(255,255,255,.12)_-.89%,transparent_100%)]'
                : 'bg-[linear-gradient(0deg,rgba(255,255,255,.12)_-.89%,transparent_100%)]'
            }`}
          />
        ))}
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.08)_25%,rgba(255,255,255,.08)_75%,transparent)]" />
      </div>

      <div className="flex gap-0 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
        {t.features.items.map((f, i) => (
          <article
            key={f.title}
            className="relative min-w-[322px] overflow-hidden px-8 pb-9 pt-6 transition-colors md:min-w-0 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,.06))] after:opacity-0 after:transition-opacity after:duration-[450ms] hover:after:opacity-100"
          >
            <div className="mb-5">{icons[i]}</div>
            <h3 className="mb-1 text-base font-medium leading-6 text-ink">{f.title}</h3>
            <p className="text-base leading-6 text-ink-muted">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
