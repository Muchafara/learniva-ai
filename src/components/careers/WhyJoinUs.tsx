'use client'

import { motion } from 'framer-motion'
import { HiLightningBolt, HiAcademicCap, HiGlobeAlt, HiSparkles } from 'react-icons/hi'

const reasons = [
  {
    icon: HiLightningBolt,
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest AI models, machine learning frameworks, and emerging technologies that are reshaping education.'
  },
  {
    icon: HiAcademicCap,
    title: 'Impact on Education',
    description: 'Your work directly improves learning outcomes for millions of students and educators worldwide.'
  },
  {
    icon: HiGlobeAlt,
    title: 'Global Scale',
    description: 'Build products that reach learners across continents, supporting diverse educational needs and languages.'
  },
  {
    icon: HiSparkles,
    title: 'Innovation Culture',
    description: 'Join a team that values creativity, experimentation, and bold ideas that push the boundaries of what\'s possible.'
  }
]

export function WhyJoinUs() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Join{' '}
            <span className="text-gray-900 dark:text-white">
              Learniva AI?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a mission-driven team that's revolutionizing how people learn and grow through artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-h-[240px] bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6"
            >
              <div className="flex flex-col h-full space-y-6">
                <div className="relative">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
                    <reason.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our team of passionate innovators and help us build the future of personalized learning.
            </p>
            <button className="relative overflow-hidden px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">Explore Opportunities</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
