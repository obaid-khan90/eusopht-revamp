'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/24/outline';
import { categories, formatDate, type BlogCategory, type BlogPost } from './blogData';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<'All' | BlogCategory>('All');
  // only show categories that actually have posts
  const available = categories.filter(
    (c) => c === 'All' || posts.some((p) => p.category === c)
  );
  const list = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2 border-b border-border pb-6">
        {available.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              active === c
                ? 'bg-accent text-white shadow-sm'
                : 'text-text-secondary hover:text-accent hover:bg-accent-light'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 hover:border-accent/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between text-xs text-text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <EyeIcon className="h-4 w-4" />
                      {post.views} views
                    </span>
                  </div>
                  <h3 className="font-bold text-text-primary leading-snug line-clamp-2">{post.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
