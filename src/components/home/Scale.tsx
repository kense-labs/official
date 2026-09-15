import { Reveal } from '../ui/Reveal';
import { Glass } from '../canvasui/Glass';
import { useI18n } from '../../i18n/useI18n';

export function Scale() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-4 md:py-6">
      <div className="container-pricing relative z-[1]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[24px] font-medium tracking-[-0.4px] text-white md:text-[32px]">
              {t.scale.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              {t.scale.description}
            </p>
          </div>
        </Reveal>

        <Glass
          shape="circle"
          size={120}
          ior={1.45}
          edge={0.65}
          depth={200}
          aberration={0.9}
          blur={0.15}
          reflection={1.1}
          shine={0.04}
          zoom={1.25}
          follow={0.22}
          targets="[data-glass-target]"
          className="mt-6"
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {t.scale.stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 60}>
                <div
                  data-glass-target
                  className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-6 text-center"
                >
                  <div className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm text-ink-muted">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Glass>
      </div>
    </section>
  );
}
