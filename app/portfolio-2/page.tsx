import type { Metadata } from 'next';
import PortfolioHero from '@/sections/portfolio/PortfolioHero';
import FeaturedShowcase from '@/sections/portfolio/FeaturedShowcase';
import PortfolioGrid from '@/sections/portfolio/PortfolioGrid';
import IndustriesStrip from '@/sections/portfolio/IndustriesStrip';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';
import { projects } from '@/sections/portfolio/portfolioData';

// 3 featured projects for the alternating showcase
const FEATURED_SLUGS = ['autosmart-australia', 'nullship', 'postmerica'];

const featured = FEATURED_SLUGS
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const rest = projects.filter((p) => !FEATURED_SLUGS.includes(p.slug));

export const metadata: Metadata = {
  title: 'Portfolio — Projects & Case Studies',
  description:
    "Explore Eusopht's portfolio of web and mobile products — AI platforms, fintech wallets, eCommerce stores, and more. Real projects, real results.",
  alternates: { canonical: '/portfolio-2' },
  openGraph: {
    title: "Eusopht Portfolio — Projects We're Proud Of",
    description: 'A diverse portfolio of successful products, platforms, and digital transformations.',
    url: 'https://eusopht.com/portfolio-2',
    type: 'website',
  },
};

export default function Portfolio2Page() {
  return (
    <>
      <PortfolioHero />
      <FeaturedShowcase projects={featured} />
      <PortfolioGrid items={rest} />
      <IndustriesStrip />
      <CTABanner />
      <ContactForm />
    </>
  );
}
