'use client'

import { motion } from 'framer-motion'
import { HiLightBulb, HiEye } from 'react-icons/hi'

export function MissionVision() {
  const missionVision = [
    {
      icon: HiLightBulb,
      title: "Our Mission",
      description: "To empower students and educational institutions worldwide by providing a scalable, secure, and customisable AI-powered learning management system. LearnivaAI delivers personalised learning experiences, automates complex educational tasks, and offers actionable insights through AI-driven analytics."
    },
    {
      icon: HiEye,
      title: "Our Vision",
      description: "To revolutionize African education by making personalized, high-quality learning accessible to every student through cutting-edge AI technology, and a commitment to equity in learning."
    }
  ]

  return (
    <section className="section-padding-sm bg-white dark:bg-black">
      <div className="w-[95vw] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to transforming education through our mission to empower and our vision to revolutionize.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="min-h-[240px] bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6"
            >
              <div className="flex flex-col h-full space-y-6">
                <div className="relative">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
                    <item.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
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
