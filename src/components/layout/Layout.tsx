import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '../ui/BackToTop';
import { DemoModal } from '../ui/DemoModal';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`min-h-screen bg-bg text-ink${isHome ? ' layout-home' : ''}`}>
      <Header />
      <main className={`relative${isHome ? '' : ' pt-16 lg:pt-[72px]'}`}>
        <Outlet />
      </main>
      {!isHome ? <Footer /> : null}
      <BackToTop />
      <DemoModal />
    </div>
  );
}
