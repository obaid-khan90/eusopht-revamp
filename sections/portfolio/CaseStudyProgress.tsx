'use client';

import { useEffect, useState } from 'react';

export interface ProgressSection {
  id: string;
  label: string;
}

/** Sticky vertical progress nav with scroll-spy for case-study sections. */
export default function CaseStudyProgress({ sections }: { sections: ProgressSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const activeIdx = Math.max(0, sections.findIndex((s) => s.id === active));

  return (
    <nav className="sticky top-28 hidden lg:block">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-text-muted">On this page</p>
      <ul className="relative flex flex-col gap-1">
        {/* track */}
        <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
        {/* progress fill */}
        <span
          aria-hidden
          className="absolute left-[5px] top-2 w-px bg-accent transition-all duration-300"
          style={{ height: `calc(${(activeIdx / Math.max(1, sections.length - 1)) * 100}% - 0px)` }}
        />
        {sections.map((s, i) => {
          const done = i <= activeIdx;
          return (
            <li key={s.id} className="relative pl-6">
              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 transition-colors ${
                  done ? 'border-accent bg-accent' : 'border-border bg-white'
                }`}
              />
              <a
                href={`#${s.id}`}
                className={`block py-1.5 text-sm font-medium transition-colors ${
                  active === s.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
