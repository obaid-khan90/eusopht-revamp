import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

const partners = [
  { name: 'AWS', src: '/aws.png' },
  { name: 'Microsoft Azure', src: '/azure.png' },
  { name: 'Shopify Partner', src: '/shopify.png' },
  { name: 'HubSpot Partner', src: '/hubspot.png' },
  { name: 'Stripe', src: '/stripe.png' },
  { name: 'OpenAI', src: '/openai.png' },
];

export default function PartnerBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
            Powered by industry-leading platforms
          </p>
          <p className="text-sm text-text-secondary max-w-xl mb-10">
            Certified and experienced across the tools that power modern software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3.5 shadow-xs hover:shadow-sm hover:border-accent/30 transition-all"
              >
                <Image src={p.src} alt={p.name} width={28} height={28} className="h-7 w-7 object-contain" />
                <span className="text-sm font-semibold text-text-secondary">{p.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
