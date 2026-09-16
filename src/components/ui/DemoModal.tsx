import { useEffect, useId, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { useSnapshot } from 'valtio';
import { ConfettiBurst } from './ConfettiBurst';
import { Button } from './Button';
import { useI18n } from '../../i18n/useI18n';
import { uiActions, uiStore } from '../../store/ui';

export function DemoModal() {
  const snap = useSnapshot(uiStore);
  const { t } = useI18n();
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    if (!snap.demoModalOpen) {
      setName('');
      setEmail('');
      setSubmitting(false);
      setDone(false);
      setBurst(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') uiActions.closeDemoModal();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [snap.demoModalOpen]);

  if (!snap.demoModalOpen) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setBurst(true);
      window.setTimeout(() => setBurst(false), 4200);
    }, 450);
  }

  return createPortal(
    <>
      <ConfettiBurst active={burst} />
      <div
        className="demo-modal-root"
        role="presentation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) uiActions.closeDemoModal();
        }}
      >
        <div
          className="demo-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="demo-modal-close"
            aria-label={t.demoModal.close}
            onClick={() => uiActions.closeDemoModal()}
          >
            ×
          </button>

          {done ? (
            <div className="demo-modal-success">
              <div className="demo-modal-success-mark" aria-hidden>
                ✓
              </div>
              <h2 id={titleId} className="demo-modal-title">
                {t.demoModal.successTitle}
              </h2>
              <p className="demo-modal-subtitle">{t.demoModal.successBody}</p>
              <Button className="demo-modal-submit" onClick={() => uiActions.closeDemoModal()}>
                {t.demoModal.successDone}
              </Button>
            </div>
          ) : (
            <>
              <h2 id={titleId} className="demo-modal-title">
                {t.demoModal.title}
              </h2>
              <p className="demo-modal-subtitle">{t.demoModal.subtitle}</p>
              <form className="demo-modal-form" onSubmit={handleSubmit}>
                <div className="demo-modal-field">
                  <label htmlFor={nameId}>{t.demoModal.name}</label>
                  <input
                    id={nameId}
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.demoModal.namePlaceholder}
                    autoFocus
                  />
                </div>
                <div className="demo-modal-field">
                  <label htmlFor={emailId}>{t.demoModal.email}</label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.demoModal.emailPlaceholder}
                  />
                </div>
                <Button type="submit" className="demo-modal-submit" disabled={submitting}>
                  {submitting ? t.demoModal.submitting : t.demoModal.submit}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}
