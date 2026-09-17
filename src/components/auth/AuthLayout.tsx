import { Link, Outlet } from 'react-router-dom';
import { Logo } from '@kense/ui';
import { useI18n } from '../../i18n/useI18n';
import { LangSwitch } from '../ui/LangSwitch';

/** Full-bleed auth shell with corner chrome. */
export function AuthLayout() {
  const { t } = useI18n();

  return (
    <div className="auth-layout relative">
      <Link to="/" className="auth-layout-logo" aria-label="Kense">
        <Logo layout="horizontal" size={36} tone="dark" alt="" />
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
