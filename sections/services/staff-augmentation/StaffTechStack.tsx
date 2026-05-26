'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import TechIcon from '@/components/ui/TechIcon';

type Tech = { name: string; icon: string; color: string };

const tabs: Record<string, Tech[]> = {
  Frontend: [
    { name: 'React', icon: 'react', color: '61DAFB' },
    { name: 'Next.js', icon: 'nextdotjs', color: '000000' },
    { name: 'Vue', icon: 'vuedotjs', color: '4FC08D' },
    { name: 'Angular', icon: 'angular', color: 'DD0031' },
    { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    { name: 'Tailwind', icon: 'tailwindcss', color: '06B6D4' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' },
    { name: 'Python', icon: 'python', color: '3776AB' },
    { name: 'Laravel', icon: 'laravel', color: 'FF2D20' },
    { name: 'Go', icon: 'go', color: '00ADD8' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
    { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
  ],
  Mobile: [
    { name: 'Flutter', icon: 'flutter', color: '02569B' },
    { name: 'React Native', icon: 'react', color: '61DAFB' },
    { name: 'Swift', icon: 'swift', color: 'F05138' },
    { name: 'Kotlin', icon: 'kotlin', color: '7F52FF' },
  ],
  'AI & Data': [
    { name: 'OpenAI', icon: 'openai', color: '412991' },
    { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
    { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00' },
    { name: 'LangChain', icon: 'langchain', color: '1C3C3C' },
  ],
  DevOps: [
    { name: 'AWS', icon: 'amazonwebservices', color: 'FF9900' },
    { name: 'Docker', icon: 'docker', color: '2496ED' },
    { name: 'Kubernetes', icon: 'kubernetes', color: '326CE5' },
    { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
  ],
};

type TabKey = keyof typeof tabs;

export default function StaffTechStack() {
  const [active, setActive] = useState<TabKey>('Frontend');
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader overline="Our Stack" headline="Technologies Our Engineers Master" centered />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(Object.keys(tabs) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === tab ? 'bg-accent text-white shadow-sm' : 'border border-border bg-white text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-10 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }} className="flex flex-wrap items-center justify-center gap-3">
                {tabs[active].map((tech) => (
                  <span key={tech.name} className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-bg px-5 py-3 text-sm font-medium text-text-primary shadow-xs">
                    <TechIcon name={tech.name} icon={tech.icon} color={tech.color} />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
