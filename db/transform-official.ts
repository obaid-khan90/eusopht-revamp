/**
 * One-off transform: reads the official export `blogs_rows.json`, normalises
 * each record into our `BlogPost` shape, extracts inline base64 images into
 * `public/blog/`, and writes the result to `db/officialPosts.json` (consumed
 * by `db/seed.ts`).
 *
 * Run with: npx tsx db/transform-official.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type { BlogPost, BlogCategory, BodyBlock } from '../sections/blog/blogData';

interface RawPost {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  published_at: string;
}

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, 'public', 'blog');

// ── helpers ────────────────────────────────────────────────────────────────

/** Map the official category strings to our union (rename Uncategorized). */
function mapCategory(raw: string): BlogCategory {
  const c = raw.trim();
  if (
    c === 'Automation' ||
    c === 'Digital Transformation' ||
    c === 'Mobile Development' ||
    c === 'Software Development'
  ) {
    return c;
  }
  return 'Company';
}

/** URL-safe slug from a title. */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/** Strip tags to readable text, collapsing whitespace. */
function htmlToText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(p|h[1-6]|li|div)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&apos;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/** Decode HTML entities WITHOUT collapsing whitespace — for code, where
 *  indentation and newlines are significant. */
function decodeCode(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&apos;/g, "'")
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/^\n+|\n+$/g, '');
}

/** ISO timestamp → YYYY-MM-DD. */
function toDateOnly(ts: string): string {
  return new Date(ts).toISOString().slice(0, 10);
}

/** Rough read time from plain-text word count (~200 wpm). */
function readTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

const MARK_OPEN = '@@IMG';
const MARK_CLOSE = '@@';

/**
 * Split content into ordered body blocks: code (`<pre>`), headings
 * (`<h2>/<h3>`), images (`<img>`, base64 extracted to `public/blog/`), and
 * text paragraphs. Images are pulled out first as `@@IMGn@@` markers, since
 * the source sometimes nests them inside other tags (e.g. `<h2><img></h2>`).
 */
function parseBody(html: string, slug: string): BodyBlock[] {
  const blocks: BodyBlock[] = [];
  let imgIndex = 0;
  const markerToValue = new Map<string, string>();

  // PASS 1 — replace every <img> with a plain-ASCII marker.
  const withMarkers = html.replace(/<img[^>]*>/gi, (tag) => {
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    const src = srcMatch?.[1] ?? '';
    const dataUri = src.match(/^data:image\/([a-z]+);base64,(.+)$/i);
    let value: string | null = null;
    if (dataUri) {
      const ext = dataUri[1].toLowerCase();
      const buf = Buffer.from(dataUri[2], 'base64');
      const file = `${slug}-${imgIndex + 1}.${ext}`;
      writeFileSync(join(IMG_DIR, file), buf);
      value = `/blog/${file}`;
      imgIndex++;
    } else if (src) {
      value = src;
    }
    if (!value) return '';
    const marker = `${MARK_OPEN}${markerToValue.size}${MARK_CLOSE}`;
    markerToValue.set(marker, value);
    // surround with paragraph breaks so the marker is isolated from inline text
    return `</p>${marker}<p>`;
  });

  const markerSplit = /(@@IMG\d+@@)/;

  // emit a run of (possibly marker-containing) HTML as text + image blocks
  const emitTextRun = (chunk: string) => {
    for (const part of chunk.split(markerSplit)) {
      if (markerToValue.has(part)) {
        blocks.push({ type: 'image', value: markerToValue.get(part)! });
      } else {
        for (const para of htmlToText(part).split(/\n+/)) {
          const t = para.trim();
          if (t) blocks.push({ type: 'text', value: t });
        }
      }
    }
  };

  // PASS 2 — split on block-level elements, keeping delimiters.
  const splitter = /(<pre[^>]*>[\s\S]*?<\/pre>|<h[23][^>]*>[\s\S]*?<\/h[23]>)/i;
  for (const seg of withMarkers.split(splitter)) {
    if (!seg) continue;
    if (/^<pre/i.test(seg)) {
      const code = decodeCode(seg);
      if (code) blocks.push({ type: 'code', value: code });
    } else if (/^<h[23]/i.test(seg)) {
      // a heading may itself hold an image marker — emit those as images,
      // the remaining text as the heading
      for (const part of seg.split(markerSplit)) {
        if (markerToValue.has(part)) {
          blocks.push({ type: 'image', value: markerToValue.get(part)! });
        } else {
          const heading = htmlToText(part);
          if (heading) blocks.push({ type: 'heading', value: heading });
        }
      }
    } else {
      emitTextRun(seg);
    }
  }

  return blocks;
}

/** Excerpt = first ~160 chars of the first text block. */
function makeExcerpt(body: BodyBlock[]): string {
  const firstText = body.find((b) => b.type === 'text');
  if (!firstText) return '';
  const t = firstText.value;
  return t.length > 160 ? t.slice(0, 157).trimEnd() + '…' : t;
}

// ── main ─────────────────────────────────────────────────────────────────

function main() {
  mkdirSync(IMG_DIR, { recursive: true });

  const raw: RawPost[] = JSON.parse(readFileSync(join(ROOT, 'blogs_rows.json'), 'utf8'));

  // Dedupe by slug: ids 9/10 share a title (so a slug) but differ by 4s in
  // published_at. Key on the slug that becomes the primary key.
  const seen = new Set<string>();
  const deduped = raw.filter((r) => {
    const key = slugify(r.title);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const posts: BlogPost[] = deduped.map((r) => {
    const slug = slugify(r.title);
    const body = parseBody(r.content, slug);
    const plain = body
      .filter((b): b is { type: 'text'; value: string } => b.type === 'text')
      .map((b) => b.value)
      .join(' ');
    const category = mapCategory(r.category);

    return {
      slug,
      title: r.title.trim(),
      category,
      excerpt: makeExcerpt(body),
      date: toDateOnly(r.published_at || r.created_at),
      readTime: readTime(plain),
      author: r.author?.trim() || 'Eusopht',
      tags: [category],
      image: r.image_url,
      body,
    };
  });

  writeFileSync(
    join(ROOT, 'db', 'officialPosts.json'),
    JSON.stringify(posts, null, 2),
    'utf8'
  );

  const imgCount = posts.reduce(
    (n, p) => n + p.body.filter((b) => b.type === 'image').length,
    0
  );
  const codeCount = posts.reduce(
    (n, p) => n + p.body.filter((b) => b.type === 'code').length,
    0
  );
  console.log(
    `Transformed ${posts.length} posts (from ${raw.length} raw), ` +
      `${imgCount} images to public/blog/, ${codeCount} code blocks.`
  );
}

main();
