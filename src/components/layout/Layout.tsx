import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '../ui/BackToTop';
import { PageLoader } from './PageLoader';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`min-h-screen bg-bg text-ink${isHome ? ' layout-home' : ''}`}>
      <PageLoader />
      <Header />
      <main className={isHome ? '' : 'pt-16 lg:pt-[72px]'}>
        <Outlet />
      </main>
      {!isHome ? <Footer /> : null}
      <BackToTop />
    </div>
  );
}
