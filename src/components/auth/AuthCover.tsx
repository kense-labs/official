import { EXPERT_ORDER, ExpertPack } from '../bot/ExpertPack';
import { useI18n } from '../../i18n/useI18n';

export function AuthCover() {
  const { t } = useI18n();
  const members = t.work.bot.squad;

  return (
    <aside className="auth-cover" aria-label={t.work.bot.aria}>
      <div className="auth-cover-glow auth-cover-glow--a" aria-hidden />
      <div className="auth-cover-glow auth-cover-glow--b" aria-hidden />
      <div className="auth-cover-grid" aria-hidden />

      <div className="auth-cover-copy">
        <h2 className="auth-cover-title">{t.auth.aside.title}</h2>
      </div>

      <div className="auth-cover-squad">
        {EXPERT_ORDER.map((id, i) => {
          const meta = members.find((m) => m.id === id) ?? members[i];
          return (
            <div
              key={id}
              className={`auth-cover-bot auth-cover-bot--${id}`}
              style={{ ['--bot-i' as string]: String(i) }}
            >
              <ExpertPack id={id} name={meta?.name ?? id} role={meta?.role ?? ''} />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
