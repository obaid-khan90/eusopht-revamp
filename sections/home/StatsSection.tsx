'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center flex flex-col items-center">
          <SectionHeader
            overline="By the Numbers"
            headline="Impact That Speaks for Itself"
            subtitle="A track record built on shipped work and lasting partnerships."
            centered
          />
        </AnimatedSection>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Feature stat — accent filled, spans 2 rows */}
          <AnimatedSection className="md:row-span-2">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 text-white"
              style={{ background: 'linear-gradient(160deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)' }}
            >
              <div aria-hidden className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">Projects Delivered</span>
              </div>
              <div className="relative mt-8">
                <div className="text-7xl font-extrabold leading-none lg:text-8xl" style={{ fontFamily: 'var(--font-display)' }}>
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">
                  Shipped across 12 industries — from e-commerce and fintech to healthcare and SaaS.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Clients */}
          <AnimatedSection delay={0.08}>
            <StatCard label="Happy Clients" end={30} suffix="+" note="Long-term partnerships, not one-off transactions." />
          </AnimatedSection>

          {/* Countries */}
          <AnimatedSection delay={0.12}>
            <StatCard label="Countries Served" end={10} suffix="+" note="Global delivery from a tight, in-sync team." />
          </AnimatedSection>

          {/* Years */}
          <AnimatedSection delay={0.16}>
            <StatCard label="Years in Business" end={5} suffix="+" note="Continuously shipping, refining, and growing." />
          </AnimatedSection>

          {/* Tech stacks — fills the remaining cell */}
          <AnimatedSection delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-border bg-bg p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Tech We&apos;ve Mastered</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Flutter', 'Node', 'Python', 'AI / LLMs'].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  end,
  suffix,
  note,
}: {
  label: string;
  end: number;
  suffix: string;
  note: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 transition-shadow hover:shadow-md">
      <span className="mb-4 text-xs font-bold uppercase tracking-widest text-text-muted">{label}</span>
      <div className="text-5xl font-extrabold leading-none text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
        <AnimatedCounter end={end} suffix={suffix} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{note}</p>
    </div>
  );
}
