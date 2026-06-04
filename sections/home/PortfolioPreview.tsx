import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';

const projects = [
  {
    title: 'AutoFlow',
    category: 'Web Application',
    description: 'Car Dealership Web & App Portal — full inventory management, lead capture, and customer dashboard developed for AutoFlow.',
    tags: ['Laravel', 'Vue.js'],
    image: '/autoflow1.png',
    href: '/project/autoflow',
  },
  {
    title: 'Learning Cert',
    category: 'Web Application',
    description: 'A custom-built certification & training platform for corporate training providers, with course management and analytics.',
    tags: ['Nuxt', 'Laravel'],
    image: '/LearningCert.png',
    href: '/project/learning-cert',
  },
  {
    title: 'AiBuddy — Social Media Blast',
    category: 'AI Application',
    description: 'AI-powered social media management platform that automates content creation and publishing across multiple channels.',
    tags: ['React', 'TypeScript', 'OpenAI'],
    image: '/AIBuddyf.png',
    href: '/project/social-media-blast',
  },
  {
    title: 'Null Ship',
    category: 'Web Application',
    description: 'Modern shipping and logistics platform with real-time tracking, label generation, and multi-carrier integration.',
    tags: ['Next.js', 'Node.js', 'Stripe'],
    image: '/null-ship.png',
    href: '/project/nullship',
  },
  {
    title: 'MidwifeX',
    category: 'Healthcare',
    description: 'Healthcare platform for midwives — patient intake, scheduling, billing and clinical notes in one unified system.',
    tags: ['React', 'Firebase'],
    image: '/midwifex.png',
    href: '/project/midwifex',
  },
  {
    title: 'Mensa Pay',
    category: 'Fintech',
    description: 'Digital payments and wallet platform with KYC, multi-currency support, and merchant onboarding flow.',
    tags: ['Flutter', 'Node.js'],
    image: '/mensa.png',
    href: '/project/mensa-pay',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            overline="Our Work"
            headline="Selected Projects"
            subtitle="A glimpse at what we've shipped for clients across industries."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-base font-semibold text-text-primary hover:bg-accent-light hover:border-accent transition-colors whitespace-nowrap"
          >
            View All Work
          </Link>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={(i % 3) * 0.1} className="h-[420px]">
              <ProjectCard
                href={p.href}
                image={p.image}
                title={p.title}
                category={p.category}
                description={p.description}
                tags={p.tags}
                className="h-[420px]"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
