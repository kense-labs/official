import { useEffect, type ReactNode, type HTMLAttributes } from 'react';

const HEADER_OFFSET = 'var(--site-header-h, 72px)';

type SnapPanelProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  children: ReactNode;
  as?: 'section' | 'div';
};

/** One homepage panel. Desktop uses CSS proximity snap; mobile is natural flow. */
export function SnapPanel({
  id,
  children,
  className = '',
  as: Tag = 'section',
  ...rest
}: SnapPanelProps) {
  return (
    <Tag
      id={id}
      className={`snap-panel ${className}`.trim()}
      {...rest}
    >
      <div className="snap-panel-inner">{children}</div>
    </Tag>
  );
}

/**
 * Desktop-only CSS class for proximity snap.
 * Wheel is left to the browser — JS hijacking was the main scroll hitch.
 */
export function useHomeFullpage(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const desktopMq = window.matchMedia('(min-width: 1024px)');

    const sync = () => {
      // Compact desktop layout stays on even when motion is reduced.
      // Snap itself is disabled in CSS for prefers-reduced-motion.
      root.classList.toggle('home-fullpage-active', desktopMq.matches);
    };

    sync();
    desktopMq.addEventListener('change', sync);
    return () => {
      root.classList.remove('home-fullpage-active');
      desktopMq.removeEventListener('change', sync);
    };
  }, [enabled]);
}

export const snapHeaderPad = HEADER_OFFSET;
