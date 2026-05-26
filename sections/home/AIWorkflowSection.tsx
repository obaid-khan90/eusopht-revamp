'use client';

import { useRef } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedBeam from '@/components/ui/AnimatedBeam';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

/* ── Node icon wrapper ────────────────────────────────────── */

function NodeIcon({ children, label, accent = false, large = false }: {
  children: React.ReactNode;
  label: string;
  accent?: boolean;
  large?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className={`
          flex items-center justify-center rounded-2xl border shadow-sm
          ${large ? 'h-20 w-20' : 'h-16 w-16'}
          ${accent
            ? 'border-accent/30 bg-accent text-white shadow-blue-200 shadow-md'
            : 'border-border bg-white text-text-secondary'
          }
        `}
      >
        {children}
      </div>
      <span className="text-xs font-semibold text-text-secondary text-center leading-tight max-w-[88px]">
        {label}
      </span>
    </div>
  );
}

/* ── SVG icons ────────────────────────────────────────────── */

const IconUserInput = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const IconWebhook = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);
const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
/* CPU / chip icon — minimal, represents the AI processing core */
const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" stroke="currentColor" strokeWidth={1.6}>
    <rect x="6" y="6" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="9" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
  </svg>
);
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconCRM = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
);
const IconSlack = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.05-1.02.067V19l-4-4c-.781.08-1.57.12-2.359.12-4.823 0-8.384-2.452-8.384-5.5 0-3.048 3.56-5.5 8.384-5.5 4.823 0 7.77 2.452 7.77 5.5z" />
  </svg>
);
const IconReport = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

/* ── Main section ─────────────────────────────────────────── */

export default function AIWorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const refUser    = useRef<HTMLDivElement>(null);
  const refWebhook = useRef<HTMLDivElement>(null);
  const refDB      = useRef<HTMLDivElement>(null);
  const refDoc     = useRef<HTMLDivElement>(null);
  const refAI      = useRef<HTMLDivElement>(null);
  const refEmail   = useRef<HTMLDivElement>(null);
  const refCRM     = useRef<HTMLDivElement>(null);
  const refSlack   = useRef<HTMLDivElement>(null);
  const refReport  = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-36 pb-28 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent-light/40 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-6 relative">
        <AnimatedSection className="flex flex-col items-center text-center">
          <SectionHeader
            overline="AI & Automation"
            headline="Build Workflows That Think For You"
            subtitle="We design, build, and deploy AI-powered automation pipelines that eliminate repetitive work and unlock new business capabilities — without replacing your team."
            centered
          />
          <a
            href="#contact"
            className="btn-primary mt-8 inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-semibold text-white"
          >
            Explore AI Solutions
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </AnimatedSection>

        {/* Beam diagram */}
        <AnimatedSection delay={0.15} className="mt-20">
          <div
            ref={containerRef}
            className="relative mx-auto flex items-center justify-between gap-6"
            style={{ minHeight: 440 }}
          >
            <AnimatedBeam containerRef={containerRef} fromRef={refUser}    toRef={refAI} duration={3.2} delay={0}   curvature={0.25} color="blue"   />
            <AnimatedBeam containerRef={containerRef} fromRef={refWebhook} toRef={refAI} duration={3.2} delay={0.6} curvature={0.1}  color="orange" />
            <AnimatedBeam containerRef={containerRef} fromRef={refDB}      toRef={refAI} duration={3.2} delay={1.1} curvature={0.1}  color="green"  />
            <AnimatedBeam containerRef={containerRef} fromRef={refDoc}     toRef={refAI} duration={3.2} delay={1.7} curvature={0.25} color="violet" />

            <AnimatedBeam containerRef={containerRef} fromRef={refAI} toRef={refEmail}  duration={3.2} delay={0.3} curvature={0.25} color="green"  reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={refAI} toRef={refCRM}    duration={3.2} delay={0.9} curvature={0.1}  color="blue"   reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={refAI} toRef={refSlack}  duration={3.2} delay={1.4} curvature={0.1}  color="orange" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={refAI} toRef={refReport} duration={3.2} delay={2.0} curvature={0.25} color="violet" reverse />

            {/* LEFT inputs */}
            <div className="relative z-10 flex flex-col justify-center gap-8">
              <div ref={refUser}><NodeIcon label="User Input"><IconUserInput /></NodeIcon></div>
              <div ref={refWebhook}><NodeIcon label="Webhooks"><IconWebhook /></NodeIcon></div>
              <div ref={refDB}><NodeIcon label="Database"><IconDatabase /></NodeIcon></div>
              <div ref={refDoc}><NodeIcon label="Documents"><IconDoc /></NodeIcon></div>
            </div>

            {/* CENTER */}
            <div className="relative z-10 flex flex-col items-center">
              <div ref={refAI}>
                <NodeIcon label="AI Engine" accent large><IconAI /></NodeIcon>
              </div>
            </div>

            {/* RIGHT outputs */}
            <div className="relative z-10 flex flex-col justify-center gap-8">
              <div ref={refEmail}><NodeIcon label="Email / SMS"><IconEmail /></NodeIcon></div>
              <div ref={refCRM}><NodeIcon label="CRM Update"><IconCRM /></NodeIcon></div>
              <div ref={refSlack}><NodeIcon label="Slack Alert"><IconSlack /></NodeIcon></div>
              <div ref={refReport}><NodeIcon label="Reports"><IconReport /></NodeIcon></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Integration icon pills */}
        <AnimatedSection delay={0.2} className="mt-28 flex flex-col items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Integrates with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'OpenAI',   src: '/openai.png'   },
              { label: 'HubSpot',  src: '/hubspot.png'  },
              { label: 'Zapier',   src: '/zapier.png'   },
              { label: 'Stripe',   src: '/stripe.png'   },
              { label: 'GHL',      src: '/ghl.png'      },
              { label: 'Shopify',  src: '/shopify.png'  },
              { label: 'Zoho',     src: '/zoho.svg'     },
              { label: 'Xero',     src: '/xero.svg'     },
              { label: 'WordPress',src: '/wordpress.png'},
              { label: 'Azure',    src: '/azure.png'    },
            ].map(({ label, src }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text-secondary shadow-xs hover:shadow-sm hover:border-accent/30 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={label} className="h-6 w-6 object-contain" />
                {label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
