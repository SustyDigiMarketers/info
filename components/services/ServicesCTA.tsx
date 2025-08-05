'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ProjectModal } from '@/components/forms/ProjectModal';

export function ServicesCTA() {
  const [showProjectModal, setShowProjectModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's bring your vision to life with our expert team and proven process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-purple-200">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-purple-200">Expert Team Members</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
                onClick={() => setShowProjectModal(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
              >
                Schedule Consultation
              </Button>
            </div>
            
            <p className="text-sm text-purple-200 mt-6">
              Free consultation • No obligation • Quick response
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        serviceId="general"
        serviceName="Digital Services"
      />
    </>
  );
}