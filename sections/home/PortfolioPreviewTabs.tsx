'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { workGroups } from '@/sections/portfolio/portfolioData';

export default function PortfolioPreviewTabs() {
  const [active, setActive] = useState(workGroups[0].key);
  const group = workGroups.find((g) => g.key === active) ?? workGroups[0];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
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
          {workGroups.map((g) => (
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
                {g.projects.length}
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
              {group.projects.map((p) => (
                <div key={p.title} className="h-[420px]">
                  <ProjectCard
                    href={p.href}
                    image={p.image}
                    title={p.title}
                    category={p.category}
                    description={p.description}
                    tags={p.tags}
                    className="h-[420px]"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
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
