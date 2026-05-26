import type { Metadata } from 'next';
import AutomationHero from '@/sections/services/automation/AutomationHero';
import AutomationServicesGrid from '@/sections/services/automation/AutomationServicesGrid';
import AutomationBenefits from '@/sections/services/automation/AutomationBenefits';
import AutomationTechStack from '@/sections/services/automation/AutomationTechStack';
import AutomationBlog from '@/sections/services/automation/AutomationBlog';
import RevOpsCrossLink from '@/sections/revops/RevOpsCrossLink';
import { automationFaqs } from '@/sections/services/automation/automationFaqData';

import PartnerBadges from '@/sections/home/PartnerBadges';
import ProcessSection from '@/sections/home/ProcessSection';
import Testimonials from '@/sections/home/Testimonials';
import FAQ from '@/sections/home/FAQ';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'AI Automation Company — Workflow & Process Automation',
  description:
    'Eusopht builds custom AI automation — workflow orchestration, deep integrations, and intelligent process automation that eliminates manual work for businesses worldwide.',
  alternates: { canonical: '/services/automation' },
  openGraph: {
    title: 'AI Automation Services — Eusopht',
    description: 'Custom workflow automation and integrations that run reliably and scale with your business.',
    url: 'https://eusopht.com/services/automation',
    type: 'website',
  },
};

export default function AutomationServicePage() {
  return (
    <>
      <AutomationHero />
      <AutomationServicesGrid />
      <RevOpsCrossLink />
      <PartnerBadges />
      <AutomationBenefits />
      <AutomationTechStack />
      <Testimonials />
      <ProcessSection />
      <AutomationBlog />
      <FAQ items={automationFaqs} />
      <ContactForm />
    </>
  );
}
