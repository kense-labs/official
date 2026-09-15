import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { useI18n } from '../../i18n/useI18n';

export function Compliance() {
  const { t } = useI18n();

  return (
    <section className="py-2">
      <div className="container-pricing">
        <div className="grid items-center gap-6 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(28,20,76,0.55),rgba(11,12,17,0.9))] p-5 md:grid-cols-[1.3fr_1fr] md:gap-8 md:p-7">
          <Reveal>
            <h2 className="text-[22px] font-medium tracking-[-0.4px] text-white md:text-[26px]">
              {t.compliance.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ink-muted">
              {t.compliance.description}
            </p>
            <Button className="mt-5 h-10">{t.compliance.cta}</Button>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-3 gap-2">
              {t.compliance.badges.map((badge) => (
                <div
                  key={badge}
                  className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-xs font-medium text-white md:h-20 md:text-sm"
                >
                  {badge}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
