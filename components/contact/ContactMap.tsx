'use client';

import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office or schedule a meeting. We're located in the heart of the tech district.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                123 Tech Street, Digital City, DC 12345
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Click to open in Google Maps
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
            <p className="text-sm text-gray-600">Free parking available in our building garage</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
            <p className="text-sm text-gray-600">Metro station just 2 blocks away</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
            <p className="text-sm text-gray-600">Wheelchair accessible with elevator access</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}