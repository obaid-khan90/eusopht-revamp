import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { workGroups } from '@/sections/home/workData';

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
              <div className={`grid grid-cols-1 gap-8 py-12 lg:grid-cols-[260px_1fr] lg:gap-12 ${gi > 0 ? 'border-t border-border' : ''}`}>
                {/* Left — label + desc with accent divider */}
                <div className="flex gap-5 lg:sticky lg:top-28 lg:self-start">
                  <span aria-hidden className="hidden w-1 shrink-0 rounded-full bg-accent lg:block" />
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                      {g.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{g.blurb}</p>
                    <Link
                      href="/portfolio"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
                    >
                      View projects <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right — cards row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.projects.slice(0, 3).map((p) => (
                    <div key={p.title} className="h-[380px]">
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
