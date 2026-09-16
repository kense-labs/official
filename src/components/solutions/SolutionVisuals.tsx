import { type ReactNode } from 'react';

export type SolutionTone = 'monitor' | 'finance' | 'science' | 'insight';

function FrameChrome({
  title,
  meta,
  prompt,
  children,
}: {
  title: string;
  meta: string;
  prompt: string;
  children: ReactNode;
}) {
  return (
    <div className="sol-frame">
      <div className="sol-frame-bar">
        <span className="sol-frame-title">{title}</span>
        <span className="sol-frame-meta">{meta}</span>
      </div>
      {children}
      <div className="sol-composer">
        <span>{prompt}</span>
        <i aria-hidden />
      </div>
    </div>
  );
}

function FinanceHero() {
  const rows = [
    ['AAPL', '188.42', '+1.24', 'up'],
    ['NVDA', '902.10', '+0.41', 'up'],
    ['XAU', '2,348', '−0.18', 'down'],
    ['US10Y', '4.21%', '−2bp', 'down'],
    ['EURUSD', '1.0842', '+0.06', 'up'],
  ] as const;

  return (
    <FrameChrome title="kense.finance" meta="LIVE" prompt="AAPL vs NVDA this week — same tape">
      <div className="sol-finance">
        <aside className="sol-finance-side">
          {['Equity', 'Macro', 'Options', 'News'].map((item, i) => (
            <span key={item} className={i === 0 ? 'is-on' : undefined}>
              {item}
            </span>
          ))}
        </aside>
        <div className="sol-finance-main">
          <div className="sol-finance-spark" aria-hidden>
            <svg viewBox="0 0 280 72" preserveAspectRatio="none">
              <path d="M0 52 C24 50 36 28 56 34 S92 58 118 40 S164 12 196 22 S244 48 280 18" />
            </svg>
          </div>
          <table>
            <tbody>
              {rows.map(([sym, px, ch, dir]) => (
                <tr key={sym}>
                  <th>{sym}</th>
                  <td>{px}</td>
                  <td className={dir === 'up' ? 'is-up' : 'is-down'}>{ch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FrameChrome>
  );
}

function MonitorHero() {
  const rows = [
    ['07:12', 'Red Sea', 'Transit advisory · 14 vessels'],
    ['07:18', 'OFAC', 'Designation update · 3 entities'],
    ['07:26', 'Baltic', 'Freight spike · +11%'],
    ['07:41', 'Macro', 'FOMC minutes · live'],
  ];

  return (
    <FrameChrome title="kense.monitor" meta="WATCH" prompt="What moved Red Sea transits today?">
      <div className="sol-monitor">
        <div className="sol-monitor-map" aria-hidden>
          <svg viewBox="0 0 220 200" preserveAspectRatio="xMidYMid slice">
            <path d="M18 86 C48 70 62 48 96 54 S148 92 176 74 S206 40 214 46" />
            <path d="M8 128 C40 118 70 136 108 122 S168 96 210 110" />
            <path d="M30 168 C72 150 118 176 168 158" />
          </svg>
          <span className="sol-ping" style={{ top: '28%', left: '62%' }} />
          <span className="sol-ping" style={{ top: '46%', left: '38%' }} />
          <span className="sol-ping sol-ping--late" style={{ top: '58%', left: '72%' }} />
        </div>
        <ol>
          {rows.map(([time, src, text]) => (
            <li key={time}>
              <time>{time}</time>
              <b>{src}</b>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </FrameChrome>
  );
}

function ScienceHero() {
  return (
    <FrameChrome title="kense.science" meta="LOCAL" prompt="Replay the DE notebook against this paper">
      <div className="sol-science">
        <aside>
          <p>Refs</p>
          <span className="is-on">doi:10.1038/…</span>
          <span>pmid:38100221</span>
          <span>arXiv:2403.118</span>
        </aside>
        <div className="sol-science-note">
          <div className="sol-cell">
            <code># load counts + metadata</code>
          </div>
          <div className="sol-cell sol-cell--out">
            <span>DE genes</span>
            <strong>1,284</strong>
            <em>padj &lt; 0.05</em>
          </div>
          <div className="sol-cell">
            <code>plot_volcano(res)</code>
          </div>
        </div>
      </div>
    </FrameChrome>
  );
}

function InsightHero() {
  return (
    <FrameChrome title="kense.insight" meta="SEMANTIC" prompt="net_revenue for 2026-q2 — current definition">
      <div className="sol-insight">
        <div className="sol-metric">
          <span>net_revenue</span>
          <strong>$18.4M</strong>
          <em>Q2 · same definition</em>
        </div>
        <pre>
          <code>{`select net_revenue, region
from metrics
where period = '2026-q2'`}</code>
        </pre>
      </div>
    </FrameChrome>
  );
}

export function SolutionHeroVisual({ tone }: { tone: SolutionTone }) {
  if (tone === 'finance') return <FinanceHero />;
  if (tone === 'monitor') return <MonitorHero />;
  if (tone === 'science') return <ScienceHero />;
  return <InsightHero />;
}

export function SolutionArchVisual({
  tone,
  mid,
  inLabel,
  outLabel,
}: {
  tone: SolutionTone;
  mid: string;
  inLabel: string;
  outLabel: string;
}) {
  const lanes =
    tone === 'finance'
      ? {
          left: ['Equity / ETF', 'Macro / FX', 'Options', 'News'],
          right: ['Python / SDK', 'Workbench', 'MCP', 'REST'],
        }
      : tone === 'monitor'
        ? {
            left: ['Conflict', 'Sanctions', 'Shipping', 'Macro'],
            right: ['Query', 'Subscribe', 'Work', 'API'],
          }
        : tone === 'science'
          ? {
              left: ['Papers', 'Notebooks', 'Connectors', 'Files'],
              right: ['Replay', 'Review', 'Export', 'OS'],
            }
          : {
              left: ['Warehouse', 'App DB', 'Events'],
              right: ['SQL', 'REST', 'GraphQL', 'MCP'],
            };

  return (
    <div className="sol-arch">
      <div>
        <p>{inLabel}</p>
        <ul>
          {lanes.left.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="sol-arch-mid">
        <span>{mid}</span>
      </div>
      <div>
        <p>{outLabel}</p>
        <ul>
          {lanes.right.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
