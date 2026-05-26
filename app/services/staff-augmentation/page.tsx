import type { Metadata } from 'next';
import StaffHero from '@/sections/services/staff-augmentation/StaffHero';
import StaffServicesGrid from '@/sections/services/staff-augmentation/StaffServicesGrid';
import StaffBenefits from '@/sections/services/staff-augmentation/StaffBenefits';
import StaffTechStack from '@/sections/services/staff-augmentation/StaffTechStack';
import StaffBlog from '@/sections/services/staff-augmentation/StaffBlog';
import { staffFaqs } from '@/sections/services/staff-augmentation/staffFaqData';

import PartnerBadges from '@/sections/home/PartnerBadges';
import ProcessSection from '@/sections/home/ProcessSection';
import Testimonials from '@/sections/home/Testimonials';
import FAQ from '@/sections/home/FAQ';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'Staff Augmentation — Hire Vetted Engineers On Demand',
  description:
    'Eusopht staff augmentation gives you vetted senior engineers — AI, web, mobile, DevOps, QA — who embed into your team and ship from day one. Scale up fast without the hiring overhead.',
  alternates: { canonical: '/services/staff-augmentation' },
  openGraph: {
    title: 'Staff Augmentation — Eusopht',
    description: 'Vetted engineers who plug into your team and ship from day one.',
    url: 'https://eusopht.com/services/staff-augmentation',
    type: 'website',
  },
};

export default function StaffAugmentationPage() {
  return (
    <>
      <StaffHero />
      <StaffServicesGrid />
      <PartnerBadges />
      <StaffBenefits />
      <StaffTechStack />
      <Testimonials />
      <ProcessSection />
      <StaffBlog />
      <FAQ items={staffFaqs} />
      <ContactForm />
    </>
  );
}
