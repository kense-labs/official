import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { useI18n } from '../../i18n/useI18n';

export function CloudSection() {
  const { t } = useI18n();
  const nodes = [
    { x: '50%', y: '48%', label: t.cloud.nodes.center, size: 'lg' as const },
    { x: '22%', y: '28%', label: t.cloud.nodes.agents },
    { x: '78%', y: '30%', label: t.cloud.nodes.workflows },
    { x: '18%', y: '68%', label: t.cloud.nodes.state },
    { x: '82%', y: '70%', label: t.cloud.nodes.timers },
    { x: '50%', y: '18%', label: t.cloud.nodes.events },
    { x: '50%', y: '82%', label: t.cloud.nodes.work },
  ];

  return (
    <section id="os" className="relative px-5 py-[72px] md:py-[128px]">
      <Reveal>
        <SectionHeader
          badge={t.cloud.badge}
          title={t.cloud.title}
          titleMobile={t.cloud.titleMobile}
          description={t.cloud.description}
        />
      </Reveal>

      <Reveal delayMs={100} className="mx-auto mt-16 max-w-[1100px]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(78, 96, 255,.22),transparent_65%),rgba(255,255,255,.02)] p-8 md:p-16">
          <div className="relative mx-auto aspect-[16/9] max-w-3xl">
            {nodes.map((node) => (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
              >
                <div
                  className={`rounded-full border border-[rgba(186,156,255,.35)] bg-[rgba(78, 96, 255,.25)] px-4 py-2 text-sm text-ink backdrop-blur-md ${
                    node.size === 'lg'
                      ? 'px-5 py-3 text-base font-medium shadow-[0_0_40px_rgba(78, 96, 255,.45)]'
                      : ''
                  }`}
                >
                  {node.label}
                </div>
              </div>
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
              <line x1="50%" y1="48%" x2="22%" y2="28%" stroke="#a98cc0" />
              <line x1="50%" y1="48%" x2="78%" y2="30%" stroke="#a98cc0" />
              <line x1="50%" y1="48%" x2="18%" y2="68%" stroke="#7962a6" />
              <line x1="50%" y1="48%" x2="82%" y2="70%" stroke="#7962a6" />
              <line x1="50%" y1="48%" x2="50%" y2="18%" stroke="#c378fa" />
              <line x1="50%" y1="48%" x2="50%" y2="82%" stroke="#c378fa" />
            </svg>
          </div>
          <p className="mx-auto mt-10 max-w-lg text-center text-base text-ink-muted">
            {t.cloud.footnote}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
