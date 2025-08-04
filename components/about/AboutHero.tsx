'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SustyDigiMarketers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            We're passionate about elevating technology for the future, creating innovative solutions 
            that transform businesses and drive digital success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-8 bg-white rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-8 bg-white rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of innovative SaaS products and digital services, 
              shaping the future of business technology worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-8 bg-white rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and customer success drive everything we do. 
              We believe in building lasting relationships through exceptional service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}