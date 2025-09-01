'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 5s
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl w-full mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-2xl w-full mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
          <input 
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email</label>
          <input 
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@company.com"
            className="w-full px-3 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Company</label>
          <input 
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-3 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Subject</label>
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="sales">Sales & Pricing</option>
            <option value="support">Technical Support</option>
            <option value="partnership">Partnership</option>
            <option value="demo">Request Demo</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
            className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex-1 relative overflow-hidden px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </form>
  )
}
