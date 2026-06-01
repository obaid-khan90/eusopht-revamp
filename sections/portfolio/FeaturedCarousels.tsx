'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import TechIcon from '@/components/ui/TechIcon';
import { TECH_META, type Project } from './portfolioData';

const SHOWCASE_IMAGE: Record<string, string> = {
  'autosmart-australia': '/autosmart.png',
  'nullship': '/null-ship.png',
  'postmerica': '/Postmerica.png',
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

type SlideKind = 'overview' | 'features' | 'results';
const SLIDES: { kind: SlideKind; label: string }[] = [
  { kind: 'overview', label: 'Overview' },
  { kind: 'features', label: 'Features' },
  { kind: 'results', label: 'Results' },
];

// ── slide panels (right column content) ──────────────────────────────────────

function OverviewPanel({ p }: { p: Project }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">Overview</p>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary lg:text-base">
        {p.longDescription}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {p.technologies.map((t) => {
          const meta = TECH_META[t];
          return (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary">
              {meta && <TechIcon name={t} icon={meta.icon} color={meta.color} />}
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function FeaturesPanel({ p }: { p: Project }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">Key Features</p>
      <ul className="mt-4 space-y-3">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-sm leading-snug text-text-secondary lg:text-base">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResultsPanel({ p }: { p: Project }) {
  const visitLink = p.platforms
    .map((plat) => p.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">Results &amp; Impact</p>
      <div className="mt-4 rounded-xl text-sm leading-relaxed text-text-secondary lg:text-base">
        {p.results}
      </div>
      <div className="mt-5">
        <a
          href={visitLink ?? `/portfolio/${p.slug}`}
          target={visitLink ? '_blank' : undefined}
          rel={visitLink ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary transition-colors hover:text-accent mt-5"
        >
          {p.title}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

// ── one project carousel ─────────────────────────────────────────────────────

function ProjectCarousel({ p, reversed = false }: { p: Project; reversed?: boolean }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const count = SLIDES.length;

  const go = (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]);

  const image = SHOWCASE_IMAGE[p.slug] ?? p.imageDesktop ?? p.image;
  const slide = SLIDES[index];

  const visitLink = p.platforms
    .map((plat) => p.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image + title — left by default, right when reversed */}
          <div className={`relative min-h-[280px] lg:min-h-[440px] ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <Image
              src={image}
              alt={p.title}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {p.category}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <h3 className="text-2xl font-bold leading-tight text-white lg:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {p.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {visitLink ? (
                  <a href={visitLink} target="_blank" rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white">
                    Visit Now <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/60">
                    Coming Soon
                  </span>
                )}
                <a href={`/portfolio/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                  Case Study <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sliding detail panels — right by default, left when reversed */}
          <div className={`relative overflow-hidden p-8 sm:p-10 lg:p-12 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={slide.kind}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="h-full"
              >
                {slide.kind === 'overview' && <OverviewPanel p={p} />}
                {slide.kind === 'features' && <FeaturesPanel p={p} />}
                {slide.kind === 'results' && <ResultsPanel p={p} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls — arrows + dots */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <button onClick={() => go(-1)} aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button key={s.kind} onClick={() => setState(([cur]) => [i, i > cur ? 1 : -1])}
              aria-label={`Go to ${s.label}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-7 bg-accent' : 'w-2 bg-border hover:bg-text-muted'}`} />
          ))}
        </div>

        <button onClick={() => go(1)} aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ── section ───────────────────────────────────────────────────────────────────

export default function FeaturedCarousels({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 flex flex-col items-center text-center">
          <SectionHeader
            overline="Selected Work"
            headline="Projects we're proud of"
            subtitle="A closer look at the products and platforms we've shipped — swipe through each for the full story."
            centered
          />
        </AnimatedSection>

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <AnimatedSection key={p.slug}>
              <ProjectCarousel p={p} reversed={i % 2 === 1} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
