/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Set base path for GitHub Pages repository (consistent across environments)
  basePath: '/info',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable compression
  compress: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
  
  // Skip trailing slash redirect
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;