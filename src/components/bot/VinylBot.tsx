import { useEffect, useId, useRef, type RefObject } from 'react';
import {
  type BotComposition,
  type BotEyes,
  type BotPalette,
  BOT_BY_ID,
} from './composition';
import {
  clamp,
  lerp,
  rand,
  setSpring,
  spring,
  stepSpring,
  type Spring,
} from './spring';

export type VinylBotProps = {
  /** Preset id from KENSE_BOT_SQUAD, or a full composition. */
  bot?: string | BotComposition;
  size?: number;
  className?: string;
  autoPlay?: boolean;
  followPointer?: boolean;
  'aria-label'?: string;
};

type FaceSprings = {
  bob: Spring;
  tilt: Spring;
  blink: Spring;
  gazeX: Spring;
  gazeY: Spring;
  smile: Spring;
  squash: Spring;
};

function createFace(): FaceSprings {
  return {
    bob: spring(0, 130, 15),
    tilt: spring(0, 110, 13),
    blink: spring(1, 480, 26),
    gazeX: spring(0, 85, 11),
    gazeY: spring(0, 85, 11),
    smile: spring(0.55, 150, 15),
    squash: spring(1, 200, 18),
  };
}

function Eyes({
  kind,
  palette,
  leftRef,
  rightRef,
  pupilLRef,
  pupilRRef,
  cxL,
  cxR,
  cy,
}: {
  kind: BotEyes;
  palette: BotPalette;
  leftRef: RefObject<SVGGElement | null>;
  rightRef: RefObject<SVGGElement | null>;
  pupilLRef: RefObject<SVGCircleElement | null>;
  pupilRRef: RefObject<SVGCircleElement | null>;
  cxL: number;
  cxR: number;
  cy: number;
}) {
  if (kind === 'pixel') {
    return (
      <g>
        <g ref={leftRef}>
          <rect x={cxL - 7} y={cy - 5} width={14} height={10} rx={1.5} fill={palette.ink} />
          <g fill={palette.accent}>
            <rect x={cxL - 4} y={cy - 2} width={2} height={2} />
            <rect x={cxL + 2} y={cy - 2} width={2} height={2} />
            <rect x={cxL - 3} y={cy + 2} width={6} height={1.5} />
          </g>
        </g>
        {/* single screen face for terminal — right unused */}
      </g>
    );
  }

  if (kind === 'line') {
    return (
      <g fill="none" stroke={palette.ink} strokeWidth={2.2} strokeLinecap="round">
        <g ref={leftRef}>
          <path d={`M ${cxL - 5} ${cy} h 10`} />
        </g>
        <g ref={rightRef}>
          <path d={`M ${cxR - 5} ${cy} h 10`} />
        </g>
      </g>
    );
  }

  if (kind === 'glow') {
    return (
      <g>
        <g ref={leftRef}>
          <circle cx={cxL} cy={cy} r={4.5} fill={palette.accent} opacity={0.9} />
          <circle cx={cxL} cy={cy} r={2} fill="#fff" />
        </g>
        <g ref={rightRef}>
          <circle cx={cxR} cy={cy} r={4.5} fill={palette.accent} opacity={0.9} />
          <circle cx={cxR} cy={cy} r={2} fill="#fff" />
        </g>
      </g>
    );
  }

  // beads
  return (
    <g>
      <g ref={leftRef}>
        <ellipse cx={cxL} cy={cy} rx={5.5} ry={6} fill={palette.ink} />
        <circle ref={pupilLRef} cx={cxL + 1.2} cy={cy - 0.8} r={1.7} fill="#fff" />
      </g>
      <g ref={rightRef}>
        <ellipse cx={cxR} cy={cy} rx={5.5} ry={6} fill={palette.ink} />
        <circle ref={pupilRRef} cx={cxR + 1.2} cy={cy - 0.8} r={1.7} fill="#fff" />
      </g>
    </g>
  );
}

function Hat({
  kind,
  palette,
}: {
  kind: BotComposition['hat'];
  palette: BotPalette;
}) {
  if (kind === 'shard') {
    return (
      <g>
        <path
          d="M48 8 L54 22 L46 20 Z"
          fill={palette.accentSoft}
          stroke={palette.accent}
          strokeWidth={1}
        />
        <path d="M50 10 L52 18" stroke="#fff" strokeWidth={1} opacity={0.55} />
      </g>
    );
  }
  if (kind === 'leaf') {
    return (
      <path
        d="M50 6c6 4 8 12 2 16-4-2-8-8-6-14 1-1 3-2 4-2z"
        fill="#5FD67A"
      />
    );
  }
  if (kind === 'antenna') {
    return (
      <g>
        <path d="M50 18 V6" stroke={palette.ink} strokeWidth={2} strokeLinecap="round" />
        <circle cx={50} cy={5} r={3.2} fill={palette.accent} />
        <circle cx={50} cy={5} r={1.2} fill="#fff" opacity={0.8} />
      </g>
    );
  }
  if (kind === 'visor') {
    return (
      <rect
        x={28}
        y={28}
        width={44}
        height={10}
        rx={3}
        fill={palette.ink}
        opacity={0.85}
      />
    );
  }
  if (kind === 'cap') {
    return (
      <g>
        <ellipse cx={50} cy={26} rx={22} ry={8} fill={palette.outfit} />
        <path
          d="M28 28 Q50 18 72 28"
          fill={palette.outfitDeep}
        />
        <rect x={66} y={26} width={14} height={5} rx={2} fill={palette.accent} />
      </g>
    );
  }
  return null;
}

function VinylShading({
  palette,
  uid,
}: {
  palette: BotPalette;
  uid: string;
}) {
  return (
    <defs>
      <linearGradient id={`${uid}-body`} x1="30%" y1="8%" x2="70%" y2="95%">
        <stop offset="0%" stopColor={palette.skinLight} />
        <stop offset="45%" stopColor={palette.skin} />
        <stop offset="100%" stopColor={palette.skinDeep} />
      </linearGradient>
      <linearGradient id={`${uid}-outfit`} x1="40%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" stopColor={palette.outfit} />
        <stop offset="100%" stopColor={palette.outfitDeep} />
      </linearGradient>
      <radialGradient id={`${uid}-sheen`} cx="38%" cy="28%" r="55%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
        <stop offset="55%" stopColor="#fff" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="b" />
        <feOffset dy="1" result="o" />
        <feComponentTransfer in="o" result="s">
          <feFuncA type="linear" slope="0.22" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="s" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/**
 * Composable vinyl-toy Bot figure for Kense Work.
 * Soft matte shading + modular body / outfit / hat / eyes.
 */
export function VinylBot({
  bot = 'crystal',
  size = 96,
  className = '',
  autoPlay = true,
  followPointer = false,
  'aria-label': ariaLabel,
}: VinylBotProps) {
  const composition =
    typeof bot === 'string' ? BOT_BY_ID[bot] ?? BOT_BY_ID.crystal : bot;
  const uid = useId().replace(/:/g, '');
  const rootRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<SVGGElement>(null);
  const faceRef = useRef<SVGGElement>(null);
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);
  const pupilLRef = useRef<SVGCircleElement>(null);
  const pupilRRef = useRef<SVGCircleElement>(null);
  const mouthRef = useRef<SVGPathElement>(null);

  const { palette, body, eyes, outfit, hat, lean = 0 } = composition;
  const label = ariaLabel ?? `Kense Bot ${composition.id}`;

  useEffect(() => {
    const s = createFace();
    let last = performance.now();
    let raf = 0;
    let moodUntil = last + rand(1600, 2800);
    let blinkUntil = last + rand(1800, 4500);
    let blinking = false;
    let blinkOpenAt = 0;
    let mood = 0;
    let px = 0;
    let py = 0;
    let hasPtr = false;

    const faceY =
      body === 'terminal'
        ? 36
        : body === 'spark'
          ? 44
          : body === 'flux' || body === 'lens' || body === 'scout'
            ? 30
            : 40;
    const faceL =
      body === 'terminal'
        ? 50
        : body === 'flux' || body === 'lens' || body === 'scout'
          ? 44
          : 36;
    const faceR =
      body === 'terminal'
        ? 50
        : body === 'flux' || body === 'lens' || body === 'scout'
          ? 56
          : 64;
    const mouthBase =
      body === 'flux' || body === 'lens' || body === 'scout'
        ? 42
        : body === 'spark'
          ? 56
          : 54;

    const moods = [
      { tilt: lean, smile: 0.5, gazeX: 0, gazeY: 0, bob: 0 },
      { tilt: lean - 5, smile: 0.35, gazeX: 0.4, gazeY: -0.2, bob: -1.5 },
      { tilt: lean + 4, smile: 0.2, gazeX: -0.3, gazeY: -0.35, bob: 1 },
      { tilt: lean - 2, smile: 1, gazeX: 0, gazeY: 0.1, bob: -2.5 },
    ];

    const onMove = (e: PointerEvent) => {
      if (!followPointer || !rootRef.current) return;
      const r = rootRef.current.getBoundingClientRect();
      px = clamp((e.clientX - (r.left + r.width / 2)) / (r.width * 0.5), -1, 1);
      py = clamp((e.clientY - (r.top + r.height / 2)) / (r.height * 0.5), -1, 1);
      hasPtr = true;
    };

    if (followPointer) {
      window.addEventListener('pointermove', onMove, { passive: true });
    }

    const paint = () => {
      const bob = s.bob.value;
      const tilt = s.tilt.value;
      const squash = s.squash.value;
      const sx = Math.sqrt(squash);
      const sy = 1 / Math.max(sx, 0.25);
      if (figureRef.current) {
        figureRef.current.setAttribute(
          'transform',
          `translate(50 58) rotate(${tilt.toFixed(2)}) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(-50 ${(-58 + bob).toFixed(2)})`,
        );
      }

      let gx = s.gazeX.value;
      let gy = s.gazeY.value;
      if (hasPtr) {
        gx = lerp(gx, px * 0.65, 0.5);
        gy = lerp(gy, py * 0.5, 0.5);
      }
      if (faceRef.current) {
        faceRef.current.setAttribute(
          'transform',
          `translate(${(gx * 2).toFixed(2)} ${(gy * 1.4).toFixed(2)})`,
        );
      }

      const blink = s.blink.value;
      if (leftEyeRef.current && eyes === 'beads') {
        leftEyeRef.current.setAttribute(
          'transform',
          `translate(0 ${((1 - blink) * 4).toFixed(2)}) scale(1 ${Math.max(0.12, blink).toFixed(3)})`,
        );
      }
      if (rightEyeRef.current && eyes === 'beads') {
        rightEyeRef.current.setAttribute(
          'transform',
          `translate(0 ${((1 - blink) * 4).toFixed(2)}) scale(1 ${Math.max(0.12, blink).toFixed(3)})`,
        );
      }

      if (pupilLRef.current) {
        pupilLRef.current.setAttribute('cx', String(faceL + 1.2 + gx * 1.6));
        pupilLRef.current.setAttribute('cy', String(faceY - 0.8 + gy * 1.2));
      }
      if (pupilRRef.current) {
        pupilRRef.current.setAttribute('cx', String(faceR + 1.2 + gx * 1.6));
        pupilRRef.current.setAttribute('cy', String(faceY - 0.8 + gy * 1.2));
      }

      const smile = s.smile.value;
      const mw = lerp(5, 12, smile);
      const mh = lerp(0.4, 5, smile);
      const my = mouthBase + lerp(1, -0.5, smile);
      if (mouthRef.current) {
        mouthRef.current.setAttribute(
          'd',
          `M ${50 - mw} ${my} Q 50 ${my + mh} ${50 + mw} ${my}`,
        );
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      if (autoPlay && now >= moodUntil) {
          mood = (mood + 1) % moods.length;
          const m = moods[mood];
          setSpring(s.tilt, m.tilt);
          setSpring(s.smile, m.smile);
          setSpring(s.gazeX, m.gazeX);
          setSpring(s.gazeY, m.gazeY);
          setSpring(s.bob, m.bob);
          if (mood === 3) setSpring(s.squash, 1.12);
          else setSpring(s.squash, 1);
          moodUntil = now + rand(1400, 2600);
        }
        if (!blinking && now >= blinkUntil) {
          blinking = true;
          setSpring(s.blink, 0.1);
          blinkOpenAt = now + rand(70, 110);
        } else if (blinking && now >= blinkOpenAt) {
          blinking = false;
          setSpring(s.blink, 1);
          blinkUntil = now + rand(2000, 5200);
        }
        if (mood % 4 === 0) setSpring(s.bob, Math.sin(now / 850) * 1.2 + moods[0].bob);
        for (const springState of Object.values(s)) stepSpring(springState, dt);
      paint();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, [autoPlay, followPointer, eyes, lean, body]);

  const eyeY =
    body === 'terminal'
      ? 36
      : body === 'spark'
        ? 44
        : body === 'flux' || body === 'lens' || body === 'scout'
          ? 30
          : 40;
  const eyeL = body === 'terminal' ? 50 : body === 'flux' || body === 'lens' || body === 'scout' ? 44 : 36;
  const eyeR = body === 'terminal' ? 50 : body === 'flux' || body === 'lens' || body === 'scout' ? 56 : 64;

  return (
    <div
      ref={rootRef}
      className={`vinyl-bot vinyl-bot--${body} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 100 100" width={size} height={size} overflow="visible">
        <VinylShading palette={palette} uid={uid} />
        <ellipse cx="50" cy="90" rx="22" ry="5" fill={palette.skinDeep} opacity="0.28" />

        <g ref={figureRef} filter={`url(#${uid}-soft)`}>
          <Hat kind={hat} palette={palette} />

          {/* —— Body silhouettes —— */}
          {body === 'crystal' && (
            <g>
              <ellipse
                cx="50"
                cy="48"
                rx="30"
                ry="28"
                fill={`url(#${uid}-body)`}
              />
              <ellipse cx="50" cy="48" rx="30" ry="28" fill={`url(#${uid}-sheen)`} />
              {outfit === 'puffer' && (
                <g>
                  <path
                    d="M28 52c4 18 40 18 44 0v-2c-2 10-14 16-22 16s-20-6-22-16z"
                    fill={`url(#${uid}-outfit)`}
                  />
                  <path
                    d="M50 50v18"
                    stroke={palette.ink}
                    strokeWidth="1.4"
                    opacity="0.35"
                  />
                  {/* quilt lines */}
                  <path
                    d="M36 56h28M34 62h32"
                    stroke={palette.outfitDeep}
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </g>
              )}
            </g>
          )}

          {body === 'terminal' && (
            <g>
              <rect
                x="28"
                y="22"
                width="44"
                height="36"
                rx="6"
                fill={`url(#${uid}-body)`}
              />
              <rect
                x="32"
                y="26"
                width="36"
                height="24"
                rx="3"
                fill={palette.ink}
              />
              <ellipse cx="50" cy="48" rx="36" ry="24" fill={`url(#${uid}-sheen)`} opacity="0.35" />
              <path
                d="M40 58c2 12 18 12 20 0"
                fill={palette.accent}
              />
              <path
                d="M42 62h16c2 8-2 14-8 14s-10-6-8-14z"
                fill={palette.outfit}
              />
              <circle cx="50" cy="70" r="3" fill={palette.accentSoft} />
            </g>
          )}

          {body === 'flux' && (
            <g>
              <ellipse cx="50" cy="30" rx="16" ry="15" fill={`url(#${uid}-body)`} />
              <ellipse cx="50" cy="30" rx="16" ry="15" fill={`url(#${uid}-sheen)`} />
              {outfit === 'hoodie' && (
                <path
                  d="M34 38c-4 2-8 10-6 22l8 2c2-8 6-12 14-12s12 4 14 12l8-2c2-12-2-20-6-22-4-6-18-8-32 0z"
                  fill={`url(#${uid}-outfit)`}
                />
              )}
              <path d="M42 62c2 16 4 22 8 28" stroke={palette.skinDeep} strokeWidth="5" strokeLinecap="round" />
              <path d="M58 62c-2 16-4 22-8 28" stroke={palette.skin} strokeWidth="5" strokeLinecap="round" />
              <path d="M34 48c-10 4-14 10-12 14" stroke={palette.skinDeep} strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M66 48c10 4 14 10 12 14" stroke={palette.skin} strokeWidth="4.5" strokeLinecap="round" fill="none" />
              {/* hair spikes */}
              <path
                d="M38 18l4-10 4 8 4-12 4 10 5-8 3 8"
                fill={palette.ink}
                opacity="0.85"
              />
            </g>
          )}

          {body === 'lens' && (
            <g>
              <ellipse cx="50" cy="28" rx="15" ry="14" fill={`url(#${uid}-body)`} />
              <ellipse cx="50" cy="28" rx="15" ry="14" fill={`url(#${uid}-sheen)`} />
              {outfit === 'sweater' && (
                <path
                  d="M32 38c0 0 4-4 18-4s18 4 18 4c2 4 4 22-2 28H34c-6-6-4-24-2-28z"
                  fill={`url(#${uid}-outfit)`}
                />
              )}
              <path d="M42 64v22" stroke={palette.accent} strokeWidth="6" strokeLinecap="round" />
              <path d="M58 64v22" stroke={palette.accentSoft} strokeWidth="6" strokeLinecap="round" />
              <path d="M34 48c-8 2-12 8-10 12" stroke={palette.skinDeep} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M66 48c8 2 12 8 10 12" stroke={palette.skin} strokeWidth="4" strokeLinecap="round" fill="none" />
            </g>
          )}

          {body === 'spark' && (
            <g>
              <ellipse cx="50" cy="48" rx="22" ry="20" fill={`url(#${uid}-body)`} />
              <ellipse cx="50" cy="48" rx="22" ry="20" fill={`url(#${uid}-sheen)`} />
              {/* ear discs */}
              <ellipse cx="28" cy="36" rx="10" ry="12" fill={palette.ink} />
              <ellipse cx="28" cy="36" rx="5" ry="6" fill={palette.accent} />
              <ellipse cx="72" cy="36" rx="10" ry="12" fill={palette.ink} />
              <ellipse cx="72" cy="36" rx="5" ry="6" fill={palette.accentSoft} />
              <path
                d="M68 58c12 4 18 14 14 22"
                fill="none"
                stroke={palette.accent}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="82" cy="80" r="3" fill={palette.accent} />
            </g>
          )}

          {body === 'scout' && (
            <g>
              <ellipse cx="50" cy="32" rx="14" ry="13" fill={`url(#${uid}-body)`} />
              <ellipse cx="50" cy="32" rx="14" ry="13" fill={`url(#${uid}-sheen)`} />
              <path
                d="M36 40c-2 2-4 10 0 18l14 4 14-4c4-8 2-16 0-18-4-8-20-10-28 0z"
                fill={`url(#${uid}-outfit)`}
              />
              {outfit === 'scarf' && (
                <path
                  d="M34 38c8-4 24-4 32 0l-4 10c-8-2-16-2-24 0z"
                  fill={palette.accent}
                />
              )}
              <path d="M44 60c1 14 2 22 6 28" stroke={palette.skinDeep} strokeWidth="5" strokeLinecap="round" />
              <path d="M56 60c-1 14-2 22-6 28" stroke={palette.outfitDeep} strokeWidth="5" strokeLinecap="round" />
              <path d="M34 48c-10 8-8 16-4 18" stroke={palette.accent} strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M66 48c8 4 12 10 10 16" stroke={palette.skin} strokeWidth="4" strokeLinecap="round" fill="none" />
            </g>
          )}

          {/* Face layer */}
          <g ref={faceRef}>
            <Eyes
              kind={body === 'terminal' ? 'pixel' : eyes}
              palette={palette}
              leftRef={leftEyeRef}
              rightRef={rightEyeRef}
              pupilLRef={pupilLRef}
              pupilRRef={pupilRRef}
              cxL={eyeL}
              cxR={eyeR}
              cy={eyeY}
            />
            {body !== 'terminal' && eyes !== 'line' && (
              <path
                ref={mouthRef}
                d="M 44 54 Q 50 58 56 54"
                fill="none"
                stroke={palette.ink}
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
            {eyes === 'line' && (
              <path
                ref={mouthRef}
                d="M 46 50 Q 50 53 54 50"
                fill="none"
                stroke={palette.ink}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default VinylBot;
