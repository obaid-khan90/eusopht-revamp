'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, RetailEdge Inc.',
    text: 'Eusopht rebuilt our entire storefront in 6 weeks. The new headless setup is measurably faster and our conversion rate jumped 22% in the first month.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Okafor',
    role: 'Head of Growth, Leapfrog SaaS',
    text: 'The HubSpot + AI lead scoring workflow they built cut our response time by 80%. We went from manually following up to a system that just runs itself.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Anika Sharma',
    role: 'CTO, Fintara',
    text: "Eusopht is the first agency that actually thinks like a business partner. They pushed back on bad ideas and saved us from expensive mistakes.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'David Renner',
    role: 'Product Lead, Buildspace',
    text: 'Our React Native app went from concept to App Store in under 10 weeks. The code quality was excellent — our team picked it up with zero ramp time.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Fatima Al-Rashidi',
    role: 'Ops Director, NovaClinics',
    text: 'They automated our patient intake and document processing with AI. What used to take 3 hours a day now happens in minutes. A game changer.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Carlos Mendes',
    role: 'Founder, Orderly',
    text: 'Eusopht integrated Stripe, ShipStation and our custom ERP in one clean API layer. No hacks, no workarounds — exactly how we needed it architected.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

const PER_PAGE = 3;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-border'}`}
        />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
      <Stars rating={t.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border">
          <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary leading-tight">{t.name}</p>
          <p className="text-xs text-text-muted leading-snug mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const pageCount = Math.ceil(testimonials.length / PER_PAGE);

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + pageCount) % pageCount);
  };

  const start = page * PER_PAGE;
  const current = testimonials.slice(start, start + PER_PAGE);

  return (
    <section className="py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="Client Love"
            headline="Trusted by Teams Worldwide"
            subtitle="From funded startups to global enterprises — here's what our clients say."
            centered
          />
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {current.map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page ? 'w-8 bg-accent' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
