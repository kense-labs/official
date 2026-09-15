import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { RouteEffects } from './components/layout/RouteEffects';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { CloudPage } from './pages/CloudPage';

export default function App() {
  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || undefined;

  return (
    <BrowserRouter basename={basename}>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cloud" element={<CloudPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
