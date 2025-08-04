'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest updates on our products, services, and industry insights delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            
            <p className="text-sm text-blue-100 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}