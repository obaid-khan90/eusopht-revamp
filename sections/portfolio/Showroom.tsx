'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TechIcon from '@/components/ui/TechIcon';
import { TECH_META, type Project } from './portfolioData';

export default function Showroom({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  if (projects.length === 0) return null;

  const p = projects[active];
  const visitLink = p.platforms
    .map((plat) => p.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  return (
    <section className="bg-bg py-24 text-text-primary">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Work
          </span>
          <h2
            className="mt-4 text-4xl font-bold leading-tight text-text-primary sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Explore the showroom
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            A quick look at the latest full-scale web applications, custom platforms, and high-performance websites.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
          {/* Left — index list */}
          <ul className="flex flex-col">
            {projects.map((proj, i) => {
              const isActive = i === active;
              const projLink = proj.platforms
                .map((plat) => proj.platformLinks?.[plat])
                .find((link) => link && !link.toLowerCase().includes('coming soon'));
              return (
                <li
                  key={proj.slug}
                  className="group flex items-center justify-between gap-4 border-b border-border"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex flex-1 items-baseline gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-xs font-mono tabular-nums transition-colors ${isActive ? 'text-accent' : 'text-text-muted'
                        }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-xl font-semibold transition-all duration-300 sm:text-2xl ${isActive ? 'text-text-primary translate-x-1' : 'text-text-muted group-hover:text-text-secondary'
                        }`}
                    >
                      {proj.title}
                    </span>
                  </button>

                  {projLink ? (
                    <a
                      href={projLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${proj.title} live site`}
                      className={`shrink-0 p-2 transition-all duration-300 ${isActive ? 'text-accent opacity-100' : 'text-text-muted opacity-0 group-hover:opacity-60'
                        } hover:text-accent! hover:opacity-100!`}
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  ) : (
                    <ArrowUpRightIcon
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${isActive ? 'text-accent opacity-100' : 'text-text-muted opacity-0 group-hover:opacity-60'
                        }`}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right — live preview panel */}
          <div className="lg:sticky lg:top-24 lg:self-start ms-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={p.imageDesktop ?? p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 60vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/40 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {p.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-7 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <h3
                      className="text-2xl font-bold text-text-primary sm:text-3xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary line-clamp-3">
                      {p.longDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.technologies.slice(0, 5).map((t) => {
                        const meta = TECH_META[t];
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary"
                          >
                            {meta && <TechIcon name={t} icon={meta.icon} color={meta.color} />}
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {visitLink ? (
                        <a
                          href={visitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white"
                        >
                          Visit Now
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg px-6 py-3 text-sm font-semibold text-text-muted">
                          Coming Soon
                        </span>
                      )}
                      <a
                        href={`/project/${p.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:bg-accent-light"
                      >
                        View Case Study
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
