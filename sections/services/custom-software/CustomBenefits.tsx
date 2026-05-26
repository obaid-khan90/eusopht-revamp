import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  { title: 'Built Around Your Needs', body: 'No forcing your process into someone else’s tool — the software fits exactly how you work.' },
  { title: 'Scalable Architecture', body: 'We design for growth from day one, so your product performs as users and data scale up.' },
  { title: 'You Own the Code & IP', body: 'Everything we build is yours — fully documented and handed over for your team to extend.' },
  { title: 'Faster Time-to-Market', body: 'Short iterative cycles and reusable foundations get a working product into users’ hands sooner.' },
  { title: 'Maintainable & Tested', body: 'Clean code, automated tests, and clear docs keep long-term maintenance low and predictable.' },
  { title: 'End-to-End Partnership', body: 'From discovery to post-launch support, one team owns quality across the whole lifecycle.' },
];

export default function CustomBenefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader overline="Why It Works" headline="Benefits of Custom Software Development" centered />
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm h-full">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="mb-1.5 font-bold text-text-primary">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{b.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
