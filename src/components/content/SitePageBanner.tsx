import { publicUrl } from '../../lib/publicUrl';

type SitePageBannerProps = {
  /** Public path, e.g. `/site/banner-about.svg` */
  src: string;
  /** Decorative — keep empty alt; page title carries meaning. */
  className?: string;
};

/** Top-of-page mood banner (blog-post pattern): visual first, title below. */
export function SitePageBanner({ src, className = '' }: SitePageBannerProps) {
  return (
    <div className={`site-page-banner ${className}`.trim()}>
      <img
        src={publicUrl(src)}
        alt=""
        width={1600}
        height={720}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
