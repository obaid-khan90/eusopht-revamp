import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const serviceLinks = [
  { label: 'AI', href: '/services/ai' },
  { label: 'Automation', href: '/services/automation' },
  { label: 'RevOps', href: '/revops' },
  { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
  { label: 'Custom Software', href: '/services/custom-software' },
];

const companyLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  // { label: 'Clients', href: '/clients' },
  { label: 'Tools', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

const resourceLinks = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get in Touch', href: '/#contact' },
];

export default function Footer() {
  // Google Maps embed — B-153, Block 6, Gulshan-e-Iqbal, Karachi
  const mapSrc =
    'https://www.google.com/maps?q=B-153+Block+6+Gulshan-e-Iqbal+Karachi+75350+Pakistan&t=m&z=15&ie=UTF8&iwloc=&output=embed';
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Eusopht+B-153+Block+6+Gulshan-e-Iqbal+Karachi+Pakistan';

  return (
    <footer
      className="relative overflow-hidden text-slate-300"
      style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0F172A 100%)' }}
    >
      {/* subtle accent glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">

        {/* ── Link columns ───────────────────────────────── */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo-white.png" alt="Eusopht" width={140} height={40} className="h-9 w-auto object-contain" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A full-service software agency delivering web, mobile, and AI solutions to clients across 10+ countries.
            </p>
            <a
              href="/#contact"
              className="btn-primary mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Start a Project
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Resources</p>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ── Map + address (integrated, dark) ───────────── */}
        <div className="my-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/3 lg:grid-cols-5">
          {/* Map — 3 cols */}
          <div className="relative lg:col-span-3">
            <iframe
              title="Eusopht office location — Karachi, Pakistan"
              src={mapSrc}
              className="h-56 w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Address — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4 p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Visit Us</p>
              <p className="mt-1 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Eusopht HQ
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                B-153, Block 6, Gulshan-e-Iqbal,<br />Karachi – 75350, Pakistan
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="mailto:contact@eusopht.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <EnvelopeIcon className="h-4 w-4 text-blue-400" />
                contact@eusopht.com
              </a>
              <a href="tel:+923002259802" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <PhoneIcon className="h-4 w-4 text-blue-400" />
                +92 300-225-9802
              </a>
            </div>

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white mt-auto self-start"
            >
              Get Directions
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Eusopht. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/eusopht/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eusopht on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-accent/50 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/eusopht/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eusopht on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-accent/50 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
