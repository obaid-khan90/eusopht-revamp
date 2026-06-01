export interface WorkProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export interface WorkGroup {
  key: string;
  label: string;
  blurb: string;
  projects: WorkProject[];
}

// Projects grouped by solution type — mirrors the 4 service pillars.
export const workGroups: WorkGroup[] = [
  {
    key: 'ai',
    label: 'AI Solutions',
    blurb: 'Intelligent products powered by agents, LLMs, and computer vision.',
    projects: [
      {
        title: 'AiBuddy — Social Media Blast',
        category: 'AI Application',
        description: 'AI-powered social media platform that automates content creation and publishing across channels.',
        tags: ['React', 'TypeScript', 'OpenAI'],
        image: '/AIBuddyf.png',
        href: '/portfolio/social-media-blast',
      },
      {
        title: 'Vizii',
        category: 'AI Analytics',
        description: 'Connects to your cloud accounting and turns raw financials into clear, AI-assisted dashboards.',
        tags: ['React', 'Node.js', 'Chart.js'],
        image: '/vizii.png',
        href: '/portfolio/vizii',
      },
      {
        title: 'evalu',
        category: 'AI Platform',
        description: 'Makes evaluations more accessible and impactful with automated scoring, feedback, and reporting.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        image: '/evalu.png',
        href: '/portfolio/evalu',
      },
    ],
  },
  {
    key: 'automation',
    label: 'Automation & Integrations',
    blurb: 'Workflows and integrations that connect your stack and remove manual work.',
    projects: [
      {
        title: 'Postmerica',
        category: 'Fulfillment Automation',
        description: 'Automated, multi-carrier shipping label generation and order fulfillment for eCommerce merchants.',
        tags: ['React', 'Node.js', 'Stripe'],
        image: '/Postmerica.png',
        href: '/portfolio/postmerica',
      },
      {
        title: 'Null Ship',
        category: 'Logistics Automation',
        description: 'Order management with discounted, on-time shipping and multi-carrier integration for retailers.',
        tags: ['Next.js', 'Node.js', 'Stripe'],
        image: '/null-ship.png',
        href: '/portfolio/nullship',
      },
    ],
  },
  {
    key: 'web-mobile',
    label: 'Web & Mobile Apps',
    blurb: 'End-to-end web and mobile products built to scale, from MVP to enterprise.',
    projects: [
      {
        title: 'AutoFlow',
        category: 'Web Application',
        description: 'Car dealership web & app portal with inventory management, lead capture, and customer dashboard.',
        tags: ['Laravel', 'Vue.js'],
        image: '/autoflow1.png',
        href: '/portfolio/autoflow',
      },
      {
        title: 'MidwifeX',
        category: 'Healthcare',
        description: 'Pregnancy & midwifery companion — patient intake, scheduling, and clinical notes in one system.',
        tags: ['Flutter', 'Firebase'],
        image: '/midwifex.png',
        href: '/portfolio/midwifex',
      },
      {
        title: 'Mensa Pay',
        category: 'Fintech',
        description: 'Digital payments and wallet platform with KYC, multi-currency support, and merchant onboarding.',
        tags: ['Flutter', 'Node.js'],
        image: '/mensa.png',
        href: '/portfolio/mensa-pay',
      },
    ],
  },
];
