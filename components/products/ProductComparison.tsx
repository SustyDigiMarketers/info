'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const comparisonData = [
  {
    feature: 'Multi-Device Support',
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'Real-time Analytics',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'API Access',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'Custom Integrations',
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: '24/7 Support',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'White Label',
    basic: false,
    pro: false,
    enterprise: true,
  },
];

export function ProductComparison() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All our products come with flexible pricing tiers to match your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm font-medium text-gray-700">{item.feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$19</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 border-b border-gray-100 last:border-b-0 flex justify-center">
                    {item.basic ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Pro</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$39</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 border-b border-gray-100 last:border-b-0 flex justify-center">
                    {item.pro ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$99</div>
                <div className="text-sm text-gray-600">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 border-b border-gray-100 last:border-b-0 flex justify-center">
                    {item.enterprise ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}