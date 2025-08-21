'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiSparkles, HiLightningBolt, HiChartBar, HiCog, HiGlobe, HiShieldCheck } from 'react-icons/hi'

const features = [
  {
    icon: HiSparkles,
    title: 'Smart Content Transformation',
    description: 'Transform static notes, PDFs, images, and text into dynamic, animated content that brings complex concepts to life and enhances understanding.'
  },
  {
    icon: HiLightningBolt,
    title: 'Personalized Learning & Assessment',
    description: 'Automatically generate custom flashcards, study materials, and receive intelligent feedback and assessment tailored to your learning style and progress.'
  },
  {
    icon: HiChartBar,
    title: 'Analytics & Seamless Access',
    description: 'Track your learning journey with detailed insights and access your personalized materials anywhere, anytime, on any device.'
  }
]

export function Features() {
  return (
    <section id="features" className="section-padding-sm relative bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-black"></div>
      </div>
      
      <div className="w-[80vw] max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6">
            <span className="text-gray-900 dark:text-white">Smart Features</span> That Understand You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the AI-powered capabilities that make LearnivaAI the most personalized 
            learning platform for students, educators, and institutions worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-h-[240px] simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="flex flex-col h-full space-y-6">
                <div className="relative">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
                    <feature.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
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
