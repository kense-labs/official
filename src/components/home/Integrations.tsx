import { Reveal } from '../ui/Reveal';
import { useI18n } from '../../i18n/useI18n';

export function Integrations() {
  const { t } = useI18n();

  return (
    <section className="py-4 md:py-5">
      <div className="container-pricing">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[24px] font-medium tracking-[-0.4px] text-white md:text-[28px]">
              {t.integrations.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              {t.integrations.description}
            </p>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
          {t.integrations.apps.map((app, i) => (
            <Reveal key={app} className={`delay-${(i % 5) * 75}`}>
              <div className="flex h-14 items-center justify-center rounded-xl border border-white/8 bg-white/[0.02] text-sm font-medium text-ink-muted transition-colors hover:border-primary/40 hover:text-white">
                {app}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
