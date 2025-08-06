'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate visitor count (in real app, this would come from analytics API)
    const getVisitorCount = () => {
      // Get from localStorage or generate random count
      const stored = localStorage.getItem('visitorCount');
      if (stored) {
        return parseInt(stored);
      } else {
        // Generate a realistic visitor count
        const baseCount = 15420; // Starting count
        const randomIncrement = Math.floor(Math.random() * 100);
        const totalCount = baseCount + randomIncrement;
        localStorage.setItem('visitorCount', totalCount.toString());
        return totalCount;
      }
    };

    // Simulate loading delay
    setTimeout(() => {
      const count = getVisitorCount();
      setVisitorCount(count);
      setIsLoading(false);
      
      // Increment visitor count
      const newCount = count + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      
      // Animate to new count
      setTimeout(() => {
        setVisitorCount(newCount);
      }, 1000);
    }, 1500);

    // Optional: Update count periodically to simulate real-time visitors
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 3); // 0-2 new visitors
        localStorage.setItem('visitorCount', newCount.toString());
        return newCount;
      });
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <div className="flex items-center space-x-2 text-sm">
        <Eye className="w-4 h-4 text-blue-600" />
        <span className="text-gray-600">Visitors:</span>
        <motion.span
          className="font-bold text-blue-600"
          key={visitorCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? '...' : visitorCount.toLocaleString()}
        </motion.span>
      </div>
    </motion.div>
  );
}