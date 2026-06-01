'use client';

import { motion } from 'framer-motion';
import {
  HeartIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

/* Pointer-arrow tip */
function CursorArrow({ color = '#334155', flip = false, rotate = 0 }: { color?: string; flip?: boolean; rotate?: number }) {
  const transform = [flip ? 'scaleX(-1)' : '', rotate ? `rotate(${rotate}deg)` : '']
    .filter(Boolean)
    .join(' ');
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 drop-shadow-sm opacity-80"
      style={{ transform: transform || undefined }}
      fill={color}
      aria-hidden
    >
      <path d="M5.5 3.5l13 6.5-5.7 1.8-2.4 5.4z" />
    </svg>
  );
}

/* Industry cursor: arrow + a pill containing icon + industry name */
function IndustryCursor({
  icon: Icon,
  name,
  color,
  point = 'left',
  rotate = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
  point?: 'left' | 'right';
  rotate?: number;
}) {
  const arrowLeft = point === 'left';
  return (
    <div className={`flex items-center gap-0.5 ${arrowLeft ? '' : 'flex-row-reverse'}`}>
      <CursorArrow flip={arrowLeft} rotate={rotate} />
      <div
        className="flex items-center gap-2.5 rounded-full border border-white/70 bg-white/90 p-1 pr-4 shadow-lg shadow-black/10 backdrop-blur-sm"
        style={{ boxShadow: '0 8px 20px -8px rgba(0,0,0,0.25)' }}
      >
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}18`, border: `1.5px solid ${color}40`, color }}
        >
          <Icon className="h-4.5 w-4.5" />
        </div>
        <span className="text-sm font-semibold text-text-primary whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}

/* AI Agent cursor — accent pill with robot icon + label */
function AICursor({ rotate = 0 }: { rotate?: number }) {
  return (
    <div className="flex flex-row-reverse items-center gap-0.5">
      <CursorArrow color="#2563eb" rotate={rotate} />
      <div
        className="flex items-center gap-2 rounded-full border border-white/30 py-1 pl-1 pr-3 text-white"
        style={{
          background: 'linear-gradient(140deg, #2b6bf6 75%, #dadada 100%)',
          boxShadow: '0 0 0 1px rgba(10,60,235,0.35), 0 10px 24px -8px rgba(37,99,235,0.6)',
        }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} className="h-4 w-4">
            <rect x="6" y="6" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21" />
          </svg>
        </div>
        <span className="text-xs font-semibold whitespace-nowrap">AI Agent</span>
        <span className="ml-0.5 flex gap-0.5">
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/80" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/80 [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/80 [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  );
}

/* Gentler drift — smaller range so they feel anchored, not floaty */
const float = (range: number, dur: number) => ({
  animate: { y: [0, -range, 0], x: [0, range * 0.4, 0] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' as const },
});

const INDUSTRIES = [
  { icon: CurrencyDollarIcon, name: 'Fintech', color: '#16a34a', point: 'left' as const, rotate: 145, pos: 'right-0 top-[12%]' },
  { icon: HeartIcon, name: 'Healthcare', color: '#dc2626', point: 'left' as const, rotate: 125, pos: 'right-2 top-[38%]' },
  { icon: ShoppingBagIcon, name: 'eCommerce', color: '#9333ea', point: 'right' as const, rotate: 140, pos: 'left-[-8%] top-[15%]' },
  { icon: AcademicCapIcon, name: 'EdTech', color: '#ea580c', point: 'right' as const, rotate: 110, pos: 'left-[-5%] top-[50%]' },
];

export default function FloatingCursors() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="relative mx-auto h-full max-w-5xl">
        {INDUSTRIES.map((ind, i) => (
          <motion.div key={ind.name} className={`absolute ${ind.pos}`} {...float(7 + i, 5.5 + i * 0.5)}>
            <IndustryCursor
              icon={ind.icon}
              name={ind.name}
              color={ind.color}
              point={ind.point}
              rotate={ind.rotate}
            />
          </motion.div>
        ))}

        {/* AI Agent */}
        <motion.div className="absolute left-4 top-[33%]" {...float(10, 7)}>
          <AICursor rotate={120} />
        </motion.div>
      </div>
    </div>
  );
}
