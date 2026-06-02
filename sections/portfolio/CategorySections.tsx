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
  type Project,
  type SolutionKey,
} from './portfolioData';

// Grid-card-only image overrides (detail pages keep their own image).
const CARD_IMAGE: Record<string, string> = {
  cricketmood: '/7.png',
  midwifex: '/Midwife.png',
  'mensa-pay': '/mensa.png',
};

export default function CategorySections({ items = allProjects }: { items?: Project[] }) {
  const [active, setActive] = useState<SolutionKey>(SOLUTION_GROUPS[0].key);

  // Activate the tab matching the URL hash (e.g. /portfolio#automation) and scroll to it
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SolutionKey;
    if (SOLUTION_GROUPS.some((g) => g.key === hash)) {
      setActive(hash);
      // wait a frame so the section is laid out, then scroll into view
      requestAnimationFrame(() => {
        document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  const group = SOLUTION_GROUPS.find((g) => g.key === active) ?? SOLUTION_GROUPS[0];
  const countFor = (key: SolutionKey) => items.filter((p) => solutionOf(p.slug) === key).length;
  const groupProjects = items.filter((p) => solutionOf(p.slug) === group.key);

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
              onClick={() => setActive(g.key)}
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
              {groupProjects.map((p) => (
                <div key={p.slug} className="h-[420px]">
                  <ProjectCard
                    href={`/portfolio/${p.slug}`}
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
      </div>
    </section>
  );
}
