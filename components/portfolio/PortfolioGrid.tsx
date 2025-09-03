'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PortfolioModal } from '@/components/portfolio/PortfolioModal';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete redesign and development of a modern e-commerce platform with advanced features.',
    client: 'RetailPro Inc.',
    year: '2024',
    results: ['300% increase in conversions', '50% faster page load times', '40% increase in mobile traffic'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    url: '#',
  },
  {
    id: 2,
    title: 'Restaurant Management App',
    category: 'mobile',
    tags: ['React Native', 'Firebase'],
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Mobile application for restaurant management with POS integration and analytics.',
    client: 'FoodChain Ltd.',
    year: '2024',
    results: ['50% faster order processing', '30% reduction in wait times', '25% increase in customer satisfaction'],
    technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
    url: '#',
  },
  {
    id: 3,
    title: 'CRM SaaS Platform',
    category: 'saas',
    tags: ['Next.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Comprehensive CRM platform with WhatsApp integration and automation features.',
    client: 'TechStart Inc.',
    year: '2023',
    results: ['200% increase in lead conversion', '60% reduction in manual tasks', '90% user adoption rate'],
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'WhatsApp API', 'Docker'],
    url: '#',
  },
  {
    id: 4,
    title: 'Brand Identity Package',
    category: 'branding',
    tags: ['Logo Design', 'Brand Guidelines'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete brand identity design including logo, guidelines, and marketing materials.',
    client: 'StartupHub',
    year: '2024',
    results: ['100% brand recognition increase', '80% improvement in brand consistency', '50% increase in brand recall'],
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    url: '#',
  },
  {
    id: 5,
    title: 'Digital Marketing Campaign',
    category: 'marketing',
    tags: ['SEO', 'Social Media', 'PPC'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Comprehensive digital marketing campaign with SEO, social media, and paid advertising.',
    client: 'GrowthCorp',
    year: '2024',
    results: ['400% increase in organic traffic', '250% increase in social media engagement', '180% ROI on ad spend'],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush'],
    url: '#',
  },
  {
    id: 6,
    title: 'Banking Mobile App',
    category: 'mobile',
    tags: ['Flutter', 'Blockchain'],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    client: 'SecureBank',
    year: '2023',
    results: ['99.9% uptime achieved', '40% increase in mobile transactions', '95% user satisfaction score'],
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Blockchain', 'Biometric APIs'],
    url: '#',
  },
  {
    id: 7,
    title: 'Corporate Website Redesign',
    category: 'web',
    tags: ['Next.js', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Modern corporate website with advanced animations and performance optimization.',
    client: 'Enterprise Solutions',
    year: '2024',
    results: ['70% improvement in page speed', '45% increase in time on site', '35% increase in contact form submissions'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    url: '#',
  },
  {
    id: 8,
    title: 'Inventory Management System',
    category: 'saas',
    tags: ['Vue.js', 'Laravel'],
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Comprehensive inventory management system with real-time tracking and analytics.',
    client: 'LogisticsPro',
    year: '2023',
    results: ['60% reduction in inventory errors', '45% improvement in order fulfillment', '30% cost savings'],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Chart.js'],
    url: '#',
  },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'mobile', 'saas', 'branding', 'marketing'].map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? 'default' : 'outline'}
                onClick={() => setFilter(filterOption)}
                className={`transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {filterOption === 'all' ? 'All Projects' : 
                 filterOption === 'web' ? 'Web Development' :
                 filterOption === 'mobile' ? 'Mobile Apps' :
                 filterOption === 'saas' ? 'SaaS Products' :
                 filterOption === 'branding' ? 'Brand Design' :
                 'Digital Marketing'}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={256}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <Button
                              size="sm"
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                              onClick={() => setSelectedItem(item)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-white hover:bg-white/20"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category === 'web' ? 'Web Development' :
                           item.category === 'mobile' ? 'Mobile App' :
                           item.category === 'saas' ? 'SaaS Product' :
                           item.category === 'branding' ? 'Brand Design' :
                           'Digital Marketing'}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.year}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {item.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedItem(item)}
                          className="text-blue-600 hover:text-blue-700 p-0"
                        >
                          View More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <PortfolioModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}