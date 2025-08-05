'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'saas', label: 'SaaS Products' },
  { id: 'branding', label: 'Brand Design' },
  { id: 'marketing', label: 'Digital Marketing' },
];

interface PortfolioFilterProps {
  onFilterChange?: (filter: string) => void;
}

export function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              variant={activeFilter === option.id ? 'default' : 'outline'}
              onClick={() => handleFilterChange(option.id)}
              className={`transition-all duration-300 ${
                activeFilter === option.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'hover:bg-gray-50'
              }`}
            >
              {option.label}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}