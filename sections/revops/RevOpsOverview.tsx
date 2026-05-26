import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';

export default function RevOpsOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <Badge>Overview</Badge>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <h2
              className="text-3xl font-bold leading-tight text-text-primary lg:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-accent">Revenue Operations</span> that connect your entire go-to-market motion
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
              <p>
                Most companies don&apos;t have a lead problem — they have a process problem. Spend goes into ads while opportunities die in spreadsheets, missed follow-ups, and duplicate records.
              </p>
              <p>
                We build a unified Revenue Engine on HubSpot or GoHighLevel where marketing, sales, and service share one source of truth — every lead tracked, nurtured, and closed systematically, with clean reporting you can actually trust.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
