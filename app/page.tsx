import { Hero } from '@/components/home/Hero';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { Newsletter } from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <ServicesPreview />
      <TestimonialsCarousel />
      <Newsletter />
    </>
  );
}