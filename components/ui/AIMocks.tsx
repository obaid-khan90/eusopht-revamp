'use client';

import { motion } from 'framer-motion';

/* ── 1. Node diagram: AI hub → Computer Vision / NLP / ML ── */
export function NodeDiagramMock() {
  const nodes = [
    { label: 'Computer Vision', icon: EyeIcon },
    { label: 'Natural Language\nProcessing (NLP)', icon: ChatIcon },
    { label: 'Machine Learning\n(ML)', icon: NetworkIcon },
  ];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
      {/* Hub — chip/GPU core */}
      <div className="flex flex-col items-center gap-2.5">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl text-white"
          style={{
            background: 'linear-gradient(140deg, #3b82f6 0%, #2563eb 100%)',
            boxShadow: '0 10px 30px -6px rgba(37,99,235,0.6)',
          }}
        >
          <ChipIcon className="h-10 w-10" />
        </div>
        <span className="text-xs font-semibold text-text-secondary text-center leading-tight">
          Artificial
          <br />
          Intelligence (AI)
        </span>
      </div>

      {/* Connector lines */}
      <div className="relative h-4 w-4/5">
        <div className="absolute left-1/2 top-0 h-4 w-px bg-border" />
        <div className="absolute left-[16%] right-[16%] top-4 h-px bg-border" />
        <div className="absolute left-[16%] top-4 h-2.5 w-px bg-border" />
        <div className="absolute left-1/2 top-4 h-2.5 w-px bg-border" />
        <div className="absolute right-[16%] top-4 h-2.5 w-px bg-border" />
      </div>

      {/* Leaf nodes */}
      <div className="flex w-full items-start justify-between">
        {nodes.map((n) => (
          <div key={n.label} className="flex flex-1 flex-col items-center gap-2.5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white text-accent shadow-sm">
              <n.icon />
            </div>
            <span className="whitespace-pre-line text-center text-[11px] font-medium text-text-secondary leading-tight">
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 2. Chat / search-results mock ── */
export function ChatMock() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-6">
      <div className="flex items-start gap-2.5 rounded-2xl border border-border bg-white p-3 shadow-sm">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">AI</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-text-primary">Eusopht AI</span>
            <span className="text-[9px] text-text-muted">1 min ago</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-border" />
          <div className="mt-1 h-1.5 w-2/3 rounded-full bg-border" />
        </div>
      </div>

      <div className="ml-auto flex max-w-[80%] items-start gap-2.5 rounded-2xl border border-accent/20 bg-accent-light p-3">
        <div className="flex-1">
          <span className="text-[11px] font-semibold text-text-primary">You</span>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-accent/30" />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-3 shadow-sm">
        <p className="text-[10px] font-semibold text-text-secondary mb-2.5">Automation impact this month</p>
        {[
          { label: 'Tickets resolved', w: '100%' },
          { label: 'Leads qualified', w: '82%' },
          { label: 'Docs processed', w: '64%' },
          { label: 'Hours saved', w: '46%' },
        ].map((row) => (
          <div key={row.label} className="mb-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[9px] text-text-muted">{row.label}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-bg">
              <div className="h-full rounded-full bg-accent/60" style={{ width: row.w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3. AI text-generator prompt box ── */
export function PromptMock() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-5 shadow-md">
        <p className="text-xs font-semibold text-text-primary mb-3">AI Text Generator</p>
        <div className="rounded-xl border border-border bg-bg p-3">
          <p className="text-[11px] text-text-secondary leading-relaxed">
            Why is human feedback necessary for accurate LLM responses?
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[
              { src: '/openai.png', alt: 'ChatGPT' },
              { src: 'https://cdn.simpleicons.org/claude/D97757', alt: 'Claude' },
              { src: 'https://cdn.simpleicons.org/googlegemini/8E75B2', alt: 'Gemini' },
            ].map((m) => (
              <div key={m.alt} className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={m.alt} className="h-4 w-4 object-contain" />
              </div>
            ))}
          </div>
          <motion.div
            className="flex h-7 w-12 items-center rounded-full bg-accent px-1"
            initial={{ opacity: 0.9 }}
          >
            <motion.div
              className="h-5 w-5 rounded-full bg-white shadow"
              animate={{ x: [0, 18, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── 4. Voice / recording UI mock ── */
export function VoiceMock() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-5 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-text-primary">Recording, ID 234657</span>
          <span className="h-2 w-2 rounded-full bg-red-500" />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-bg px-2 py-1.5">
          <span className="text-[9px] text-text-muted">B I U</span>
          <span className="text-[9px] text-text-muted">Search in transcript…</span>
        </div>
        {/* Waveform */}
        <div className="mt-4 flex h-12 items-center justify-between gap-[3px]">
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-full bg-accent/50"
              animate={{ height: [`${20 + (i % 5) * 12}%`, `${40 + (i % 7) * 8}%`, `${20 + (i % 5) * 12}%`] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
            />
          ))}
        </div>
        <button
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold text-white"
          style={{ background: 'linear-gradient(140deg, #3b82f6 0%, #2563eb 100%)' }}
        >
          Start recording
        </button>
      </div>
    </div>
  );
}

/* ── tiny inline icons ── */
function EyeIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ChatIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}
function ChipIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21" />
    </svg>
  );
}
/* Neural-network style icon for Machine Learning */
function NetworkIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path strokeLinecap="round" d="M6.6 6.9l3.7 3.7M6.6 17.1l3.7-3.7M13.7 10.6l3.7-3.7M13.7 13.4l3.7 3.7" />
    </svg>
  );
}
