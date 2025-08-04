'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CreditCard, ShoppingCart, Zap, BarChart3, Monitor, Share2, Headphones, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const products = [
  {
    id: 'crm-whatsapp',
    title: 'CRM with WhatsApp Integration',
    description: 'Streamline customer relationships with integrated WhatsApp messaging and smart allotment system.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'billing-system',
    title: 'Smart Billing System',
    description: 'Automated billing with due date reminders and intelligent notification system.',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'pos-system',
    title: 'Multi-Device POS System',
    description: 'Complete point-of-sale solution for restaurants and retail stores.',
    icon: ShoppingCart,
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'rfid-pos',
    title: 'RFID-POS System',
    description: 'Advanced RFID-enabled POS for amusement parks and modern retail.',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
  },
];

export function ProductsPreview() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our SaaS Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, scalable solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/products">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              Explore All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}