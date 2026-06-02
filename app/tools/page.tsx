import type { Metadata } from 'next';
import ToolsHero from '@/sections/tools/ToolsHero';
import ReportlyProduct from '@/sections/tools/ReportlyProduct';
import MergeMagicProduct from '@/sections/tools/MergeMagicProduct';
import CustomToolsCTA from '@/sections/tools/CustomToolsCTA';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'Tools — AI Audit Engine & Media Processor',
  description:
    'Explore Eusopht’s in-house tools: Reportly, an AI-powered financial audit engine, and MergeMagic, a high-speed video merge API. Proof of the engineering we bring to every build.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Eusopht Tools',
    description: 'Purpose-built tools — an AI financial audit engine and a media-processing API.',
    url: 'https://eusopht.com/tools',
    type: 'website',
  },
};

export default function ToolsPage() {
  return (
    <>
      <ToolsHero />
      <ReportlyProduct />
      <MergeMagicProduct />
      <CustomToolsCTA />
      <ContactForm />
    </>
  );
}
