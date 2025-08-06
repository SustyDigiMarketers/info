'use client';

import { motion } from 'framer-motion';
import { MessageSquare, CreditCard, ShoppingCart, Zap, PieChart, Monitor, Share2, Headphones, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';
import { TrialModal } from '@/components/forms/TrialModal';

const products = [
  {
    id: 'crm-whatsapp',
    title: 'CRM with WhatsApp Integration',
    description: 'Complete customer relationship management with integrated WhatsApp messaging, smart allotment system, and automated follow-ups.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-600',
    features: ['WhatsApp Integration', 'Smart Allotment', 'Automated Follow-ups', 'Contact Management'],
    pricing: '$29/month',
    popular: true,
  },
  {
    id: 'billing-system',
    title: 'Smart Billing System',
    description: 'Automated billing with due date reminders, payment tracking, and intelligent notification system for better cash flow.',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-600',
    features: ['Automated Billing', 'Due Date Reminders', 'Payment Tracking', 'Multi-Currency'],
    pricing: '$19/month',
    popular: false,
  },
  {
    id: 'pos-system',
    title: 'Multi-Device POS System',
    description: 'Complete point-of-sale solution for restaurants and retail stores with multi-device support and real-time analytics.',
    icon: ShoppingCart,
    color: 'from-purple-500 to-violet-600',
    features: ['Multi-Device Support', 'Real-time Analytics', 'Inventory Management', 'Staff Management'],
    pricing: '$39/month',
    popular: false,
  },
  {
    id: 'rfid-pos',
    title: 'RFID-POS System',
    description: 'Advanced RFID-enabled point-of-sale system perfect for amusement parks, events, and modern retail environments.',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    features: ['RFID Technology', 'Contactless Payments', 'Queue Management', 'Event Analytics'],
    pricing: '$59/month',
    popular: false,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Pro',
    description: 'Category-wise expense tracking with advanced analytics, budget planning, and automated reporting features.',
    icon: PieChart,
    color: 'from-pink-500 to-rose-600',
    features: ['Category Tracking', 'Budget Planning', 'Automated Reports', 'Tax Integration'],
    pricing: '$15/month',
    popular: false,
  },
  {
    id: 'billboard-system',
    title: 'Web-Based Billboard System',
    description: 'Digital advertising platform to create, manage, and publish dynamic ads and offers across multiple channels.',
    icon: Monitor,
    color: 'from-indigo-500 to-blue-600',
    features: ['Dynamic Content', 'Multi-Channel Publishing', 'Analytics Dashboard', 'Scheduling'],
    pricing: '$49/month',
    popular: false,
  },
  {
    id: 'social-ads-manager',
    title: 'Social Media Ads Manager',
    description: 'Comprehensive social media advertising platform with scheduling, boosting, and insights across all major platforms.',
    icon: Share2,
    color: 'from-cyan-500 to-teal-600',
    features: ['Multi-Platform Support', 'Auto Scheduling', 'Performance Insights', 'A/B Testing'],
    pricing: '$35/month',
    popular: true,
  },
  {
    id: 'ticket-system',
    title: 'Ticket Raising Tool',
    description: 'Professional support ticket system with flags, reminders, assignable support agents, and SLA tracking.',
    icon: Headphones,
    color: 'from-violet-500 to-purple-600',
    features: ['SLA Tracking', 'Agent Assignment', 'Priority Flags', 'Automated Reminders'],
    pricing: '$25/month',
    popular: false,
  },
  {
    id: 'workspace-tool',
    title: 'Workspace Collaboration Tool',
    description: 'Complete team collaboration platform with project management, file sharing, and communication tools.',
    icon: Users,
    color: 'from-emerald-500 to-green-600',
    features: ['Project Management', 'File Sharing', 'Team Chat', 'Time Tracking'],
    pricing: '$45/month',
    popular: false,
  },
  {
    id: 'patient-management',
    title: 'Patient Management Software',
    description: 'Comprehensive healthcare management system with patient records, appointments, and medical history tracking.',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    features: ['Patient Records', 'Appointment Scheduling', 'Medical History', 'Prescription Management'],
    pricing: '$55/month',
    popular: false,
  },
];

export function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  {product.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{product.title}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{product.pricing}</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 mb-4">
                      {product.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 space-y-2">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        Start Free Trial
                      </Button>
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrialModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productId={selectedProduct || ''}
        productName={products.find(p => p.id === selectedProduct)?.title || ''}
      />
    </>
  );
}