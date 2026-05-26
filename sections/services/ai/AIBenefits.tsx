import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    title: 'Domain-Specific Expertise',
    body: 'We learn your business before writing code, so the AI we build solves your actual problem — not a generic one.',
  },
  {
    title: 'Production-Grade Engineering',
    body: 'Every model and pipeline is tested, monitored, and documented. We ship systems that run reliably, not demos.',
  },
  {
    title: 'Faster Time-to-Value',
    body: 'Our discovery-first process and reusable components get a working AI capability into your hands in weeks.',
  },
  {
    title: 'Transparent Collaboration',
    body: 'Daily standups, shared workspaces, and clear milestones mean you always know exactly where things stand.',
  },
  {
    title: 'Vendor-Neutral Approach',
    body: 'OpenAI, Claude, open models, or on-prem — we pick the right tool for your constraints, not a fixed stack.',
  },
  {
    title: 'Built to Scale',
    body: 'Architecture decisions account for growth from day one, so your AI keeps performing as usage climbs.',
  },
];

export default function AIBenefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="Why It Works"
            headline="Benefits of Working with an AI Development Company"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm h-full">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="mb-1.5 font-bold text-text-primary">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{b.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
