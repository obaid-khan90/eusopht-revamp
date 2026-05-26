export type BlogCategory =
  | 'Company'
  | 'AI'
  | 'Automation'
  | 'Engineering'
  | 'Product'
  | 'FinTech'
  | 'Healthcare';

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  /** ISO date */
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  image: string;
  /** Body paragraphs (dummy until CMS) */
  body: string[];
}

export const categories: Array<'All' | BlogCategory> = [
  'All',
  'Company',
  'AI',
  'Automation',
  'Engineering',
  'Product',
  'FinTech',
  'Healthcare',
];

export const posts: BlogPost[] = [
  {
    slug: 'computer-vision-ai-services',
    title: 'Computer Vision AI Services: Where Visual Data Becomes Decisions',
    category: 'AI',
    excerpt:
      'How modern computer vision turns raw images and video into reliable, automated business decisions — and where it pays off fastest.',
    date: '2026-05-25',
    readTime: '6 min read',
    views: 187,
    tags: ['AI', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80',
    body: [
      'Computer vision has quietly moved from research labs into everyday operations. Quality inspection, document understanding, inventory counting, and safety monitoring are now routinely handled by models that see and interpret visual data faster and more consistently than people can.',
      'The biggest wins come from narrow, high-volume tasks: spotting defects on a production line, extracting fields from scanned documents, or flagging anomalies in security footage. These are repetitive, well-defined problems where a model can deliver reliable accuracy and free your team for higher-value work.',
      'At Eusopht, we start by identifying where visual data is already creating bottlenecks, then build focused vision pipelines that integrate with your existing systems. The goal is never a flashy demo — it’s a dependable capability that runs in production.',
    ],
  },
  {
    slug: 'ai-assistant-development',
    title: 'AI Assistant Development: What It Takes to Build a Reliable One',
    category: 'AI',
    excerpt:
      'Building an AI assistant that users actually trust takes more than wiring up an LLM. Here’s what production-grade really involves.',
    date: '2026-05-21',
    readTime: '8 min read',
    views: 147,
    tags: ['AI', 'LLM'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
    body: [
      'Connecting an LLM to a chat box is the easy part. The hard part is making an assistant that stays accurate, on-brand, and safe across thousands of real conversations.',
      'That means grounding responses in your data with retrieval, constraining behaviour with careful prompting and guardrails, and building evaluation so you can measure quality as you iterate. Without these, an assistant drifts and erodes trust.',
      'We design assistants as products, not experiments — with monitoring, fallback handling, and a clear scope — so they deliver consistent value instead of unpredictable answers.',
    ],
  },
  {
    slug: 'ai-automation-services',
    title: 'AI Automation Services: How Companies Move from Manual to Autonomous',
    category: 'Automation',
    excerpt:
      'A practical look at how businesses replace repetitive manual work with reliable, AI-driven automation — without breaking what works.',
    date: '2026-05-19',
    readTime: '7 min read',
    views: 199,
    tags: ['Automation', 'AI'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    body: [
      'Most companies don’t need a moonshot — they need their repetitive, error-prone processes to simply run themselves. AI automation makes that possible by combining deterministic workflows with AI judgement where flexibility is needed.',
      'The safest path is incremental: automate one well-understood process end to end, prove the value, then expand. Each automation should be observable and auditable so the team trusts it.',
      'Done right, automation doesn’t replace people — it removes the busywork so they can focus on the decisions and relationships that actually move the business.',
    ],
  },
  {
    slug: 'ai-recommendation-algorithm',
    title: 'AI Recommendation Algorithm: The Hidden Engine Behind Engagement',
    category: 'AI',
    excerpt:
      'Recommendation systems quietly drive retention and revenue. Here’s how they work and how to build one that fits your data.',
    date: '2026-05-18',
    readTime: '6 min read',
    views: 218,
    tags: ['AI', 'Data'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    body: [
      'From the products you see to the content you scroll, recommendation systems shape a huge share of digital experiences. They turn behavioural data into relevant, personalised suggestions that keep users engaged.',
      'A good recommender balances relevance with discovery, handles cold-start gracefully, and improves as it learns. The right approach depends entirely on your data volume, signals, and goals.',
      'We build recommendation pipelines tailored to your context — from simple, explainable models to advanced approaches — always grounded in measurable lift.',
    ],
  },
  {
    slug: 'ai-voice-assistance-in-business',
    title: 'AI Voice Assistance in Business: Why Voice Is the Next Interface',
    category: 'AI',
    excerpt:
      'Voice interfaces are moving into customer service, operations, and accessibility. Here’s where they create real value.',
    date: '2026-05-14',
    readTime: '5 min read',
    views: 195,
    tags: ['AI', 'Voice'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=900&q=80',
    body: [
      'Speech recognition and synthesis have crossed a quality threshold that makes voice genuinely useful — not just a novelty. Businesses now use it for hands-free workflows, accessible interfaces, and natural customer interactions.',
      'The key is pairing accurate transcription with intent understanding and clean integration into existing systems, so a spoken request actually gets something done.',
      'We build voice and multimodal experiences with Whisper and modern TTS that feel natural and fit into the channels your users already use.',
    ],
  },
  {
    slug: 'ai-powered-solutions-cx',
    title: 'AI-Powered Solutions for Customer Experience, Operations, and Growth',
    category: 'Company',
    excerpt:
      'How AI is reshaping three core areas of business — and how to adopt it pragmatically rather than chasing hype.',
    date: '2026-05-05',
    readTime: '7 min read',
    views: 233,
    tags: ['Company', 'AI'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    body: [
      'AI’s impact shows up most clearly in three places: customer experience, internal operations, and growth. Each benefits from different techniques, but the principle is the same — apply AI where it removes friction or unlocks insight.',
      'The companies that win aren’t the ones with the flashiest models; they’re the ones that pick the right problems and ship reliable solutions that fit their workflows.',
      'Our approach is pragmatic: identify high-impact use cases, build production-grade systems, and measure outcomes — so AI becomes a durable advantage, not a science project.',
    ],
  },
  {
    slug: 'scaling-engineering-teams',
    title: 'Scaling Engineering Capacity Without Adding Long-Term Risk',
    category: 'Engineering',
    excerpt:
      'When demand spikes, hiring is slow and risky. Here’s how flexible engineering models let you scale safely.',
    date: '2026-04-28',
    readTime: '6 min read',
    views: 164,
    tags: ['Engineering', 'Teams'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    body: [
      'Roadmaps rarely match hiring timelines. When you need capacity now, a months-long recruitment cycle is a liability — and an over-hire is an even bigger one.',
      'Staff augmentation and dedicated teams let you flex capacity up for a push and down when it’s done, with vetted engineers who embed into your process from day one.',
      'We help teams scale this way without the overhead, so deadlines are met without long-term commitments that outlast the need.',
    ],
  },
  {
    slug: 'mvp-without-tech-debt',
    title: 'How to Scope an MVP That Doesn’t Become Tech Debt',
    category: 'Product',
    excerpt:
      'Shipping fast and building right aren’t opposites. A disciplined MVP scope lets you do both.',
    date: '2026-04-20',
    readTime: '7 min read',
    views: 142,
    tags: ['Product', 'MVP'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    body: [
      'An MVP is about learning, not cutting corners. The trap is shipping something so rushed that it has to be thrown away the moment it succeeds.',
      'The fix is disciplined scope: build the smallest thing that validates the core hypothesis, on an architecture that can grow if the bet pays off.',
      'We help founders draw that line — fast enough to learn, solid enough to scale — so the MVP becomes a foundation, not a liability.',
    ],
  },
  {
    slug: 'fintech-payments-compliance',
    title: 'Building FinTech Products That Are Fast and Compliant',
    category: 'FinTech',
    excerpt:
      'Speed and regulatory rigor can coexist. Here’s how to build payment and wallet products that satisfy both.',
    date: '2026-04-12',
    readTime: '6 min read',
    views: 158,
    tags: ['FinTech', 'Security'],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80',
    body: [
      'FinTech lives at the intersection of user expectations and regulation. Customers want instant, frictionless experiences; regulators want airtight security and compliance.',
      'Meeting both means designing for KYC, secure data handling, and auditability from the start — not bolting them on later. The architecture has to assume scrutiny.',
      'We build payment, wallet, and lending products that feel effortless to users while standing up to the compliance and security demands of finance.',
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
