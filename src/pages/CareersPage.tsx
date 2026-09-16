import { useTitle } from 'ahooks';
import { SitePageBanner } from '../components/content/SitePageBanner';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { useI18n } from '../i18n/useI18n';
import { uiActions } from '../store/ui';

export function CareersPage() {
  const { t } = useI18n();
  const copy = t.site.careers;
  useTitle(copy.documentTitle);
  const hasOpenings = copy.openings.length > 0;

  return (
    <div className="content-page site-doc-page site-doc-page--banner">
      <div className="container-pricing">
        <Reveal>
          <SitePageBanner src="/site/banner-careers.svg" />
        </Reveal>

        <Reveal delayMs={40}>
          <header className="site-doc-header site-doc-header--center">
            <p className="content-kicker">{copy.kicker}</p>
            <h1 className="content-title">{copy.title}</h1>
            <p className="content-lead mx-auto">{copy.lead}</p>
          </header>
        </Reveal>

        <div className="site-about-pillars">
          {copy.culture.map((item, index) => (
            <Reveal key={item.title} delayMs={60 + index * 40}>
              <article className="site-about-pillar">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <section className="site-careers-openings">
            <h2>{copy.openingsTitle}</h2>
            {hasOpenings ? (
              <ul className="site-careers-list">
                {copy.openings.map((role) => (
                  <li key={role.title} className="site-careers-role">
                    <div className="site-careers-role-head">
                      <h3>{role.title}</h3>
                      <p>
                        {role.location}
                        <span aria-hidden>·</span>
                        {role.type}
                      </p>
                    </div>
                    <p className="site-careers-role-summary">{role.summary}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="site-careers-empty">{copy.openingsEmpty}</p>
            )}
          </section>
        </Reveal>

        <Reveal delayMs={120}>
          <section className="site-careers-how">
            <h2>{copy.howTitle}</h2>
            <ol>
              {copy.howSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <Button className="mt-6" onClick={() => uiActions.openDemoModal()}>
              {copy.applyCta}
            </Button>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
