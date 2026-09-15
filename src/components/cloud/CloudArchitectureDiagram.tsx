import type { Messages } from '../../i18n/types';

type Diagram = Messages['cloudPage']['architecture']['diagram'];

function Port({ className = '' }: { className?: string }) {
  return <span className={`cloud-arch-port ${className}`} aria-hidden />;
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="cloud-arch-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function SideCard({
  title,
  tags,
  side,
}: {
  title: string;
  tags: string[];
  side: 'left' | 'right';
}) {
  return (
    <div className="cloud-arch-card relative">
      {side === 'left' ? <Port className="cloud-arch-port-right" /> : null}
      {side === 'right' ? <Port className="cloud-arch-port-left" /> : null}
      <p className="text-left text-[13px] font-medium text-white">{title}</p>
      <TagRow tags={tags} />
    </div>
  );
}

function PlaneNode({ label }: { label: string }) {
  return (
    <div className="cloud-arch-node">
      <Port className="cloud-arch-port-left" />
      <span>{label}</span>
      <Port className="cloud-arch-port-right" />
    </div>
  );
}

function AuxCard({
  label,
  items,
  ports,
}: {
  label: string;
  items: string[];
  ports: 'bottom' | 'top';
}) {
  return (
    <div className="cloud-arch-aux">
      {ports === 'bottom' ? <Port className="cloud-arch-port-bottom" /> : null}
      {ports === 'top' ? <Port className="cloud-arch-port-top" /> : null}
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
        {label}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="cloud-arch-tag cloud-arch-tag-strong">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Kense Cloud architecture map — aligned with A3S Cloud capability stack. */
export function CloudArchitectureDiagram({ data }: { data: Diagram }) {
  return (
    <div className="cloud-arch" role="img" aria-label={data.planeBrand}>
      {/* Mobile / tablet: stacked summary */}
      <div className="cloud-arch-mobile space-y-4 lg:hidden">
        <AuxCard label={data.toolsLabel} items={data.tools} ports="bottom" />
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {data.sourcesLabel}
          </p>
          {data.sources.map((s) => (
            <SideCard key={s.title} title={s.title} tags={s.tags} side="left" />
          ))}
        </div>
        <div className="cloud-arch-plane">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary-soft">
              {data.planeLabel}
            </span>
            <span className="text-sm font-medium text-white">{data.planeBrand}</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            {data.ingress.map((n) => (
              <PlaneNode key={n} label={n} />
            ))}
            <div className="cloud-arch-core-wrap my-2">
              <div className="cloud-arch-core">
                <span className="cloud-arch-core-label">{data.core}</span>
              </div>
            </div>
            {data.egress.map((n) => (
              <PlaneNode key={n} label={n} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {data.outputsLabel}
          </p>
          {data.outputs.map((s) => (
            <SideCard key={s.title} title={s.title} tags={s.tags} side="right" />
          ))}
        </div>
        <AuxCard label={data.observeLabel} items={data.observe} ports="top" />
      </div>

      {/* Desktop: Tinybird-like three-column map */}
      <div className="cloud-arch-desktop hidden lg:block">
        <div className="cloud-arch-grid">
          <div className="cloud-arch-col cloud-arch-col-tools">
            <AuxCard label={data.toolsLabel} items={data.tools} ports="bottom" />
          </div>

          <div className="cloud-arch-col cloud-arch-col-sources">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
              {data.sourcesLabel}
            </p>
            <div className="flex flex-col gap-2.5">
              {data.sources.map((s) => (
                <SideCard
                  key={s.title}
                  title={s.title}
                  tags={s.tags}
                  side="left"
                />
              ))}
            </div>
          </div>

          <div className="cloud-arch-col cloud-arch-col-plane">
            <div className="cloud-arch-plane">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary-soft">
                  {data.planeLabel}
                </span>
                <span className="text-sm font-medium tracking-tight text-white">
                  {data.planeBrand}
                </span>
              </div>

              <div className="cloud-arch-plane-body">
                <div className="cloud-arch-plane-ingress">
                  {data.ingress.map((n) => (
                    <PlaneNode key={n} label={n} />
                  ))}
                </div>

                <div className="cloud-arch-core-wrap">
                  <div className="cloud-arch-core">
                    <span className="cloud-arch-core-label">{data.core}</span>
                  </div>
                </div>

                <div className="cloud-arch-plane-egress">
                  {data.egress.map((n) => (
                    <PlaneNode key={n} label={n} />
                  ))}
                </div>
              </div>

              {/* Decorative connector rails inside the plane */}
              <svg
                className="cloud-arch-plane-svg"
                viewBox="0 0 420 280"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M70 70 C140 70, 160 140, 210 140"
                  className="cloud-arch-line"
                />
                <path
                  d="M70 210 C140 210, 160 140, 210 140"
                  className="cloud-arch-line"
                />
                <path
                  d="M210 140 C260 140, 280 55, 350 55"
                  className="cloud-arch-line"
                />
                <path
                  d="M210 140 C260 140, 280 110, 350 110"
                  className="cloud-arch-line"
                />
                <path
                  d="M210 140 C260 140, 280 170, 350 170"
                  className="cloud-arch-line"
                />
                <path
                  d="M210 140 C260 140, 280 225, 350 225"
                  className="cloud-arch-line"
                />
                <path d="M210 20 C210 60, 210 100, 210 140" className="cloud-arch-line" />
                <path
                  d="M210 140 C210 180, 210 220, 210 260"
                  className="cloud-arch-line"
                />
              </svg>
            </div>
          </div>

          <div className="cloud-arch-col cloud-arch-col-outputs">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
              {data.outputsLabel}
            </p>
            <div className="flex flex-col gap-2.5">
              {data.outputs.map((s) => (
                <SideCard
                  key={s.title}
                  title={s.title}
                  tags={s.tags}
                  side="right"
                />
              ))}
            </div>
          </div>

          <div className="cloud-arch-col cloud-arch-col-observe">
            <AuxCard label={data.observeLabel} items={data.observe} ports="top" />
          </div>

          {/* Outer SVG connectors between columns */}
          <svg
            className="cloud-arch-outer-svg"
            viewBox="0 0 1100 640"
            preserveAspectRatio="none"
            aria-hidden
          >
            {/* sources → plane */}
            <path d="M250 170 C300 170, 320 200, 360 220" className="cloud-arch-line" />
            <path d="M250 250 C300 250, 320 240, 360 250" className="cloud-arch-line" />
            <path d="M250 330 C300 330, 320 290, 360 280" className="cloud-arch-line" />
            <path d="M250 410 C300 410, 320 340, 360 310" className="cloud-arch-line" />
            {/* plane → outputs */}
            <path d="M740 220 C780 200, 800 170, 850 170" className="cloud-arch-line" />
            <path d="M740 250 C780 240, 800 250, 850 250" className="cloud-arch-line" />
            <path d="M740 280 C780 290, 800 330, 850 330" className="cloud-arch-line" />
            <path d="M740 310 C780 340, 800 410, 850 410" className="cloud-arch-line" />
            {/* tools → plane */}
            <path d="M550 70 C550 100, 550 120, 550 150" className="cloud-arch-line" />
            {/* plane → observe */}
            <path d="M550 490 C550 520, 550 545, 550 570" className="cloud-arch-line" />
          </svg>
        </div>
      </div>
    </div>
  );
}
