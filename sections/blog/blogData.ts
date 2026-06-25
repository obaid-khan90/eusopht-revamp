export type BlogCategory =
  | 'Company'
  | 'Automation'
  | 'Digital Transformation'
  | 'Mobile Development'
  | 'Software Development';

/**
 * A body is a sequence of blocks: plain-text paragraphs, images, headings,
 * and code. Images reference files under `/public` (extracted from the source
 * HTML), so the renderer stays simple — no raw HTML injection. Code blocks
 * preserve newlines/indentation and render in a monospace `<pre>`.
 */
export type BodyBlock =
  | { type: 'text'; value: string }
  | { type: 'heading'; value: string }
  | { type: 'image'; value: string }
  | { type: 'code'; value: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  /** ISO date */
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  image: string;
  body: BodyBlock[];
}

export const categories: Array<'All' | BlogCategory> = [
  'All',
  'Company',
  'Automation',
  'Digital Transformation',
  'Mobile Development',
  'Software Development',
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
