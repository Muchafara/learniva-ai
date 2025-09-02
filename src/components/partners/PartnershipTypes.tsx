'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiCog, HiPresentationChartLine, HiBookOpen } from 'react-icons/hi'

const partnershipTypes = [
  {
    icon: HiAcademicCap,
    title: 'Educational Institutions',
    description: 'Partner with universities, schools, and training centers to integrate AI-powered learning tools',
    benefits: [
      'Institutional licensing discounts',
      'Custom integration support',
      'Teacher training programs',
      'Student success analytics'
    ]
  },
  {
    icon: HiCog,
    title: 'Technology Partners',
    description: 'Integrate your tools and platforms with our AI learning ecosystem',
    benefits: [
      'API access and documentation',
      'Co-marketing opportunities',
      'Technical support',
      'Revenue sharing models'
    ]
  },
  {
    icon: HiPresentationChartLine,
    title: 'Channel Partners',
    description: 'Resell and distribute Learniva AI solutions in your market',
    benefits: [
      'Exclusive territory rights',
      'Sales training and support',
      'Marketing materials',
      'Competitive margins'
    ]
  },
  {
    icon: HiBookOpen,
    title: 'Content Partners',
    description: 'Collaborate on creating and distributing educational content',
    benefits: [
      'Content licensing opportunities',
      'AI enhancement tools',
      'Global distribution',
      'Revenue sharing'
    ]
  }
]

export function PartnershipTypes() {
  return (
    <section className="section-padding-sm bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the partnership model that best fits your organization and goals
          </p>
        </motion.div>

        {/* Partnership Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit mb-6">
                <type.icon className="w-6 h-6 text-black dark:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
                {type.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {type.description}
              </p>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
