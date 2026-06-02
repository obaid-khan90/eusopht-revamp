'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ToolsHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24">
        <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-text-primary">Tools</span>
        </nav>

        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Eusopht <span className="text-accent">Tools</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            We build powerful, intuitive tools designed to simplify complex workflows. Discover how our purpose-built tools can accelerate your business — and see the engineering we bring to every project.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
