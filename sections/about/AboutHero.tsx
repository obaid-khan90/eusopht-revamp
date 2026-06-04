'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-text-primary">About Us</span>
        </nav>

        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Building software that <span className="text-accent">moves businesses</span> forward.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Eusopht is a software agency headquartered in Karachi, Pakistan. Since 2017 we've shipped over 23 production products for clients across fintech, healthcare, eCommerce, and AI — combining deep engineering craft with genuine business partnership.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white">
              See Our Work <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-text-primary hover:border-accent hover:bg-accent-light transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
