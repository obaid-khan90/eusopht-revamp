'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDownIcon, Bars3Icon, XMarkIcon, ArrowRightIcon,
  SparklesIcon, BoltIcon, UserGroupIcon, CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';

// 4 service pillars — AI is primary. Capabilities grouped under each.
const megaMenu = [
  {
    category: 'AI Development',
    href: '/services/ai',
    icon: SparklesIcon,
    description: 'AI agents, chatbots, computer vision, and custom LLM solutions that automate decisions.',
    links: ['AI Agent Development', 'AI Chatbots & Assistants', 'Computer Vision', 'ML / LLM Development'],
  },
  {
    category: 'Automation',
    href: '/services/automation',
    icon: BoltIcon,
    description: 'Workflow automation and deep integrations that connect your tools and eliminate manual work.',
    links: ['Workflow Automation', 'Third-Party Integrations', 'Zapier · Make · n8n', 'CRM Automation'],
  },
  {
    category: 'Staff Augmentation',
    href: '/services/staff-augmentation',
    icon: UserGroupIcon,
    description: 'Embed experienced engineers directly into your team — on your stack, at your pace.',
    links: ['Dedicated Teams', 'Outsourcing', 'QA & Playwright Testing', 'Hire Developers'],
  },
  {
    category: 'Custom Software',
    href: '/services/custom-software',
    icon: CodeBracketSquareIcon,
    description: 'End-to-end product engineering — web, mobile, and cloud apps built to scale.',
    links: ['Web Development', 'Mobile Development', 'Product / MVP Development', 'Cloud & SaaS'],
  },
];

const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  // { label: 'Clients', href: '/clients' },
  { label: 'Tools', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setMobileServicesOpen(true);
    window.dispatchEvent(new CustomEvent('mobileNavToggle', { detail: { open: mobileOpen } }));
  }, [mobileOpen]);

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
              <Bars3Icon className="h-6 w-6" />
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
                <div className="rounded-2xl border border-border bg-white shadow-2xl shadow-black/10 p-5">
                  <div className="grid grid-cols-2 gap-2">
                    {megaMenu.map((col) => {
                      const Icon = col.icon;
                      return (
                        <Link
                          key={col.category}
                          href={col.href}
                          className="group flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all hover:border-border hover:bg-bg"
                        >
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                                {col.category}
                              </p>
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-all duration-200 group-hover:opacity-100 whitespace-nowrap">
                                Explore <ArrowRightIcon className="h-3 w-3" />
                              </span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-text-secondary line-clamp-2">
                              {col.description}
                            </p>
                            <ul className="mt-2.5 space-y-1">
                              {col.links.map((l) => (
                                <li key={l} className="text-[12px] font-medium text-text-muted transition-colors group-hover:text-text-secondary">
                                  {l}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile drawer — slide in from right */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <Image src="/logo.png" alt="Eusopht" width={140} height={40} className="h-10 w-auto object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-xl text-text-secondary hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer body */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors text-text-secondary hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                {/* Services accordion */}
                <button
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors w-full ${isServicesActive ? 'bg-accent-light text-accent' : 'text-text-secondary hover:bg-gray-50'}`}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  Services
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mx-1 mb-1 rounded-xl bg-accent-light/60 flex flex-col gap-0.5 p-2">
                        {megaMenu.map((col) => {
                          const Icon = col.icon;
                          return (
                            <Link
                              key={col.category}
                              href={col.href}
                              className="flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-medium text-text-secondary hover:bg-white hover:text-accent transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <Icon className="h-4 w-4 shrink-0 text-accent" />
                              {col.category}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="my-1 border-t border-border" />

                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors ${active ? 'bg-accent-light text-accent' : 'text-text-secondary hover:bg-gray-50'}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-5 py-5 border-t border-border">
                <a
                  href="#contact"
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 py-3.5 text-base font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </a>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/eusopht/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Eusopht on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted hover:border-accent/50 hover:text-accent transition-colors"
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
