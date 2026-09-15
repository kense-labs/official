import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { useI18n } from '../../i18n/useI18n';

export function Cta() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-2">
      <div className="container-pricing relative z-[1] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[26px] font-medium tracking-[-0.5px] text-white md:text-[34px] md:leading-[1.25]">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-muted">
            {t.cta.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button className="h-10 px-5">{t.cta.primary}</Button>
            <Button variant="outline" className="h-10 px-5">
              {t.cta.secondary}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
