'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize digital marketing and SaaS solutions.',
  },
  {
    year: '2021',
    title: 'First SaaS Product Launch',
    description: 'Launched our flagship CRM with WhatsApp integration, serving 50+ businesses.',
  },
  {
    year: '2022',
    title: 'Rapid Growth',
    description: 'Expanded our product suite and reached 200+ satisfied clients across industries.',
  },
  {
    year: '2023',
    title: 'Innovation Milestone',
    description: 'Introduced AI-powered features and advanced analytics across all products.',
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Serving 500+ clients with 9 comprehensive SaaS products and digital services.',
  },
];

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a leading technology company, here's how we've grown 
            and evolved to serve businesses worldwide.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-medium">Proven Track Record</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-medium">Innovative Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}