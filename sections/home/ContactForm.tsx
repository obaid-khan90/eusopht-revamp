'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import DemoBookingModal from '@/components/ui/DemoBookingModal';


const services = [
  'Web Development',
  'Mobile Development',
  'AI & Automation',
  'Third-Party Integrations',
  'Product Development',
  'Outsourcing',
  'Other',
];

const budgets = ['< $5k', '$5k – $25k', '$25k – $100k', '$100k+', 'Not sure yet'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingOpen, setBookingOpen] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const company = data.get('company') as string;
    const service = data.get('service') as string;
    const budget = data.get('budget') as string;
    const message = data.get('message') as string;

    const fullMessage = [
      message,
      service ? `\nService Interested In: ${service}` : '',
      budget ? `Estimated Budget: ${budget}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message: fullMessage }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <section id="contact" className="relative overflow-hidden py-24 bg-footer-bg scroll-mt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 60% at 85% 25%, rgba(37,99,235,0.10), transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <AnimatedSection className="text-center flex flex-col items-center mb-14">
            <SectionHeader
              overline="Get in Touch"
              headline="Tell Us About Your Project"
              subtitle="Share a few details and we'll get back within one business day with next steps."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Contact info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="flex flex-col gap-3 h-full">
                <a
                  href="mailto:info@eusopht.com"
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 hover:border-accent/30 hover:shadow-sm transition-all"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                    <EnvelopeIcon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</p>
                    <p className="text-sm font-semibold text-text-primary">info@eusopht.com</p>
                  </div>
                </a>

                <a
                  href="tel:+923002259802"
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 hover:border-accent/30 hover:shadow-sm transition-all"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                    <PhoneIcon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone</p>
                    <p className="text-sm font-semibold text-text-primary">+92 300-225-9802</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                  <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                    <MapPinIcon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Office</p>
                    <p className="text-sm font-semibold text-text-primary">Karachi, Pakistan</p>
                  </div>
                </div>

                <button
                  onClick={() => setBookingOpen(true)}
                  className="mt-auto flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-light p-4 text-left hover:border-accent/40 hover:shadow-sm transition-all w-full"
                >
                  <div className="h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Prefer a quick call?</p>
                    <p className="text-sm text-text-secondary mt-0.5">
                      Book a free 30-min discovery call →
                    </p>
                  </div>
                </button>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              {status === 'success' ? (
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm flex flex-col items-center justify-center gap-4 h-full min-h-[400px] text-center">
                  <CheckCircleIcon className="h-14 w-14 text-green-500" />
                  <h3 className="text-xl font-bold text-text-primary">Message Sent!</h3>
                  <p className="text-text-secondary max-w-sm">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm font-semibold text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl border border-border bg-white p-8 shadow-sm flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" name="name" type="text" required />
                    <Field label="Work Email *" name="email" type="email" required />
                  </div>

                  <Field label="Company" name="company" type="text" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField label="Service Interested In" name="service" options={services} />
                    <SelectField label="Estimated Budget" name="budget" options={budgets} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-text-primary">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you looking to build? Timeline, goals, constraints, anything we should know."
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white self-start mt-2 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>

                  <p className="text-xs text-text-muted">
                    By submitting, you agree to be contacted by Eusopht regarding your inquiry. We don&apos;t spam.
                  </p>
                </form>
              )}
            </AnimatedSection>

          </div>
        </div>
      </section>

      <DemoBookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-text-primary">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
