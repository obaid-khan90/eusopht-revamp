export type Platform = 'web' | 'ios' | 'android';
export type ProjectCategory = 'Web Application' | 'Mobile Applications';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  results: string;
  platforms: Platform[];
  image: string;
  imageDesktop?: string;
  platformLinks?: Partial<Record<Platform, string>>;
}

/* tech name → simpleicons slug + brand hex. Unmapped names fall back
   to TechIcon's letter badge automatically. */
export const TECH_META: Record<string, { icon: string; color: string }> = {
  'Laravel': { icon: 'laravel', color: 'FF2D20' },
  'Vue.js': { icon: 'vuedotjs', color: '4FC08D' },
  'MySQL': { icon: 'mysql', color: '4479A1' },
  'Tailwind CSS': { icon: 'tailwindcss', color: '06B6D4' },
  'Flutter': { icon: 'flutter', color: '02569B' },
  'Firebase': { icon: 'firebase', color: 'DD2C00' },
  'React': { icon: 'react', color: '61DAFB' },
  'React Native': { icon: 'react', color: '61DAFB' },
  'Node.js': { icon: 'nodedotjs', color: '5FA04E' },
  'PostgreSQL': { icon: 'postgresql', color: '4169E1' },
  'Chart.js': { icon: 'chartdotjs', color: 'FF6384' },
  'Nuxt': { icon: 'nuxt', color: '00DC82' },
  'Stripe': { icon: 'stripe', color: '635BFF' },
  'FastAPI': { icon: 'fastapi', color: '009688' },
  'DigitalOcean': { icon: 'digitalocean', color: '0080FF' },
  'OpenAI': { icon: 'openai', color: '412991' },
  'TypeScript': { icon: 'typescript', color: '3178C6' },
  'Next.js': { icon: 'nextdotjs', color: '000000' },
  'MongoDB': { icon: 'mongodb', color: '47A248' },
  'Swift': { icon: 'swift', color: 'F05138' },
};

export const projects: Project[] = [
  {
    slug: 'autoflow',
    title: 'AutoFlow',
    category: 'Web Application',
    description: 'Car Dealership Web & App Portal developed by Eusopht.',
    longDescription:
      'AutoFlow is a unified web and mobile platform tailored for car dealerships to digitize inventory, automate sales processes, and enhance customer engagement. It offers real-time vehicle listings, test drive bookings, digital document uploads, and smart lead management. Designed for both dealers and customers, AutoFlow ensures a seamless experience across devices with powerful dashboards, live chat, and analytics-driven insights.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    features: [
      'Search and filter cars by price, model, mileage, and more',
      'Book test drives and upload documents digitally',
      'Live inventory management with dealer admin dashboard',
      'Role-based dashboards for Admins, Dealers, and Customers',
      'In-app messaging with real-time lead capture',
      'Push notifications for offers, alerts, and updates',
      'Analytics dashboard to track user activity and conversions',
    ],
    results:
      'Streamlines dealership operations and improves customer experience, leading to faster sales, better lead management, and higher customer satisfaction.',
    platforms: ['web'],
    image: '/autoflow1.png',
    imageDesktop: '/autoflow2.png',
  },
  {
    slug: 'cricketmood',
    title: 'CricketMood',
    category: 'Mobile Applications',
    description: 'Follow live cricket scores and ball-by-ball commentary.',
    longDescription:
      'CricketMood is a real-time cricket companion that delivers live scores, ball-by-ball commentary, match schedules, and player statistics. Built for fans who want instant updates, it combines a fast, responsive interface with rich match data and personalised notifications for the teams and tournaments they follow.',
    technologies: ['Flutter', 'Firebase', 'REST APIs'],
    features: [
      'Live scores updated ball-by-ball',
      'Detailed match commentary and timelines',
      'Upcoming fixtures and tournament schedules',
      'Player and team statistics',
      'Push notifications for wickets, milestones, and results',
    ],
    results:
      'Keeps fans engaged with instant, reliable match updates and a smooth, fast experience across devices.',
    platforms: ['ios', 'android'],
    image: '/cricketmood1.png',
  },
  {
    slug: 'vizii',
    title: 'Vizii',
    category: 'Web Application',
    description: 'A web-based app that compiles and visualises analytics from your cloud accounting software.',
    longDescription:
      'Vizii is a web-based analytics platform that connects to your cloud accounting software and turns raw financial data into clear, actionable dashboards. It compiles revenue, expenses, and cash-flow metrics into intuitive visualisations, helping business owners and accountants understand performance at a glance and make better decisions.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Connect and sync with cloud accounting platforms',
      'Automated financial dashboards and reports',
      'Revenue, expense, and cash-flow visualisations',
      'Customisable KPIs and date ranges',
      'Shareable, export-ready reports',
    ],
    results:
      'Gives finance teams instant visibility into performance, replacing manual spreadsheet reporting with live, visual insights.',
    platforms: ['web'],
    image: '/vizii.png',
    imageDesktop: '/viziii.png',
    platformLinks: { web: 'https://vizii.com' },
  },
  {
    slug: 'learning-cert',
    title: 'Learning Cert',
    category: 'Web Application',
    description: 'A custom-built certification & training platform for training providers.',
    longDescription:
      'Learning Cert is a custom-built certification and training platform for corporate training providers. It supports course creation and management, learner enrollment, progress tracking, and certificate issuance — all wrapped in a clean, branded experience with analytics that help providers understand engagement and outcomes.',
    technologies: ['Nuxt', 'Laravel', 'MySQL'],
    features: [
      'Course creation and content management',
      'Learner enrollment and progress tracking',
      'Automated certificate generation',
      'Provider analytics and reporting',
      'Branded, responsive learner experience',
    ],
    results:
      'Enables training providers to run certification programs end-to-end, improving learner engagement and administrative efficiency.',
    platforms: ['web'],
    image: '/LearningCert.png',
    platformLinks: { web: 'https://learningcert.com' },
  },
  {
    slug: 'postmerica',
    title: 'Postmerica',
    category: 'Web Application',
    description: 'A powerful label generation and fulfillment solution for eCommerce store owners.',
    longDescription:
      'Postmerica is a fulfillment web app built for eCommerce store owners who need fast, reliable shipping label generation and order fulfillment. It centralises order management, automates label creation across carriers, and helps merchants ship on time while keeping shipping costs under control.',
    technologies: ['React', 'Node.js', 'Stripe', 'ShipStation API'],
    features: [
      'Bulk shipping label generation',
      'Multi-carrier rate comparison',
      'Centralised order and fulfillment dashboard',
      'Discounted shipping rates',
      'Order tracking and status updates',
    ],
    results:
      'Speeds up fulfillment and reduces shipping costs for eCommerce merchants through automated, multi-carrier label generation.',
    platforms: ['web'],
    image: '/Postmerica.png',
    imageDesktop: '/Postmerica1.png',
    platformLinks: { web: 'https://postmerica.com' },
  },
  {
    slug: 'midwifex',
    title: 'MidwifeX®',
    category: 'Mobile Applications',
    description: 'A comprehensive pregnancy and midwifery companion for parents and healthcare professionals.',
    longDescription:
      'MidwifeX® is a comprehensive pregnancy and midwifery companion designed to support expectant parents and healthcare professionals throughout the entire pregnancy journey. The platform delivers expert guidance, daily health updates, educational resources, and smart planning tools, helping users stay informed, confident, and supported at every stage of pregnancy. MidwifeX® bridges the gap between modern technology and compassionate healthcare, offering a reliable digital companion for safe, informed, and well-supported pregnancy care.',
    technologies: ['Flutter', 'FastAPI', 'PostgreSQL', 'Firebase', 'DigitalOcean'],
    features: [
      'Daily pregnancy cycle updates with personalized insights',
      'Latest pregnancy articles and maternal health tips',
      'AI-powered chat for instant guidance and questions',
      'Online consultation booking with certified midwives',
      'Subscription plans for unlimited guidance and consultations',
      'Centralized dashboard to track progress, appointments, and tasks',
      'Secure, privacy-first data handling',
      'Google Pay & Apple Pay for subscriptions',
      'Firebase notifications and Zoom video consultations',
    ],
    results:
      'Empowers users with trusted medical insights, improves pregnancy planning and tracking, and enables seamless access to professional midwifery support through digital consultations and AI-assisted guidance.',
    platforms: ['ios', 'android'],
    image: '/midwifex_mobile.png',
    imageDesktop: '/midwifex_desktop.png',
  },
  {
    slug: 'social-media-blast',
    title: 'Social Media Blast',
    category: 'Web Application',
    description: 'An AI-powered social media management platform that automates content creation and publishing.',
    longDescription:
      'Social Media Blast (AiBuddy) is an AI-powered social media management platform designed to simplify and automate content creation and publishing across multiple platforms. It helps teams plan, generate, schedule, and publish posts from a single dashboard — using AI to draft on-brand content and optimise posting for engagement.',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Node.js'],
    features: [
      'AI-assisted content generation',
      'Multi-platform scheduling and publishing',
      'Unified content calendar',
      'Engagement analytics',
      'Team collaboration and approvals',
    ],
    results:
      'Cuts content production time dramatically while keeping posting consistent and on-brand across channels.',
    platforms: ['web'],
    image: '/AIBuddyf.png',
    platformLinks: { web: 'https://aibuddy.pro' },
  },
  {
    slug: 'canezo',
    title: 'Canezo',
    category: 'Web Application',
    description: 'Crafted with care, sweetened by nature — developed by Eusopht.',
    longDescription:
      'Canezo is a polished eCommerce experience for a natural confectionery brand, built to showcase products beautifully and convert browsers into buyers. It pairs an elegant storefront with smooth product discovery, secure checkout, and an admin dashboard for managing catalogue, orders, and promotions.',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    features: [
      'Elegant, brand-led storefront',
      'Product catalogue with rich detail pages',
      'Secure checkout and payments',
      'Order and inventory management',
      'Promotions and discount codes',
    ],
    results:
      'Delivers a premium online shopping experience that strengthens the brand and drives online sales.',
    platforms: ['web'],
    image: '/canezo.png',
    imageDesktop: '/canezo1.png',
    platformLinks: { web: 'https://canezo.com' },
  },
  {
    slug: 'meu-exotico',
    title: 'Meu Exótico',
    category: 'Mobile Applications',
    description: 'Track development, events, documents, reports, and notifications for your pets.',
    longDescription:
      'Meu Exótico is a pet management companion that lets owners track the development, events, documents, and health reports of their exotic pets in one place. With reminders, record-keeping, and notifications, it helps owners stay on top of their pets’ care and milestones.',
    technologies: ['Flutter', 'Firebase'],
    features: [
      'Pet profiles with development tracking',
      'Event and appointment scheduling',
      'Document and report storage',
      'Care reminders and notifications',
      'Multi-pet management',
    ],
    results:
      'Helps owners give better, more organised care to their pets with centralised records and timely reminders.',
    platforms: ['ios', 'android'],
    image: '/meu-exotico.png',
    imageDesktop: '/meu-exotico1.png',
  },
  {
    slug: 'uandi-wallet',
    title: 'U&I Wallet',
    category: 'Mobile Applications',
    description: 'Exclusive loyalty and employee discounts with the U&I wallet app.',
    longDescription:
      'U&I Wallet is a digital loyalty and discounts app that gives users access to exclusive employee and member benefits. It stores offers, loyalty cards, and discount codes in one secure wallet, making it effortless to discover and redeem savings.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    features: [
      'Digital loyalty and discount wallet',
      'Exclusive member and employee offers',
      'In-store and online redemption',
      'Personalised deal recommendations',
      'Secure account management',
    ],
    results:
      'Increases member engagement and redemption rates by putting exclusive savings in one convenient place.',
    platforms: ['ios', 'android'],
    image: '/mensa.png',
  },
  {
    slug: 'nullship',
    title: 'Nullship',
    category: 'Web Application',
    description: 'Order management with discounted, on-time shipping for retailers and businesses.',
    longDescription:
      'Nullship is a web app that helps retailers and businesses streamline order management by shipping packages on time and saving costs through discounted shipping services. It centralises orders, automates label creation, and surfaces the best rates across carriers so businesses ship efficiently.',
    technologies: ['Next.js', 'Node.js', 'Stripe', 'Carrier APIs'],
    features: [
      'Centralised order management',
      'Discounted multi-carrier shipping',
      'Automated label generation',
      'Rate comparison and selection',
      'Shipment tracking',
    ],
    results:
      'Reduces shipping costs and improves delivery reliability for retailers through discounted, automated fulfillment.',
    platforms: ['web'],
    image: '/nullship.png',
    imageDesktop: '/null-ship.png',
    platformLinks: { web: 'https://nullship.gg' },
  },
  {
    slug: 'autosmart-australia',
    title: 'Autosmart Australia',
    category: 'Web Application',
    description: "Australia's largest supplier of vehicle cleaning products.",
    longDescription:
      'Autosmart Australia is the eCommerce home of Australia’s largest supplier of vehicle cleaning products. The platform delivers a smooth catalogue and ordering experience for trade and retail customers, with robust product management, secure checkout, and an admin back-office.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    features: [
      'Comprehensive product catalogue',
      'Trade and retail ordering',
      'Secure checkout and payments',
      'Inventory and order management',
      'Customer accounts and reordering',
    ],
    results:
      'Supports a leading supplier’s online sales with a reliable, scalable storefront and streamlined order management.',
    platforms: ['web'],
    image: '/autosmart.png',
    imageDesktop: '/autosmart1.png',
    platformLinks: { web: 'https://autosmartaustralia.com.au' },
  },
  {
    slug: 'evalu',
    title: 'evalu',
    category: 'Web Application',
    description: 'Evaluations made more accessible and impactful through technology.',
    longDescription:
      'evalu is a platform that makes evaluations more accessible and impactful by bringing assessments, feedback, and reporting into one streamlined digital workflow. It helps organisations design, run, and analyse evaluations with less friction and clearer outcomes.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: [
      'Configurable evaluation templates',
      'Automated scoring and feedback',
      'Reporting and analytics',
      'Role-based access',
      'Exportable results',
    ],
    results:
      'Makes evaluation processes faster and more insightful, improving the quality and consistency of assessments.',
    platforms: ['web'],
    image: '/evalu.png',
    imageDesktop: '/evalu1.png',
    platformLinks: { web: 'https://evalu.ca' },
  },
  {
    slug: 'vital-group',
    title: 'Vital Group',
    category: 'Web Application',
    description: 'A leading electronic security company with innovative business security solutions.',
    longDescription:
      'Vital Group is a leading electronic security company offering innovative solutions to enhance business security. Eusopht delivered a modern, trust-building web presence that showcases their services, communicates expertise, and makes it easy for prospective clients to get in touch.',
    technologies: ['Next.js', 'Tailwind CSS'],
    features: [
      'Modern, trust-focused website',
      'Service and solution showcases',
      'Lead capture and contact flows',
      'Responsive, fast experience',
      'SEO-optimised content',
    ],
    results:
      'Strengthens the brand’s credibility online and improves lead generation through a polished, conversion-focused site.',
    platforms: ['web'],
    image: '/vital.png',
    platformLinks: { web: 'https://vitalgroup.com.pk' },
  },
  {
    slug: 'guidewire-aid',
    title: 'GuideWire AID',
    category: 'Mobile Applications',
    description: 'A comprehensive mobile application available for Android and iOS.',
    longDescription:
      'GuideWire AID is a comprehensive mobile application available for Android and iOS, designed to deliver guidance and support to its users through an intuitive, accessible interface. It combines structured content with smart navigation to help users find what they need quickly.',
    technologies: ['Flutter', 'Firebase'],
    features: [
      'Cross-platform iOS and Android app',
      'Structured guidance and resources',
      'Intuitive navigation and search',
      'Push notifications',
      'Offline-friendly content',
    ],
    results:
      'Provides users with reliable, on-the-go guidance through a clean and accessible mobile experience.',
    platforms: ['ios', 'android'],
    image: '/guidewire.png',
    imageDesktop: '/guidewire1.png',
  },
  {
    slug: 'slym-yoga',
    title: 'Slym Yoga Trial',
    category: 'Mobile Applications',
    description: 'Free yoga trials and workout guides.',
    longDescription:
      'SlymYoga is a mobile application offering free yoga trials and workout guides. It delivers guided sessions, progress tracking, and curated routines to help users build a consistent practice, whether they’re beginners or experienced practitioners.',
    technologies: ['React Native', 'Firebase'],
    features: [
      'Guided yoga sessions and trials',
      'Curated workout routines',
      'Progress tracking',
      'Reminders and streaks',
      'Beginner-friendly onboarding',
    ],
    results:
      'Helps users start and maintain a yoga practice with accessible guided content and progress tracking.',
    platforms: ['ios', 'android'],
    image: '/slym.png',
    imageDesktop: '/slym1.png',
  },
  {
    slug: 'organaise',
    title: 'OrganAise',
    category: 'Mobile Applications',
    description: 'Simplifying event scheduling with AI-powered features.',
    longDescription:
      'OrganAise simplifies event scheduling with AI-powered features that take the friction out of planning. It helps users coordinate events, manage tasks, and stay organised with smart suggestions and a clean, intuitive interface.',
    technologies: ['Flutter', 'OpenAI', 'Firebase'],
    features: [
      'AI-assisted event scheduling',
      'Task and reminder management',
      'Smart planning suggestions',
      'Calendar integration',
      'Notifications and updates',
    ],
    results:
      'Makes event planning faster and less stressful through AI-driven scheduling and organisation tools.',
    platforms: ['ios', 'android'],
    image: '/organaise.png',
    imageDesktop: '/organaise1.png',
    platformLinks: { web: 'https://getorganaise.com' },
  },
  {
    slug: 'autosmart-axis',
    title: 'Autosmart Axis',
    category: 'Mobile Applications',
    description: 'An iPad-based workflow management system.',
    longDescription:
      'Autosmart Axis is an iPad-based workflow management system built to streamline field and in-store operations. It digitises processes, captures data on the go, and gives teams a structured, efficient way to manage their daily workflows.',
    technologies: ['Swift', 'iPadOS', 'REST APIs'],
    features: [
      'iPad-optimised workflow management',
      'Digital process and data capture',
      'Task assignment and tracking',
      'Offline-capable operation',
      'Sync with back-office systems',
    ],
    results:
      'Streamlines operational workflows and improves data accuracy with a purpose-built iPad solution.',
    platforms: ['ios'],
    image: '/autosmart-axis.png',
    imageDesktop: '/autosmart2.png',
  },
  {
    slug: 'webees',
    title: 'WeBees',
    category: 'Mobile Applications',
    description: 'Connect, ask, and discover locally.',
    longDescription:
      'WeBees is a community app that helps people connect, ask questions, and discover what’s happening locally. It blends social discovery with local knowledge, making it easy to find recommendations, events, and people nearby.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    features: [
      'Local discovery and recommendations',
      'Community Q&A',
      'Events and activities feed',
      'User profiles and connections',
      'Push notifications',
    ],
    results:
      'Connects local communities and makes discovering nearby people, places, and events effortless.',
    platforms: ['ios', 'android'],
    image: '/webees.png',
  },
  {
    slug: 'mensa-pay',
    title: 'Mensa Pay',
    category: 'Mobile Applications',
    description: 'A cutting-edge digital wallet app developed by Eusopht.',
    longDescription:
      'Mensa Pay is a cutting-edge digital wallet app developed by Eusopht. It enables secure payments, transfers, and balance management with a focus on speed, security, and a frictionless user experience — backed by KYC and multi-currency support.',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
    features: [
      'Secure digital wallet and payments',
      'Peer-to-peer transfers',
      'KYC and identity verification',
      'Multi-currency support',
      'Transaction history and insights',
    ],
    results:
      'Delivers a fast, secure payments experience with the compliance and reliability fintech users expect.',
    platforms: ['ios', 'android'],
    image: '/mensapay.png',
    imageDesktop: '/mensa.png',
  },
  {
    slug: 'job-application-portal',
    title: 'Job Application Portal',
    category: 'Web Application',
    description: 'A React-based MVP that simplifies job applications with a guided CV builder.',
    longDescription:
      'A React-based MVP designed to simplify the job application process through a guided, step-by-step CV builder. It walks candidates through creating a polished CV and submitting applications, reducing friction and improving completion rates.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    features: [
      'Step-by-step guided CV builder',
      'Application submission workflow',
      'Template-based CV generation',
      'Progress saving',
      'Responsive, accessible UI',
    ],
    results:
      'Improves application completion rates with a guided, low-friction CV-building and submission flow.',
    platforms: ['web'],
    image: '/JAP.png',
    imageDesktop: '/JAP1.png',
  },
  {
    slug: 'exhibitpro',
    title: 'ExhibitPro',
    category: 'Web Application',
    description: 'A modern digital solution to simplify artwork sales during physical exhibitions.',
    longDescription:
      'ExhibitPro is a modern digital solution built to simplify artwork sales during physical exhibitions. It bridges the in-person gallery experience with digital convenience — letting visitors browse, reserve, and purchase artwork on the spot while giving organisers real-time sales visibility.',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
    features: [
      'Digital artwork catalogue for exhibitions',
      'On-the-spot reservations and sales',
      'QR-based artwork lookup',
      'Real-time sales dashboard for organisers',
      'Secure payments',
    ],
    results:
      'Boosts on-site artwork sales and gives organisers live visibility into performance during exhibitions.',
    platforms: ['web'],
    image: '/security-world1.png',
  },
  {
    slug: 'security-world',
    title: 'Security World',
    category: 'Web Application',
    description: 'A leading electronic security eCommerce and physical store.',
    longDescription:
      'Security World is a leading electronic security eCommerce business and physical store, supported by a meticulously designed website. The platform showcases a broad security product range, supports online ordering, and reinforces the brand’s authority in the electronic security space.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    features: [
      'Comprehensive security product catalogue',
      'Online ordering and checkout',
      'Product search and filtering',
      'Inventory and order management',
      'SEO-optimised, responsive design',
    ],
    results:
      'Expands the retailer’s reach with a polished online store that complements their physical presence and drives sales.',
    platforms: ['web'],
    image: '/security-world.png',
    platformLinks: { web: 'https://securityworld.com.pk' },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
