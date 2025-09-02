'use client'

import { motion } from 'framer-motion'
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiTrendingUp, HiGlobeAlt, HiSupport } from 'react-icons/hi'

const benefits = [
  {
    icon: HiSparkles,
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI and machine learning technologies in education'
  },
  {
    icon: HiLightningBolt,
    title: 'Fast Implementation',
    description: 'Quick deployment with minimal disruption to existing systems'
  },
  {
    icon: HiShieldCheck,
    title: 'Proven Results',
    description: 'Demonstrated improvements in learning outcomes and engagement'
  },
  {
    icon: HiTrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your institution or business needs'
  },
  {
    icon: HiGlobeAlt,
    title: 'Global Reach',
    description: 'Access to international markets and educational networks'
  },
  {
    icon: HiSupport,
    title: 'Dedicated Support',
    description: '24/7 technical support and dedicated partnership management'
  }
]

export function PartnershipBenefits() {
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
            Why Partner with Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join a thriving ecosystem that's reshaping the future of education through innovative partnerships
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-black dark:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center simple-card simple-glow rounded-2xl p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Ready to Transform Education Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing network of partners and be part of the educational revolution that's changing lives across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Become a Partner
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
