import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  BanknotesIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  CloudIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const industries = [
  { icon: BanknotesIcon, label: 'Fintech & Payments' },
  { icon: HeartIcon, label: 'Healthcare' },
  { icon: ShoppingBagIcon, label: 'eCommerce & Retail' },
  { icon: TruckIcon, label: 'Logistics & Shipping' },
  { icon: CloudIcon, label: 'SaaS & Platforms' },
  { icon: AcademicCapIcon, label: 'Education & Training' },
  { icon: BuildingOffice2Icon, label: 'Real Estate & Auto' },
  { icon: SparklesIcon, label: 'AI & Automation' },
];

export default function IndustriesStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader
            overline="Industries We Serve"
            headline="Shipped across every kind of business"
            subtitle="From regulated fintech to high-velocity eCommerce — we've delivered products that fit the domain."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={(i % 4) * 0.06}>
              <div className="group flex items-center gap-3 rounded-2xl border border-border bg-bg p-5 transition-all duration-300 hover:border-accent/30 hover:bg-accent-light">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ind.icon className="h-5 w-5 text-accent" />
                </span>
                <span className="text-sm font-semibold text-text-primary">{ind.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
