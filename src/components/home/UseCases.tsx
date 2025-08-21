'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiUserGroup, HiOfficeBuilding, HiCheck } from 'react-icons/hi'

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
      <div className="w-[80vw] max-w-5xl mx-auto relative z-10">
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
              <div className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl text-center w-full grid grid-rows-[auto_1fr_auto]">
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-4">
                    <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit mx-auto">
                      <useCase.icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>

                {/* Features list */}
                <div className="flex-1">
                  <ul className="space-y-4 mb-8 text-left">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="mt-0.5 p-1 bg-black/10 dark:bg-white/10 rounded">
                          <HiCheck className="w-4 h-4 text-black dark:text-white" />
                        </span>
                        <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <button className="btn-primary text-sm px-6 py-2.5 !rounded-full">
                    {useCase.title === 'For Institutions' ? 'Schedule Demo' : 'Get Early Access'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}