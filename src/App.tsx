import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageLoading } from '@kense/ui';
import { Layout } from './components/layout/Layout';
import { AuthLayout } from './components/auth/AuthLayout';
import { RouteEffects } from './components/layout/RouteEffects';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { DocsPage } from './pages/DocsPage';
import { DocsArticlePage } from './pages/DocsArticlePage';
import { LoginPage, SignupPage } from './pages/LoginPage';
import { CloudPage } from './pages/CloudPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || undefined;

  return (
    <BrowserRouter basename={basename}>
      <PageLoading variant="global" />
      <RouteEffects />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="os" element={<CloudPage />} />
          <Route path="cloud" element={<Navigate to="/#os" replace />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="docs/:slug" element={<DocsArticlePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
