import { useId, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import { AuthCover } from '../components/auth/AuthCover';
import { GitHubIcon, WeChatIcon } from '../components/auth/AuthIcons';
import { Button } from '../components/ui/Button';
import { useI18n } from '../i18n/useI18n';

type Mode = 'login' | 'signup';

const OAUTH = [
  { id: 'github', Icon: GitHubIcon },
  { id: 'wechat', Icon: WeChatIcon },
] as const;

export function LoginPage({ mode: modeProp }: { mode?: Mode }) {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const mode: Mode =
    modeProp ?? (params.get('mode') === 'signup' ? 'signup' : 'login');
  const isSignup = mode === 'signup';
  const copy = isSignup ? t.auth.signup : t.auth.login;

  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useTitle(copy.documentTitle);

  function handleOAuth(provider: (typeof OAUTH)[number]['id']) {
    setBusy(provider);
    setMessage(null);
    window.setTimeout(() => {
      setBusy(null);
      setMessage(t.auth.oauthSoon);
    }, 500);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy('email');
    setMessage(null);
    window.setTimeout(() => {
      setBusy(null);
      setMessage(t.auth.emailSoon);
    }, 500);
  }

  return (
    <div className="auth-split">
      <AuthCover />

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel-inner">
          <div className="auth-card-head">
            <h1 id="auth-title" className="auth-title">
              {copy.title}
            </h1>
            <p className="auth-subtitle">{copy.subtitle}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {isSignup ? (
              <div className="auth-field">
                <label htmlFor={nameId}>{t.auth.fields.name}</label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.auth.fields.namePlaceholder}
                />
              </div>
            ) : null}

            <div className="auth-field">
              <label htmlFor={emailId}>{t.auth.fields.email}</label>
              <input
                id={emailId}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth.fields.emailPlaceholder}
              />
            </div>

            <div className="auth-field">
              <div className="auth-field-row">
                <label htmlFor={passwordId}>{t.auth.fields.password}</label>
                {!isSignup ? (
                  <Link
                    to="/login"
                    className="auth-inline-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.auth.forgot}
                  </Link>
                ) : null}
              </div>
              <div className="auth-password">
                <input
                  id={passwordId}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.auth.fields.passwordPlaceholder}
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-pressed={showPassword}
                >
                  {showPassword ? t.auth.hidePassword : t.auth.showPassword}
                </button>
              </div>
            </div>

            {isSignup ? (
              <label className="auth-check">
                <input type="checkbox" required />
                <span>
                  {t.auth.agreePrefix}{' '}
                  <Link to="/terms">{t.footer.links.terms}</Link> {t.auth.agreeAnd}{' '}
                  <Link to="/privacy">{t.footer.links.privacy}</Link>
                </span>
              </label>
            ) : null}

            <Button type="submit" className="auth-submit" disabled={busy !== null}>
              {busy === 'email' ? t.auth.connecting : copy.submit}
            </Button>
          </form>

          {message ? (
            <p className="auth-message" role="status">
              {message}
            </p>
          ) : null}

          <p className="auth-switch">
            {copy.switchPrompt}{' '}
            <Link to={isSignup ? '/login' : '/signup'}>{copy.switchAction}</Link>
          </p>

          <div className="auth-oauth-foot">
            <p className="auth-oauth-foot-label">{t.auth.orSocial}</p>
            <div className="auth-oauth-icons" role="group" aria-label={t.auth.oauthGroup}>
              {OAUTH.map(({ id, Icon }) => (
                <button
                  key={id}
                  type="button"
                  className="auth-oauth-icon"
                  disabled={busy !== null}
                  aria-label={t.auth.providers[id]}
                  title={t.auth.providers[id]}
                  onClick={() => handleOAuth(id)}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          <p className="auth-panel-legal">
            <Link to="/privacy">{t.footer.links.privacy}</Link>
            <span aria-hidden>·</span>
            <Link to="/terms">{t.footer.links.terms}</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export function SignupPage() {
  return <LoginPage mode="signup" />;
}
