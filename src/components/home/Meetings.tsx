import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { useI18n } from '../../i18n/useI18n';

export function Meetings() {
  const { t } = useI18n();
  const events = t.meetings.events;

  return (
    <section className="px-5 py-[72px] md:py-[116px]">
      <Reveal>
        <SectionHeader
          badge={t.meetings.badge}
          title={t.meetings.title}
          titleMobile={t.meetings.titleMobile}
          description={t.meetings.description}
        />
      </Reveal>

      <Reveal delayMs={100} className="mx-auto mt-14 max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,.03)]">
          {events.map((e, i) => (
            <div
              key={e.title}
              className={`flex items-start gap-4 px-6 py-5 ${
                i < events.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <div className="w-20 shrink-0 text-sm text-detail">{e.time}</div>
              <div className="flex-1">
                <div className="text-base text-ink">{e.title}</div>
                <div className="mt-1 text-sm text-ink-muted">{e.cal} Calendar</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
