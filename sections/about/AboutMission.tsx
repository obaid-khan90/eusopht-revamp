import AnimatedSection from '@/components/ui/AnimatedSection';

const values = [
  {
    title: 'Ship-first culture',
    body: 'We bias toward delivery. Real working software in production beats polished decks every time.',
  },
  {
    title: 'Business partners, not vendors',
    body: 'We push back on bad ideas, ask the uncomfortable questions, and care about outcomes — not just output.',
  },
  {
    title: 'Craft at every layer',
    body: 'Clean architecture, readable code, thoughtful UX. We take pride in how things are built, not just that they are built.',
  },
  {
    title: 'Transparent by default',
    body: "No surprises. Clear timelines, honest estimates, and direct communication — even when it's uncomfortable.",
  },
];

export default function AboutMission() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Mission */}
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Mission</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-primary sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              To make great software accessible to every ambitious business.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Too many businesses are held back by slow development, poor quality, or agencies that treat them as ticket numbers. We started Eusopht to be the agency we wished existed — one that ships fast, communicates honestly, and stays invested in your success long after the project ends.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              From our first project in 2017 to shipping 23+ production products across 4 continents, that founding principle hasn't changed.
            </p>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What We Stand For</span>
            <div className="mt-6 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-bold text-text-primary">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
