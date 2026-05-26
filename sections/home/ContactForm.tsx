'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

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

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New Inquiry — ${data.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nService: ${data.get('service')}\nBudget: ${data.get('budget')}\n\nMessage:\n${data.get('message')}`
    );
    window.location.href = `mailto:info@eusopht.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-footer-bg scroll-mt-24">
      {/* Glowy blue-green vignette */}
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

          {/* Contact info — 2 cols, compact */}
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
                href="tel:+923001234567"
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                  <PhoneIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone</p>
                  <p className="text-sm font-semibold text-text-primary">+92 300 123 4567</p>
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

              <div className="mt-auto flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-light p-4">
                <div className="h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Prefer a quick call?</p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    Book a free 30-min discovery call.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form — 3 cols */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
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

              <button
                type="submit"
                disabled={submitting || submitted}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white self-start mt-2 disabled:opacity-70"
              >
                {submitted ? 'Opening your email…' : submitting ? 'Sending…' : 'Send Message'}
              </button>

              <p className="text-xs text-text-muted">
                By submitting, you agree to be contacted by Eusopht regarding your inquiry. We don&apos;t spam.
              </p>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
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
