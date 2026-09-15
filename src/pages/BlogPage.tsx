import { Reveal } from '../components/ui/Reveal';
import { useI18n } from '../i18n/useI18n';

export function BlogPage() {
  const { t } = useI18n();

  return (
    <div className="pb-24 pt-16 max-sm:pb-20 max-sm:pt-8 md:pt-24">
      <div className="container-prose">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[36px] font-medium tracking-[-0.8px] text-white max-sm:text-[28px] md:text-[48px]">
              {t.blog.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-ink-muted max-sm:text-sm max-sm:leading-6">
              {t.blog.description}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 max-sm:mt-10">
          {t.blog.posts.map((post) => (
            <Reveal key={post.title}>
              <article className="rounded-xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/14 max-sm:p-5">
                <time className="text-xs font-medium text-ink-faint">{post.date}</time>
                <h2 className="mt-2 text-lg font-medium text-white max-sm:text-base">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
