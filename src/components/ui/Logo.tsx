import { publicUrl } from '../../lib/publicUrl';

export type LogoLayout = 'horizontal' | 'vertical' | 'icon';
export type LogoTone = 'auto' | 'light' | 'dark';

type LogoProps = {
  className?: string;
  /** Prefer `layout="icon"`; kept for existing call sites. */
  markOnly?: boolean;
  layout?: LogoLayout;
  /** Height in px. Width follows the asset aspect ratio. */
  size?: number;
  /** `dark` = for dark backgrounds; `light` = for light backgrounds. */
  tone?: LogoTone;
  alt?: string;
};

const ASPECT: Record<LogoLayout, number> = {
  horizontal: 106 / 44,
  vertical: 80 / 88,
  icon: 1,
};

function logoSrc(layout: LogoLayout, tone: 'light' | 'dark') {
  return publicUrl(`/logo/svg/kense-${layout}-${tone}-transparent.svg`);
}

export function LogoMark({
  size = 28,
  className = '',
  tone = 'dark',
  alt = 'Kense',
}: {
  size?: number;
  className?: string;
  tone?: LogoTone;
  alt?: string;
}) {
  const resolved = tone === 'auto' ? 'dark' : tone;
  return (
    <img
      src={logoSrc('icon', resolved)}
      width={size}
      height={size}
      alt={alt}
      className={className}
      decoding="async"
    />
  );
}

export function Logo({
  className = '',
  markOnly = false,
  layout: layoutProp,
  size = 28,
  tone = 'auto',
  alt = 'Kense',
}: LogoProps) {
  const resolved = tone === 'auto' ? 'dark' : tone;
  const layout: LogoLayout = markOnly ? 'icon' : (layoutProp ?? 'horizontal');
  const width = Math.round(size * ASPECT[layout]);

  return (
    <img
      src={logoSrc(layout, resolved)}
      width={width}
      height={size}
      alt={alt}
      decoding="async"
      className={className}
    />
  );
}
