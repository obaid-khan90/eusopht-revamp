'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  NodeDiagramMock,
  PromptMock,
  VoiceMock,
  ChatMock,
} from '@/components/ui/AIMocks';
import {
  PuzzlePieceIcon,
  SparklesIcon,
  MicrophoneIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    n: '01',
    icon: PuzzlePieceIcon,
    label: 'Connect',
    title: 'We wire AI into the systems you already run',
    body: 'First we map your stack — CRM, helpdesk, ERP, and ops tools — and connect them through real-time, event-driven pipelines so AI can act across everything you use.',
    Mock: NodeDiagramMock,
  },
  {
    n: '02',
    icon: SparklesIcon,
    label: 'Build',
    title: 'We add the intelligence layer your product needs',
    body: 'Next we embed the right models — GPT, Claude, or open-source — tuned to your data with prompt engineering and RAG, so the AI speaks your domain, not generic boilerplate.',
    Mock: PromptMock,
  },
  {
    n: '03',
    icon: MicrophoneIcon,
    label: 'Interface',
    title: 'We meet your users in any format they prefer',
    body: 'Then we layer on the experience — voice assistants, image understanding, and multimodal flows — so people can speak, tap, or show, on any device.',
    Mock: VoiceMock,
  },
  {
    n: '04',
    icon: ChartBarIcon,
    label: 'Measure',
    title: 'We prove the impact, then keep improving it',
    body: 'Finally we instrument everything — tickets resolved, leads qualified, hours saved — so you see the ROI in numbers and we tune the system as it runs.',
    Mock: ChatMock,
  },
];

export default function AISolutionsSteps() {
  return (
    <section id="ai-solutions" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-20">
          <SectionHeader
            overline="AI Solutions"
            headline="How we bring AI into your business"
            subtitle="A clear path from your existing tools to a measurable, intelligent product — four steps, no guesswork."
            centered
          />
        </AnimatedSection>

        <div className="relative">
          {/* Vertical spine — desktop only */}
          <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <AnimatedSection key={s.n} delay={0.05}>
                  <div className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-12`}>
                    {/* Copy */}
                    <div className={`${flip ? 'lg:order-3 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                      <div className={`mb-4 inline-flex items-center gap-2 ${flip ? '' : 'lg:flex-row-reverse'}`}>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-light">
                          <s.icon className="h-5 w-5 text-accent" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          {s.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug text-text-primary lg:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary lg:text-base">
                        {s.body}
                      </p>
                    </div>

                    {/* Number node on the spine */}
                    <div className="order-first flex justify-center lg:order-2">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-bg bg-accent text-base font-bold text-white shadow-lg shadow-accent/30">
                        {s.n}
                      </div>
                    </div>

                    {/* Illustration */}
                    <div className={`${flip ? 'lg:order-1' : 'lg:order-3'}`}>
                      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                        <div className="relative min-h-[260px] bg-bg">
                          <s.Mock />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
