import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Squares2X2Icon,
  RocketLaunchIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const components = [
  {
    icon: Squares2X2Icon,
    name: 'The Command Center',
    platform: 'HubSpot',
    body: 'The home of your operation. HubSpot is powerful for any B2B team that needs deep, configurable reporting, lifecycle pipelines, and a single source of truth for marketing and sales.',
  },
  {
    icon: RocketLaunchIcon,
    name: 'The Sales Engine',
    platform: 'GoHighLevel',
    body: 'The muscle of your funnel. GHL is the ultimate weapon for agencies and high-velocity sales teams — fast funnels, SMS, automation, and white-label client management.',
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    name: 'The Migration',
    platform: 'The Painkiller',
    body: 'Switch platforms without dropping a single record. We map fields, dedupe data, migrate automations, and validate every step so the move is seamless.',
  },
];

export default function RevOpsEngine() {
  return (
    <section id="engine" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader
            overline="Strategy & Systems"
            headline="The Revenue Engine Components"
            subtitle="We don't just set up software — we build strategic digital assets that fuel your business growth."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {components.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-black/8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
                  <c.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{c.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{c.platform}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
