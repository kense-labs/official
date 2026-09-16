import { useI18n } from '../../i18n/useI18n';
import { Reveal, SectionHeader } from '@kense/ui';

export function WorkSection() {
  const { t } = useI18n();

  return (
    <section id="work" className="relative px-5 py-[96px] md:py-[148px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(78, 96, 255,.12),transparent_70%)]" />
      <Reveal>
        <SectionHeader
          badge={t.work.badge}
          title={t.work.title}
          titleMobile={t.work.titleMobile}
          description={t.work.description}
        />
      </Reveal>

      <Reveal delayMs={120} className="mx-auto mt-16 max-w-[960px]">
        <div className="grid gap-4 md:grid-cols-2">
          {t.work.capabilities.map((item, i) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.01))] p-6 transition duration-300 hover:border-[rgba(195,120,250,.35)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-detail">
                {t.work.capabilityLabel} {i + 1}
              </div>
              <p className="text-base leading-6 text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
