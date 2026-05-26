'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { PlusIcon } from '@heroicons/react/24/outline';
import { faqs as defaultFaqs, type FaqItem } from './faqData';

export default function FAQ({ items }: { items?: FaqItem[] } = {}) {
  const faqs = items ?? defaultFaqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center flex flex-col items-center mb-12">
          <SectionHeader
            overline="FAQ"
            headline="Frequently Asked Questions"
            subtitle="Everything you need to know before getting started. Can't find an answer? Reach out and we'll help."
            centered
          />
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <AnimatedSection key={item.q} delay={i * 0.04}>
                <div className="rounded-2xl border border-border bg-white overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-text-primary">{item.q}</span>
                    <PlusIcon
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
