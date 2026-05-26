'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* Pointer-arrow tip */
function CursorArrow({ color = '#334155', flip = false, rotate = 0 }: { color?: string; flip?: boolean; rotate?: number }) {
  const transform = [flip ? 'scaleX(-1)' : '', rotate ? `rotate(${rotate}deg)` : '']
    .filter(Boolean)
    .join(' ');
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 drop-shadow-sm"
      style={{ transform: transform || undefined }}
      fill={color}
      aria-hidden
    >
      <path d="M5.5 3.5l13 6.5-5.7 1.8-2.4 5.4z" />
    </svg>
  );
}

/* Person cursor: arrow + a pill containing avatar + name label.
   point='left'  → arrow on the left of the pill, pointing left
   point='right' → arrow on the right of the pill, pointing right */
function PersonCursor({
  src,
  name,
  point = 'left',
  rotate = 0,
}: {
  src: string;
  name: string;
  point?: 'left' | 'right';
  rotate?: number;
}) {
  const arrowLeft = point === 'left';
  return (
    <div className={`flex items-center gap-0.5 ${arrowLeft ? '' : 'flex-row-reverse'}`}>
      <CursorArrow flip={arrowLeft} rotate={rotate} />
      <div
        className="flex items-center gap-2 rounded-full border border-white/70 bg-white/90 py-1 pl-1 pr-3 shadow-lg shadow-black/10 backdrop-blur-sm"
        style={{ boxShadow: '0 8px 20px -8px rgba(0,0,0,0.25)' }}
      >
        <div className="relative">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-white bg-white">
            <Image src={src} alt={name} width={32} height={32} className="h-full w-full object-cover" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{name}</span>
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

export default function FloatingCursors() {
  return (
    // Constrained to the same max-w as hero content so cursors hug the container
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="relative mx-auto h-full max-w-5xl">
        {/* Right — client (upper) */}
        <motion.div className="absolute right-0 top-[12%]" {...float(8, 6)}>
          <PersonCursor src="https://randomuser.me/api/portraits/women/44.jpg" name="Sarah" point="left" rotate={165} />
        </motion.div>

        {/* Right — client (just below, closer together) */}
        <motion.div className="absolute right-2 top-[38%]" {...float(7, 5.5)}>
          <PersonCursor src="https://randomuser.me/api/portraits/men/80.jpg" name="James" point="left" rotate={125} />
        </motion.div>

        {/* Left — AI Agent */}
        <motion.div className="absolute left-0 top-[35%]" {...float(10, 7)}>
          <AICursor rotate={105} />
        </motion.div>
      </div>
    </div>
  );
}
