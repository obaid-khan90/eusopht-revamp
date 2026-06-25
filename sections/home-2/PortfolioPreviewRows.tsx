'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { workGroups, type WorkGroup } from '@/sections/portfolio/portfolioData';

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
    // one card + gap (first child width + 20px gap)
    const step = (el.firstElementChild as HTMLElement)?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (step + 20), behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header — label + desc + arrows */}
      <div className="mb-6 flex items-end justify-between gap-6 border-l-4 border-accent pl-5">
        <div>
          <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            {group.label}
          </h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">{group.blurb}</p>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canLeft}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={!canRight}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Cards — horizontal scroller */}
      <div className="relative -mx-6 lg:mx-0">
        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto px-6 pb-2 lg:px-0 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {group.projects.map((p) => (
            <div key={p.title} className="h-[380px] w-[78%] shrink-0 sm:w-[46%] lg:w-[31%]">
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
        </div>

        {/* End gradient — hints at more, hides when fully scrolled */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-linear-to-l from-bg to-transparent transition-opacity duration-300 lg:block ${canRight ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}

export default function PortfolioPreviewRows() {
  return (
    <section className="section-dotted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <SectionHeader
            overline="Our Work"
            headline="Projects across every solution"
            subtitle="Scroll through what we've shipped — grouped by the kind of problem we solved."
            centered
          />
        </AnimatedSection>

        <div className="flex flex-col">
          {workGroups.map((g, gi) => (
            <AnimatedSection key={g.key}>
              <div className={`py-12 ${gi > 0 ? 'border-t border-border' : ''}`}>
                <CategoryRow group={g} />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
          >
            View All Work
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
