import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

export function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { t, locale } = useI18n();

  const listTitle =
    pathname === '/pricing'
      ? t.meta.pricingTitle
      : pathname === '/docs'
        ? t.meta.docsTitle
        : pathname === '/blog'
          ? t.meta.blogTitle
          : pathname === '/login'
            ? t.meta.loginTitle
            : pathname === '/signup'
              ? t.meta.signupTitle
              : pathname.startsWith('/docs/') || pathname.startsWith('/blog/')
                ? null
                : t.meta.homeTitle;

  useEffect(() => {
    if (listTitle) document.title = listTitle;
  }, [listTitle]);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      const description = pathname.startsWith('/docs')
        ? t.docs.description
        : pathname.startsWith('/blog')
          ? t.blog.description
          : t.meta.description;
      meta.setAttribute('content', description);
    }
  }, [locale, pathname, t.blog.description, t.docs.description, t.meta.description]);

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
