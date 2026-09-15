import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { useI18n } from '../../i18n/useI18n';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="px-5 py-[96px] md:py-[148px]">
      <Reveal>
        <SectionHeader
          badge={t.about.badge}
          title={t.about.title}
          titleMobile={t.about.titleMobile}
          description={t.about.description}
        />
      </Reveal>
      <Reveal delayMs={80} className="mt-10 flex justify-center">
        <Button href="#about" variant="secondary">
          {t.about.values}
        </Button>
      </Reveal>
    </section>
  );
}
