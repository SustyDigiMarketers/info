'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech and digital marketing.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@sustydigimarketers.com',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Technology expert specializing in SaaS architecture and AI integration.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@sustydigimarketers.com',
    },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Design',
    bio: 'Creative director with a passion for user-centered design and innovation.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@sustydigimarketers.com',
    },
  },
  {
    name: 'Emily Park',
    role: 'Head of Marketing',
    bio: 'Digital marketing strategist driving growth and brand awareness.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@sustydigimarketers.com',
    },
  },
];

export function TeamSection() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind our innovative solutions and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}