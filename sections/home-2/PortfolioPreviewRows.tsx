import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { workGroups } from '@/sections/home/workData';

export default function PortfolioPreviewRows() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <SectionHeader
            overline="Our Work"
            headline="Projects across every solution"
            subtitle="A look at what we've shipped — organised by the kind of problem we solved."
            centered
          />
        </AnimatedSection>

        <div className="flex flex-col gap-16">
          {workGroups.map((g) => (
            <AnimatedSection key={g.key}>
              {/* Row header */}
              <div className="mb-7 flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                      {g.label}
                    </h3>
                    <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {g.projects.length}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-text-secondary">{g.blurb}</p>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.projects.map((p) => (
                  <div key={p.title} className="h-[400px]">
                    <ProjectCard
                      href={p.href}
                      image={p.image}
                      title={p.title}
                      category={p.category}
                      description={p.description}
                      tags={p.tags}
                      className="h-[400px]"
                    />
                  </div>
                ))}
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
