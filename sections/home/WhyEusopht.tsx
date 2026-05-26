'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { StarIcon } from '@heroicons/react/24/solid';

/* ── Card 1 illustration: AI-first icon cluster ──────────── */
function DeliveryIllustration() {
  // 4 brand chips placed evenly around a central AI chip (top / left / right / bottom)
  const orbit = [
    { pos: 'left-1/2 top-0 -translate-x-1/2', src: '/openai.png', alt: 'ChatGPT' },
    { pos: 'left-0 top-1/2 -translate-y-1/2', src: 'https://cdn.simpleicons.org/claude/D97757', alt: 'Claude' },
    { pos: 'right-0 top-1/2 -translate-y-1/2', src: 'https://cdn.simpleicons.org/googlegemini/8E75B2', alt: 'Gemini' },
    { pos: 'left-1/2 bottom-0 -translate-x-1/2', src: '/azure.png', alt: 'Azure' },
  ];
  return (
    <div className="flex h-56 w-full items-center justify-center">
      <div className="relative h-44 w-44">
        {/* connecting ring */}
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

        {/* center node — chip core */}
        <div
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl text-white"
          style={{
            background: 'linear-gradient(140deg, #3b82f6 0%, #2563eb 100%)',
            boxShadow: '0 10px 28px -8px rgba(37,99,235,0.6)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
            <rect x="6" y="6" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21" />
          </svg>
        </div>

        {/* orbit chips */}
        {orbit.map((o) => (
          <div
            key={o.alt}
            className={`absolute flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white shadow-md ${o.pos}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={o.src} alt={o.alt} className="h-5 w-5 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 2 illustration: dashboard mock ─────────────────── */
function ProjectsIllustration() {
  return (
    <div className="relative h-56 w-full overflow-hidden">
      <div className="absolute inset-x-6 top-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
          <p className="text-[9px] font-semibold text-accent">Quick Start Guide</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-border" />
          <div className="mt-1 h-1.5 w-2/3 rounded-full bg-border" />
        </div>
        <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
          <p className="text-[9px] font-semibold text-text-secondary">Upcoming Meetings</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-border" />
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-border" />
        </div>
        <div className="col-span-2 rounded-xl border border-border bg-white p-3 shadow-sm">
          <p className="mb-2 text-[9px] font-semibold text-text-muted">Magic Prompts</p>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0">
              <div className="absolute inset-0 rounded-full border-[6px] border-accent/15" />
              <div
                className="absolute inset-0 rounded-full border-[6px] border-accent border-r-transparent border-b-transparent"
                style={{ transform: 'rotate(45deg)' }}
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-border" />
              <div className="h-1.5 w-4/5 rounded-full bg-border" />
              <div className="h-1.5 w-3/5 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card 3 illustration: avatar stack + count ───────────── */
function TeamIllustration() {
  const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
  ];
  return (
    <div className="flex h-56 w-full items-center justify-center">
      <div className="flex items-center -space-x-3">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white"
          style={{ background: 'linear-gradient(140deg, #3b82f6 0%, #2563eb 100%)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        {avatars.map((src) => (
          <div key={src} className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="Eusopht engineer" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-bg text-base font-bold text-text-primary shadow-sm">
          <AnimatedCounter end={150} suffix="+" />
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    Illustration: DeliveryIllustration,
    title: 'AI-First Delivery',
    description: 'Senior engineers + proven AI components to accelerate time-to-value.',
  },
  {
    Illustration: ProjectsIllustration,
    title: '800+ Projects Delivered',
    description: 'From MVPs to enterprise platforms at global scale.',
  },
  {
    Illustration: TeamIllustration,
    title: 'Full-stack Team',
    description: 'From product UX to GPU pipelines and global delivery.',
  },
];

export default function WhyEusopht() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header row */}
        <AnimatedSection className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <Badge>About Eusopht</Badge>
            <h2
              className="mt-4 text-4xl font-extrabold tracking-tight text-text-primary lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why choose Eusopht?
            </h2>
          </div>

          {/* Proven-by-feedback / rating */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm text-text-secondary">Proven by our</p>
              <a href="#contact" className="text-sm font-semibold text-accent underline hover:text-accent-dark">
                customers feedback
              </a>
            </div>
            <div className="flex flex-col items-start border-l border-border pl-3">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-text-muted">Reviewed on</span>
              <span className="text-base font-bold text-text-primary">Clutch</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3 w-3 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3 cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-linear-to-b from-blue-50/40 to-white shadow-sm">
                <div className="px-6 pt-6">
                  <c.Illustration />
                </div>
                <div className="border-t border-border/60 p-7">
                  <h3 className="mb-2 text-xl font-bold text-text-primary">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{c.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
