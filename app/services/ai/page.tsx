import type { Metadata } from 'next';
import AIHero from '@/sections/services/ai/AIHero';
import AIServicesGrid from '@/sections/services/ai/AIServicesGrid';
import AIBenefits from '@/sections/services/ai/AIBenefits';
import AITechStack from '@/sections/services/ai/AITechStack';
import AIBlog from '@/sections/services/ai/AIBlog';
import { aiFaqs } from '@/sections/services/ai/aiFaqData';

import PartnerBadges from '@/sections/home/PartnerBadges';
import ProcessSection from '@/sections/home/ProcessSection';
import Testimonials from '@/sections/home/Testimonials';
import FAQ from '@/sections/home/FAQ';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'AI Development Company — Custom AI Solutions',
  description:
    'Eusopht is an AI development company building custom AI applications, generative AI, LLM integrations, and intelligent automation for startups and enterprises worldwide.',
  alternates: { canonical: '/services/ai' },
  openGraph: {
    title: 'AI Development Company — Eusopht',
    description: 'Custom AI applications, generative AI, and intelligent automation built for real business outcomes.',
    url: 'https://eusopht.com/services/ai',
    type: 'website',
  },
};

export default function AIServicePage() {
  return (
    <>
      <AIHero />
      <AIServicesGrid />
      <PartnerBadges />
      <AIBenefits />
      <AITechStack />
      <Testimonials />
      <ProcessSection />
      <AIBlog />
      <FAQ items={aiFaqs} />
      <ContactForm />
    </>
  );
}
