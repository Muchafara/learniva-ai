'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiUserGroup, HiOfficeBuilding } from 'react-icons/hi'
import { ModernCard } from '../ui/ModernCard'

const useCases = [
  {
    icon: HiUserGroup,
    title: 'For Individuals',
    description: 'Transform your learning with personalized AI that adapts to your unique style and pace',
    features: [
      'Convert handwritten notes into animated, interactive content',
      'Generate personalized flashcards and practice exercises',
      'Track your learning progress with detailed analytics',
      'Access your materials anywhere, anytime on any device'
    ]
  },
  {
    icon: HiOfficeBuilding,
    title: 'For Institutions',
    description: 'Scale personalized learning across your entire organization with enterprise-grade security',
    features: [
      'Enterprise-grade security and compliance infrastructure',
      'Advanced analytics and comprehensive reporting',
      'Custom integrations with your existing learning systems',
      'Dedicated support, training, and implementation assistance'
    ]
  }
]

export function UseCases() {
  return (
    <section className="section-padding-sm bg-white dark:bg-black relative">
      <div className="w-[95vw] max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6">
            Personalized Solutions for Everyone
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're an individual learner or an institution, LearnivaAI adapts to your unique learning needs with scalable, secure, and customizable AI-powered tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full"
            >
              <ModernCard
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                className="text-center w-full grid grid-rows-[auto_1fr_auto]"
                darkInLight={true}
                enableHover={true}
              >
                {/* Header content (icon, title, description) */}
                <div></div>
                
                {/* Features list - takes up remaining space */}
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-left">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Button area - always at bottom, aligned horizontally */}
                <div className="flex justify-center">
                  <button className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    {useCase.title === 'For Institutions' ? 'Schedule Demo' : 'Get Early Access'}
                  </button>
                </div>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}