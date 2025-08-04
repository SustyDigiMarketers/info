import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { CompanyStory } from '@/components/about/CompanyStory';
import { PortfolioPreview } from '@/components/about/PortfolioPreview';
import { TeamSection } from '@/components/about/TeamSection';

export const metadata: Metadata = {
  title: 'About Us - SustyDigiMarketers',
  description: 'Learn about SustyDigiMarketers - our mission, vision, and the team behind innovative digital solutions.',
  openGraph: {
    title: 'About Us - SustyDigiMarketers',
    description: 'Learn about SustyDigiMarketers - our mission, vision, and the team behind innovative digital solutions.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <PortfolioPreview />
    </>
  );
}