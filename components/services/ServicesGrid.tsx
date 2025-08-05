'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code, Globe, Share2, Palette, Search, RefreshCw, Bot, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { ProjectModal } from '@/components/forms/ProjectModal';

const services = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App UI/UX Design & Development',
    description: 'Custom iOS and Android applications with stunning user interfaces and seamless user experiences.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-600',
    features: ['iOS & Android', 'Custom UI/UX', 'App Store Optimization', 'Maintenance & Support'],
    startingPrice: '$5,000',
    timeline: '8-12 weeks',
    testimonial: '"Amazing app development team! Our app got 50K downloads in the first month." - TechStart CEO',
    popular: true,
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to meet your unique business requirements and workflows.',
    icon: Code,
    color: 'from-purple-500 to-violet-600',
    features: ['Custom Architecture', 'Scalable Solutions', 'API Integration', 'Cloud Deployment'],
    startingPrice: '$8,000',
    timeline: '12-16 weeks',
    testimonial: '"They delivered exactly what we needed. The software increased our efficiency by 300%." - InnovateLab CTO',
    popular: false,
  },
  {
    id: 'web-development',
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that convert visitors into customers with exceptional performance.',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    startingPrice: '$2,500',
    timeline: '4-6 weeks',
    testimonial: '"Our new website increased conversions by 250%. Outstanding work!" - RetailPro Marketing Director',
    popular: true,
  },
  {
    id: 'social-media',
    title: 'Social Media Management & Growth',
    description: 'Comprehensive social media strategy, content creation, and community management services.',
    icon: Share2,
    color: 'from-pink-500 to-rose-600',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    startingPrice: '$1,500',
    timeline: 'Ongoing',
    testimonial: '"Our social media following grew 400% in 6 months. Incredible results!" - Digital Dynamics CMO',
    popular: false,
  },
  {
    id: 'brand-design',
    title: 'Brand Asset Designing',
    description: 'Complete brand identity design including logos, brochures, banners, posters, and video content.',
    icon: Palette,
    color: 'from-orange-500 to-red-600',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Video Content'],
    startingPrice: '$1,000',
    timeline: '2-4 weeks',
    testimonial: '"The brand identity they created perfectly captures our vision. Love it!" - StartupHub Founder',
    popular: false,
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
    icon: Search,
    color: 'from-indigo-500 to-blue-600',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Performance Tracking'],
    startingPrice: '$800',
    timeline: '3-6 months',
    testimonial: '"Organic traffic increased 300% in 4 months. Best SEO team we\'ve worked with!" - EcomStore Owner',
    popular: true,
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Transform your existing website with modern design, improved UX, and better performance.',
    icon: RefreshCw,
    color: 'from-cyan-500 to-teal-600',
    features: ['Modern Design', 'UX Improvement', 'Performance Optimization', 'Mobile Responsive'],
    startingPrice: '$3,000',
    timeline: '6-8 weeks',
    testimonial: '"The redesign doubled our conversion rate. Fantastic work!" - ServicePro CEO',
    popular: false,
  },
  {
    id: 'digital-assistants',
    title: 'Dedicated Digital Assistants',
    description: 'Professional virtual assistants to handle your digital marketing and administrative tasks.',
    icon: Headphones,
    color: 'from-violet-500 to-purple-600',
    features: ['Social Media Management', 'Content Creation', 'Email Marketing', 'Administrative Tasks'],
    startingPrice: '$500',
    timeline: 'Ongoing',
    testimonial: '"Our dedicated assistant is like having a full marketing team. Great value!" - SmallBiz Owner',
    popular: false,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Business Optimization',
    description: 'Implement AI-powered solutions to automate processes and optimize your business operations.',
    icon: Bot,
    color: 'from-emerald-500 to-green-600',
    features: ['Process Automation', 'AI Chatbots', 'Data Analytics', 'Workflow Optimization'],
    startingPrice: '$4,000',
    timeline: '8-10 weeks',
    testimonial: '"AI automation saved us 20 hours per week. ROI was immediate!" - TechCorp Operations Manager',
    popular: true,
  },
];

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span className="font-semibold text-blue-600">From {service.startingPrice}</span>
                      <span>{service.timeline}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 italic">
                        {service.testimonial}
                      </p>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={() => setSelectedService(service.id)}
                    >
                      Start Project Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceId={selectedService || ''}
        serviceName={services.find(s => s.id === selectedService)?.title || ''}
      />
    </>
  );
}