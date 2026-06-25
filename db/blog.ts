import 'server-only';
import { eq, ne, and, desc } from 'drizzle-orm';
import { db } from './index';
import { posts as postsTable, type PostRow } from './schema';
import type { BlogPost, BlogCategory } from '@/sections/blog/blogData';

/** Map a raw DB row to the app-facing `BlogPost` shape. */
function toBlogPost(row: PostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category as BlogCategory,
    excerpt: row.excerpt,
    date: row.date,
    readTime: row.readTime,
    author: row.author,
    tags: row.tags,
    image: row.image,
    body: row.body,
  };
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const rows = await db.select().from(postsTable).orderBy(desc(postsTable.date));
  return rows.map(toBlogPost);
}

/** Single post by slug, or undefined if not found. */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const rows = await db

    .select()
    .from(postsTable)
    .where(eq(postsTable.slug, slug))
    .limit(1);
  return rows[0] ? toBlogPost(rows[0]) : undefined;
}

/** Just the slugs — used by generateStaticParams / sitemap. */
export async function getAllPostSlugs(): Promise<string[]> {
  const rows = await db.select({ slug: postsTable.slug }).from(postsTable);
  return rows.map((r) => r.slug);
}

/**
 * Up to `limit` posts in the same category (excluding the current one),
 * newest first. Falls back to any recent posts if the category is empty.
 */
export async function getRelatedPosts(
  slug: string,
  category: BlogCategory,
  limit = 3
): Promise<BlogPost[]> {
  const sameCategory = await db
    .select()
    .from(postsTable)
    .where(and(eq(postsTable.category, category), ne(postsTable.slug, slug)))
    .orderBy(desc(postsTable.date))
    .limit(limit);

  if (sameCategory.length) return sameCategory.map(toBlogPost);

  const fallback = await db
    .select()
    .from(postsTable)
    .where(ne(postsTable.slug, slug))
    .orderBy(desc(postsTable.date))
    .limit(limit);
  return fallback.map(toBlogPost);
}
