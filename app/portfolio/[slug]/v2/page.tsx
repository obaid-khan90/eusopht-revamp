import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { projects, getProject, TECH_META, metaOf } from '@/sections/portfolio/portfolioData';
import TechIcon from '@/components/ui/TechIcon';
import ContactForm from '@/sections/home/ContactForm';
import ProjectDetailFooter from '@/sections/portfolio/ProjectDetailFooter';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study (v2)`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}/v2` },
  };
}

function SectionHead({ overline, title }: { overline: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {overline}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
    </div>
  );
}

export default async function ProjectDetailV2({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const visitLink = project.platforms
    .map((plat) => project.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const meta = metaOf(project.slug);

  const platformsLabel = project.platforms.map((p) => (p === 'ios' ? 'iOS' : p === 'android' ? 'Android' : 'Web')).join(', ');

  // Details bar facts
  const facts = [
    { label: 'Industry', value: meta.industry },
    { label: 'Technologies', value: project.technologies.slice(0, 3).join(', ') },
    { label: 'Approach', value: meta.highlight },
    { label: 'Platforms', value: platformsLabel },
  ];

  // Split longDescription into challenge sentences for the "Approach" rows
  const sentences = project.longDescription.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [project.longDescription];

  // Pair each feature with a supporting sentence (cycles if uneven)
  const approachRows = project.features.slice(0, 4).map((title, i) => ({
    title,
    body: sentences[i % sentences.length] ?? project.description,
  }));

  return (
    <>
      {/* ── Two-column hero: copy left · mockup right ───────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-112 w-md rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
          <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/portfolio" className="transition-colors hover:text-accent">Portfolio</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left — copy */}
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {project.category}
              </p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-text-primary sm:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.description}
              </p>
              {visitLink && (
                <a href={visitLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white">
                  Visit Live Site <ArrowUpRightIcon className="h-5 w-5" />
                </a>
              )}
            </div>

            {/* Right — mockup card */}
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 rounded-4xl bg-accent/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-2xl shadow-black/10">
                <div className="overflow-hidden rounded-2xl bg-slate-50">
                  <Image
                    src={project.imageDesktop ?? project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={900}
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="mx-auto h-auto max-h-[58vh] w-auto max-w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. Intro + details bar ──────────────────────────────── */}
      <section className="bg-white pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border lg:grid-cols-[1.4fr_1fr]">
            <div className="p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">{project.longDescription}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border bg-bg p-8 sm:p-10 lg:border-l lg:border-t-0">
              {facts.map((f) => (
                <div key={f.label}>
                  <p className="text-base font-bold text-text-primary">{f.label}</p>
                  <p className="mt-1 text-sm leading-snug text-text-secondary">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Our Approach — challenge rows ────────────────────── */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead overline="Our Approach" title="How We Solved It" />
          <div className="overflow-hidden rounded-3xl border border-border">
            {approachRows.map((row, i) => (
              <div
                key={row.title}
                className={`grid grid-cols-1 items-center gap-4 p-7 sm:grid-cols-[auto_1fr_1.3fr] sm:gap-8 sm:p-8 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-accent-light text-accent sm:flex">
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold leading-snug text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  {row.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. The Result — feature icon tiles ──────────────────── */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead overline="The Result" title="What We Delivered" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f) => (
              <div key={f} className="group rounded-3xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-dark text-white transition-colors group-hover:bg-accent">
                  <CheckBadgeIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-text-primary">{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Results — Success In Numbers (staggered stats) ───── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead overline="Results" title="Built to Perform" />
          <div className="rounded-3xl border border-border bg-bg p-8 sm:p-12">
            <p className="text-center text-xl font-medium leading-relaxed text-text-primary sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              {project.results}
            </p>
          </div>

          {/* Tech */}
          <div className="mt-14 text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Built With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((t) => {
                const m = TECH_META[t];
                return (
                  <span key={t} className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-primary shadow-xs">
                    <TechIcon name={t} icon={m?.icon ?? ''} color={m?.color ?? '94A3B8'} />
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailFooter next={next} />
      <ContactForm />
    </>
  );
}
