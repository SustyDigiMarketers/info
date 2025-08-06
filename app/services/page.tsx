import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { ServicesCTA } from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Digital Services - Susty Digi Marketers',
  description: 'Comprehensive digital services including mobile app development, web development, SEO, social media management, and more.',
  openGraph: {
    title: 'Digital Services - Susty Digi Marketers',
    description: 'Comprehensive digital services including mobile app development, web development, SEO, social media management, and more.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesCTA />
    </>
  );
}