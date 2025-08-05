import { Metadata } from 'next';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioFilter } from '@/components/portfolio/PortfolioFilter';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio - SustyDigiMarketers',
  description: 'Explore our portfolio of successful projects including web development, mobile apps, branding, and digital marketing campaigns.',
  openGraph: {
    title: 'Portfolio - SustyDigiMarketers',
    description: 'Explore our portfolio of successful projects including web development, mobile apps, branding, and digital marketing campaigns.',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioFilter />
      <PortfolioGrid />
    </>
  );
}