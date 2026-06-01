import type { Metadata } from 'next';
import PortfolioHero from '@/sections/portfolio/PortfolioHero';
import FeaturedCarousel from '@/sections/portfolio/FeaturedCarousel';
import PortfolioGrid from '@/sections/portfolio/PortfolioGrid';
import IndustriesStrip from '@/sections/portfolio/IndustriesStrip';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';
import { projects } from '@/sections/portfolio/portfolioData';

// Featured carousel — chosen projects with carousel-specific showcase images.
const FEATURED: Record<string, string> = {
  'autosmart-australia': '/autosmart.png',
  'nullship': '/null-ship.png',
  'vizii': '/vizii.png',
  'postmerica': '/Postmerica.png',
};

const featured = Object.keys(FEATURED)
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({ ...p, image: FEATURED[p.slug], imageDesktop: FEATURED[p.slug] }));

const rest = projects.filter((p) => !(p.slug in FEATURED));

export const metadata: Metadata = {
  title: 'Portfolio — Projects & Case Studies',
  description:
    'Explore Eusopht’s portfolio of web and mobile products — AI platforms, fintech wallets, eCommerce stores, and more. Real projects, real results.',
  alternates: { canonical: '/portfolio-2' },
  openGraph: {
    title: 'Eusopht Portfolio — Projects We’re Proud Of',
    description: 'A diverse portfolio of successful products, platforms, and digital transformations.',
    url: 'https://eusopht.com/portfolio-2',
    type: 'website',
  },
};

export default function Portfolio2Page() {
  return (
    <>
      <PortfolioHero />
      <FeaturedCarousel projects={featured} />
      <PortfolioGrid items={rest} />
      <IndustriesStrip />
      <CTABanner />
      <ContactForm />
    </>
  );
}
