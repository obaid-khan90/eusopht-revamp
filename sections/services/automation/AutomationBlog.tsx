import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    tag: 'Workflow',
    title: 'How to Reduce Manual Operations Without Breaking Them',
    excerpt: 'A pragmatic approach to replacing manual processes with automation your team can actually trust.',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Scalability',
    title: 'Building a Scalable Automation Stack for Growing Teams',
    excerpt: 'Architecture patterns that let your automation grow with volume instead of becoming a bottleneck.',
    read: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Integrations',
    title: 'How to Choose an AI Automation Company: What to Look For',
    excerpt: 'The questions to ask and the red flags to avoid when picking an automation partner.',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AutomationBlog() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="Resources"
            headline="Automation Insights"
            subtitle="Practical guides from the team building automation in production."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <Link
                href="/blog"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <Badge>{p.tag}</Badge>
                  </div>
                  <h3 className="mb-2 font-bold text-text-primary leading-snug">{p.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-muted">{p.read}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                      Read
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
