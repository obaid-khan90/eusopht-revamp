'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Badge } from "@/components/ui/Badge";
import TechIcon from '@/components/ui/TechIcon';
import {
  ArrowRightIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const stack = [
  { name: 'React', icon: 'react', color: '61DAFB' },
  { name: 'React Router', icon: 'reactrouter', color: 'CA4245' },
  { name: 'Radix UI', icon: 'radixui', color: '161618' },
  { name: 'shadcn/ui', icon: 'shadcnui', color: '000000' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
  { name: 'Lucide', icon: 'lucide', color: 'F56565' },
  { name: 'Open Graph', icon: 'opengraph', color: '0865A6' },
  { name: 'Vercel', icon: 'vercel', color: '000000' },
];

const steps = [
  {
    title: 'Upload & Analyze',
    body: 'Securely drop your data. It passes through an encrypted channel and is analysed instantly.',
  },
  {
    title: 'Select Module',
    body: "The engine switches 'mental models' based on the report — e.g. hunting overdue balances in AR Aging.",
  },
  {
    title: 'Custom Instructions',
    body: "Steer the AI's focus — for example, specifically audit travel expenses.",
  },
  {
    title: 'Dashboard & PDF',
    body: 'Get a stunning dashboard and a one-click, stylised, C-level printable PDF.',
  },
];

const features = [
  {
    icon: CpuChipIcon,
    title: 'Context-Aware AI',
    body: "Switches analytical 'mental models' based on the report type for relevant, focused findings.",
  },
  {
    icon: DocumentChartBarIcon,
    title: 'Structured Findings',
    body: 'Choose from 7 standard financial frameworks straight out of the box.',
  },
  {
    icon: LockClosedIcon,
    title: 'Privacy & Security',
    body: 'In-memory local processing. Zero files stored on our servers. GDPR compliant by design.',
  },
];

export default function ReportlyProduct() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge>Tool 01</Badge>
          <div className="mt-4 flex flex-col items-center gap-6 lg:w-full lg:flex-row lg:justify-between">
            <h2
              className="text-4xl font-bold text-text-primary lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Eusopht <span className="text-accent">Reportly</span>
            </h2>
            <a
              href="https://eusopht-report-pro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
            >
              View
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
          {/* <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
            AI-Powered Financial Audit Engine
          </p> */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
            An intelligent, automated assistant built for finance and accounting professionals. Instead of spending hours manually combing through spreadsheets, Reportly instantly generates a professional, executive-level audit summary and a formatted PDF.
          </p>
          <p className="mt-3 text-sm font-medium text-text-primary">
            Not a &ldquo;chat&rdquo; bot — it enforces a strict analytical pipeline for boardroom-ready results.
          </p>
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
            <h3 className="mb-6 text-lg font-bold text-text-primary text-center lg:text-left">Why Teams Use Reportly</h3>
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 rounded-2xl border border-border bg-bg p-5 hover:border-accent/30 transition-colors"
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
                className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-bg px-5 py-3 text-sm font-medium text-text-primary shadow-xs"
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
