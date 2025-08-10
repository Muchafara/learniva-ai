'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export function ContactHero() {
  return (
    <section className="relative py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Have questions about Learniva AI? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-white dark:bg-black rounded-lg"
          >
            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="w-8 h-8 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Send us an email and we'll respond within 24 hours
            </p>
            <a
              href="mailto:support@learniva.ai"
              className="text-black dark:text-white font-medium hover:underline"
            >
              support@learniva.ai
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-white dark:bg-black rounded-lg"
          >
            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhone className="w-8 h-8 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Speak directly with our support team
            </p>
            <a
              href="tel:+1-555-123-4567"
              className="text-black dark:text-white font-medium hover:underline"
            >
              +1 (555) 123-4567
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-8 bg-white dark:bg-black rounded-lg"
          >
            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="w-8 h-8 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Come visit our headquarters
            </p>
            <address className="text-black dark:text-white font-medium not-italic">
              Educational Technology Hub<br />
              San Francisco, CA 94105
            </address>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
