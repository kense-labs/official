import { useTitle } from 'ahooks';
import { SitePageBanner } from '../components/content/SitePageBanner';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { useI18n } from '../i18n/useI18n';
import { uiActions } from '../store/ui';

export function AboutPage() {
  const { t } = useI18n();
  const copy = t.site.about;
  useTitle(copy.documentTitle);

  return (
    <div className="content-page site-doc-page site-doc-page--banner">
      <div className="container-pricing">
        <Reveal>
          <SitePageBanner src="/site/banner-about.svg" />
        </Reveal>

        <Reveal delayMs={40}>
          <header className="site-doc-header site-doc-header--center">
            <p className="content-kicker">{copy.kicker}</p>
            <h1 className="content-title">{copy.title}</h1>
            <p className="content-lead mx-auto">{copy.lead}</p>
          </header>
        </Reveal>

        <Reveal delayMs={80}>
          <section className="site-about-mission">
            <h2>{copy.missionTitle}</h2>
            <p>{copy.missionBody}</p>
          </section>
        </Reveal>

        <div className="site-about-pillars">
          {copy.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={100 + index * 40}>
              <article className="site-about-pillar">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={160}>
          <section className="site-about-cta">
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaBody}</p>
            <div className="site-about-cta-actions">
              <Button to="/signup">{copy.ctaPrimary}</Button>
              <Button variant="outline" onClick={() => uiActions.openDemoModal()}>
                {copy.ctaSecondary}
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
