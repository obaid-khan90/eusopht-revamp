'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TechIcon from '@/components/ui/TechIcon';
import { TECH_META, type Project } from './portfolioData';

const AUTOPLAY_MS = 5000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function FeaturedCarousel({ projects }: { projects: Project[] }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  const go = useCallback(
    (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]),
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setInterval(() => setState(([i]) => [(i + 1) % count, 1]), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  if (count === 0) return null;
  const p = projects[index];

  const visitLink = p.platforms
    .map((plat) => p.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={p.slug}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-2"
                >
                  {/* Left — content */}
                  <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                    <span className="inline-flex w-fit items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                      {p.category}
                    </span>
                    <h3
                      className="mt-4 text-3xl font-bold leading-tight text-text-primary lg:text-4xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary line-clamp-4">
                      {p.longDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.technologies.map((t) => {
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

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
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
                  </div>

                  {/* Right — image with diagonal split */}
                  <div className="relative min-h-[260px] lg:min-h-[480px]">
                    <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
                      <Image
                        src={p.imageDesktop ?? p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls — arrows + dots */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {projects.map((proj, i) => (
                  <button
                    key={proj.slug}
                    onClick={() => setState(([cur]) => [i, i > cur ? 1 : -1])}
                    aria-label={`Go to ${proj.title}`}
                    className={`h-2 rounded-full transition-all ${i === index ? 'w-7 bg-accent' : 'w-2 bg-border hover:bg-text-muted'}`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
