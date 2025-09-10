/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath in production for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/info' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig