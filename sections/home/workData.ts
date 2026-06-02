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
      {
        title: 'GuideWire AID',
        category: 'AI Assistant',
        description: 'A cross-platform mobile assistant that delivers structured guidance and smart navigation to users.',
        tags: ['Flutter', 'Firebase'],
        image: '/guidewire.png',
        href: '/portfolio/guidewire-aid',
      },
      {
        title: 'Learning Cert',
        category: 'AI Learning',
        description: 'Certification & training platform with course management, progress tracking, and analytics.',
        tags: ['Nuxt', 'Laravel'],
        image: '/LearningCert.png',
        href: '/portfolio/learning-cert',
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
      {
        title: 'OrganAise',
        category: 'Workflow Automation',
        description: 'Streamlines operations by automating routine workflows and connecting the tools teams use daily.',
        tags: ['React', 'Node.js'],
        image: '/organaise.png',
        href: '/portfolio/organaise',
      },
      {
        title: 'Autosmart Australia',
        category: 'eCommerce Automation',
        description: 'Catalogue, ordering, and back-office automation for Australia\'s largest vehicle-care supplier.',
        tags: ['Laravel', 'Vue.js', 'MySQL'],
        image: '/autosmart.png',
        href: '/portfolio/autosmart-australia',
      },
      {
        title: 'Canezo',
        category: 'Business Automation',
        description: 'Automates day-to-day business operations into a single streamlined, connected workflow.',
        tags: ['React', 'Node.js'],
        image: '/canezo.png',
        href: '/portfolio/canezo',
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
      {
        title: 'CricketMood',
        category: 'Mobile App',
        description: 'Real-time cricket companion with live scores, ball-by-ball commentary, and player stats.',
        tags: ['Flutter', 'Firebase'],
        image: '/cricketmood1.png',
        href: '/portfolio/cricketmood',
      },
      {
        title: 'WeBees',
        category: 'Mobile App',
        description: 'A community and engagement mobile app built for a smooth, fast cross-platform experience.',
        tags: ['Flutter', 'Firebase'],
        image: '/webees.png',
        href: '/portfolio/webees',
      },
    ],
  },
];
