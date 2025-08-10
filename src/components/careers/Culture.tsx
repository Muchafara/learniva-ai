'use client'

import { motion } from 'framer-motion'
import { HiHeart, HiLightningBolt, HiUsers, HiAcademicCap, HiGlobeAlt, HiSparkles } from 'react-icons/hi'

const cultureValues = [
  {
    icon: HiAcademicCap,
    title: 'Continuous Learning',
    description: 'We invest in your growth with learning budgets, conference attendance, and dedicated time for skill development.'
  },
  {
    icon: HiUsers,
    title: 'Collaborative Spirit',
    description: 'We believe in the power of diverse perspectives and cross-functional collaboration to solve complex problems.'
  },
  {
    icon: HiLightningBolt,
    title: 'Innovation First',
    description: 'We encourage experimentation, embrace failure as learning, and constantly push the boundaries of what\'s possible.'
  },
  {
    icon: HiHeart,
    title: 'Work-Life Balance',
    description: 'We prioritize mental health, offer flexible schedules, and support you in maintaining a healthy work-life integration.'
  },
  {
    icon: HiGlobeAlt,
    title: 'Global Mindset',
    description: 'Our diverse, remote-first team brings together talent from around the world to serve learners everywhere.'
  },
  {
    icon: HiSparkles,
    title: 'Purpose-Driven',
    description: 'Every day, we work toward our mission of making quality education accessible and engaging for all learners.'
  }
]

export function Culture() {
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
            Our{' '}
            <span className="text-gray-900 dark:text-white">
              Culture & Values
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've built a culture that values innovation, collaboration, and personal growth while maintaining a healthy work-life balance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-h-[240px] bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6"
            >
              <div className="flex flex-col h-full space-y-6">
                <div className="relative">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
                    <value.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
