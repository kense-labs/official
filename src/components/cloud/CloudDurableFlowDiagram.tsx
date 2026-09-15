import type { Messages } from '../../i18n/types';

type Flow = Messages['cloudPage']['durable']['flow'];

/** Compact durable-execution path diagram. */
export function CloudDurableFlowDiagram({ data }: { data: Flow }) {
  return (
    <div className="cloud-flow" role="img" aria-label={data.label}>
      <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
        {data.label}
      </p>
      <div className="cloud-flow-track">
        {data.stages.map((stage, i) => (
          <div key={stage.title} className="cloud-flow-item">
            <div className="cloud-flow-card">
              <span className="cloud-flow-index">0{i + 1}</span>
              <p className="mt-2 text-sm font-medium text-white">{stage.title}</p>
              <p className="mt-1 text-xs leading-5 text-ink-muted">{stage.detail}</p>
            </div>
            {i < data.stages.length - 1 ? (
              <div className="cloud-flow-arrow" aria-hidden>
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                  <path
                    d="M1 6h22M18 1l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
