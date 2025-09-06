/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  // output: 'export',
  images: {
    unoptimized: false, // Enable Next.js image optimization on Vercel
    domains: ['images.pexels.com'], // Add external image domains
  },
  // Enable compression
  compress: true,
  // Enable SWC minification
  swcMinify: true,
  // Optimize for production
  poweredByHeader: false,
  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Add redirects for fallback routing
  async redirects() {
    return [
      {
        source: '/info',
        destination: '/',
        permanent: true,
      },
      {
        source: '/info/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;