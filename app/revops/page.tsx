import type { Metadata } from 'next';
import RevOpsHero from '@/sections/revops/RevOpsHero';
import RevOpsOverview from '@/sections/revops/RevOpsOverview';
import RevOpsEngine from '@/sections/revops/RevOpsEngine';
import RevOpsCases from '@/sections/revops/RevOpsCases';
import RevOpsAudit from '@/sections/revops/RevOpsAudit';
import { revopsFaqs } from '@/sections/revops/revopsFaqData';

import FAQ from '@/sections/home/FAQ';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'RevOps — Turn Your CRM into a Revenue Machine',
  description:
    'Eusopht RevOps aligns your marketing, sales, and service teams with HubSpot & GoHighLevel automation — tracked leads, automated follow-ups, and measurable, repeatable revenue growth.',
  alternates: { canonical: '/revops' },
  openGraph: {
    title: 'RevOps — Revenue Operations by Eusopht',
    description:
      'We architect the systems that turn your CRM into a revenue machine. HubSpot & GoHighLevel specialists.',
    url: 'https://eusopht.com/revops',
    type: 'website',
  },
};

export default function RevOpsPage() {
  return (
    <>
      <RevOpsHero />
      <RevOpsOverview />
      <RevOpsEngine />
      <RevOpsCases />
      <RevOpsAudit />
      <FAQ items={revopsFaqs} />
      <ContactForm />
    </>
  );
}
