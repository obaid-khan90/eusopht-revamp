import HeroSection from '@/sections/home/HeroSection';
import ServicesGrid from '@/sections/home-3/ServicesGrid';
import AISolutions from '@/sections/home/AISolutionsSteps';
import ProcessSection from '@/sections/home/ProcessSection';
import PortfolioPreview from '@/sections/home/PortfolioPreview';
import Testimonials from '@/sections/home/Testimonials';
import StatsSection from '@/sections/home/StatsSection';
import FAQ from '@/sections/home/FAQ';
import CTABanner from '@/sections/home/CTABanner';
import ContactForm from '@/sections/home/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AISolutions />
      <ProcessSection />
      <PortfolioPreview />
      <Testimonials />
      <StatsSection />
<FAQ />
      <CTABanner />
      <ContactForm />
    </>
  );
}
