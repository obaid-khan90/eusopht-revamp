import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import { projects, getProject, TECH_META, metaOf } from '@/sections/portfolio/portfolioData';
import TechIcon from '@/components/ui/TechIcon';
import ProjectCard from '@/components/ui/ProjectCard';
import ContactForm from '@/sections/home/ContactForm';
import CaseStudyProgress from '@/sections/portfolio/CaseStudyProgress';

// Grid-card-only image overrides (matches the portfolio grid).
const CARD_IMAGE: Record<string, string> = {
  cricketmood: '/7.png',
  midwifex: '/Midwife.png',
  'mensa-pay': '/mensa.png',
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study (v3)`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}/v3` },
  };
}

export default async function ProjectDetailV3({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const visitLink = project.platforms
    .map((plat) => project.platformLinks?.[plat])
    .find((link) => link && !link.toLowerCase().includes('coming soon'));

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const others = [
    projects[(idx + 1) % projects.length],
    projects[(idx + 2) % projects.length],
    projects[(idx + 3) % projects.length],
  ];
  const meta = metaOf(project.slug);

  // Split the long description roughly into "Challenge" and "Solution" halves.
  const sentences = project.longDescription.match(/[^.!?]+[.!?]+/g) ?? [project.longDescription];
  const mid = Math.ceil(sentences.length / 2);
  const challenge = sentences.slice(0, mid).join(' ').trim();
  const solution = sentences.slice(mid).join(' ').trim() || project.longDescription;


  return (
    <>
      {/* ── 1. Header: title + intro (left) · image with details footer (right) ── */}
      <section className="section-dotted pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="mb-10 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/portfolio" className="transition-colors hover:text-accent">Portfolio</Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            {/* Left — badge + title + intro */}
            <div>
              <span className="inline-flex rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">{project.description}</p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{challenge}</p>
              {visitLink && (
                <a href={visitLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white">
                  Visit Live Site <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Right — image (no footer), like v1 hero */}
            <div className="relative flex justify-center">
              <div className="relative inline-block max-h-[60vh] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/15">
                <Image
                  src={project.imageDesktop ?? project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={900}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="mx-auto h-auto max-h-[60vh] w-auto max-w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Case-study body — content + sticky progress nav ──── */}
      <section className="section-dotted pb-16 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_220px] lg:gap-16">
            {/* Content */}
            <div className="min-w-0 space-y-14">
              {/* Challenge */}
              <div id="challenge" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>The Challenge</h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{challenge}</p>
              </div>

              {/* Solution */}
              <div id="solution" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>The Solution</h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{solution}</p>
                <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div id="impact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>The Impact</h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{project.results}</p>
              </div>

              {/* Technologies */}
              <div id="technologies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>Technologies Used</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((t) => {
                    const m = TECH_META[t];
                    return (
                      <span key={t} className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-primary">
                        <TechIcon name={t} icon={m?.icon ?? ''} color={m?.color ?? '94A3B8'} />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky progress sidebar */}
            <aside>
              <CaseStudyProgress
                sections={[
                  { id: 'challenge', label: 'The Challenge' },
                  { id: 'solution', label: 'The Solution' },
                  { id: 'impact', label: 'The Impact' },
                  { id: 'technologies', label: 'Technologies Used' },
                ]}
              />
            </aside>
          </div>
        </div>
      </section>

      {/* ── 7. View other projects ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">— View Projects</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-text-primary sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            View Other Projects
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <div key={p.slug} className="h-[420px]">
                <ProjectCard
                  href={`/portfolio/${p.slug}`}
                  image={CARD_IMAGE[p.slug] ?? p.image}
                  title={p.title}
                  category={p.category}
                  description={p.description}
                  tags={p.technologies.slice(0, 3)}
                  className="h-[420px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
