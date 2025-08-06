'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['71-75 Shelton Street', 'Covent Garden, London', 'UK, WC2H 9JQ'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['020 4628 6577', 'Mon-Fri: 9AM-6PM GMT', 'Emergency Support Available'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: ['Contact@sustydigimarketers.com', 'Sales@sustydigimarketers.com', 'info@sustydigimarketers.com'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    color: 'from-orange-500 to-red-600',
  },
];

export function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              We're here to help! Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-blue-100 mb-6">
                Start a live chat with our support team for instant assistance.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Start Live Chat
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-6">
              Stay connected with us on social media for the latest updates and insights.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">Facebook</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Instagram</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}