'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Code, Globe, Share2, Palette, Search, RefreshCw, Bot, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Custom iOS and Android apps with stunning UI/UX design.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your unique business needs.',
    icon: Code,
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Modern, responsive websites that drive results.',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Grow your brand with strategic social media campaigns.',
    icon: Share2,
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'brand-design',
    title: 'Brand Asset Design',
    description: 'Complete branding solutions from logos to marketing materials.',
    icon: Palette,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Boost your online visibility and organic traffic.',
    icon: Search,
    color: 'from-indigo-500 to-blue-600',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-center">
                    <Button variant="outline" size="sm" className="group-hover:bg-gray-50">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}