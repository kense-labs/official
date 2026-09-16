import { useI18n } from '../../i18n/useI18n';
import { Reveal, SectionHeader } from '@kense/ui';

export function Encryption() {
  const { t } = useI18n();
  const noise = '2Z IR2Xw8T 8 8uF VaLu 8U GogdMxxNa X5 MR7YEmwkYfkaM R O9Ycnik2x 6 vR add l5 8aw 7kO';

  return (
    <section className="relative overflow-hidden px-5 py-[96px] md:py-[145px]">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 break-all font-mono text-xs leading-6 text-muted select-none">
          {Array.from({ length: 18 })
            .map(() => noise)
            .join(' ')}
        </div>
      </div>
      <Reveal className="relative">
        <SectionHeader
          badge={t.encryption.badge}
          title={t.encryption.title}
          titleMobile={t.encryption.titleMobile}
          description={t.encryption.description}
        />
      </Reveal>
      <Reveal delayMs={100} className="relative mx-auto mt-12 max-w-xl text-center">
        <p className="text-base text-ink-muted">{t.encryption.footnote}</p>
      </Reveal>
    </section>
  );
}
