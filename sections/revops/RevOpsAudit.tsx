import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const checks = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Pipeline Inspection',
    body: 'We identify exactly where deals stall and revenue leaks in your current flow.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Automation Review',
    body: 'We audit your workflows, verify tracking, and flag every broken or missing trigger.',
  },
  {
    icon: HeartIcon,
    title: 'Data Health Check',
    body: 'We find duplicates and surface the gaps killing your conversion rates.',
  },
];

export default function RevOpsAudit() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="overflow-hidden rounded-3xl border border-accent/20 bg-accent-light/40 p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left — pitch */}
              <div>
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-white px-3 py-1 text-xs font-semibold text-accent">
                  Free This Month
                </span>
                <h2
                  className="mt-5 text-3xl font-bold leading-tight text-text-primary lg:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Is your CRM a <span className="text-red-500">graveyard</span> or a{' '}
                  <span className="text-accent">goldmine?</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  Most CRMs are graveyards where leads go to die. Book a Revenue System Audit and we&apos;ll look under the hood of your HubSpot or GHL setup — and find exactly where you&apos;re losing money.
                </p>
                <a
                  href="#contact"
                  className="btn-primary mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white"
                >
                  Book My Revenue Audit
                </a>
              </div>

              {/* Right — what you get */}
              <div className="rounded-2xl border border-border bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">What You Get</p>
                <ul className="mt-5 space-y-5">
                  {checks.map((c) => (
                    <li key={c.title} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light">
                        <c.icon className="h-5 w-5 text-accent" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-text-primary">{c.title}</span>
                        <span className="block text-sm leading-relaxed text-text-secondary">{c.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
