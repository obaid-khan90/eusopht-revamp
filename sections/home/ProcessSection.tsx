'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  DocumentMagnifyingGlassIcon,
  Squares2X2Icon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    icon: DocumentMagnifyingGlassIcon,
    title: 'AI-Powered Discovery',
    description:
      'Our AI Agent analyzes your business goals, workflows, and technical needs to collect structured requirements.',
  },
  {
    number: '02',
    icon: Squares2X2Icon,
    title: 'Intelligent Solution Design',
    description:
      'We design architectures that integrate AI models, agents, and analytics into core processes.',
  },
  {
    number: '03',
    icon: CodeBracketIcon,
    title: 'Smart Development & Automation',
    description:
      'Our engineers implement systems with built-in automation, self-learning components, and predictive logic.',
  },
  {
    number: '04',
    icon: RocketLaunchIcon,
    title: 'Continuous Optimization',
    description:
      'We continuously improve models, workflows, and performance using real data.',
    result: 'Result: Faster delivery. Lower costs. Smarter products.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Mobile: original header + scroll-stacking cards ── */}
        <div className="lg:hidden">
          <AnimatedSection className="text-center flex flex-col items-center">
            <SectionHeader
              overline="AI-First Company"
              headline="Our AI-First Approach"
              subtitle="Unlike traditional development companies, we start every project with AI in mind. From the first discovery call to deployment, our process is built around intelligence, automation, and scalability."
              centered
            />
          </AnimatedSection>

          {/* Cards stack: card 01 pins first, the rest slide up and stack on top of it */}
          <div className="mt-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="sticky top-28 pb-6"
                style={{ zIndex: i + 1 }}
              >
                <div className="overflow-hidden rounded-2xl border border-accent/15 bg-[#eef3ff] shadow-md">
                  {/* Icon + hr bar inside the card so it cleanly covers the card below */}
                  <div className="flex items-center gap-3 px-8 pt-6 pb-3">
                    <step.icon className="h-6 w-6 shrink-0 text-accent" />
                    <span className="h-px flex-1 bg-accent/40" />
                  </div>
                  <div className="px-8 pb-8">
                    <span
                      className="block text-5xl font-extrabold leading-none text-accent"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-text-primary">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                    {step.result && (
                      <p className="mt-2 text-sm font-bold text-text-primary">{step.result}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop: original layout ── */}
        <div className="hidden lg:block">
          <AnimatedSection className="text-center flex flex-col items-center">
            <SectionHeader
              overline="AI-First Company"
              headline="Our AI-First Approach"
              subtitle="Unlike traditional development companies, we start every project with AI in mind. From the first discovery call to deployment, our process is built around intelligence, automation, and scalability."
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 items-stretch gap-x-8 gap-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={(i % 2) * 0.1} className="flex flex-col">
                <div className="mb-5 flex items-center gap-3">
                  <step.icon className="h-6 w-6 shrink-0 text-accent" />
                  <span className="h-px flex-1 bg-accent/40" />
                </div>
                <div className="flex-1 rounded-2xl border border-accent/15 bg-accent-light/40 p-8">
                  <span
                    className="block text-5xl font-extrabold leading-none text-accent"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                  {step.result && (
                    <p className="mt-2 text-sm font-bold text-text-primary">{step.result}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
