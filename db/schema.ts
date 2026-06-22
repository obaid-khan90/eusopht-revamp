import { pgTable, text, integer, date } from 'drizzle-orm/pg-core';

/**
 * Blog posts table — mirrors the `BlogPost` type in
 * `sections/blog/blogData.ts`. `category` and `tags` are stored as plain
 * text; the typed unions live in the app layer, not as DB constraints,
 * so adding a new category never requires a migration.
 */
export const posts = pgTable('posts', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  excerpt: text('excerpt').notNull(),
  /** ISO date (YYYY-MM-DD) */
  date: date('date').notNull(),
  readTime: text('read_time').notNull(),
  views: integer('views').notNull().default(0),
  tags: text('tags').array().notNull().default([]),
  image: text('image').notNull(),
  /** Body paragraphs */
  body: text('body').array().notNull().default([]),
});

export type PostRow = typeof posts.$inferSelect;
export type NewPostRow = typeof posts.$inferInsert;
