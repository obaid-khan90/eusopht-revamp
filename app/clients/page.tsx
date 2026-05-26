import type { Metadata } from 'next';
import ClientsHero from '@/sections/clients/ClientsHero';
import ClientsGrid from '@/sections/clients/ClientsGrid';
import StatsSection from '@/sections/home/StatsSection';
import Testimonials from '@/sections/home/Testimonials';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'Our Clients — Trusted by Teams Worldwide',
  description:
    'Eusopht is proud to partner with organizations across industries — from startups to enterprises — delivering software, automation, and AI solutions that drive real results.',
  alternates: { canonical: '/clients' },
  openGraph: {
    title: 'Our Clients — Eusopht',
    description: 'The organizations we’re proud to have partnered with.',
    url: 'https://eusopht.com/clients',
    type: 'website',
  },
};

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsGrid />
      <StatsSection />
      <Testimonials />
      <CTABanner />
      <ContactForm />
    </>
  );
}
