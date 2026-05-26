import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  MapIcon,
  CommandLineIcon,
  ArrowPathRoundedSquareIcon,
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: MapIcon,
    title: 'AI Automation Strategy',
    body: 'We map your workflows, find the highest-impact automation opportunities, and deliver a clear plan to capture them.',
  },
  {
    icon: CommandLineIcon,
    title: 'Custom AI Automation Development',
    body: 'Bespoke automation built for your stack — orchestration, AI decisioning, and integrations that fit how you actually work.',
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: 'AI Workflow Consulting',
    body: 'Expert guidance on tool selection, architecture, and rollout so your automation scales without technical debt.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'AI Systems Integration',
    body: 'Connect CRMs, payment gateways, and internal tools into one reliable, auditable flow with no manual handoffs.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'AI Automation Optimisation',
    body: 'Tune existing automations for accuracy, speed, and cost — and replace brittle scripts with resilient pipelines.',
  },
  {
    icon: LifebuoyIcon,
    title: 'Support & Maintenance',
    body: 'Ongoing monitoring, alerting, and improvements that keep your automations running as your business evolves.',
  },
];

export default function AutomationServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="What We Offer"
            headline="AI Automation Development Services"
            subtitle="End-to-end automation — from strategy and build to integration, optimisation, and long-term support."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-text-primary">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{s.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
