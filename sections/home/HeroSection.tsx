'use client';

import { motion, type Variants } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import WordRotate from '@/components/ui/WordRotate';
import FloatingCursors from '@/sections/home/FloatingCursors';
import { ArrowRightIcon, CalendarDaysIcon, CheckIcon } from '@heroicons/react/24/outline';

const ROTATING_WORDS = ['AI', 'Automation', 'AI Agents', 'Software', 'Integrations'];

const ROW1 = [
  { name: 'Shopify', src: '/shopify.png' },
  { name: 'HubSpot', src: '/hubspot.png' },
  { name: 'Zapier', src: '/zapier.png' },
  { name: 'Stripe', src: '/stripe.png' },
  { name: 'OpenAI', src: '/openai.png' },
  { name: 'React', src: '/react.svg' },
  { name: 'Flutter', src: '/flutter.svg' },
];

const ROW2 = [
  { name: 'Node.js', src: '/nodejs.png' },
  { name: 'AWS', src: '/aws.png' },
  { name: 'GHL', src: '/ghl.png' },
  { name: 'MongoDB', src: '/mongodb.png' },
  { name: 'Python', src: '/python.png' },
  { name: 'Angular', src: '/angular.png' },
  { name: 'Playwright', src: '/playwright-logo.png' },
];

function repeat<T>(arr: T[], times = 5): T[] {
  return Array.from({ length: times }).flatMap(() => arr);
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-45 pb-20">
      {/* Background glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-3xl bg-accent" />
      <div aria-hidden className="pointer-events-none absolute top-20 -right-40 h-80 w-80 rounded-full opacity-[0.07] blur-3xl bg-accent" />

      {/* Floating realtime cursors (2 clients + 1 AI agent) */}
      <FloatingCursors />

      {/* Reassurance points — anchored in the left empty space (desktop only) */}
      {/* <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        <div className="relative mx-auto h-full max-w-5xl">
          <ul className="absolute left-0 top-[16%] flex flex-col gap-3">
            {['Quick consultation', 'No commitment', 'Reply within 24 hours'].map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light">
                  <CheckIcon className="h-3.5 w-3.5 text-accent" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div> */}

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* <motion.div variants={itemVariants}>
            <Badge>Faster. Smarter. AI Solutions delivered at speed</Badge>
          </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-6xl lg:text-7xl pb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We Move Businesses
            <br />
            Forward with
            <br />
            <WordRotate words={ROTATING_WORDS} className="text-accent" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base"
          >
            From web apps and mobile to AI automation and deep integrations — Eusopht ships end-to-end software with the craft and speed your business demands.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
            >
              Start a Project
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-base font-semibold text-text-primary hover:bg-accent-light hover:border-accent transition-colors"
            >
              <CalendarDaysIcon className="h-5 w-5" />
              Schedule a Consultation
            </a>
          </motion.div>

          {/* Trustpilot badge */}
          <motion.a
            variants={itemVariants}
            href="https://www.trustpilot.com/review/eusopht.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex flex-col items-center gap-2.5"
          >
            {/* Top row — Excellent + star tiles */}
            <span className="flex items-center gap-3">
              <span className="text-lg font-bold text-text-primary">Excellent</span>
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="flex h-7 w-7 items-center justify-center bg-[#00B67A]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.784 1.401 8.166L12 18.896l-7.335 3.865 1.401-8.166L.132 9.211l8.2-1.193z" />
                    </svg>
                  </span>
                ))}
              </span>
            </span>
            {/* Bottom row — See all reviews on Trustpilot */}
            <span className="flex items-center gap-1.5 text-base text-text-secondary">
              See all reviews on
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#00B67A]" aria-hidden>
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.784 1.401 8.166L12 18.896l-7.335 3.865 1.401-8.166L.132 9.211l8.2-1.193z" />
              </svg>
              <span className="font-semibold text-text-primary group-hover:underline">Trustpilot</span>
            </span>
          </motion.a>

          {/* Marquee logo strip */}
          <motion.div variants={itemVariants} className="mt-32 w-full">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
              Platforms &amp; Technologies We Master
            </p>

            {/* Outer mask container */}
            <div className="relative overflow-hidden">
              {/* Left + right fade masks */}
              <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-bg to-transparent" />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-bg to-transparent" />

              {/* Row 1 — scrolls left */}
              <div className="flex gap-7 whitespace-nowrap marquee-left mb-6">
                {repeat(ROW1).map((logo, i) => (
                  <div
                    key={`r1-${i}`}
                    className="shrink-0 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-border bg-white shadow-sm p-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>

              {/* Row 2 — scrolls right */}
              <div className="flex gap-7 whitespace-nowrap marquee-right">
                {repeat(ROW2).map((logo, i) => (
                  <div
                    key={`r2-${i}`}
                    className="shrink-0 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-border bg-white shadow-sm p-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
