import { useEffect, useRef } from 'react';
import { publicUrl } from '../../lib/publicUrl';

/** Reflect-inspired about-globe: preview image + rotating border + canvas dots */
export function EarthGlobe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let running = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const dots = Array.from({ length: 48 }, (_, i) => {
      const lat = ((i * 47) % 160) - 80;
      const lon = (i * 37) % 360;
      return { lat, lon, r: 1.2 + (i % 3) * 0.4, phase: 0.35 + (i % 5) * 0.1 };
    });

    const resize = () => {
      const w = Math.min(936, root.clientWidth);
      const h = 420;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h * 0.62;
      const R = Math.min(w, h) * 0.42;
      const rot = t * 0.00012;

      for (const d of dots) {
        const lon = ((d.lon + rot * 57.3) * Math.PI) / 180;
        const lat = (d.lat * Math.PI) / 180;
        const x = cx + Math.cos(lat) * Math.sin(lon) * R;
        const y = cy - Math.sin(lat) * R * 0.92;
        const z = Math.cos(lat) * Math.cos(lon);
        if (z < -0.15) continue;
        const a = d.phase * (0.35 + 0.65 * ((z + 1) / 2));
        ctx.beginPath();
        ctx.fillStyle = `rgba(157,136,243,${a})`;
        ctx.arc(x, y, d.r * (0.7 + 0.5 * ((z + 1) / 2)), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !running) {
          running = true;
          root.classList.add('is-active');
          raf = requestAnimationFrame(draw);
        } else if (!entry?.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(root);
    resize();
    window.addEventListener('resize', resize);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className={`about-globe ${className}`} aria-hidden>
      <div className="about-globe-inner">
        <div className="about-globe-svg-wrapper">
          <svg viewBox="0 0 984 984" className="about-globe-ring">
            <circle
              cx="492"
              cy="492"
              r="460"
              fill="none"
              stroke="rgba(157,136,243,0.45)"
              strokeWidth="1"
              strokeDasharray="2 10"
            />
            <circle
              cx="492"
              cy="492"
              r="420"
              fill="none"
              stroke="rgba(78, 96, 255,0.25)"
              strokeWidth="1"
              strokeDasharray="1 14"
            />
          </svg>
        </div>
        <img
          src={publicUrl('/motion/globe-preview.png')}
          alt=""
          className="about-globe-preview"
          draggable={false}
        />
        <canvas ref={canvasRef} className="about-globe-canvas" />
      </div>
    </div>
  );
}
