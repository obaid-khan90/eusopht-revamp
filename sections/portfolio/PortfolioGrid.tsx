'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects, type ProjectCategory, type Project } from './portfolioData';

const filters: Array<'All' | ProjectCategory> = ['All', 'Web Application', 'Mobile Applications'];
const filterLabels: Record<string, string> = {
  All: 'All',
  'Web Application': 'Web',
  'Mobile Applications': 'Mobile',
};

// Grid-card-only image overrides (detail pages keep their own image).
const CARD_IMAGE: Record<string, string> = {
  cricketmood: '/7.png',
  midwifex: '/Midwife.png',
  'mensa-pay': '/mensa.png',
};

export default function PortfolioGrid({ items = projects }: { items?: Project[] }) {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');
  const list = active === 'All' ? items : items.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
        {filters.map((f) => {
          const count = f === 'All' ? items.length : items.filter((p) => p.category === f).length;
          if (count === 0) return null;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${active === f
                ? 'bg-accent text-white shadow-sm'
                : 'border border-border bg-white text-text-secondary hover:border-accent hover:text-accent'
                }`}
            >
              {filterLabels[f]}
              <span className={`text-xs ${active === f ? 'text-white/70' : 'text-text-muted'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-[420px]"
            >
              <ProjectCard
                href={`/project/${p.slug}`}
                image={CARD_IMAGE[p.slug] ?? p.image}
                title={p.title}
                category={p.category}
                description={p.description}
                tags={p.technologies.slice(0, 3)}
                className="h-[420px]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
