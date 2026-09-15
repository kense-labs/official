import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';

const HEADER_OFFSET = 'var(--site-header-h, 72px)';

type SnapPanelProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  children: ReactNode;
  as?: 'section' | 'div';
};

/** One full-viewport homepage panel for scroll snapping. */
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
 * Enables full-page scroll on the homepage: each .snap-panel is one screen,
 * wheel / keys move one panel at a time.
 */
export function useHomeFullpage(enabled: boolean) {
  const indexRef = useRef(0);
  const lockedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    root.classList.add('home-fullpage-active');

    if (reduce) {
      return () => {
        root.classList.remove('home-fullpage-active');
      };
    }

    const panels = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.snap-panel'));

    const nearestIndex = () => {
      const list = panels();
      if (!list.length) return 0;
      const y = window.scrollY + 8;
      let best = 0;
      let bestDist = Infinity;
      list.forEach((el, i) => {
        const d = Math.abs(el.offsetTop - y);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    };

    const goTo = (next: number) => {
      const list = panels();
      if (!list.length) return;
      const i = Math.max(0, Math.min(list.length - 1, next));
      indexRef.current = i;
      lockedRef.current = true;
      list[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        lockedRef.current = false;
      }, 720);
    };

    indexRef.current = nearestIndex();

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      if (lockedRef.current) {
        e.preventDefault();
        return;
      }

      const list = panels();
      const i = nearestIndex();
      const panel = list[i];
      if (!panel) return;

      const inner = panel.querySelector<HTMLElement>('.snap-panel-inner');
      const scroller = inner ?? panel;
      const canScroll = scroller.scrollHeight > scroller.clientHeight + 2;
      if (canScroll) {
        const top = scroller.scrollTop;
        const max = scroller.scrollHeight - scroller.clientHeight;
        if (e.deltaY > 0 && top < max - 1) return;
        if (e.deltaY < 0 && top > 1) return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = i + dir;
      if (next < 0 || next >= list.length) return;

      e.preventDefault();
      goTo(next);
    };

    const onKey = (e: KeyboardEvent) => {
      if (lockedRef.current) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      let dir = 0;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        dir = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        dir = -1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
        return;
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(panels().length - 1);
        return;
      }
      if (!dir) return;
      e.preventDefault();
      goTo(nearestIndex() + dir);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);

    return () => {
      root.classList.remove('home-fullpage-active');
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, [enabled]);
}

export const snapHeaderPad = HEADER_OFFSET;
