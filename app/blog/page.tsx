import type { Metadata } from 'next';
import BlogHero from '@/sections/blog/BlogHero';
import BlogGrid from '@/sections/blog/BlogGrid';
import { getAllPosts } from '@/db/blog';

// ISR: serve a cached page, regenerate in the background at most once every
// 60s so new/edited posts appear without a rebuild.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog — Insights on AI, Automation & Software',
  description:
    'Insights from the Eusopht team on AI development, automation, custom software, and building products that scale.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'The Eusopht Blog',
    description: 'Perspectives on AI, automation, and modern software development.',
    url: 'https://eusopht.com/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
