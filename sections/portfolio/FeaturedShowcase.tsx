'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import TechIcon from '@/components/ui/TechIcon';
import { TECH_META, type Project } from './portfolioData';

const SHOWCASE_IMAGE: Record<string, string> = {
  'autosmart-australia': '/autosmart.png',
  'nullship': '/null-ship.png',
  'postmerica': '/Postmerica.png',
};

// ── cards ─────────────────────────────────────────────────────────────────────

function InfoCard({ p, image }: { p: Project; image: string }) {
  const visitLink = p.platforms
    .map((pl) => p.platformLinks?.[pl])
    .find((l) => l && !l.toLowerCase().includes('coming soon')) ?? `/portfolio/${p.slug}`;

  return (
    <a
      href={visitLink}
      target={visitLink.startsWith('http') ? '_blank' : undefined}
      rel={visitLink.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-md"
    >
      <Image src={image} alt={p.title} fill sizes="400px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <span className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-black/25 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
        {p.category}
      </span>
      <div className="relative z-10 mt-auto flex flex-col p-5">
        <h3 className="inline-flex items-center gap-1.5 text-lg font-bold leading-snug text-white">
          {p.title}
          <ArrowUpRightIcon className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75">{p.description}</p>
      </div>
    </a>
  );
}

function OverviewCard({ p, dark }: { p: Project; dark: boolean }) {
  const card = dark ? 'border-white/10 bg-white/5' : 'border-border bg-white';
  const desc = dark ? 'text-white/65' : 'text-text-secondary';
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border shadow-sm ${card}`}>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-accent">Overview</p>
        <p className={`text-sm leading-relaxed ${desc}`}>{p.longDescription}</p>
      </div>
    </div>
  );
}

function FeaturesCard({ p, dark }: { p: Project; dark: boolean }) {
  const card = dark ? 'border-white/10 bg-white/5' : 'border-border bg-white';
  const item = dark ? 'text-white/65' : 'text-text-secondary';
  const tag = dark ? 'border-white/15 bg-white/5 text-white/55' : 'border-border bg-bg text-text-muted';
  const divider = dark ? 'border-white/10' : 'border-border';
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border shadow-sm ${card}`}>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-accent">Key Features</p>
        <ul className="flex-1 space-y-3">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className={`text-sm leading-snug ${item}`}>{f}</span>
            </li>
          ))}
        </ul>
        {/* Tech stack */}
        <div className={`mt-6 border-t pt-5 ${divider}`}>
          <div className="flex flex-wrap gap-1.5">
            {p.technologies.map((t) => {
              const meta = TECH_META[t];
              return (
                <span key={t} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium ${tag}`}>
                  {meta && <TechIcon name={t} icon={meta.icon} color={meta.color} />}
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsCard({ p, dark }: { p: Project; dark: boolean }) {
  const card = dark ? 'border-white/10 bg-white/5' : 'border-border bg-white';
  const block = dark ? 'border-white/10 bg-white/5 text-white/65' : 'border-border bg-bg text-text-secondary';
  const linkCls = dark ? 'text-white hover:text-accent' : 'text-text-primary hover:text-accent';
  const visitLink = p.platforms
    .map((pl) => p.platformLinks?.[pl])
    .find((l) => l && !l.toLowerCase().includes('coming soon'));
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border shadow-sm ${card}`}>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-amber-500">Results & Impact</p>
        <div className={`flex-1 rounded-xl border p-5 text-sm leading-relaxed ${block}`}>
          {p.results}
        </div>
        {/* View button — bottom right */}
        <div className="mt-5 flex items-end justify-end">
          <a
            href={visitLink ?? `/portfolio/${p.slug}`}
            target={visitLink ? '_blank' : undefined}
            rel={visitLink ? 'noopener noreferrer' : undefined}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${linkCls}`}
          >
            {p.title}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── project row ───────────────────────────────────────────────────────────────

function ProjectRow({ p, image, index }: { p: Project; image: string; index: number }) {
  const reversed = index % 2 === 1;
  const MAX = 2;
  const [offset, setOffset] = useState(0);

  const goNext = () => setOffset((o) => Math.min(o + 1, MAX));
  const goPrev = () => setOffset((o) => Math.max(o - 1, 0));

  const arrowCls = 'border-white/30 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 disabled:opacity-25 shadow-lg';

  // reversed: carousel sits left of info card. Track is right-anchored (flex-row-reverse),
  // cards render [Overview, Features, Results] so Overview pins next to info card, slides right→left.
  const fadeSide = reversed ? 'left' : 'right';
  const peekVisible = offset < MAX;

  const cards = [
    <OverviewCard key="overview" p={p} dark={false} />,
    <FeaturesCard key="features" p={p} dark={false} />,
    <ResultsCard key="results" p={p} dark={false} />,
  ];

  return (
    <div className="py-16">
      <div className="px-6">
        <div className={`flex items-stretch gap-5 ${reversed ? 'flex-row-reverse' : ''}`}>

          {/* Static info card */}
          <div className={`w-80 shrink-0 xl:w-96 ${reversed ? 'mr-12' : 'ml-12'}`} style={{ height: 420 }}>
            <InfoCard p={p} image={image} />
          </div>

          {/* Sliding detail cards */}
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className={`flex h-full gap-5 ${reversed ? 'flex-row-reverse' : ''}`}
              animate={{ x: reversed ? `calc(${offset} * (44% + 10px))` : `calc(-${offset} * (44% + 10px))` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {cards.map((card, i) => (
                <div key={i} className="w-[44%] shrink-0" style={{ height: 420 }}>
                  {card}
                </div>
              ))}
            </motion.div>

            {/* Edge fade */}
            <div
              className={`pointer-events-none absolute inset-y-0 ${fadeSide}-0 w-32 transition-opacity duration-300 ${peekVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: `linear-gradient(to ${fadeSide}, transparent, rgba(241,245,249,0.93))` }}
            />
            {/* Arrows overlaid on fade */}
            <div className={`absolute inset-y-0 ${fadeSide}-0 flex w-32 flex-col items-center justify-center gap-2`}>
              <button onClick={goPrev} disabled={offset === 0} aria-label="Previous"
                className={`pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${arrowCls}`}>
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button onClick={goNext} disabled={offset === MAX} aria-label="Next"
                className={`pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${arrowCls}`}>
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── section ───────────────────────────────────────────────────────────────────

export default function FeaturedShowcase({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  // row bg: index 0,2 → light grey; index 1 → section-dotted (white with dots)
  const rowBg = (i: number) => i % 2 === 1 ? 'section-dotted' : 'bg-slate-50';

  return (
    <section>
      <div className="bg-slate-50 pb-0 pt-26">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Selected Work</span>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            A close-up look at three products we shipped — scroll each row for the full picture.
          </p>
        </div>
      </div>

      {projects.map((p, i) => {
        const image = SHOWCASE_IMAGE[p.slug] ?? p.imageDesktop ?? p.image;
        return (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className={rowBg(i)}
          >
            <ProjectRow p={p} image={image} index={i} />
          </motion.div>
        );
      })}
    </section>
  );
}
