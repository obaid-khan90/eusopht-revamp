import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  CloudIcon,
  ArrowsRightLeftIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  { icon: GlobeAltIcon, title: 'Web Application Development', body: 'Fast, scalable web apps and dashboards built with React, Next.js, and modern back-ends.' },
  { icon: DevicePhoneMobileIcon, title: 'Mobile App Development', body: 'Cross-platform and native iOS/Android apps with smooth UX and reliable performance.' },
  { icon: RocketLaunchIcon, title: 'MVP & Product Development', body: 'Go from idea to launch fast with a focused MVP that’s built to evolve into a full product.' },
  { icon: CloudIcon, title: 'SaaS & Cloud Platforms', body: 'Multi-tenant SaaS, billing, and cloud-native architecture designed to scale from day one.' },
  { icon: ArrowsRightLeftIcon, title: 'API & Systems Integration', body: 'Robust APIs and integrations that connect your software cleanly to the tools you rely on.' },
  { icon: WrenchScrewdriverIcon, title: 'Legacy Modernisation', body: 'Refactor or rebuild aging systems into maintainable, scalable, future-proof software.' },
];

export default function CustomServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader overline="What We Offer" headline="Custom Software Development Services" subtitle="Full product lifecycle engineering — from first prototype to scaled, production-grade software." centered />
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
