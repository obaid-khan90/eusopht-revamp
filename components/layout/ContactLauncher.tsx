'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

type Channel = {
  label: string;
  sub: string;
  href: string;
  external?: boolean;
  bg: string;
  icon: React.ReactNode;
};

// Static contact details — real handles.
const WHATSAPP_NUMBER = '923002259802'; // intl format, no +
const EMAIL = 'contact@eusopht.com';
const PHONE = '+92 300-225-9802';

const channels: Channel[] = [
  {
    label: 'WhatsApp',
    sub: 'Chat with us instantly',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
    bg: 'bg-[#25D366]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    sub: EMAIL,
    href: `mailto:${EMAIL}`,
    bg: 'bg-accent',
    icon: <EnvelopeIcon className="h-5 w-5" />,
  },
  {
    label: 'Call us',
    sub: PHONE,
    href: `tel:${PHONE.replace(/[\s-]/g, '')}`,
    bg: 'bg-secondary',
    icon: <PhoneIcon className="h-5 w-5" />,
  },
];

export default function ContactLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Channel menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-72 overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/15"
          >
            <div className="bg-secondary-dark px-5 py-4">
              <p className="text-sm font-bold text-white">Let&apos;s talk</p>
              <p className="mt-0.5 text-xs text-white/70">
                Pick a channel — we usually reply within 24 hours.
              </p>
            </div>
            <ul className="p-2">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-bg"
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${c.bg}`}>
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-text-primary">{c.label}</span>
                      <span className="block truncate text-xs text-text-muted">{c.sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={open}
        className="btn-primary flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-accent/30"
        style={{ borderRadius: '9999px' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
