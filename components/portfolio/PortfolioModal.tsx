'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, TrendingUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  year: string;
  results: string[];
  technologies: string[];
  url: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {item.category === 'web' ? 'Web Development' :
                         item.category === 'mobile' ? 'Mobile App' :
                         item.category === 'saas' ? 'SaaS Product' :
                         item.category === 'branding' ? 'Brand Design' :
                         'Digital Marketing'}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-white/80">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {item.client}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.year}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {item.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Client</span>
                        <p className="text-gray-900">{item.client}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Year</span>
                        <p className="text-gray-900">{item.year}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Category</span>
                        <p className="text-gray-900">
                          {item.category === 'web' ? 'Web Development' :
                           item.category === 'mobile' ? 'Mobile App' :
                           item.category === 'saas' ? 'SaaS Product' :
                           item.category === 'branding' ? 'Brand Design' :
                           'Digital Marketing'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                    <Button variant="outline" className="w-full">
                      Start Similar Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}