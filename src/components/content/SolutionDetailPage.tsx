import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { publicUrl } from '../../lib/publicUrl';
import { uiActions } from '../../store/ui';

export type SolutionPageCopy = {
  documentTitle: string;
  stake: string;
  lead: string;
  problem: {
    title: string;
    body: string;
    points: Array<{ title: string; body: string }>;
  };
  cost: { title: string; body: string };
  capabilities: {
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  architecture: {
    title: string;
    body: string;
    points: Array<{ title: string; body: string }>;
  };
  loop: {
    title: string;
    body: string;
    steps: Array<{ title: string; body: string }>;
  };
  cases: {
    title: string;
    subtitle: string;
    items: Array<{
      kicker: string;
      title: string;
      points: string[];
      accept: string;
    }>;
  };
  trust: {
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  path: {
    title: string;
    body: string;
    riskTitle: string;
    riskBody: string;
  };
  ctaTitle: string;
  ctaBody: string;
};

export type SolutionItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  to: string;
};

type Media = {
  hero: string;
  heroWidth: number;
  heroHeight: number;
  problem: [string, string, string];
  preview: string;
  arch: string;
  flow: string;
  ctaVisual: string;
};

type SolutionDetailPageProps = {
  item: SolutionItem;
  page: SolutionPageCopy;
  media: Media;
  solutionsLabel: string;
  homeLabel: string;
  startLabel: string;
  demoLabel: string;
};

export function SolutionDetailPage({
  item,
  page,
  media,
  solutionsLabel,
  homeLabel,
  startLabel,
  demoLabel,
}: SolutionDetailPageProps) {
  return (
    <div className="sol-page">
      <section className="sol-hero">
        <div className="container-solution sol-hero-grid">
          <Reveal>
            <div className="sol-hero-copy">
              <nav className="sol-breadcrumb" aria-label="breadcrumb">
                <Link to="/">{homeLabel}</Link>
                <span>/</span>
                <span>{solutionsLabel}</span>
              </nav>
              <p className="content-kicker">{solutionsLabel}</p>
              <h1 className="sol-hero-title">{item.name}</h1>
              <p className="sol-hero-tagline">{item.tagline}</p>
              <p className="sol-hero-stake">{page.stake}</p>
              <p className="sol-hero-lead">{page.lead}</p>
              <div className="sol-hero-actions">
                <Button to="/signup" className="h-11 px-5">
                  {startLabel}
                </Button>
                <Button
                  variant="outline"
                  className="h-11 px-5"
                  onClick={() => uiActions.openDemoModal()}
                >
                  {demoLabel}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="sol-hero-visual">
              <img
                src={publicUrl(media.hero)}
                alt=""
                width={media.heroWidth}
                height={media.heroHeight}
                className="sol-hero-earth"
                decoding="async"
                fetchPriority="high"
              />
              <div className="sol-hero-earth-glow" aria-hidden />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-solution sol-body">
        <Reveal delayMs={40}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.problem.title}</h2>
              <p>{page.problem.body}</p>
            </div>
            <div className="sol-card-grid sol-card-grid--3">
              {page.problem.points.map((point, index) => (
                <article key={point.title} className="sol-media-card">
                  <div className="sol-media-card-art">
                    <img
                      src={publicUrl(media.problem[index] ?? media.problem[0])}
                      alt=""
                      width={640}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
            <div className="sol-callout">
              <h3>{page.cost.title}</h3>
              <p>{page.cost.body}</p>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={60}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.capabilities.title}</h2>
            </div>
            <div className="sol-card-grid sol-card-grid--3">
              {page.capabilities.items.map((cap) => (
                <article key={cap.title} className="sol-text-card">
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                </article>
              ))}
            </div>
            <figure className="sol-figure">
              <img
                src={publicUrl(media.preview)}
                alt=""
                width={1400}
                height={720}
                loading="lazy"
              />
              <figcaption>{page.capabilities.title}</figcaption>
            </figure>
          </section>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.architecture.title}</h2>
              <p>{page.architecture.body}</p>
            </div>
            <figure className="sol-figure sol-figure--contain">
              <img
                src={publicUrl(media.arch)}
                alt=""
                width={1200}
                height={640}
                loading="lazy"
              />
            </figure>
            <div className="sol-card-grid sol-card-grid--3">
              {page.architecture.points.map((point) => (
                <article key={point.title} className="sol-text-card">
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={100}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.loop.title}</h2>
              <p>{page.loop.body}</p>
            </div>
            <figure className="sol-figure">
              <img
                src={publicUrl(media.flow)}
                alt=""
                width={1088}
                height={560}
                loading="lazy"
              />
            </figure>
            <ol className="sol-steps">
              {page.loop.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="sol-step-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal delayMs={120}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.cases.title}</h2>
              <p>{page.cases.subtitle}</p>
            </div>
            <div className="sol-card-grid sol-card-grid--2">
              {page.cases.items.map((caseItem) => (
                <article key={caseItem.kicker} className="sol-case-card">
                  <p className="sol-case-kicker">{caseItem.kicker}</p>
                  <h3>{caseItem.title}</h3>
                  <ul>
                    {caseItem.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="sol-case-accept">{caseItem.accept}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={140}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.trust.title}</h2>
            </div>
            <div className="sol-card-grid sol-card-grid--3">
              {page.trust.items.map((trustItem) => (
                <article key={trustItem.title} className="sol-text-card">
                  <h3>{trustItem.title}</h3>
                  <p>{trustItem.body}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={160}>
          <section className="sol-section">
            <div className="sol-section-head">
              <h2>{page.path.title}</h2>
              <p>{page.path.body}</p>
            </div>
            <div className="sol-callout">
              <h3>{page.path.riskTitle}</h3>
              <p>{page.path.riskBody}</p>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={180}>
          <section className="sol-cta">
            <div className="sol-cta-earth" aria-hidden>
              <img
                src={publicUrl(media.ctaVisual)}
                alt=""
                width={media.heroWidth}
                height={media.heroHeight}
              />
            </div>
            <div className="sol-cta-copy">
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaBody}</p>
              <div className="sol-hero-actions">
                <Button to="/signup" className="h-11 px-5">
                  {startLabel}
                </Button>
                <Button
                  variant="outline"
                  className="h-11 px-5"
                  onClick={() => uiActions.openDemoModal()}
                >
                  {demoLabel}
                </Button>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
