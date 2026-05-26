'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface Point { x: number; y: number }

function getCenter(el: HTMLElement, container: HTMLElement): Point {
  const er = el.getBoundingClientRect();
  const cr = container.getBoundingClientRect();
  return {
    x: er.left - cr.left + er.width / 2,
    y: er.top - cr.top + er.height / 2,
  };
}

function cubicBezierPath(from: Point, to: Point, curvature = 0.25): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx1 = from.x + dx * curvature;
  const cy1 = from.y + dy * 0.0;
  const cx2 = to.x - dx * curvature;
  const cy2 = to.y - dy * 0.0;
  return `M ${from.x},${from.y} C ${cx1},${cy1} ${cx2},${cy2} ${to.x},${to.y}`;
}

// Softer / muted palettes — less vibrant, more polished feel
// [light, mid, dark, glow rgba]
const COLORS = {
  blue:   ['#bfdbfe', '#60a5fa', '#3b82f6', 'rgba(96,165,250,0.45)'],
  orange: ['#fed7aa', '#fb923c', '#f97316', 'rgba(251,146,60,0.45)'],
  green:  ['#bbf7d0', '#4ade80', '#22c55e', 'rgba(74,222,128,0.45)'],
  violet: ['#ddd6fe', '#a78bfa', '#8b5cf6', 'rgba(167,139,250,0.45)'],
} as const;

export type BeamColor = keyof typeof COLORS;

export interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  curvature?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  color?: BeamColor;
  className?: string;
}

export default function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 3,
  delay = 0,
  reverse = false,
  color = 'blue',
  className = '',
}: AnimatedBeamProps) {
  const id = useId();
  const gradId = `beam-grad-${id.replace(/:/g, '')}`;
  const [path, setPath] = useState('');
  const [pathLen, setPathLen] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [light, mid, dark, glow] = COLORS[color];

  useEffect(() => {
    function recalc() {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;
      const f = getCenter(from, container);
      const t = getCenter(to, container);
      setPath(cubicBezierPath(f, t, curvature === 0 ? 0.0 : curvature));
    }
    recalc();
    const ro = new ResizeObserver(recalc);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature]);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, [path]);

  if (!path) return null;

  const dashLen = pathLen * 0.3;
  const gapLen = pathLen - dashLen;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-visible ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={light} stopOpacity="0" />
          <stop offset="40%"  stopColor={mid}   stopOpacity="0.85" />
          <stop offset="100%" stopColor={dark}  stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={path} fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />

      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${dashLen} ${gapLen}`}
        strokeDashoffset={reverse ? -pathLen : pathLen}
        style={{ filter: `drop-shadow(0 0 3px ${glow})` }}
      >
        <animate
          attributeName="stroke-dashoffset"
          from={reverse ? 0 : pathLen}
          to={reverse ? -pathLen : 0}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
        />
      </path>
    </svg>
  );
}
