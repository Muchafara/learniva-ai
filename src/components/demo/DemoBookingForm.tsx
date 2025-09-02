'use client'

import { useState, useMemo } from 'react'

export function DemoBookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    phone: '',
    meetingPlatform: 'zoom',
    preferredDate: '',
    preferredTime: '',
    timezone: 'UTC+2',
    attendees: '1-5',
    useCase: '',
    additionalNotes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        companySize: '',
        phone: '',
        meetingPlatform: 'zoom',
        preferredDate: '',
        preferredTime: '',
        timezone: 'UTC+2',
        attendees: '1-5',
        useCase: '',
        additionalNotes: ''
      })
    }, 5000)
  }

  const demoSummary = useMemo(() => ({
    platform: formData.meetingPlatform || 'Zoom',
    date: formData.preferredDate || 'TBD',
    time: formData.preferredTime || 'TBD',
    timezone: formData.timezone || 'UTC+2',
    attendees: formData.attendees || '1-5'
  }), [formData])

  if (isSubmitted) {
    return (
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Demo Request Submitted!
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Thank you for your interest in Learniva AI. Our team will contact you within 24 hours to confirm your demo appointment.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          You'll receive a calendar invitation and meeting details shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Demo Summary */}
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Demo Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500 dark:text-gray-400">Platform</div>
            <div className="text-gray-900 dark:text-white font-medium">{demoSummary.platform}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Date</div>
            <div className="text-gray-900 dark:text-white font-medium">{demoSummary.date}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Time</div>
            <div className="text-gray-900 dark:text-white font-medium">{demoSummary.time} ({demoSummary.timezone})</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Attendees</div>
            <div className="text-gray-900 dark:text-white font-medium">{demoSummary.attendees} people</div>
          </div>
        </div>
      </div>

      {/* Demo Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="your.email@company.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Company Name</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="Your Company Inc."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="e.g., CTO, Learning Manager"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Company Size</label>
            <select
              name="companySize"
              required
              value={formData.companySize}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Number of Attendees</label>
            <select
              name="attendees"
              required
              value={formData.attendees}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <option value="1-5">1-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11-20">11-20 people</option>
              <option value="20+">20+ people</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Preferred Platform</label>
            <select
              name="meetingPlatform"
              required
              value={formData.meetingPlatform}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <option value="zoom">Zoom</option>
              <option value="google-meet">Google Meet</option>
              <option value="teams">Microsoft Teams</option>
              <option value="webex">Cisco Webex</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              required
              value={formData.preferredDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Preferred Time</label>
            <select
              name="preferredTime"
              required
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Timezone</label>
            <select
              name="timezone"
              required
              value={formData.timezone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <option value="UTC-8">UTC-8 (Pacific Time)</option>
              <option value="UTC-7">UTC-7 (Mountain Time)</option>
              <option value="UTC-6">UTC-6 (Central Time)</option>
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC">UTC (Greenwich Mean Time)</option>
              <option value="UTC+1">UTC+1 (Central European Time)</option>
              <option value="UTC+2">UTC+2 (Eastern European Time)</option>
              <option value="UTC+5:30">UTC+5:30 (India Standard Time)</option>
              <option value="UTC+8">UTC+8 (Singapore Time)</option>
              <option value="UTC+9">UTC+9 (Japan Standard Time)</option>
              <option value="UTC+10">UTC+10 (Australian Eastern Time)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Primary Use Case</label>
            <textarea
              name="useCase"
              required
              rows={3}
              value={formData.useCase}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="Describe how you plan to use Learniva AI (e.g., employee training, knowledge management, customer education)"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Additional Notes</label>
            <textarea
              name="additionalNotes"
              rows={3}
              value={formData.additionalNotes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
              placeholder="Any specific requirements, questions, or additional information you'd like to share"
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
                <span className="relative z-10">Scheduling Demo...</span>
              </div>
            ) : (
              <span className="relative z-10">Schedule Demo</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
