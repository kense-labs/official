import { useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MIN_MS = 1000;
const FADE_MS = 320;

/** Logo symbol paths (same geometry as public/logo K mark). */
const PATHS = {
  body: 'M8.05 21.50 15.05 14.35Q15.38 14.02 15.38 14.51V26.58L20.44 22.15 22.28 24.38 16.69 29.22H24.15L35.01 41.28H24.20L15.38 31.62V35.80Q15.38 36.19 15.04 36.49L9.45 41.34Q9.21 41.53 8.87 41.53H8.49Q7.93 41.53 7.93 40.95V22.00Q7.93 21.70 8.05 21.50Z',
  facetL: 'M17.05 15.10C17.92 13.98 18.48 13.66 19.30 13.66H20.82L26.21 20.57 24.06 22.44Z',
  facetM: 'M23.40 13.66H27.10L30.10 17.39 27.75 19.29Z',
  facetR: 'M29.72 13.66H34.44L31.63 15.94Z',
  blueL:
    'M17.05 15.10C17.92 13.98 18.48 13.66 19.30 13.66H20.82L22.09 15.29C20.63 15.06 20.22 16.95 18.55 16.67Z',
  blueM:
    'M23.40 13.66H27.10L28.21 15.04C27.01 14.02 26.10 14.64 25.43 16.29Z',
  blueR:
    'M29.72 13.66H34.44C33.51 13.71 32.81 14.51 32.05 14.08C31.43 13.70 30.98 13.79 30.42 14.50Z',
} as const;

type Phase = 'drawing' | 'leaving' | 'hidden';

/**
 * Brand flash on first paint / full page refresh only.
 * Portaled to `document.body` so transforms/zoom on page ancestors cannot skew
 * fixed centering (common on mobile Safari).
 */
export function PageLoader() {
  const uid = useId().replace(/:/g, '');
  const [phase, setPhase] = useState<Phase>('drawing');
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(
      svg.querySelectorAll<SVGPathElement>('[data-draw]'),
    );
    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.setProperty('--path-len', `${len}`);
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      path.style.setProperty('--draw-delay', `${i * 70}ms`);
    });

    const drawMs = 780;
    const hold = Math.max(MIN_MS, drawMs + 180);

    const leaveTimer = window.setTimeout(() => {
      setPhase('leaving');
    }, hold);

    const hideTimer = window.setTimeout(() => {
      setPhase('hidden');
    }, hold + FADE_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  const node = (
    <div
      className={`page-loader${phase === 'leaving' ? ' is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-busy={phase === 'drawing'}
    >
      <div className="page-loader-mark-wrap">
        <svg
          ref={svgRef}
          className="page-loader-mark"
          viewBox="6 12 32 32"
          width="72"
          height="72"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-sheen`} x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="page-loader-draw-group"
          >
            <path
              data-draw
              className="page-loader-stroke page-loader-stroke--body"
              d={PATHS.body}
              stroke={`url(#${uid}-sheen)`}
              strokeWidth="1.15"
            />
            <path
              data-draw
              className="page-loader-stroke"
              d={PATHS.facetL}
              stroke="#fff"
              strokeWidth="1"
            />
            <path
              data-draw
              className="page-loader-stroke"
              d={PATHS.facetM}
              stroke="#fff"
              strokeWidth="1"
            />
            <path
              data-draw
              className="page-loader-stroke"
              d={PATHS.facetR}
              stroke="#fff"
              strokeWidth="1"
            />
            <path
              data-draw
              className="page-loader-stroke page-loader-stroke--accent"
              d={PATHS.blueL}
              stroke="#4e60ff"
              strokeWidth="1.05"
            />
            <path
              data-draw
              className="page-loader-stroke page-loader-stroke--accent"
              d={PATHS.blueM}
              stroke="#4e60ff"
              strokeWidth="1.05"
            />
            <path
              data-draw
              className="page-loader-stroke page-loader-stroke--accent"
              d={PATHS.blueR}
              stroke="#4e60ff"
              strokeWidth="1.05"
            />
          </g>
          <g className="page-loader-fill-group" opacity="0">
            <path d={PATHS.body} fill="#fff" />
            <path d={PATHS.facetL} fill="#fff" />
            <path d={PATHS.facetM} fill="#fff" />
            <path d={PATHS.facetR} fill="#fff" />
            <path d={PATHS.blueL} fill="#4e60ff" />
            <path d={PATHS.blueM} fill="#4e60ff" />
            <path d={PATHS.blueR} fill="#4e60ff" />
          </g>
        </svg>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
