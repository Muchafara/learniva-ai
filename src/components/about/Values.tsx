'use client'

import { motion } from 'framer-motion'
import { HiLightningBolt, HiGlobeAlt, HiShieldCheck, HiAdjustments, HiTrendingUp } from 'react-icons/hi'

export function Values() {
  const values = [
    {
      icon: HiLightningBolt,
      title: "Innovation",
      description: "Continuously advancing AI technology to create dynamic, personalized learning experiences"
    },
    {
      icon: HiGlobeAlt,
      title: "Accessibility",
      description: "Making high-quality education available to all students, with a focus on emerging markets"
    },
    {
      icon: HiShieldCheck,
      title: "Security & Privacy",
      description: "Ensuring data privacy and compliance, giving users peace of mind"
    },
    {
      icon: HiAdjustments,
      title: "Customization",
      description: "Providing flexible solutions that meet the unique needs of each institution"
    },
    {
      icon: HiTrendingUp,
      title: "Scalability",
      description: "Supporting institutions of all sizes—from individual schools to national education systems"
    }
  ]

  return (
    <section className="section-padding-sm bg-white dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our innovation and drive our commitment to transforming education worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
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
