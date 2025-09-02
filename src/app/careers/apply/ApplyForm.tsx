'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function ApplyForm() {
  const searchParams = useSearchParams()
  const prefilled = useMemo(() => ({
    role: searchParams.get('role') || '',
    department: searchParams.get('dept') || '',
    location: searchParams.get('location') || '',
    employmentType: searchParams.get('type') || ''
  }), [searchParams])

  const [fullName, setFullName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [portfolioUrl, setPortfolioUrl] = useState('')
  const [coverLetter, setCoverLetter] = useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert('Thanks for your interest! This demo form is not wired to a backend yet.')
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Position Summary */}
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Position</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500 dark:text-gray-400">Role</div>
            <div className="text-gray-900 dark:text-white font-medium">{prefilled.role || 'General Application'}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Department</div>
            <div className="text-gray-900 dark:text-white font-medium">{prefilled.department || 'N/A'}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Location</div>
            <div className="text-gray-900 dark:text-white font-medium">{prefilled.location || 'Remote'}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Type</div>
            <div className="text-gray-900 dark:text-white font-medium">{prefilled.employmentType || '—'}</div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <form onSubmit={handleSubmit} className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6 border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">LinkedIn</label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/username"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Portfolio or GitHub</label>
            <input
              type="url"
              placeholder="https://..."
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Cover Letter</label>
            <textarea
              rows={6}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button type="submit" className="flex-1 relative overflow-hidden px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="relative z-10">Submit Application</span>
          </button>
        </div>
      </form>
    </div>
  )
}


