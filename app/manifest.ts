import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eusopht — AI Software & Automation Agency',
    short_name: 'Eusopht',
    description:
      'AI agents, automation, dedicated teams, and custom software — built by Eusopht.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFB',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
