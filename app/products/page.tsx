import { Metadata } from 'next';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductsGrid } from '@/components/products/ProductsGrid';
import { ProductComparison } from '@/components/products/ProductComparison';
import { ProductCTA } from '@/components/products/ProductCTA';

export const metadata: Metadata = {
  title: 'SaaS Products - Susty Digi Marketers',
  description: 'Explore our comprehensive suite of SaaS products including CRM, POS systems, billing solutions, and more.',
  openGraph: {
    title: 'SaaS Products - Susty Digi Marketers',
    description: 'Explore our comprehensive suite of SaaS products including CRM, POS systems, billing solutions, and more.',
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductComparison />
      <ProductCTA />
    </>
  );
}