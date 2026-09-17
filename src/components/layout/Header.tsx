import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { useResponsive } from 'ahooks';
import { useScrolled } from '../../lib/media';
import { LangSwitch } from '../ui/LangSwitch';
import { uiActions, uiStore } from '../../store/ui';
import { useI18n } from '../../i18n/useI18n';
import { Button, Logo } from '@kense/ui';

export function Header() {
  const snap = useSnapshot(uiStore);
  const { t } = useI18n();
  const location = useLocation();
  const responsive = useResponsive();
  const scrolled = useScrolled(8);
  const isDesktop = Boolean(responsive?.lg);

  const nav = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.docs, to: '/docs' },
    { label: t.nav.blog, to: '/blog' },
    { label: t.nav.pricing, to: '/pricing' },
  ];

  useEffect(() => {
    uiActions.closeMobileNav();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isDesktop) uiActions.closeMobileNav();
  }, [isDesktop]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', snap.mobileNavOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [snap.mobileNavOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 isolate border-b transition-colors duration-200 ${
        scrolled || snap.mobileNavOpen
          ? 'border-white/8 bg-bg/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-site relative z-[2] flex h-16 items-center justify-between lg:h-[72px]">
        <Link
          to="/"
          aria-label="Kense"
          onClick={(e) => {
            uiActions.closeMobileNav();
            if (location.pathname === '/') {
              e.preventDefault();
              document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="relative z-[2] min-w-0 shrink-0"
        >
          <Logo layout="horizontal" size={32} tone="dark" className="site-header-logo" alt="" />
        </Link>

        <nav className="absolute left-1/2 z-[2] hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.label}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors [text-shadow:0_1px_12px_rgba(11,12,17,0.85)] ${
                  active ? 'text-white' : 'text-ink-muted hover:text-white'
                }`}
                onClick={(e) => {
                  if (item.to === '/' && location.pathname === '/') {
                    e.preventDefault();
                    uiActions.closeMobileNav();
                    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-[5] isolate hidden items-center gap-2 lg:flex">
          <LangSwitch />
          <Button variant="outline" className="h-9" onClick={() => uiActions.openDemoModal()}>
            {t.nav.demo}
          </Button>
          <Button to="/signup" className="h-9 shadow-[0_0_0_6px_rgba(11,12,17,0.75)]">
            {t.nav.start}
          </Button>
        </div>

        <button
          type="button"
          className="relative z-[2] flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 lg:hidden"
          aria-label={snap.mobileNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={snap.mobileNavOpen}
          onClick={() => uiActions.toggleMobileNav()}
        >
          <span className="sr-only">Menu</span>
          {snap.mobileNavOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3.5 3.5l9 9M12.5 3.5l-9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <div className="flex w-4 flex-col gap-1.5">
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
            </div>
          )}
        </button>
      </div>

      {snap.mobileNavOpen ? (
        <div className="max-h-[calc(100dvh-var(--site-header-h)-env(safe-area-inset-bottom,0px))] overflow-y-auto overscroll-contain border-t border-white/8 bg-bg px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-md px-3 py-3 text-base ${
                      active ? 'bg-white/[0.04] text-white' : 'text-white'
                    }`}
                    onClick={(e) => {
                      uiActions.closeMobileNav();
                      if (item.to === '/' && location.pathname === '/') {
                        e.preventDefault();
                        document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-mobile-company">
              <p className="nav-mobile-solutions-label">{t.footer.company}</p>
              <ul className="nav-mobile-company-list">
                {[
                  { label: t.footer.links.about, to: '/about' },
                  { label: t.footer.links.careers, to: '/careers' },
                ].map((item) => {
                  const active = location.pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        aria-current={active ? 'page' : undefined}
                        className={`block rounded-md px-3 py-2.5 text-[15px] ${
                          active ? 'bg-white/[0.04] text-white' : 'text-ink-muted'
                        }`}
                        onClick={() => uiActions.closeMobileNav()}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <div className="mt-6 flex flex-col items-stretch gap-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <LangSwitch />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                uiActions.closeMobileNav();
                uiActions.openDemoModal();
              }}
            >
              {t.nav.demo}
            </Button>
            <Button to="/signup" className="w-full" onClick={() => uiActions.closeMobileNav()}>
              {t.nav.start}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
