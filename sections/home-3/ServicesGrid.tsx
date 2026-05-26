import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    title: 'AI Development',
    description:
      'AI agents, chatbots, computer vision, and custom LLM solutions that automate decisions and unlock new capabilities.',
    icon: '/icons-cut/AI.png',
    href: '/services/ai',
  },
  {
    title: 'Automation',
    description:
      'Workflow automation and deep integrations that connect your tools and eliminate repetitive manual work across your stack.',
    icon: '/icons-cut/automation.png',
    href: '/services/automation',
  },
  {
    title: 'Staff Augmentation',
    description:
      'Embed experienced Eusopht engineers directly into your team — on your stack, at your pace, with zero ramp-up friction.',
    icon: '/icons-cut/staff.png',
    href: '/services/staff-augmentation',
  },
  {
    title: 'Custom Software',
    description:
      'End-to-end product engineering — web, mobile, and cloud applications built to scale, from MVP to enterprise platform.',
    icon: '/icons-cut/custom dev.png',
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

        <div className="mt-14 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 0.08}
              className={i % 2 === 1 ? 'lg:mt-16' : ''}
            >
              <Link
                href={p.href}
                className="group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-3xl border border-accent/30 bg-white py-8 px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-black/8"
              >
                {/* Back layer — 3D icon bleeding from bottom-right */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-10 z-0 h-52 w-52 opacity-40 transition-all duration-300 group-hover:scale-105 group-hover:opacity-60"
                >
                  <Image
                    src={p.icon}
                    alt=""
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </div>

                {/* Top layer — content */}
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="mb-2 text-lg font-bold text-text-primary">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{p.description}</p>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
                    Explore
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
