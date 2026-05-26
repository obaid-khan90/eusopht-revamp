'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const stats = [
  { end: 800, suffix: '+', label: 'Products & platforms shipped' },
  { end: 12, suffix: '+', label: 'Industries served' },
  { end: 5, suffix: '.0/5.0', label: 'Average client rating' },
];

export default function CustomHero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
          <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-text-primary">Custom Software</span>
          </nav>

          <div className="flex items-center gap-10">
            <motion.div variants={container} initial="hidden" animate="visible" className="flex-1 lg:max-w-[62%]">
              <motion.h1 variants={item} className="text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-accent">Custom Software</span>{' '}
                built to scale with your business
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                From MVP to enterprise platform, Eusopht designs and engineers web, mobile, and cloud software around your exact needs. No rigid templates — just reliable, scalable products built to grow with you.
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
                src="/icons-cut/custom dev.png"
                alt="Custom Software"
                fill
                sizes="(max-width:1024px) 0vw, 38vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-text-primary lg:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-accent">Custom Software Development</span> That Fits How You Work
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  Off-the-shelf tools force your business to bend around their limitations. Custom software does the opposite — it&apos;s shaped around your workflows, your data, and your goals, giving you a product that fits exactly and scales without friction.
                </p>
                <p>
                  At Eusopht, we cover the full product lifecycle: discovery and design, architecture, full-stack engineering, deployment, and ongoing iteration. We build web apps, mobile apps, SaaS platforms, internal tools, and APIs — production-grade and maintainable.
                </p>
                <p>
                  Whether you&apos;re validating a new idea or modernising a legacy system, we focus on clean architecture, measurable outcomes, and software your team can own and extend long after launch.
                </p>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" alt="Eusopht software engineering team at work" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-white">
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
