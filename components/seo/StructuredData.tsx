import { faqs } from '@/sections/home/faqData';

const SITE_URL = 'https://eusopht.com';

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eusopht',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Eusopht is an AI software & automation agency delivering AI agents, workflow automation, staff augmentation, and custom software to clients worldwide.',
    sameAs: [
      'https://www.linkedin.com/company/eusopht/posts/?feedView=all',
      'https://www.facebook.com/eusopht/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@eusopht.com',
      contactType: 'sales',
      areaServed: 'Worldwide',
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Eusopht',
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    email: 'contact@eusopht.com',
    telephone: '+92-300-225-9802',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-153, Block 6, Gulshan-e-Iqbal',
      addressLocality: 'Karachi',
      postalCode: '75350',
      addressCountry: 'PK',
    },
    areaServed: 'Worldwide',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
