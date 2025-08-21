'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fill out the form below and we'll get back to you shortly
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-black rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="sales">Sales & Pricing</option>
                <option value="support">Technical Support</option>
                <option value="partnerships">Partnership Opportunities</option>
                <option value="demo">Request a Demo</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
