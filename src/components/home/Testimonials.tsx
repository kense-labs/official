import { useI18n } from '../../i18n/useI18n';
import { Reveal, SectionHeader } from '@kense/ui';

export function Testimonials() {
  const { t } = useI18n();
  const quotes = t.testimonials.quotes;
  const row = [...quotes, ...quotes];

  return (
    <section className="overflow-hidden py-[96px] md:py-[148px]">
      <Reveal className="px-5">
        <SectionHeader
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />
      </Reveal>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent md:w-32" />
        <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-4 px-4">
          {row.map((q, i) => (
            <article
              key={`${q.handle}-${i}`}
              className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:w-[360px]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-medium text-accent">
                  {q.name.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{q.name}</div>
                  <div className="text-xs text-ink-muted">@{q.handle}</div>
                </div>
              </div>
              <p className="text-sm leading-6 text-ink-soft">{q.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
