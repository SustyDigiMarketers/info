'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Discovery Call',
    description: 'We discuss your requirements, goals, and vision for the project.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: FileText,
    title: 'Proposal & Planning',
    description: 'Detailed project proposal with timeline, milestones, and deliverables.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Code,
    title: 'Development & Design',
    description: 'Our expert team brings your project to life with regular updates.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Project delivery, launch support, and ongoing maintenance.',
    color: 'from-orange-500 to-red-600',
  },
];

export function ServiceProcess() {
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
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-orange-600 rounded-full transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 relative z-10 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}