import 'server-only';
import { eq, ne, and, desc } from 'drizzle-orm';
import { posts as postsTable, type PostRow } from './schema';
import type { BlogPost, BlogCategory } from '@/sections/blog/blogData';
import officialPosts from './officialPosts.json';

/**
 * Data source switch:
 *   - `DATABASE_URL` set   → query Postgres (local dev, or a future cloud DB).
 *   - `DATABASE_URL` unset → read the committed `officialPosts.json` snapshot.
 *
 * This lets Vercel build and serve the blog with no database at all (no
 * `DATABASE_URL` in its env), while local dev keeps using Postgres for
 * authoring. Adding a real cloud `DATABASE_URL` later flips it to live
 * queries with no code change.
 */
const USE_DB = Boolean(process.env.DATABASE_URL);

// The JSON is validated/shaped by `db/transform-official.ts`, so it already
// matches `BlogPost`.
const staticPosts = (officialPosts as BlogPost[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

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

/** Lazily import the DB client only when we actually need it, so the `pg`
 *  pool is never constructed in a no-DB (static) environment. */
async function getDb() {
  const { db } = await import('./index');
  return db;
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!USE_DB) return staticPosts;
  const db = await getDb();
  const rows = await db.select().from(postsTable).orderBy(desc(postsTable.date));
  return rows.map(toBlogPost);
}

/** Single post by slug, or undefined if not found. */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!USE_DB) return staticPosts.find((p) => p.slug === slug);
  const db = await getDb();
  const rows = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.slug, slug))
    .limit(1);
  return rows[0] ? toBlogPost(rows[0]) : undefined;
}

/** Just the slugs — used by generateStaticParams / sitemap. */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!USE_DB) return staticPosts.map((p) => p.slug);
  const db = await getDb();
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
  if (!USE_DB) {
    const sameCategory = staticPosts.filter(
      (p) => p.slug !== slug && p.category === category
    );
    const pool = sameCategory.length
      ? sameCategory
      : staticPosts.filter((p) => p.slug !== slug);
    return pool.slice(0, limit);
  }

  const db = await getDb();
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
