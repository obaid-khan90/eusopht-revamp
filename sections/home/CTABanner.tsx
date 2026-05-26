import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-accent py-14 text-center text-white">
      {/* decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <AnimatedSection className="relative mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
          Ready to Build?
        </p>
        <h2
          className="text-3xl font-extrabold leading-tight sm:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let&apos;s Turn Your Idea Into a Product
        </h2>
        <p className="mx-auto max-w-xl text-base text-white/80 mb-7">
          Whether you have a fully-scoped project or just a napkin sketch, we&apos;re the right partner to take it from zero to launch.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-accent hover:bg-white/90 transition-colors shadow-sm"
        >
          Start a Conversation
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </AnimatedSection>
    </section>
  );
}
