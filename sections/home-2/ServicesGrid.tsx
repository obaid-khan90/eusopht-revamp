import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  SparklesIcon,
  BoltIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { CardCarousel } from '@/components/card-carousel';

const pillars = [
  {
    index: '01',
    icon: SparklesIcon,
    title: 'AI Development',
    description:
      'AI agents, chatbots, computer vision, and custom LLM solutions that automate decisions and unlock new capabilities for your business.',
    capabilities: ['AI Agents', 'Chatbots & Assistants', 'Computer Vision', 'ML / LLM Development'],
    href: '/services/ai',
  },
  {
    index: '02',
    icon: BoltIcon,
    title: 'Automation',
    description:
      'Workflow automation and deep integrations that connect your tools and eliminate repetitive manual work across your entire stack.',
    capabilities: ['Workflow Automation', 'Integrations', 'Zapier · Make', 'CRM Automation'],
    href: '/services/automation',
  },
  {
    index: '03',
    icon: UserGroupIcon,
    title: 'Staff Augmentation',
    description:
      'Embed experienced Eusopht engineers directly into your team — on your stack, at your pace, with zero ramp-up friction.',
    capabilities: ['Dedicated Teams', 'Outsourcing', 'QA & Testing', 'Hire Developers'],
    href: '/services/staff-augmentation',
  },
  {
    index: '04',
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

        <AnimatedSection>
          {/* Mobile: card carousel */}
          <div className="mt-14 lg:hidden">
            <CardCarousel
              items={pillars.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group relative isolate flex h-[500px] w-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-md transition-colors duration-300 hover:bg-accent"
                >
                  {/* Oversized ghost index — the design anchor */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-5 z-0 select-none text-[7rem] font-extrabold leading-none text-text-primary/[0.04] transition-colors duration-300 group-hover:text-white/10"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.index}
                  </span>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon tile */}
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10">
                      <p.icon className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold leading-snug text-text-primary transition-colors duration-300 group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:text-white/85">
                      {p.description}
                    </p>

                    {/* Capability list */}
                    <ul className="mt-auto space-y-2 border-t border-border pt-5 transition-colors duration-300 group-hover:border-white/20">
                      {p.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-center gap-2.5 text-[13px] font-medium text-text-secondary transition-colors duration-300 group-hover:text-white/90"
                        >
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-colors duration-300 group-hover:bg-white"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-300 group-hover:text-white">
                      Explore
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            />
          </div>

          {/* Desktop: Equal-weight capability index — one row, divided columns */}
          <div className="mt-14 hidden grid-cols-4 overflow-hidden rounded-3xl border border-border bg-white shadow-sm lg:grid">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group relative isolate flex flex-col overflow-hidden p-8 transition-colors duration-300 hover:bg-accent border-r border-border last:border-r-0"
              >
                {/* Oversized ghost index — the design anchor */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-5 z-0 select-none text-[7rem] font-extrabold leading-none text-text-primary/[0.04] transition-colors duration-300 group-hover:text-white/10"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.index}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon tile */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10">
                    <p.icon className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold leading-snug text-text-primary transition-colors duration-300 group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:text-white/85">
                    {p.description}
                  </p>

                  {/* Capability list */}
                  <ul className="mt-auto space-y-2 border-t border-border pt-5 transition-colors duration-300 group-hover:border-white/20">
                    {p.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2.5 text-[13px] font-medium text-text-secondary transition-colors duration-300 group-hover:text-white/90"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-colors duration-300 group-hover:bg-white"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-300 group-hover:text-white">
                    Explore
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
