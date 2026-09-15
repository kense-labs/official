import { useI18n } from '../../i18n/useI18n';
import { useScrolled } from '../../lib/media';

const SHOW_AFTER = 480;

export function BackToTop() {
  const { t } = useI18n();
  const visible = useScrolled(SHOW_AFTER);

  return (
    <button
      type="button"
      aria-label={t.a11y.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-md border border-white/12 bg-bg-elevated/90 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-primary md:bottom-8 md:right-8 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 3.5 L8 12.5 M8 3.5 L4.5 7 M8 3.5 L11.5 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
