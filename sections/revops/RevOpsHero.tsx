'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ChevronRightIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats: { static?: string; end?: number; suffix?: string; label: string }[] = [
  { static: '$1.2M+', label: 'Pipeline generated via automation' },
  { end: 30, suffix: '%', label: 'Average lift in lead-to-close rate' },
  { end: 100, suffix: '%', label: 'Data integrity across CRM migrations' },
];

export default function RevOpsHero() {
  return (
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
          <Link href="/services/automation" className="hover:text-accent transition-colors">Automation</Link>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-text-primary">RevOps</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h1
              variants={item}
              className="text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Turn Your CRM into a{' '}
              <span className="text-accent">Revenue Machine</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              We architect the systems that align your marketing, sales, and service teams — so every lead is tracked, every follow-up is automated, and your revenue becomes measurable, repeatable growth. Specialised in HubSpot &amp; GoHighLevel.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white">
                Get Your Growth Audit
              </a>
              <a href="#engine" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-base font-semibold text-text-primary hover:bg-accent-light hover:border-accent transition-colors">
                See Our Systems
              </a>
            </motion.div>
          </motion.div>

          {/* Dashboard mock — right column visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-border bg-white p-5 shadow-xl shadow-black/5"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Revenue Engine · Live
              </span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </div>

            <div className="mt-5 rounded-2xl bg-accent-light p-5">
              <p className="text-xs font-medium text-text-secondary">Pipeline generated this quarter</p>
              <p className="mt-1 text-3xl font-extrabold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                $1,240,564
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <ArrowTrendingUpIcon className="h-4 w-4" /> +42% vs. last quarter
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs text-text-muted">Leads qualified</p>
                <p className="mt-1 text-xl font-bold text-text-primary">+425</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg">
                  <div className="h-full w-4/5 rounded-full bg-accent" />
                </div>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs text-text-muted">Close rate</p>
                <p className="mt-1 text-xl font-bold text-text-primary">1.3x</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg">
                  <div className="h-full w-3/5 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats band — full-width blue (matches other service pages) */}
      <div className="relative bg-accent">
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
                  {s.static ? s.static : <AnimatedCounter end={s.end!} suffix={s.suffix} />}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
