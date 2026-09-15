import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTitle } from 'ahooks';
import { useI18n } from '../../i18n/useI18n';

export function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { t, locale } = useI18n();

  const title =
    pathname === '/pricing'
      ? t.meta.pricingTitle
      : pathname === '/blog'
        ? t.meta.blogTitle
        : t.meta.homeTitle;

  useTitle(title);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', t.meta.description);
    }
  }, [locale, t.meta.description]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [pathname, hash]);

  return null;
}
