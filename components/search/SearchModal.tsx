'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'product' | 'service' | 'page';
}

const searchData: SearchResult[] = [
  // Products
  { id: '1', title: 'CRM with WhatsApp Integration', description: 'Customer relationship management with messaging', url: '/products/crm-whatsapp', type: 'product' },
  { id: '2', title: 'Smart Billing System', description: 'Automated billing and payment reminders', url: '/products/billing-system', type: 'product' },
  { id: '3', title: 'POS System', description: 'Point of sale for restaurants and retail', url: '/products/pos-system', type: 'product' },
  { id: '4', title: 'RFID-POS System', description: 'Advanced RFID-enabled point of sale', url: '/products/rfid-pos', type: 'product' },
  
  // Services
  { id: '5', title: 'Mobile App Development', description: 'iOS and Android app development', url: '/services#mobile-app-development', type: 'service' },
  { id: '6', title: 'Web Development', description: 'Modern website development', url: '/services#web-development', type: 'service' },
  { id: '7', title: 'SEO Services', description: 'Search engine optimization', url: '/services#seo', type: 'service' },
  { id: '8', title: 'Social Media Management', description: 'Social media marketing and growth', url: '/services#social-media', type: 'service' },
  
  // Pages
  { id: '9', title: 'About Us', description: 'Learn about our company and mission', url: '/about', type: 'page' },
  { id: '10', title: 'Portfolio', description: 'View our work and case studies', url: '/portfolio', type: 'page' },
  { id: '11', title: 'Contact', description: 'Get in touch with our team', url: '/contact', type: 'page' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

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

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <Input
                  type="text"
                  placeholder="Search products, services, or pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border-0 focus:ring-0 text-lg"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="ml-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={handleClose}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-gray-900">{result.title}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                result.type === 'product' ? 'bg-blue-100 text-blue-800' :
                                result.type === 'service' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query.trim() ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No results found for "{query}"</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Start typing to search...</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}