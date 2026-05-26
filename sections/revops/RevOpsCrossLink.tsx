import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RevOpsCrossLink() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-accent/20 bg-accent-light/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Revenue Operations
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-primary lg:text-2xl">
                Running on HubSpot or GoHighLevel?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                Explore our RevOps practice — we turn your CRM into a measurable revenue machine.
              </p>
            </div>
            <Link
              href="/revops"
              className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore RevOps
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
