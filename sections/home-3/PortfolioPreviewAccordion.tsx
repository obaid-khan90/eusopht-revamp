'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { workGroups, type WorkGroup } from '@/sections/home/workData';

function CategoryRow({ group }: { group: WorkGroup }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const raf = requestAnimationFrame(update);
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollByCard = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const step = (el.firstElementChild as HTMLElement)?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (step + 20), behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
      {/* Left — label + desc with accent divider */}
      <div className="flex gap-5 lg:sticky lg:top-28 lg:self-start">
        <span aria-hidden className="hidden w-1 shrink-0 rounded-full bg-accent lg:block" />
        <div>
          <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            {group.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{group.blurb}</p>
          <Link
            href="/portfolio"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
          >
            View all projects <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Right — carousel (same card sizing as original 3-col grid) */}
      <div className="relative min-w-0">
        {/* Arrows — top right, may sit slightly above/outside the box */}
        <div className="absolute -top-12 right-0 z-10 flex gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canLeft}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={!canRight}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Scroller — card width matches a 3-up grid: (100% - 2 gaps) / 3 */}
        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {group.projects.map((p) => (
            <div
              key={p.title}
              className="h-[380px] w-[280px] shrink-0 sm:w-[300px] lg:w-[300px]"
            >
              <ProjectCard
                href={p.href}
                image={p.image}
                title={p.title}
                category={p.category}
                description={p.description}
                tags={p.tags}
                className="h-[380px]"
              />
            </div>
          ))}

          {/* Last item — View All card (same width as project cards) */}
          <div className="h-[380px] w-[280px] shrink-0 sm:w-[300px] lg:w-[300px]">
            <Link
              href="/portfolio"
              className="group flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-border bg-bg transition-colors hover:border-accent hover:bg-accent-light"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm transition-colors group-hover:border-accent group-hover:text-accent">
                View All <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPreviewAccordion() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <SectionHeader
            overline="Our Work"
            headline="Projects across every solution"
            subtitle="A look at what we've shipped — organised by the kind of problem we solved."
            centered
          />
        </AnimatedSection>

        <div className="flex flex-col">
          {workGroups.map((g, gi) => (
            <AnimatedSection key={g.key}>
              <div className={`pb-12 ${gi > 0 ? 'border-t border-border pt-20' : 'pt-12'}`}>
                <CategoryRow group={g} />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-base font-semibold text-text-primary hover:bg-accent-light hover:border-accent transition-colors"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
