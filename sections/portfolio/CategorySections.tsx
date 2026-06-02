'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';
import {
  projects as allProjects,
  SOLUTION_GROUPS,
  solutionOf,
  type Project,
  type SolutionGroup,
} from './portfolioData';

// Grid-card-only image overrides (detail pages keep their own image).
const CARD_IMAGE: Record<string, string> = {
  cricketmood: '/7.png',
  midwifex: '/Midwife.png',
  'mensa-pay': '/mensa.png',
};

function CategoryBlock({ group, projects }: { group: SolutionGroup; projects: Project[] }) {
  const [open, setOpen] = useState(true);

  return (
    <section id={group.key} className="scroll-mt-28">
      <AnimatedSection className="mb-10 flex items-start justify-between gap-6">
        <div className="flex items-start gap-5">
          <span aria-hidden className="mt-1 hidden h-12 w-1 shrink-0 rounded-full bg-accent lg:block" />
          <div>
            <h2
              className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {group.label}
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-secondary">
              {group.blurb}
            </p>
          </div>
        </div>

        {/* Collapse toggle — end of heading row */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? `Collapse ${group.label}` : `Expand ${group.label}`}
          className="mt-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </AnimatedSection>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-6 pb-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function CategorySections({ items = allProjects }: { items?: Project[] }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col gap-24">
        {SOLUTION_GROUPS.map((group) => {
          const groupProjects = items.filter((p) => solutionOf(p.slug) === group.key);
          if (groupProjects.length === 0) return null;
          return <CategoryBlock key={group.key} group={group} projects={groupProjects} />;
        })}
      </div>
    </div>
  );
}
