import AnimatedSection from '@/components/ui/AnimatedSection';

const team = [
  {
    name: 'Umar Maqsood',
    role: 'Founder & CEO',
    bio: 'Software engineer turned founder. Obsessed with delivering real results for clients and building a team that others want to work with.',
    initials: 'UM',
  },
  {
    name: 'Owais Akbar',
    role: 'Lead Developer',
    bio: 'Full-stack engineer with deep expertise in integrations and automation. Has saved clients thousands of hours through well-engineered workflows.',
    initials: 'OA',
  },
  {
    name: 'Salman',
    role: 'Senior Flutter Developer',
    bio: 'Cross-platform mobile expert who has shipped apps used by thousands of real users across iOS and Android.',
    initials: 'SA',
  },
];

export default function AboutTeam() {
  return (
    <section className="section-dotted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The Team</span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            People who give a damn
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Small, senior, and accountable. Everyone on our team ships — no layers of middle management between you and the people building your product.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <div className="flex flex-col rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-sm font-semibold text-accent">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
