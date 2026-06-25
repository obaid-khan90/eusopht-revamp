'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import {
  projects as allProjects,
  SOLUTION_GROUPS,
  solutionOf,
  CARD_IMAGE,
  type Project,
  type SolutionKey,
} from './portfolioData';

export default function CategorySections({ items = allProjects }: { items?: Project[] }) {
  const [active, setActive] = useState<SolutionKey>(SOLUTION_GROUPS[0].key);
  const [visibleCount, setVisibleCount] = useState(6);

  // Activate a tab on mount. A URL hash (e.g. /portfolio#automation) takes
  // priority for deep links; otherwise restore the tab the user was last on
  // before opening a project, so Back returns them to the same tab.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SolutionKey;
    const isValid = (k: string): k is SolutionKey => SOLUTION_GROUPS.some((g) => g.key === k);

    if (isValid(hash)) {
      setActive(hash);
      // wait a frame so the section is laid out, then scroll into view
      requestAnimationFrame(() => {
        document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    const stored = sessionStorage.getItem('portfolio-tab') ?? '';
    if (isValid(stored)) setActive(stored);
  }, []);

  const group = SOLUTION_GROUPS.find((g) => g.key === active) ?? SOLUTION_GROUPS[0];
  const countFor = (key: SolutionKey) => items.filter((p) => solutionOf(p.slug) === key).length;
  const groupProjects = items.filter((p) => solutionOf(p.slug) === group.key);
  const visibleProjects = groupProjects.slice(0, visibleCount);
  const hasMore = visibleCount < groupProjects.length;

  const handleTabChange = (key: SolutionKey) => {
    setActive(key);
    setVisibleCount(6);
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Remember the active tab before navigating to a project, so returning to
  // the portfolio (Back button or breadcrumb) re-activates the same tab. We use
  // sessionStorage instead of mutating the URL, which would race with the
  // router's own navigation and break the click-through to the project page.
  const rememberTab = () => {
    sessionStorage.setItem('portfolio-tab', active);
  };

  return (
    <section id="our-work" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <AnimatedSection className="flex flex-col items-center text-center">
          <SectionHeader
            overline="Our Work"
            headline="Projects across every solution"
            subtitle="Explore what we've shipped — grouped by the kind of problem we solved."
            centered
          />
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SOLUTION_GROUPS.map((g) => (
            <button
              key={g.key}
              onClick={() => handleTabChange(g.key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === g.key
                  ? 'bg-accent text-white shadow-sm'
                  : 'border border-border bg-white text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {g.label}
              <span className={`text-xs ${active === g.key ? 'text-white/70' : 'text-text-muted'}`}>
                {countFor(g.key)}
              </span>
            </button>
          ))}
        </AnimatedSection>

        {/* Blurb */}
        <p className="mt-6 text-center text-sm text-text-secondary">{group.blurb}</p>

        {/* Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleProjects.map((p) => (
                <div key={p.slug} className="h-[420px]" onClick={rememberTab}>
                  <ProjectCard
                    href={`/project/${p.slug}`}
                    image={CARD_IMAGE[p.slug] ?? p.image}
                    title={p.title}
                    category={p.category}
                    description={p.description}
                    tags={p.technologies.slice(0, 3)}
                    className="h-[420px]"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Show More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShowMore}
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
