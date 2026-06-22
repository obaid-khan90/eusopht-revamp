'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Badge } from "@/components/ui/Badge";
import TechIcon from '@/components/ui/TechIcon';
import {
  ArrowRightIcon,
  ArrowsPointingInIcon,
  SpeakerWaveIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Drop Your Clips',
    body: 'Point the API at your source clips — local uploads or remote CDN / S3 links — straight from the browser.',
  },
  {
    title: 'Normalize',
    body: 'Disparate clips are forced into a perfect 9:16 (720×1280) social-ready format automatically.',
  },
  {
    title: 'Merge & Mix',
    body: 'The FFmpeg engine stitches segments and mixes high-fidelity AAC audio for perfectly synced sound.',
  },
  {
    title: 'Export',
    body: 'Get a single, optimised output — ready to publish or pipe into your own pipeline.',
  },
];

const features = [
  {
    icon: ArrowsPointingInIcon,
    title: 'Intelligent Normalization',
    body: 'Forces disparate clips into a perfect 9:16 (720×1280) social-ready format.',
  },
  {
    icon: SpeakerWaveIcon,
    title: 'Crystal Clear Audio',
    body: 'High-fidelity AAC mixing for perfectly synced sound across all segments.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Remote Processing',
    body: 'Optimised for high-speed CDN and S3 link processing.',
  },
];

const stack = [
  { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' },
  { name: 'FFmpeg', icon: 'ffmpeg', color: '007808' },
  { name: 'Vite', icon: 'vite', color: '646CFF' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
];

export default function MergeMagicProduct() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge>Tool 02</Badge>
          <div className="mt-4 flex flex-col items-center gap-6 lg:w-full lg:flex-row lg:justify-between">
            <h2
              className="text-4xl font-bold text-text-primary lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Merge<span className="text-accent">Magic</span>
            </h2>
            <a
              href="https://mergemagic.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
            >
              View
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
          {/* <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
            Heavy-Lifting Media Processor
          </p> */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
            A professional API playground to test real-time video merges directly from your browser — powered by an ultra-fast Node.js / FFmpeg engine.
          </p>
          <a
            href="https://mergemagic.netlify.app/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-3"
          >
            Interactive Docs
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* How it works — vertical timeline */}
          <AnimatedSection className="flex flex-col items-center lg:items-start">
            <h3 className="mb-6 text-lg font-bold text-text-primary text-center lg:text-left">How it Works</h3>
            <ol className="relative space-y-6 border-l border-border pl-8 w-fit text-left">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute left-[-42px] flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent-light text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-bold text-text-primary">{s.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{s.body}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>

          {/* Feature cards */}
          <AnimatedSection delay={0.1}>
            <h3 className="mb-6 text-lg font-bold text-text-primary text-center lg:text-left">What Makes It Fast</h3>
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 rounded-2xl border border-border bg-white p-5 hover:border-accent/30 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light">
                    <f.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Tech stack highlights */}
        <AnimatedSection delay={0.15} className="mt-12 flex flex-col items-center border-t border-border pt-8 text-center lg:items-start lg:text-left">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-text-muted">
            Tech Stack Highlights
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {stack.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-5 py-3 text-sm font-medium text-text-primary shadow-xs"
              >
                <TechIcon name={t.name} icon={t.icon} color={t.color} />
                {t.name}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
