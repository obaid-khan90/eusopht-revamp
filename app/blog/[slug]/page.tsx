import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/sections/blog/blogData';
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '@/db/blog';

// ISR: posts known at build time are prerendered; edits show up within 60s,
// and new slugs not in generateStaticParams are generated on-demand
// (dynamicParams defaults to true).
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://eusopht.com/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const recommended = await getRelatedPosts(post.slug, post.category, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #d1fae5 0%, #ecfdf5 22%, #f0f9ff 55%, #dbeafe 100%)' }} />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {post.category}
              </span>
              <h1
                className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
                {post.author && <span>By {post.author}</span>}
                <span>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1"><ClockIcon className="h-4 w-4" />{post.readTime}</span>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5">
              <Image src={post.image} alt={post.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6">
          {post.body.map((block, i) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2
                    key={i}
                    className="mt-12 mb-2 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {block.value}
                  </h2>
                );
              case 'code':
                return (
                  <pre
                    key={i}
                    className="my-8 overflow-x-auto rounded-2xl border border-border bg-[#1e1e2e] p-5 text-sm leading-relaxed text-[#e4e4e7] shadow-sm"
                  >
                    <code className="font-mono whitespace-pre">{block.value}</code>
                  </pre>
                );
              case 'image':
                return (
                  <Image
                    key={i}
                    src={block.value}
                    alt=""
                    width={1600}
                    height={900}
                    sizes="(max-width:768px) 100vw, 768px"
                    className="my-8 h-auto w-full rounded-2xl border border-border shadow-sm"
                  />
                );
              default:
                return (
                  <p key={i} className="text-lg leading-relaxed text-text-secondary">
                    {block.value}
                  </p>
                );
            }
          })}
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
              #{t}
            </span>
          ))}
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            More from the blog
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recommended.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs text-text-muted">{formatDate(p.date)}</span>
                  <h3 className="mt-1.5 font-bold text-text-primary leading-snug line-clamp-2">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
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
                Have a project in mind?
              </h2>
              <p className="mx-auto max-w-xl text-lg text-white/80 mb-8">
                Let&apos;s turn these ideas into something real for your business.
              </p>
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-accent hover:bg-white/90 transition-colors shadow-sm">
                Start a Project
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
