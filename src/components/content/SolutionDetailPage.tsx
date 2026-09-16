import { Button, Reveal } from '@kense/ui';
import {
  SolutionArchVisual,
  SolutionHeroVisual,
  type SolutionTone,
} from '../solutions/SolutionVisuals';
import type { SolutionPageMessages } from '../../i18n/types';
import { uiActions } from '../../store/ui';

export type SolutionItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  to: string;
};

type SolutionDetailPageProps = {
  item: SolutionItem;
  page: SolutionPageMessages;
  tone: SolutionTone;
  startLabel: string;
  demoLabel: string;
};

function Actions({
  startLabel,
  demoLabel,
}: {
  startLabel: string;
  demoLabel: string;
}) {
  return (
    <div className="sol-hero-actions">
      <Button to="/signup" variant="secondary" className="sol-pill">
        {startLabel}
      </Button>
      <Button
        variant="outline"
        className="sol-pill"
        onClick={() => uiActions.openDemoModal()}
      >
        {demoLabel}
      </Button>
    </div>
  );
}

export function SolutionDetailPage({
  item,
  page,
  tone,
  startLabel,
  demoLabel,
}: SolutionDetailPageProps) {
  return (
    <div className={`sol-page sol-page--${tone}`}>
      <section className="sol-hero">
        <div className="container-solution sol-hero-grid">
          <Reveal>
            <div className="sol-hero-copy">
              <p className="sol-kicker">{item.name}</p>
              <h1 className="sol-hero-title">{item.tagline}</h1>
              <p className="sol-hero-lead">{page.lead}</p>
              <Actions startLabel={startLabel} demoLabel={demoLabel} />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="sol-hero-visual">
              <SolutionHeroVisual tone={tone} />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-solution sol-body">
        <Reveal delayMs={40}>
          <section className="sol-stats" aria-label={item.name}>
            {page.stats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal delayMs={60}>
          <section className="sol-cap">
            <div className="sol-cap-copy">
              <p className="sol-kicker">{page.capabilities.kicker}</p>
              <h2>{page.capabilities.title}</h2>
              <p>{page.capabilities.body}</p>
            </div>
            <ul className="sol-cap-list">
              {page.capabilities.items.map((cap) => (
                <li key={cap.title}>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="sol-uses">
            <p className="sol-kicker">{page.uses.kicker}</p>
            <h2>{page.uses.title}</h2>
            <div className="sol-use-grid">
              {page.uses.items.map((use) => (
                <article key={use.title}>
                  <h3>{use.title}</h3>
                  <p>{use.body}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={100}>
          <section className="sol-artifact">
            <div className="sol-artifact-copy">
              <p className="sol-kicker">{page.artifact.kicker}</p>
              <h2>{page.artifact.title}</h2>
              <p>{page.artifact.body}</p>
              <ul>
                {page.artifact.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <SolutionArchVisual
              tone={tone}
              mid={item.name}
              inLabel={page.artifact.inLabel}
              outLabel={page.artifact.outLabel}
            />
          </section>
        </Reveal>

        <Reveal delayMs={120}>
          <section className="sol-close">
            <h2>{page.close.title}</h2>
            <p>{page.close.body}</p>
            <Actions startLabel={startLabel} demoLabel={demoLabel} />
          </section>
        </Reveal>
      </div>
    </div>
  );
}
