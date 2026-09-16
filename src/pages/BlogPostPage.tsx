import { Link, useParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import { ArticleBody } from '../components/content/ArticleBody';
import { getPost, relatedPosts } from '../content/blog';
import { loc } from '../content/types';
import { publicUrl } from '../lib/publicUrl';
import { useI18n } from '../i18n/useI18n';

export function BlogPostPage() {
  const { slug = '' } = useParams();
  const { t, locale } = useI18n();
  const post = getPost(slug);
  const related = relatedPosts(slug);

  useTitle(post ? `${loc(locale, post.title)} — ${t.blog.title}` : t.meta.blogTitle);

  if (!post) {
    return (
      <div className="content-page">
        <div className="container-pricing mx-auto max-w-2xl">
          <h1 className="content-title">{t.blog.notFound.title}</h1>
          <p className="content-lead">{t.blog.notFound.description}</p>
          <Link to="/blog" className="content-primary-link">
            {t.blog.notFound.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content-page content-page--blog-post">
      <div className="container-pricing">
        <div className="blog-banner">
          <img src={publicUrl(post.banner)} alt="" width={1600} height={900} />
        </div>

        <article className="blog-article">
          <nav className="content-breadcrumb" aria-label="breadcrumb">
            <Link to="/blog">{t.blog.title}</Link>
            <span>/</span>
            <span>{loc(locale, post.category)}</span>
          </nav>
          <h1 className="content-title">{loc(locale, post.title)}</h1>
          <p className="content-lead">{loc(locale, post.excerpt)}</p>
          <p className="content-meta">
            {post.author.name} · {loc(locale, post.author.role)} · {post.date} ·{' '}
            {post.readingMinutes} {t.blog.minuteRead}
          </p>
          <ArticleBody blocks={loc(locale, post.body)} />
        </article>

        {related.length > 0 ? (
          <section className="blog-related">
            <h2>{t.blog.related}</h2>
            <div className="blog-related-grid">
              {related.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="blog-cover-card blog-cover-card--compact">
                  <div className="blog-cover-media">
                    <img src={publicUrl(item.cover)} alt="" width={480} height={640} loading="lazy" />
                  </div>
                  <div className="blog-cover-body">
                    <time dateTime={item.date}>{item.date}</time>
                    <h3>{loc(locale, item.title)}</h3>
                    <p>{loc(locale, item.excerpt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
