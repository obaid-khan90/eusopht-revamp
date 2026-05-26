'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import TechIcon from '@/components/ui/TechIcon';

type Tech = { name: string; icon: string; color: string };

const tabs: Record<string, Tech[]> = {
  'Automation Platforms': [
    { name: 'Zapier', icon: 'zapier', color: 'FF4F00' },
    { name: 'Make', icon: 'make', color: '6D00CC' },
    { name: 'n8n', icon: 'n8n', color: 'EA4B71' },
    { name: 'Workato', icon: 'workato', color: '43A047' },
    { name: 'Power Automate', icon: 'powerautomate', color: '0066FF' },
  ],
  'CRM & Business': [
    { name: 'HubSpot', icon: 'hubspot', color: 'FF7A59' },
    { name: 'Salesforce', icon: 'salesforce', color: '00A1E0' },
    { name: 'Stripe', icon: 'stripe', color: '635BFF' },
    { name: 'Zoho', icon: 'zoho', color: 'E42527' },
    { name: 'Shopify', icon: 'shopify', color: '7AB55C' },
  ],
  'AI & Models': [
    { name: 'OpenAI', icon: 'openai', color: '412991' },
    { name: 'Anthropic Claude', icon: 'anthropic', color: 'D97757' },
    { name: 'LangChain', icon: 'langchain', color: '1C3C3C' },
    { name: 'Hugging Face', icon: 'huggingface', color: 'FFD21E' },
  ],
  'Cloud & Infra': [
    { name: 'AWS', icon: 'amazonwebservices', color: 'FF9900' },
    { name: 'Azure', icon: 'microsoftazure', color: '0078D4' },
    { name: 'GCP', icon: 'googlecloud', color: '4285F4' },
    { name: 'Docker', icon: 'docker', color: '2496ED' },
    { name: 'Webhooks / APIs', icon: 'webhooks', color: '000000' },
  ],
};

type TabKey = keyof typeof tabs;

export default function AutomationTechStack() {
  const [active, setActive] = useState<TabKey>('Automation Platforms');

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <SectionHeader
            overline="Our Stack"
            headline="Technologies & Tools for Our AI Automation Services"
            centered
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
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
