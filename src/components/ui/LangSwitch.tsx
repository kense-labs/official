import { useI18n } from '../../i18n/useI18n';

export function LangSwitch({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] p-0.5 text-xs font-medium ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale('zh')}
        className={`rounded-sm px-2.5 py-1 transition ${
          locale === 'zh'
            ? 'bg-primary/40 text-white'
            : 'text-ink-muted hover:text-white'
        }`}
      >
        {t.lang.zh}
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-sm px-2.5 py-1 transition ${
          locale === 'en'
            ? 'bg-primary/40 text-white'
            : 'text-ink-muted hover:text-white'
        }`}
      >
        {t.lang.en}
      </button>
    </div>
  );
}
