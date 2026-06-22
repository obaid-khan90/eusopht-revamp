export type BlogCategory =
  | 'Company'
  | 'AI'
  | 'Automation'
  | 'Engineering'
  | 'Product'
  | 'FinTech'
  | 'Healthcare'
  | 'Web Development';

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
  'Web Development',
];

/**
 * Seed data — the original hardcoded posts. This is no longer read by the
 * site at runtime; it's the source for `db/seed.ts`, which loads these rows
 * into Postgres. The site reads posts via `db/blog.ts` instead.
 */
export const seedPosts: BlogPost[] = [
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
  // ── Legacy posts (old site, preserved for SEO) ──────────────────────────
  {
    slug: '10-best-practices-to-follow-for-rest-api-development',
    title: '10 Best Practices to Follow for REST API Development',
    category: 'Engineering',
    excerpt: 'Building a REST API that scales, stays maintainable, and keeps developers happy takes more than just writing endpoints. Here are ten practices we follow on every project.',
    date: '2023-09-12',
    readTime: '8 min read',
    views: 412,
    tags: ['Engineering', 'API', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    body: [
      'REST APIs are the connective tissue of modern software. Done well, they are predictable, easy to consume, and a pleasure to iterate on. Done poorly, they become a source of bugs, confusion, and rework.',
      'The fundamentals matter most: use nouns for resources, HTTP methods for actions, and consistent status codes. Versioning from day one prevents painful breaking changes later. Pagination, filtering, and sorting should be standard, not afterthoughts.',
      'Authentication and rate limiting are non-negotiable for production APIs. Document everything — a well-maintained OpenAPI spec saves hours of back-and-forth with API consumers. Finally, treat errors as first-class citizens: a descriptive error response is worth more than a cryptic 500.',
    ],
  },
  {
    slug: 'benefits-of-using-cloud-services-for-your-business',
    title: 'Benefits of Using Cloud Services for Your Business',
    category: 'Engineering',
    excerpt: 'Cloud services have shifted from a competitive advantage to a business necessity. Here is why every growing company should be thinking cloud-first.',
    date: '2023-08-20',
    readTime: '6 min read',
    views: 298,
    tags: ['Engineering', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    body: [
      'The cloud has fundamentally changed how businesses build and operate software. What used to require significant capital investment in servers and infrastructure is now available on demand, at the scale you need, when you need it.',
      'For growing businesses, the key benefits are speed and flexibility. You can go from idea to production in days instead of months, scale up instantly when demand spikes, and scale down to control costs during quiet periods. No over-provisioning, no waste.',
      'Beyond infrastructure, cloud platforms offer managed databases, AI services, authentication, and monitoring out of the box. Leveraging these means your team focuses on what makes your product unique — not reinventing plumbing.',
    ],
  },
  {
    slug: 'excelling-in-it-unveiling-eusophts-approach-to-conducting-business-affairs',
    title: "Excelling in IT: Unveiling Eusopht's Approach to Conducting Business Affairs",
    category: 'Company',
    excerpt: "What sets Eusopht apart is not just the technology we deliver — it's how we work. A look at the principles that guide every engagement we take on.",
    date: '2023-07-15',
    readTime: '5 min read',
    views: 187,
    tags: ['Company'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    body: [
      'Since 2017, Eusopht has delivered software for clients across four continents. The projects vary — web platforms, mobile apps, AI integrations, automation workflows — but the way we work stays consistent.',
      'We prioritise communication above everything else. Clients always know where their project stands. We ask hard questions early, flag risks honestly, and push back when a decision might hurt the end product.',
      'Our goal is not to be a vendor you manage, but a technical partner you trust. That means caring about outcomes — not just deliverables — and staying engaged until the product is genuinely working for the business.',
    ],
  },
  {
    slug: 'revolutionizing-business-efficiency-microsoft-dynamics-365-introduces-ai-copilot-in-crm-and-supply-chain',
    title: 'Revolutionizing Business Efficiency: Microsoft Dynamics 365 Introduces AI Copilot in CRM and Supply Chain',
    category: 'AI',
    excerpt: "Microsoft's AI Copilot integration into Dynamics 365 marks a meaningful shift in how businesses interact with CRM and supply chain data. Here's what it means in practice.",
    date: '2023-06-28',
    readTime: '7 min read',
    views: 324,
    tags: ['AI', 'Automation'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    body: [
      'Microsoft embedding AI Copilot across Dynamics 365 is not a feature release — it is a rethinking of how people interact with enterprise software. Instead of navigating menus and running reports, users can describe what they need in plain language and get actionable answers instantly.',
      'For CRM, this means sales teams can get deal summaries, draft emails, and surface next-best-actions without switching context. For supply chain, it means faster identification of bottlenecks and demand signals that would previously take an analyst hours to surface.',
      "The practical impact depends on data quality and adoption. Businesses that have invested in clean, structured data will see the biggest wins. Those that haven't will need to tackle that first — AI amplifies what's already there, good or bad.",
    ],
  },
  {
    slug: 'the-crucial-significance-of-software-quality-assurance-unlocking-success-in-the-digital-era',
    title: 'The Crucial Significance of Software Quality Assurance: Unlocking Success in the Digital Era',
    category: 'Engineering',
    excerpt: 'Quality assurance is not a final gate before release — it is a discipline woven through the entire development process. Here is why it matters more than ever.',
    date: '2023-05-18',
    readTime: '6 min read',
    views: 276,
    tags: ['Engineering', 'QA'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80',
    body: [
      'In a world where a single bug can cost a company its reputation overnight, software quality assurance is not optional — it is foundational. Users expect software to work, every time, on every device. Meeting that expectation consistently requires deliberate QA practice.',
      'The most effective QA is shift-left: testing early and continuously, not just at the end of a sprint. Automated test suites catch regressions instantly. Manual exploratory testing catches the edge cases automation misses. Both are essential.',
      'At Eusopht, QA is built into every project — not handed off to a separate team at the end. Engineers write tests as they build, and every release goes through structured validation before it reaches production.',
    ],
  },
  {
    slug: 'the-rise-of-flutter-revolutionizing-cross-platform-app-development',
    title: 'The Rise of Flutter: Revolutionizing Cross-Platform App Development',
    category: 'Engineering',
    excerpt: "Flutter has changed the economics of mobile development. Here's why we recommend it for most cross-platform projects and where it truly shines.",
    date: '2023-04-10',
    readTime: '7 min read',
    views: 389,
    tags: ['Engineering', 'Mobile', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    body: [
      "Flutter has quietly become one of the most practical choices for mobile development. Write once, run on iOS and Android — with near-native performance and a UI that looks exactly as designed on both platforms. That's a compelling value proposition.",
      'The widget system gives developers full control over every pixel, which is a meaningful advantage over frameworks that rely on native components and risk platform inconsistencies. Hot reload makes iteration fast, and the growing ecosystem means most integration needs are covered.',
      "We've shipped multiple Flutter apps to production — CricketMood, MidwifeX, Mensa Pay — and it consistently delivers. For most cross-platform mobile projects, Flutter is our default recommendation.",
    ],
  },
  {
    slug: 'top-5-ai-use-cases-for-software-development',
    title: 'Top 5 AI Use Cases for Software Development',
    category: 'AI',
    excerpt: 'AI is reshaping how software gets built — not just what software does. Here are the five use cases delivering the most tangible value right now.',
    date: '2023-03-22',
    readTime: '6 min read',
    views: 451,
    tags: ['AI', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
    body: [
      'AI in software development is moving fast, and the signal is starting to separate from the noise. Five use cases stand out for delivering real, measurable value: code generation and completion, automated testing, code review assistance, documentation generation, and intelligent debugging.',
      'Code generation tools like GitHub Copilot have moved from novelty to standard practice on high-performing teams. Not because they replace engineers, but because they eliminate the tedious scaffolding so engineers can focus on the decisions that require real judgment.',
      'Automated testing and code review are where AI creates the most leverage for quality. A model that catches common bugs and flags security issues on every pull request is like having a tireless senior reviewer — it raises the floor for the whole team.',
    ],
  },
  {
    slug: 'unlocking-efficiency-and-growth-exploring-process-re-engineering',
    title: 'Unlocking Efficiency and Growth: Exploring Process Re-Engineering',
    category: 'Automation',
    excerpt: 'Process re-engineering is not about small optimizations — it is about rethinking how work flows through your business and removing what should never have been there.',
    date: '2023-02-14',
    readTime: '7 min read',
    views: 263,
    tags: ['Automation', 'Company'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    body: [
      'Most businesses accumulate processes the way old houses accumulate walls — layer by layer, each one made sense at the time, but the whole structure eventually stops serving the people living in it. Process re-engineering asks a harder question: if we were starting from scratch, would we do this at all?',
      'The answer is often no. Approval chains that made sense at 20 people create bottlenecks at 200. Manual data entry that was tolerable once becomes a full-time job. Reports that took hours to compile are now possible in seconds with the right tooling.',
      'The goal of re-engineering is not to automate bad processes — it is to eliminate unnecessary ones and rebuild the rest with modern tools. Done well, it unlocks capacity, reduces errors, and makes growth sustainable.',
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
