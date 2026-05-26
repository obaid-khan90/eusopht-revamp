import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  SparklesIcon,
  BoltIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const pillars = [
  {
    icon: SparklesIcon,
    title: 'AI Development',
    description:
      'AI agents, chatbots, computer vision, and custom LLM solutions that automate decisions and unlock new capabilities for your business.',
    capabilities: ['AI Agents', 'Chatbots & Assistants', 'Computer Vision', 'ML / LLM Development'],
    href: '/services/ai',
  },
  {
    icon: BoltIcon,
    title: 'Automation',
    description:
      'Workflow automation and deep integrations that connect your tools and eliminate repetitive manual work across your entire stack.',
    capabilities: ['Workflow Automation', 'Integrations', 'Zapier · Make', 'CRM Automation'],
    href: '/services/automation',
  },
  {
    icon: UserGroupIcon,
    title: 'Staff Augmentation',
    description:
      'Embed experienced Eusopht engineers directly into your team — on your stack, at your pace, with zero ramp-up friction.',
    capabilities: ['Dedicated Teams', 'Outsourcing', 'QA & Testing', 'Hire Developers'],
    href: '/services/staff-augmentation',
  },
  {
    icon: CodeBracketIcon,
    title: 'Custom Software',
    description:
      'End-to-end product engineering — web, mobile, and cloud applications built to scale, from MVP to enterprise platform.',
    capabilities: ['Web Development', 'Mobile Development', 'Product / MVP', 'Cloud & SaaS'],
    href: '/services/custom-software',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionHeader
            overline="What We Do"
            headline="Four Pillars. One Partner."
            subtitle="AI is at the core of everything we build — backed by automation, dedicated engineering teams, and full-stack custom software."
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const teal = i % 2 === 1;
            return (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30"
              >
                {/* Grid pattern bg */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #F1F5F9 1px, transparent 1px),
                      linear-gradient(to bottom, #F1F5F9 1px, transparent 1px),
                      radial-gradient(circle 300px at 100% 0%, rgba(37,99,235,0.04), transparent)
                    `,
                    backgroundSize: '36px 36px, 36px 36px, 100% 100%',
                  }}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${teal ? 'bg-secondary-light' : 'bg-accent-light'}`}>
                    <p.icon className={`h-6 w-6 ${teal ? 'text-secondary' : 'text-accent'}`} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-text-primary">{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-5 text-text-secondary">{p.description}</p>

                  <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${teal ? 'text-secondary' : 'text-accent'}`}>
                    Explore
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
