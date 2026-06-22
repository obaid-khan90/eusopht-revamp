import type { MetadataRoute } from 'next';
import { projects } from '@/sections/portfolio/portfolioData';
import { getAllPosts } from '@/db/blog';

const SITE_URL = 'https://eusopht.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await getAllPosts();
  const routes = [
    '',
    '/services/ai',
    '/services/automation',
    '/services/staff-augmentation',
    '/services/custom-software',
    '/revops',
    '/portfolio',
    '/clients',
    '/tools',
    '/blog',
    '/contact',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/project/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
