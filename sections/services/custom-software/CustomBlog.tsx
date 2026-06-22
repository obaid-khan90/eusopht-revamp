import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { Badge } from "@/components/ui/Badge";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const posts = [
  { tag: 'Product', title: 'Custom Software vs. Off-the-Shelf: When to Build', excerpt: 'A decision framework for choosing between buying a tool and building exactly what you need.', read: '6 min read', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80' },
  { tag: 'MVP', title: 'How to Scope an MVP That Doesn’t Become Tech Debt', excerpt: 'Ship fast without painting yourself into a corner — practical MVP scoping for founders.', read: '7 min read', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
  { tag: 'Architecture', title: 'Designing Software That Scales From Day One', excerpt: 'Architecture decisions that keep your product fast and maintainable as it grows.', read: '5 min read', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80' },
];

export default function CustomBlog() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader overline="Resources" headline="Engineering Insights" subtitle="Guides on building software that lasts." centered />
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <Link href="/blog" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30">
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3"><Badge>{p.tag}</Badge></div>
                  <h3 className="mb-2 font-bold text-text-primary leading-snug">{p.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-muted">{p.read}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">Read<ArrowRightIcon className="h-4 w-4" /></span>
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
