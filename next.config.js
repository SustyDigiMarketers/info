/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
