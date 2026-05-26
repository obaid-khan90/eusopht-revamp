import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  UserGroupIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  BeakerIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: UserGroupIcon,
    title: 'Dedicated Development Teams',
    body: 'A self-managing squad — engineers, lead, and QA — that owns your roadmap end to end.',
  },
  {
    icon: CpuChipIcon,
    title: 'AI & ML Engineers',
    body: 'Specialists in LLMs, data pipelines, and model deployment to power your AI initiatives.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Web & Mobile Developers',
    body: 'Front-end, back-end, and full-stack engineers across React, Next.js, Flutter, and more.',
  },
  {
    icon: CloudIcon,
    title: 'DevOps & Cloud Engineers',
    body: 'CI/CD, infrastructure-as-code, and cloud architecture on AWS, Azure, and GCP.',
  },
  {
    icon: BeakerIcon,
    title: 'QA & Test Automation',
    body: 'Manual and automated testing (Playwright, Cypress) to keep your releases reliable.',
  },
  {
    icon: PaintBrushIcon,
    title: 'Product & UX Designers',
    body: 'Designers who turn requirements into intuitive, conversion-focused product experiences.',
  },
];

export default function StaffServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="What We Offer"
            headline="Roles You Can Augment With Eusopht"
            subtitle="Plug-and-play talent across every layer of your product — vetted, experienced, and ready to ship."
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
