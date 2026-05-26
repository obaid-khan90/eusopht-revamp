'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  BoltIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const points = [
  {
    icon: BoltIcon,
    title: 'Reply within 24 hours',
    desc: 'Send us your details and a real person from our team gets back to you within one business day — no bots, no ticket queues.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Talk to engineers, not salespeople',
    desc: 'Your first conversation is with people who actually build software, so you get straight, technically-grounded answers.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Confidential & no-obligation',
    desc: 'Share as much or as little as you like. We’re happy to sign an NDA, and there’s zero pressure to commit.',
  },
  {
    icon: SparklesIcon,
    title: 'Leave with a clear next step',
    desc: 'Whether it’s a rough idea or a detailed spec, you’ll walk away with direction — scope, approach, or a tailored estimate.',
  },
];

export default function ContactIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — descriptive copy */}
          <AnimatedSection>
            <SectionHeader
              overline="Why Reach Out"
              headline="Tell Us What You're Building"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Every great product starts with a conversation. Whether you have a fully-scoped brief or just a problem you&apos;re trying to solve, we&apos;re here to help you figure out the smartest path forward.
              </p>
              <p>
                Tell us about your goals, your timeline, and the challenges you&apos;re facing. We&apos;ll listen carefully, ask the right questions, and come back with honest, practical guidance — not a generic pitch.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — reassurance points */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-bg p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                    <p.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-text-primary">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{p.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
