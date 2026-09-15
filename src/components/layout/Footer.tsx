import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { useI18n } from '../../i18n/useI18n';

type FooterProps = {
  /** Content only — parent provides the shell. */
  bare?: boolean;
  /** Tighter spacing when embedded in a closing snap panel. */
  compact?: boolean;
};

export function Footer({ bare = false, compact = false }: FooterProps) {
  const { t } = useI18n();

  const columns = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.links.work, to: '/#work' },
        { label: t.footer.links.cloud, to: '/#cloud' },
        { label: t.footer.links.pricing, to: '/pricing' },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { label: t.footer.links.docs, to: '#' },
        { label: t.footer.links.blog, to: '/blog' },
        { label: t.footer.links.security, to: '/#platform' },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { label: t.footer.links.about, to: '/#cta' },
        { label: t.footer.links.careers, to: '#' },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.links.privacy, to: '#' },
        { label: t.footer.links.terms, to: '#' },
      ],
    },
  ];

  const body = (
    <div
      className={`container-site ${
        compact ? 'py-8 lg:py-10' : 'py-16 lg:py-20'
      }`}
    >
      <div
        className={`grid gap-8 lg:grid-cols-[1.2fr_2fr] ${
          compact ? 'lg:gap-10' : 'gap-12'
        }`}
      >
        <div>
          <Logo layout="vertical" size={compact ? 56 : 72} />
          <p
            className={`mt-3 max-w-xs text-sm leading-6 text-ink-muted ${
              compact ? 'line-clamp-2' : ''
            }`}
          >
            {t.footer.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-white">{col.title}</h3>
              <ul className={`mt-3 space-y-2 ${compact ? 'space-y-1.5' : 'mt-4 space-y-3'}`}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex items-center justify-between border-t border-white/8 text-sm text-ink-faint ${
          compact ? 'mt-8 pt-5' : 'mt-14 pt-8'
        }`}
      >
        <p>{t.footer.copyright}</p>
      </div>
    </div>
  );

  if (bare) {
    return <div className="border-t border-white/8 bg-bg">{body}</div>;
  }

  return <footer className="border-t border-white/8 bg-bg">{body}</footer>;
}
