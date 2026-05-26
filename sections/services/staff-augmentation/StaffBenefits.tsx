import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  { title: 'Hire in Days, Not Months', body: 'Skip lengthy recruitment cycles. Get matched, vetted engineers onto your team in days.' },
  { title: 'No Long-Term Overhead', body: 'Scale up for a project and down when it ends — no severance, benefits, or idle payroll.' },
  { title: 'Pre-Vetted Senior Talent', body: 'Every engineer is screened for skill and communication. You get proven people, not resumes.' },
  { title: 'Your Stack, Your Process', body: 'Our engineers adopt your tools, standards, and workflow — they work as part of your team.' },
  { title: 'Flexible Engagement', body: 'Full-time, part-time, or a dedicated squad — structured to fit how you actually work.' },
  { title: 'Timezone-Aligned Delivery', body: 'We work in your hours with daily standups, so collaboration feels in-house, not offshore.' },
];

export default function StaffBenefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader overline="Why It Works" headline="Benefits of Staff Augmentation" centered />
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
