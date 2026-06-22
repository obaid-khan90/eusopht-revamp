import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { posts as postsTable } from './schema';
import { seedPosts } from '../sections/blog/blogData';

/**
 * Inserts the original hardcoded posts into Postgres. Idempotent: re-running
 * upserts each post by slug, so it's safe to run after content changes in
 * `seedPosts`. Run with `npm run db:seed`.
 */
async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  let count = 0;
  for (const p of seedPosts) {
    await db
      .insert(postsTable)
      .values({
        slug: p.slug,
        title: p.title,
        category: p.category,
        excerpt: p.excerpt,
        date: p.date,
        readTime: p.readTime,
        views: p.views,
        tags: p.tags,
        image: p.image,
        body: p.body,
      })
      .onConflictDoUpdate({
        target: postsTable.slug,
        set: {
          title: p.title,
          category: p.category,
          excerpt: p.excerpt,
          date: p.date,
          readTime: p.readTime,
          views: p.views,
          tags: p.tags,
          image: p.image,
          body: p.body,
        },
      });
    count++;
  }

  console.log(`Seeded ${count} posts.`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
