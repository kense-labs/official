import { Link, Outlet } from 'react-router-dom';
import { LangSwitch } from '../ui/LangSwitch';
import { PageLoader } from '../layout/PageLoader';
import { useI18n } from '../../i18n/useI18n';
import { Logo } from '@kense/ui';

/** Full-bleed auth shell with corner chrome. */
export function AuthLayout() {
  const { t } = useI18n();

  return (
    <div className="auth-layout">
      <PageLoader />
      <Link to="/" className="auth-layout-logo" aria-label="Kense">
        <Logo layout="horizontal" size={36} />
      </Link>
      <div className="auth-layout-tools">
        <LangSwitch />
        <Link to="/" className="auth-top-link">
          {t.auth.backHome}
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
