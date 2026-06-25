import { pgTable, text, date, jsonb } from 'drizzle-orm/pg-core';
import type { BodyBlock } from '@/sections/blog/blogData';

/**
 * Blog posts table — mirrors the `BlogPost` type in
 * `sections/blog/blogData.ts`. `category` and `tags` are stored as plain
 * text; the typed unions live in the app layer, not as DB constraints,
 * so adding a new category never requires a migration. `body` is a JSONB
 * array of text/image blocks (see `BodyBlock`).
 */
export const posts = pgTable('posts', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  excerpt: text('excerpt').notNull(),
  /** ISO date (YYYY-MM-DD) */
  date: date('date').notNull(),
  readTime: text('read_time').notNull(),
  author: text('author').notNull().default(''),
  tags: text('tags').array().notNull().default([]),
  image: text('image').notNull(),
  /** Ordered text/image blocks */
  body: jsonb('body').$type<BodyBlock[]>().notNull().default([]),
});

export type PostRow = typeof posts.$inferSelect;
export type NewPostRow = typeof posts.$inferInsert;
