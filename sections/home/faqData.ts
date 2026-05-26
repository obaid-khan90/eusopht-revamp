export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'What services does Eusopht offer?',
    a: 'We specialise in four areas: AI (agents, chatbots, computer vision, custom LLMs), Automation (workflow automation and integrations), Staff Augmentation (dedicated engineering teams), and Custom Software Development (web, mobile, cloud, and SaaS products).',
  },
  {
    q: 'How quickly can you start on my project?',
    a: 'For most engagements we can kick off within one to two weeks. After a short discovery call we scope the work, agree on a plan, and assign the right team. Staff-augmentation requests can often start even faster.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We are based in Karachi, Pakistan and deliver to clients across 10+ countries, working in your timezone with daily standups and weekly syncs so collaboration feels seamless.',
  },
  {
    q: 'What does an AI automation project typically involve?',
    a: 'We connect your data sources, orchestrate AI models (GPT, Claude, or a fine-tuned model), and wire the output into your existing tools — CRMs, email, Slack, reports. You get a fully automated, auditable workflow that runs without manual effort.',
  },
  {
    q: 'How do you price your work?',
    a: 'We offer fixed-scope project pricing as well as monthly retainers for dedicated teams. After understanding your goals we provide a transparent estimate — no hidden fees. Budgets typically range from small MVPs to enterprise engagements.',
  },
  {
    q: 'Will I own the code and IP?',
    a: 'Absolutely. You own 100% of the code, designs, and intellectual property we produce. Everything is documented and handed over so your team can maintain and extend it.',
  },
];
