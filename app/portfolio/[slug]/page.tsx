import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { projects, getProject, TECH_META } from '@/sections/portfolio/portfolioData';
import TechIcon from '@/components/ui/TechIcon';
import ContactForm from '@/sections/home/ContactForm';

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

  // First platform link that is live (not a "coming soon" placeholder)
  const visitLink = project.platforms
    .map((plat) => project.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="mt-8 flex justify-center">
            <span className="rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {project.category}
            </span>
          </div>
          <h1
            className="mt-5 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {project.description}
          </p>

          {/* Visit button — first live platform link, else coming-soon */}
          <div className="mt-8 flex justify-center">
            {visitLink ? (
              <a
                href={visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
              >
                Visit Now
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border bg-white/60 px-7 py-3.5 text-base font-semibold text-text-muted">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Mockup showcase */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-slate-50 to-slate-100 p-6 shadow-sm sm:p-10">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-md">
              <Image
                src={project.imageDesktop ?? project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className={isMobile ? 'object-contain p-4' : 'object-cover object-top'}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body: overview + results | features + tech */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left 2/3 */}
            <div className="space-y-12 lg:col-span-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-accent" />
                  <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    Overview
                  </h2>
                </div>
                <p className="whitespace-pre-line text-base leading-relaxed text-text-secondary">
                  {project.longDescription}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-6 w-1.5 rounded-full bg-emerald-500" />
                  <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    Key Results
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-text-secondary">{project.results}</p>
              </div>
            </div>

            {/* Right 1/3 */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-lg font-bold text-text-primary">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-text-primary">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => {
                    const meta = TECH_META[t];
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-text-primary shadow-xs"
                      >
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 text-center text-white sm:px-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Inspired by this Project?
              </h2>
              <p className="mx-auto max-w-xl text-lg text-white/80 mb-8">
                Let&apos;s discuss how we can build something similar for your business. We turn ideas into scalable, production-ready solutions.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-accent hover:bg-white/90 transition-colors shadow-sm">
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
