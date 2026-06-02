import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { Project } from './portfolioData';

/** Shared "Next project" card + CTA used across project-detail variants. */
export default function ProjectDetailFooter({ next }: { next: Project }) {
  return (
    <>
      {/* Next project */}
      <section className="bg-bg py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-white p-7 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 sm:flex-row sm:items-center sm:p-9"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted">Next Project</p>
              <h3 className="mt-2 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {next.title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">{next.description}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 text-center text-white sm:px-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                Inspired by this Project?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
                Let&apos;s discuss how we can build something similar for your business. We turn ideas into scalable, production-ready solutions.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-accent shadow-sm transition-colors hover:bg-white/90">
                Start Your Project
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
