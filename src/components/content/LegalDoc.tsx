type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocProps = {
  kicker: string;
  title: string;
  updated: string;
  lead: string;
  tocLabel: string;
  sections: Section[];
};

/** Long-form legal page: title + mobile TOC + readable sections. */
export function LegalDoc({
  kicker,
  title,
  updated,
  lead,
  tocLabel,
  sections,
}: LegalDocProps) {
  return (
    <div className="content-page site-doc-page">
      <div className="container-pricing">
        <header className="site-doc-header">
          <p className="content-kicker">{kicker}</p>
          <h1 className="content-title">{title}</h1>
          <p className="content-meta">{updated}</p>
          <p className="content-lead">{lead}</p>
        </header>

        <div className="site-doc-layout">
          <nav className="site-doc-toc" aria-label={tocLabel}>
            <p className="site-doc-toc-label">{tocLabel}</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="site-doc-body">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="site-doc-section"
              >
                <h2>{section.title}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
