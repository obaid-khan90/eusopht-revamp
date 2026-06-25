import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { posts as postsTable } from './schema';
import type { BlogPost } from '../sections/blog/blogData';

/**
 * Loads the official posts (produced by `db/transform-official.ts`) into
 * Postgres, replacing whatever is there. Idempotent: truncates first, then
 * inserts, so re-running always yields exactly the official set.
 *
 * Run with `npm run db:seed`.
 */
async function main() {
  const officialPosts: BlogPost[] = JSON.parse(
    readFileSync(join(process.cwd(), 'db', 'officialPosts.json'), 'utf8')
  );

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  // Replace the full set — the official export is the source of truth.
  await db.delete(postsTable);

  for (const p of officialPosts) {
    await db.insert(postsTable).values({
      slug: p.slug,
      title: p.title,
      category: p.category,
      excerpt: p.excerpt,
      date: p.date,
      readTime: p.readTime,
      author: p.author,
      tags: p.tags,
      image: p.image,
      body: p.body,
    });
  }

  console.log(`Seeded ${officialPosts.length} posts.`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
