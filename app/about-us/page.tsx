import type { Metadata } from 'next';
import AboutHero from '@/sections/about/AboutHero';
import AboutMission from '@/sections/about/AboutMission';
import AboutTeam from '@/sections/about/AboutTeam';
import StatsSection from '@/sections/home/StatsSection';
import ProcessSection from '@/sections/home/ProcessSection';
import Testimonials from '@/sections/home/Testimonials';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'About Us — Eusopht',
  description:
    'Learn about Eusopht — a software agency based in Karachi, Pakistan, building production-grade web apps, mobile apps, AI solutions, and automation for businesses worldwide since 2017.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'About Eusopht — Our Story, Mission & Team',
    description: 'Meet the team behind Eusopht and learn why clients across 4 continents trust us to ship their most important software.',
    url: 'https://eusopht.com/about-us',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <StatsSection />
      <AboutTeam />
      <ProcessSection />
      <Testimonials />
      <CTABanner />
      <ContactForm />
    </>
  );
}
