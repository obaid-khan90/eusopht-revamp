'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

function toDateInputMin() {
  return new Date().toISOString().split('T')[0];
}

function isWeekend(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.getDay() === 0 || d.getDay() === 6;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function DemoBookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Reset on open
  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrorMsg('');
      setSelectedDate('');
      setSelectedTime('');
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setStatus('submitting');
    setErrorMsg('');

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name') as string,
          email: data.get('email') as string,
          company: (data.get('company') as string) || undefined,
          phone: (data.get('phone') as string) || undefined,
          preferredDate: selectedDate,
          preferredTime: selectedTime,
          message: (data.get('message') as string) || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to book');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to book. Please try again.');
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-white shadow-2xl pointer-events-auto">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div>
                  <h2 className="text-lg font-bold text-text-primary">Book a Discovery Call</h2>
                  <p className="text-sm text-text-muted mt-0.5">Free 30-min consultation — no commitment</p>
                </div>
                <button
                  onClick={onClose}
                  className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-primary hover:bg-bg transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-500" />
                    <h3 className="text-xl font-bold text-text-primary">Booking Confirmed!</h3>
                    <p className="text-text-secondary max-w-sm">
                      Check your email for the confirmation and calendar invite. We look forward to speaking with you.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-2 btn-primary px-6 py-3 text-sm font-semibold text-white"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Full Name *" name="name" type="text" required />
                      <Field label="Email Address *" name="email" type="email" required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Company" name="company" type="text" />
                      <Field label="Phone" name="phone" type="tel" />
                    </div>

                    {/* Date picker */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                        <CalendarDaysIcon className="h-4 w-4 text-accent" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        min={toDateInputMin()}
                        value={selectedDate}
                        onChange={(e) => {
                          if (!isWeekend(e.target.value)) setSelectedDate(e.target.value);
                        }}
                        required
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                      <p className="text-xs text-text-muted">Weekdays only (Mon – Fri)</p>
                    </div>

                    {/* Time slots */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4 text-accent" />
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                              selectedTime === slot
                                ? 'bg-accent border-accent text-white shadow-sm'
                                : 'border-border text-text-secondary hover:border-accent/40 hover:text-accent'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-semibold text-text-primary">
                        Anything we should know? (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Brief context about your project or goals…"
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
                      disabled={status === 'submitting' || !selectedDate || !selectedTime}
                      className="btn-primary w-full py-4 text-base font-semibold text-white disabled:opacity-60"
                    >
                      {status === 'submitting' ? 'Booking…' : 'Confirm Booking'}
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      You'll receive a confirmation email with a calendar invite.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-text-primary">{label}</label>
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
