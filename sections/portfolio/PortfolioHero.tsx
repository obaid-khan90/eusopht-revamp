'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-text-primary">Portfolio</span>
        </nav>

        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Projects
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Let&apos;s build something amazing together. Explore our diverse portfolio of successful products, platforms, and digital transformations.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white">
              Start Your Project
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
