'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { TrialModal } from '@/components/forms/TrialModal';

export function ProductCTA() {
  const [showTrialModal, setShowTrialModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our SaaS products to streamline operations and boost growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-blue-200">Active Users</div>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-200">Customer Rating</div>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime SLA</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
                onClick={() => setShowTrialModal(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-blue-200 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <TrialModal
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
        productId="general"
        productName="SaaS Products"
      />
    </>
  );
}