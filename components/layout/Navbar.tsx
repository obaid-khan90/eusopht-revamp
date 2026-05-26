'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// 4 service pillars — AI is primary. Capabilities grouped under each.
const megaMenu = [
  {
    category: 'AI Development',
    href: '/services/ai',
    primary: true,
    links: [
      { label: 'AI Agent Development', href: '/services/ai' },
      { label: 'AI Chatbots & Assistants', href: '/services/ai' },
      { label: 'Computer Vision', href: '/services/ai' },
      { label: 'ML / LLM Development', href: '/services/ai' },
    ],
  },
  {
    category: 'Automation',
    href: '/services/automation',
    links: [
      { label: 'Workflow Automation', href: '/services/automation' },
      { label: 'Third-Party Integrations', href: '/services/automation' },
      { label: 'Zapier · Make · n8n', href: '/services/automation' },
      { label: 'CRM Automation (HubSpot, GHL)', href: '/services/automation' },
    ],
  },
  {
    category: 'Staff Augmentation',
    href: '/services/staff-augmentation',
    links: [
      { label: 'Dedicated Teams', href: '/services/staff-augmentation' },
      { label: 'Outsourcing', href: '/services/staff-augmentation' },
      { label: 'QA & Playwright Testing', href: '/services/staff-augmentation' },
      { label: 'Hire Developers', href: '/services/staff-augmentation' },
    ],
  },
  {
    category: 'Custom Software',
    href: '/services/custom-software',
    links: [
      { label: 'Web Development', href: '/services/custom-software' },
      { label: 'Mobile Development', href: '/services/custom-software' },
      { label: 'Product / MVP Development', href: '/services/custom-software' },
      { label: 'Cloud & SaaS', href: '/services/custom-software' },
    ],
  },
];

const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Clients', href: '/clients' },
  { label: 'Products', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isServicesActive = pathname?.startsWith('/services');

  return (
    <>
      <div className="fixed top-5 left-6 right-6 z-50 flex justify-center pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-6xl"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <nav
            className={`rounded-3xl border border-border bg-white/95 backdrop-blur-md px-6 py-3 flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/8' : 'shadow-sm'
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Eusopht"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {/* Home */}
              <Link
                href="/"
                onMouseEnter={() => setMegaOpen(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${pathname === '/'
                  ? 'text-accent bg-accent-light'
                  : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                  }`}
              >
                Home
              </Link>

              {/* Services mega trigger */}
              <button
                onMouseEnter={() => setMegaOpen(true)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isServicesActive || megaOpen
                  ? 'text-accent bg-accent-light'
                  : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                  }`}
              >
                Services
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onMouseEnter={() => setMegaOpen(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active
                      ? 'text-accent bg-accent-light'
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                      }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-xl text-text-secondary hover:bg-gray-50"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </nav>

          {/* Services mega panel — anchored to the navbar, full-width, with gap */}
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                onMouseEnter={() => setMegaOpen(true)}
                className="absolute left-0 right-0 top-full mt-3 hidden md:block"
              >
                <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-white shadow-2xl shadow-black/10 p-3">
                  <div className="grid grid-cols-4 gap-3">
                    {megaMenu.map((col) => (
                      <Link
                        key={col.category}
                        href={col.href}
                        className="group flex flex-col rounded-xl border border-transparent bg-bg p-5 transition-all hover:border-accent/30 hover:bg-accent-light hover:shadow-sm"
                      >
                        <span
                          className={`mb-3 text-sm font-bold ${col.primary ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                            }`}
                        >
                          {col.category}
                        </span>
                        <ul className="space-y-2">
                          {col.links.map((l) => (
                            <li
                              key={l.label}
                              className="text-[13px] font-medium text-text-secondary group-hover:text-text-primary transition-colors"
                            >
                              {l.label}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                          Explore →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-6 top-20 z-40 rounded-2xl border border-border bg-white shadow-xl shadow-black/12 p-5 flex flex-col gap-1 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {/* Home */}
            <Link
              href="/"
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Services accordion */}
            <button
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 pl-3 border-l border-border flex flex-col gap-0.5">
                {megaMenu.map((col) => (
                  <Link
                    key={col.category}
                    href={col.href}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-text-primary hover:bg-accent-light hover:text-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {col.category}
                  </Link>
                ))}
              </div>
            )}

            <div className="my-2 border-t border-border" />

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3">
              <a
                href="#contact"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 px-7 py-3 text-base font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
