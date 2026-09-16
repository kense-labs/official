import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { postsSorted } from '../content/blog';
import { loc } from '../content/types';
import { publicUrl } from '../lib/publicUrl';
import { useI18n } from '../i18n/useI18n';

export function BlogPage() {
  const { t, locale } = useI18n();
  const posts = postsSorted();

  return (
    <div className="content-page">
      <div className="container-pricing">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="content-kicker">{t.nav.blog}</p>
            <h1 className="content-title">{t.blog.title}</h1>
            <p className="content-lead mx-auto">{t.blog.description}</p>
          </div>
        </Reveal>

        <div className="blog-cover-grid">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delayMs={index * 40}>
              <Link to={`/blog/${post.slug}`} className="blog-cover-card">
                <div className="blog-cover-media">
                  <img
                    src={publicUrl(post.cover)}
                    alt=""
                    width={480}
                    height={640}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="blog-cover-body">
                  <p className="blog-cover-cat">{loc(locale, post.category)}</p>
                  <h2>{loc(locale, post.title)}</h2>
                  <p>{loc(locale, post.excerpt)}</p>
                  <span>
                    {post.date} · {post.readingMinutes} {t.blog.minuteRead}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
