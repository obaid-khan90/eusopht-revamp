import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CustomToolsCTA() {
  return (
    <section className="relative overflow-hidden bg-accent py-14 text-center text-white">
      {/* decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <AnimatedSection className="relative mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
          Build With Us
        </p>
        <h2
          className="text-3xl font-extrabold leading-tight sm:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Want Custom Tools Built?
        </h2>
        <p className="mx-auto max-w-xl text-base text-white/80 mb-7">
          Our tools showcase our engineering capability. Let&apos;s discuss how we can build specialised, rapid automation and AI solutions for your specific business needs.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-accent hover:bg-white/90 transition-colors shadow-sm"
        >
          Book a Demo
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </AnimatedSection>
    </section>
  );
}
