import type { Metadata } from 'next';
import CustomHero from '@/sections/services/custom-software/CustomHero';
import CustomServicesGrid from '@/sections/services/custom-software/CustomServicesGrid';
import CustomBenefits from '@/sections/services/custom-software/CustomBenefits';
import CustomTechStack from '@/sections/services/custom-software/CustomTechStack';
import CustomBlog from '@/sections/services/custom-software/CustomBlog';
import { customFaqs } from '@/sections/services/custom-software/customFaqData';

import PartnerBadges from '@/sections/home/PartnerBadges';
import ProcessSection from '@/sections/home/ProcessSection';
import Testimonials from '@/sections/home/Testimonials';
import FAQ from '@/sections/home/FAQ';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'Custom Software Development — Web, Mobile & Cloud',
  description:
    'Eusopht builds custom software — web apps, mobile apps, SaaS platforms, and APIs — engineered around your business and built to scale from MVP to enterprise.',
  alternates: { canonical: '/services/custom-software' },
  openGraph: {
    title: 'Custom Software Development — Eusopht',
    description: 'Web, mobile, and cloud software built around your business and built to scale.',
    url: 'https://eusopht.com/services/custom-software',
    type: 'website',
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <CustomHero />
      <CustomServicesGrid />
      <PartnerBadges />
      <CustomBenefits />
      <CustomTechStack />
      <Testimonials />
      <ProcessSection />
      <CustomBlog />
      <FAQ items={customFaqs} />
      <ContactForm />
    </>
  );
}
