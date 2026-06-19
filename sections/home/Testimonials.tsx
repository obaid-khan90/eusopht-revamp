'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mohamed D.",
    company: "Gulpes App",
    content: "I highly recommend EuSopht! They were great to work with - excellent communication, attention to detail, and always met deadlines.",
    rating: 5,
    image: "/Mohamed.png",
  },
  {
    name: "Stephen S.",
    company: "Hybrid Flutter App",
    content: "Excellent Development Service - Well Done. It's so refreshing to work with an off-shore development team that listens to requirements, provides what is requested and in such a professional manner - Thank you.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Nadim A.",
    company: "SaaS WebApp",
    content: "Great Company, great experience, very professional, and most importantly communication and follow ups are definitely exceptional! Will definitely hire EuSopht again for other projects.",
    rating: 5,
    image: "/nadim.png",
  },
  {
    name: "Mansoor Osmani",
    company: "CLCI",
    content: "I have the pleasure of working with EuSopht on few projects recently. During my 30 years of experience in IT and Management Consulting I have come across very few companies who have impressed me as much as EuSopht. Their work style is both efficient and intelligent.",
    rating: 5,
    image: "/mansoor-osmani.png",
  },
  {
    name: "Andre S.",
    company: "Meu Exotico",
    content: "Amazing job and professionalism. Do not hesitate to hire EuSopht.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Anthony M.",
    company: "PHP Coding",
    content: "Very impressed with my first job with EuSopht. Quality work delivered before the deadline with excellent communications - asked all the questions they needed to ensure the job was done correctly the first time. I won't hesitate to use them again.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Nina Chen",
    company: "HubSpot - aXcelerate Integration",
    content: "This Project was delivered successfully even when it seemed impossible. It's great to have worked with them!",
    rating: 5,
    image: "/aibuddy.png",
  },
  {
    name: "Craig Anderson",
    company: "Eusopht Client",
    content: "Excellent service, very helpful, easy to deal with and prompt. Great solution. I highly recommend Eusopht for your technology needs.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Steen",
    company: "Sloif Platform",
    content: "I can only recommend Umar and his crew for their skill in software development, their ability to advise me and be critical to my thoughts when needed. I can give an overall task, leave them alone, and get a good product from it.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Ahmad Alkhlif",
    company: "Digital Konsulterna",
    content: "Working with EuSopht has been a game-changer for us. Umar and Salman felt more like partners than service providers. Their commitment to open, honest communication really made a difference - it felt like they were as invested in our success as we were.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Nick Haritos",
    company: "Operations Platform",
    content: "Owais has great expertise in integrating and building tools tailored to our unique business needs. The solutions he provided have saved us both time and money. He understands complex business issues quickly and outperforms our initial expectations every time.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "John Jenks",
    company: "Telecom Industry App",
    content: "Having worked over the last 15 years with many offshore service providers, I have finally found a company that is true to their word, delivers what is agreed, at the expected quality standard and the agreed budget. Simply put, great work from a great team.",
    rating: 5,
    image: "/default-avatar.png",
  },
  {
    name: "Nadim Bargo",
    company: "Web Application",
    content: "From an idea into a fully developed web app - Eusopht demonstrated a high level of professionalism and creativity. They took the time to understand my vision and translated that into a beautifully designed and fully functional web app.",
    rating: 5,
    image: "/default-avatar.png",
  },
];

const DESKTOP_PER_PAGE = 3;
const MOBILE_PER_PAGE = 1;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-border'}`} />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
      <Stars rating={t.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
        &ldquo;{t.content}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        {t.image ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border">
            <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-text-primary leading-tight">{t.name}</p>
          <p className="text-xs text-text-muted leading-snug mt-0.5">{t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const desktopPageCount = Math.ceil(testimonials.length / DESKTOP_PER_PAGE);
  const mobilePageCount = testimonials.length;
  const [desktopPage, setDesktopPage] = useState(Math.floor(desktopPageCount / 2));
  const [mobilePage, setMobilePage] = useState(Math.floor(mobilePageCount / 2));
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const perPage = isMobile ? MOBILE_PER_PAGE : DESKTOP_PER_PAGE;
  const page = isMobile ? mobilePage : desktopPage;
  const setPage = isMobile ? setMobilePage : setDesktopPage;
  const pageCount = Math.ceil(testimonials.length / perPage);

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + pageCount) % pageCount);
  };

  const start = page * perPage;
  const current = testimonials.slice(start, start + perPage);

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
              key={`${isMobile ? 'm' : 'd'}-${page}`}
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
                className={`h-2 rounded-full transition-all duration-300 ${i === page ? 'w-8 bg-accent' : 'w-2 bg-border'}`}
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
