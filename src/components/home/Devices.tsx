import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { useI18n } from '../../i18n/useI18n';

export function Devices() {
  const { t } = useI18n();

  return (
    <section className="px-5 py-20 md:py-[110px]">
      <div className="container-site grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeader
            align="left"
            title={t.devices.title}
            description={t.devices.description}
            size="h3"
            as="h2"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <div className="grid grid-cols-2 gap-4">
            {t.devices.items.map((device) => (
              <div
                key={device}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dominant/20 text-accent">
                  ◆
                </div>
                <div className="font-medium text-ink">{device}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
