import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "avatar.iran.liara.run" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "aoiogtphutzkdpbxpssx.supabase.co" },
    ],
  },

  allowedDevOrigins: ['resuscitative-tonita-lunitidal.ngrok-free.dev'],


  async redirects() {
    return [
      // About
      { source: "/about-eusopht", destination: "/about-us", permanent: true },
      { source: "/about-us/", destination: "/about-us", permanent: true },

      // Services → Custom Software
      { source: "/web-development", destination: "/services/custom-software", permanent: true },
      { source: "/web-development/", destination: "/services/custom-software", permanent: true },
      { source: "/mobile-app-development", destination: "/services/custom-software", permanent: true },
      { source: "/mobile-app-development/", destination: "/services/custom-software", permanent: true },
      { source: "/custom-development", destination: "/services/custom-software", permanent: true },
      { source: "/custom-development/", destination: "/services/custom-software", permanent: true },
      { source: "/product-development", destination: "/services/custom-software", permanent: true },
      { source: "/product-development/", destination: "/services/custom-software", permanent: true },

      // Services → Staff Augmentation
      { source: "/outsourcing-services", destination: "/services/staff-augmentation", permanent: true },
      { source: "/outsourcing-services/", destination: "/services/staff-augmentation", permanent: true },

      // Portfolio sub-pages → /portfolio
      { source: "/website-development-portfolio", destination: "/portfolio", permanent: true },
      { source: "/website-development-portfolio/", destination: "/portfolio", permanent: true },
      { source: "/mobile-applications-portfolio", destination: "/portfolio", permanent: true },
      { source: "/mobile-applications-portfolio/", destination: "/portfolio", permanent: true },
      { source: "/branding-portfolio", destination: "/portfolio", permanent: true },
      { source: "/branding-portfolio/", destination: "/portfolio", permanent: true },
      { source: "/project_category/web-applications", destination: "/portfolio", permanent: true },
      { source: "/project_category/web-applications/", destination: "/portfolio", permanent: true },
      { source: "/project_category/mobile-applications", destination: "/portfolio", permanent: true },
      { source: "/project_category/mobile-applications/", destination: "/portfolio", permanent: true },
      { source: "/project_category/mobile-applications/page/2/", destination: "/portfolio", permanent: true },
      { source: "/project_category/web-applications/page/2/", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
