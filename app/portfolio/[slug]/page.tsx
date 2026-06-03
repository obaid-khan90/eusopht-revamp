import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { projects, getProject, TECH_META, metaOf } from '@/sections/portfolio/portfolioData';
import TechIcon from '@/components/ui/TechIcon';
import ContactForm from '@/sections/home/ContactForm';
import CaseStudyProgress from '@/sections/portfolio/CaseStudyProgress';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<'/portfolio/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — Eusopht Case Study`,
      description: project.description,
      url: `https://eusopht.com/portfolio/${project.slug}`,
      type: 'article',
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage(props: PageProps<'/portfolio/[slug]'>) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const isMobile = project.platforms.includes('ios') || project.platforms.includes('android');

  const visitLink = project.platforms
    .map((plat) => project.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  // Next project (wraps around) for the footer nav
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const meta = metaOf(project.slug);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'results', label: 'Results' },
    { id: 'stack', label: 'Tech Stack' },
  ];

  return (
    <>
      {/* ── Hero — split editorial ──────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/portfolio" className="transition-colors hover:text-accent">Portfolio</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left — copy */}
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <span className="inline-flex shrink-0 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <span aria-hidden className="h-px flex-1 bg-accent/40" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <h1
                  className="text-4xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.title}
                </h1>
                <div className="hidden shrink-0 items-center gap-2 pb-1 sm:flex">
                  {project.technologies.slice(0, 5).map((t) => {
                    const meta = TECH_META[t];
                    return (
                      <span
                        key={t}
                        title={t}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/70 backdrop-blur-sm"
                      >
                        <TechIcon name={t} icon={meta?.icon ?? ''} color={meta?.color ?? '94A3B8'} />
                      </span>
                    );
                  })}
                </div>
              </div>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.description}
              </p>

              {/* Stat tiles */}
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  { label: 'Industry', value: meta.industry },
                  { label: 'Platforms', value: project.platforms.map((p) => (p === 'ios' ? 'iOS' : p === 'android' ? 'Android' : 'Web')).join(', ') },
                  { label: 'Built', value: meta.highlight },
                ].map((s) => (
                  <div key={s.label} className="min-w-[7rem] flex-1 rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur-sm">
                    <p className="text-lg font-bold leading-tight text-text-primary">{s.value}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-text-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {visitLink ? (
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white">
                    Visit Live Site <ArrowUpRightIcon className="h-5 w-5" />
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border bg-white/60 px-7 py-3.5 text-base font-semibold text-text-muted">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>

            {/* Right — mockup (shadow + rounded, no frame) */}
            <div className="relative flex justify-center">
              <div className="relative inline-block max-h-[70vh] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/15">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={900}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body — sticky sidebar + content ─────────────────────── */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr] lg:gap-12">
            {/* Sticky progress sidebar (from v3) */}
            <aside>
              <CaseStudyProgress sections={sections} />
            </aside>

            {/* Content — white card for contrast against the section bg */}
            <div className="min-w-0 space-y-16 rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10 lg:p-12">
              {/* Overview */}
              <div id="overview" className="scroll-mt-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-accent" />
                  <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Overview
                  </h2>
                </div>
                <p className="whitespace-pre-line text-base leading-relaxed text-text-secondary">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div id="features" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-accent" />
                  <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Key Features
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 rounded-2xl border border-border bg-bg p-5 transition-colors hover:border-accent/30">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div id="results" className="scroll-mt-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-accent" />
                  <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Results & Impact
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-text-secondary">{project.results}</p>
              </div>

              {/* Tech stack */}
              <div id="stack" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-accent" />
                  <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Tech Stack
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((t) => {
                    const meta = TECH_META[t];
                    return (
                      <span key={t} className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-primary shadow-xs">
                        <TechIcon name={t} icon={meta?.icon ?? ''} color={meta?.color ?? '94A3B8'} />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next project ────────────────────────────────────────── */}
      <section className="bg-bg py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-white p-7 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 sm:flex-row sm:items-center sm:p-9"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted">Next Project</p>
              <h3 className="mt-2 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {next.title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">{next.description}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 text-center text-white sm:px-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                Inspired by this Project?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
                Let&apos;s discuss how we can build something similar for your business. We turn ideas into scalable, production-ready solutions.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-accent shadow-sm transition-colors hover:bg-white/90">
                Start Your Project
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
