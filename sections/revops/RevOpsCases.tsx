import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const cases = [
  {
    tag: 'Complete Save',
    title: 'The Migration & Save',
    client: 'Marketing Agency',
    problem: 'Paying $30k/year for a bloated HubSpot setup they barely used.',
    solution: 'Migrated a full team of 50+ users to a GoHighLevel build with active deals in 72 hours, rebuilt all email workflows in GHL.',
    result: 'Saved $24,000/year in software fees. 100% data integrity.',
  },
  {
    tag: 'Pipeline Reactivation',
    title: 'The “Zombie Lead” Reactivation',
    client: 'B2B SaaS Company',
    problem: '8,000 “dead” leads in their CRM that had never been touched in months.',
    solution: 'Built a multi-touch re-engagement campaign across email and SMS using automated scoring.',
    result: 'Generated $150k in new pipeline from dead leads in 30 days.',
  },
  {
    tag: 'Conversion Lift',
    title: 'The Funnel Optimization',
    client: 'High-Ticket Coach',
    problem: 'High ad spend, low booking rate — leads dropping off before the call.',
    solution: 'Audited the funnel and found friction in the calendar booking step. Re-implemented a pre-qualification step.',
    result: 'Booking rate doubled (30% to 60%). Cost-per-acquisition dropped 40%.',
  },
];

export default function RevOpsCases() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader
            overline="Proof"
            headline="Systems that print revenue"
            subtitle="Real infrastructure. Real ROI. No vanity metrics."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-bg p-7">
                <span className="inline-flex w-fit items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-text-primary">{c.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{c.client}</p>

                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">Problem: </span>{c.problem}
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">Solution: </span>{c.solution}
                  </p>
                </div>

                <p className="mt-auto rounded-xl border border-accent/15 bg-accent-light/50 px-4 py-3 text-sm font-semibold text-text-primary">
                  {c.result}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
