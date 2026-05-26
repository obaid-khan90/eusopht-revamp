import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    title: 'Reclaim Hours Every Day',
    body: 'Automate the repetitive tasks eating your team’s time so they can focus on higher-value work.',
  },
  {
    title: 'Fewer Errors, More Consistency',
    body: 'Automated processes run the same way every time — no missed steps, no manual mistakes.',
  },
  {
    title: 'Scale Without Adding Headcount',
    body: 'Handle more volume without proportionally growing your team. Automation absorbs the load.',
  },
  {
    title: 'Real-Time, Always-On',
    body: 'Your workflows run 24/7 — responding, routing, and processing the instant something happens.',
  },
  {
    title: 'Connected, Not Siloed',
    body: 'Deep integrations keep your tools in sync, so data flows cleanly across your whole stack.',
  },
  {
    title: 'Auditable & Transparent',
    body: 'Every automated action is logged and monitored, so you always know exactly what ran and why.',
  },
];

export default function AutomationBenefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="Why It Works"
            headline="Benefits of AI Automation Services"
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
