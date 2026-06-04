import type { Metadata } from 'next';
import ContactHero from '@/sections/contact/ContactHero';
import ContactIntro from '@/sections/contact/ContactIntro';
import ContactForm from '@/sections/home/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Let’s Build Something Together',
  description:
    'Get in touch with Eusopht. Reach us by email, WhatsApp, or a call, or visit our Karachi office. We reply to AI, automation, staff augmentation, and custom software inquiries within one business day.',
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: 'Contact Eusopht',
    description: 'Talk to our team about your AI, automation, and software project.',
    url: 'https://eusopht.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactForm />
    </>
  );
}
