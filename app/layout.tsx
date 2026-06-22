import type { Metadata } from 'next';
import { Lato, Manrope, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ContactLauncher from '@/components/layout/ContactLauncher';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '700', '900'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eusopht.com'),
  title: {
    default: 'Eusopht — AI Software & Automation Agency',
    template: '%s | Eusopht',
  },
  description:
    'Eusopht is an AI software & automation agency in Karachi, Pakistan, serving clients worldwide. We build AI agents, workflow automation, dedicated engineering teams, and custom software.',
  keywords: [
    'AI software agency',
    'AI automation company',
    'AI agent development',
    'workflow automation',
    'staff augmentation',
    'custom software development',
    'software house Karachi',
    'software company Pakistan',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Eusopht — AI Software & Automation Agency',
    description:
      'AI agents, automation, dedicated teams, and custom software — built by Eusopht for clients worldwide.',
    url: 'https://eusopht.com',
    siteName: 'Eusopht',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eusopht — AI Software & Automation Agency',
    description:
      'AI agents, automation, dedicated teams, and custom software — built by Eusopht.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full", lato.variable, manrope.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <ContactLauncher />
      </body>
    </html>
  );
}
