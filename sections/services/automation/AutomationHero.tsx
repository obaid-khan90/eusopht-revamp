'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { end: 800, suffix: '+', label: 'Workflows automated for clients' },
  { end: 5, suffix: '.0/5.0', label: 'Average client satisfaction rating' },
  { end: 25, suffix: '+', label: 'Automation engineers & integrators' },
];

export default function AutomationHero() {
  return (
    <>
      {/* Hero with soft gradient, left-aligned */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
          <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-text-primary">Automation</span>
          </nav>

          <div className="flex items-center gap-10">
            <motion.div variants={container} initial="hidden" animate="visible" className="flex-1 lg:max-w-[62%]">
              <motion.h1
                variants={item}
                className="text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-accent">Automate Workflows</span>{' '}
                with custom AI solutions
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Eliminate repetitive manual work and connect your entire stack. We design and build intelligent automation — from workflow orchestration to deep integrations — that runs reliably, scales with you, and frees your team to focus on what matters.
              </motion.p>
              <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-base font-semibold text-text-primary hover:bg-accent-light hover:border-accent transition-colors">
                  Estimate Project Online
                </a>
                <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white">
                  Schedule a Call
                </a>
              </motion.div>
            </motion.div>

            {/* 3D service icon — right column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden aspect-square w-[38%] shrink-0 opacity-75 lg:block"
            >
              <Image
                src="/icons-cut/automation.png"
                alt="Automation"
                fill
                sizes="(max-width:1024px) 0vw, 38vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview intro band */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-text-primary lg:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-accent">AI Automation:</span> The Game-Changer for Modern Business
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  Manual, repetitive processes quietly drain time, introduce errors, and cap how fast your business can grow. AI automation changes that — turning slow, hands-on tasks into reliable systems that run on their own, around the clock.
                </p>
                <p>
                  At Eusopht, we build automation that goes beyond simple if-this-then-that rules. We combine workflow orchestration, AI decision-making, and deep integrations across your CRMs, payment systems, and internal tools to create end-to-end processes that adapt and scale.
                </p>
                <p>
                  Whether you need to automate lead routing, document processing, customer support, or back-office operations, we design solutions around your real workflows — measurable, auditable, and built to last.
                </p>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80"
                alt="Eusopht automation engineering team"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-white"
              >
                <span className="block text-sm text-white/80 mb-2">{s.label}</span>
                <span className="block text-5xl font-extrabold lg:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
