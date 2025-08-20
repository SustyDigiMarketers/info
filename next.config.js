/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // for static export
  images: {
    unoptimized: true,
  },
  assetPrefix: "./", // helps CSS/JS load correctly on GitHub Pages
};

module.exports = nextConfig;
