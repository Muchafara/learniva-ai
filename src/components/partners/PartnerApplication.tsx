'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiOfficeBuilding, HiUser, HiGlobeAlt } from 'react-icons/hi'

export function PartnerApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    partnershipType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Partnership application submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Apply for Partnership
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tell us about your organization and how we can work together to transform education
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Organization Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Organization Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter your organization name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Website and Partnership Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="website" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="https://your-website.com"
                />
              </div>

              <div>
                <label htmlFor="partnershipType" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  required
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select partnership type</option>
                  <option value="educational">Educational Institution</option>
                  <option value="technology">Technology Partner</option>
                  <option value="channel">Channel Partner</option>
                  <option value="content">Content Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Tell us about your organization and partnership goals *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe your organization, current challenges, and how you envision partnering with Learniva AI..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 relative overflow-hidden px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Submit Partnership Application
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:underline">
                Privacy Policy
              </a>.
            </p>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions? Contact our partnerships team directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:partnerships@learniva.ai"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <HiMail className="w-5 h-5 mr-2" />
              partnerships@learniva.ai
            </a>
            <a 
              href="tel:+1234567890"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <HiPhone className="w-5 h-5 mr-2" />
              +1 (234) 567-890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
