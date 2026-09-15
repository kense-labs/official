import { Reveal } from '../ui/Reveal';
import { useI18n } from '../../i18n/useI18n';

export function LogoCloud() {
  const { t } = useI18n();
  const names = [...t.logos.names, ...t.logos.names];

  return (
    <section className="border-y border-white/6 py-6 md:py-8">
      <div className="container-pricing">
        <Reveal>
          <p className="text-center text-sm font-medium text-ink-faint">
            {t.logos.label}
          </p>
        </Reveal>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-bg to-transparent" />
          <div className="marquee-track flex w-max gap-10">
            {names.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 min-w-[120px] items-center justify-center text-sm font-medium tracking-wide text-white/35"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
