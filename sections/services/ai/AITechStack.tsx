'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import TechIcon from '@/components/ui/TechIcon';

/* icon = simpleicons.org slug; color = brand hex (no leading #) */
type Tech = { name: string; icon: string; color: string };

const tabs: Record<string, Tech[]> = {
  Languages: [
    { name: 'Python', icon: 'python', color: '3776AB' },
    { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
    { name: 'Go', icon: 'go', color: '00ADD8' },
    { name: 'Rust', icon: 'rust', color: '000000' },
    { name: 'SQL', icon: 'postgresql', color: '4169E1' },
  ],
  Frameworks: [
    { name: 'FastAPI', icon: 'fastapi', color: '009688' },
    { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
    { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00' },
    { name: 'LangChain', icon: 'langchain', color: '1C3C3C' },
    { name: 'Next.js', icon: 'nextdotjs', color: '000000' },
    { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' },
    { name: 'React', icon: 'react', color: '61DAFB' },
  ],
  'AI & Models': [
    { name: 'OpenAI GPT', icon: 'openai', color: '412991' },
    { name: 'Anthropic Claude', icon: 'anthropic', color: 'D97757' },
    { name: 'Llama', icon: 'meta', color: '0467DF' },
    { name: 'Whisper', icon: 'openai', color: '412991' },
    { name: 'Hugging Face', icon: 'huggingface', color: 'FFD21E' },
    { name: 'LangChain', icon: 'langchain', color: '1C3C3C' },
  ],
  'Cloud & Infra': [
    { name: 'AWS', icon: 'amazonwebservices', color: 'FF9900' },
    { name: 'Azure', icon: 'microsoftazure', color: '0078D4' },
    { name: 'GCP', icon: 'googlecloud', color: '4285F4' },
    { name: 'Docker', icon: 'docker', color: '2496ED' },
    { name: 'Kubernetes', icon: 'kubernetes', color: '326CE5' },
    { name: 'Vercel', icon: 'vercel', color: '000000' },
  ],
};

type TabKey = keyof typeof tabs;

export default function AITechStack() {
  const [active, setActive] = useState<TabKey>('Languages');

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader
            overline="Our Stack"
            headline="Technologies & Tools for Our AI Development Services"
            centered
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Tab pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(Object.keys(tabs) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === tab
                    ? 'bg-accent text-white shadow-sm'
                    : 'border border-border bg-white text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="mt-10 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {tabs[active].map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-bg px-5 py-3 text-sm font-medium text-text-primary shadow-xs"
                  >
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
