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
              <a href="mailto:info@eusopht.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <EnvelopeIcon className="h-4 w-4 text-blue-400" />
                info@eusopht.com
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
          <p className="text-sm text-slate-500">
            Built with precision. Delivered with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
