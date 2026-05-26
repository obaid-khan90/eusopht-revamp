import HeroSection from '@/sections/home/HeroSection';
import ServicesGrid from '@/sections/home-3/ServicesGrid';
import AISolutions from '@/sections/home-3/AISolutions';
import ProcessSection from '@/sections/home/ProcessSection';
import PortfolioPreview from '@/sections/home/PortfolioPreview';
import Testimonials from '@/sections/home/Testimonials';
import StatsSection from '@/sections/home/StatsSection';
import PartnerBadges from '@/sections/home/PartnerBadges';
import FAQ from '@/sections/home/FAQ';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';

export default function Home3() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AISolutions />
      <ProcessSection />
      <PortfolioPreview />
      <Testimonials />
      <StatsSection />
      <PartnerBadges />
      <FAQ />
      <CTABanner />
      <ContactForm />
    </>
  );
}
