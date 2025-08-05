import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Us - SustyDigiMarketers',
  description: 'Get in touch with SustyDigiMarketers. Contact us for your digital marketing and SaaS solution needs.',
  openGraph: {
    title: 'Contact Us - SustyDigiMarketers',
    description: 'Get in touch with SustyDigiMarketers. Contact us for your digital marketing and SaaS solution needs.',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
    </>
  );
}