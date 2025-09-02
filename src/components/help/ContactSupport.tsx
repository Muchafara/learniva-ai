'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiChat, HiClock, HiCheckCircle } from 'react-icons/hi'

const supportChannels = [
  {
    icon: HiChat,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: 'Usually within 2 minutes',
    buttonText: 'Start Chat',
    color: 'blue'
  },
  {
    icon: HiMail,
    title: 'Email Support',
    description: 'Send us a detailed message about your issue',
    availability: '24/7',
    responseTime: 'Usually within 2 hours',
    buttonText: 'Send Email',
    color: 'purple'
  },
  {
    icon: HiPhone,
    title: 'Phone Support',
    description: 'Speak directly with our support specialists',
    availability: 'Mon-Fri, 9AM-6PM EST',
    responseTime: 'Immediate',
    buttonText: 'Call Now',
    color: 'green'
  }
]

const faqItems = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your email.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'What file formats do you support for note uploads?',
    answer: 'We support PDF, DOCX, JPG, PNG, and handwritten notes captured through our mobile app camera feature.'
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Absolutely. We use enterprise-grade encryption and follow strict privacy policies. Your notes and data are never shared with third parties.'
  }
]

export function ContactSupport() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  })

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Support request submitted:', formData)
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Contact Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Need personalized help? Our support team is here to assist you every step of the way
          </p>
        </motion.div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit mx-auto mb-6">
                <channel.icon className="w-6 h-6 text-black dark:text-white" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
                {channel.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {channel.description}
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <HiClock className="w-4 h-4 mr-2" />
                  {channel.availability}
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <HiCheckCircle className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-300" />
                  {channel.responseTime}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 btn-primary"
              >
                {channel.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="simple-card simple-glow rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => handleFAQToggle(index)}
                    className="w-full px-6 py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
                  >
                    {faq.question}
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
