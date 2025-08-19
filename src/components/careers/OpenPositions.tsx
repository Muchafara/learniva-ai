'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { HiCode, HiDesktopComputer, HiUsers, HiChartBar, HiLightningBolt, HiExternalLink, HiX, HiLocationMarker, HiBriefcase, HiAcademicCap } from 'react-icons/hi'

const departments = [
  {
    name: 'Engineering',
    icon: HiCode,
    positions: [
      {
        title: 'Senior Full-Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Build scalable web applications using Next.js, React, and Node.js'
      },
      {
        title: 'ML Engineer',
        location: 'Remote',
        type: 'Full-time', 
        experience: '3+ years',
        description: 'Develop and deploy machine learning models for educational content generation'
      },
      {
        title: 'DevOps Engineer',
        location: 'Remote',
        type: 'Full-time',
        experience: '4+ years',
        description: 'Manage cloud infrastructure and CI/CD pipelines'
      }
    ]
  },
  {
    name: 'Product & Design',
    icon: HiDesktopComputer,
    positions: [
      {
        title: 'Product Manager',
        location: 'Remote',
        type: 'Full-time',
        experience: '4+ years',
        description: 'Drive product strategy and roadmap for AI-powered learning features'
      },
      {
        title: 'UX/UI Designer',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Design intuitive user experiences for educational technology'
      }
    ]
  },
  {
    name: 'Go-to-Market',
    icon: HiChartBar,
    positions: [
      {
        title: 'Head of Marketing',
        location: 'Remote',
        type: 'Full-time',
        experience: '6+ years',
        description: 'Lead marketing strategy and brand development for global expansion'
      },
      {
        title: 'Customer Success Manager',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Ensure customer satisfaction and drive product adoption'
      }
    ]
  },
  {
    name: 'Operations',
    icon: HiUsers,
    positions: [
      {
        title: 'People Operations Manager',
        location: 'Remote',
        type: 'Full-time',
        experience: '4+ years',
        description: 'Build and scale HR processes for a fast-growing remote team'
      }
    ]
  }
]

export function OpenPositions() {
  const [selectedPosition, setSelectedPosition] = useState<{
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    department: string;
  } | null>(null)

  const openModal = (position: any, departmentName: string) => {
    setSelectedPosition({ ...position, department: departmentName })
  }

  const closeModal = () => {
    setSelectedPosition(null)
  }

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Open{' '}
            <span className="text-gray-900 dark:text-white">
              Positions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our growing team and help us build the next generation of AI-powered learning experiences.
          </p>
        </motion.div>

        <div className="space-y-12">
          {departments.map((department, deptIndex) => (
            <motion.div
              key={department.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg mr-4">
                    <department.icon className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {department.name}
                  </h3>
                  <div className="ml-4 bg-white/10 dark:bg-white/5 backdrop-blur-md text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium">
                    {department.positions.length} {department.positions.length === 1 ? 'position' : 'positions'}
                  </div>
                </div>

                <div className="space-y-4">
                  {department.positions.map((position, posIndex) => (
                    <motion.div
                      key={position.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (deptIndex * 0.1) + (posIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      {/* Main List Item */}
                      <div 
                        className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10"
                        onClick={() => openModal(position, department.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {position.title}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <span className="bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs font-medium">
                                {position.location}
                              </span>
                              <span className="bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs font-medium">
                                {position.type}
                              </span>
                              <span className="bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs font-medium">
                                {position.experience}
                              </span>
                            </div>
                          </div>
                          <HiExternalLink className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Don't see your role? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="min-h-[240px] bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-8">
            <div className="flex flex-col h-full space-y-6 items-center justify-center">
              <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg">
                <HiLightningBolt className="h-8 w-8 text-black dark:text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Don't See Your Role?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  We're always looking for exceptional talent. If you're passionate about AI and education, we'd love to hear from you.
                </p>
              </div>
              <Link href="/careers/apply" className="relative overflow-hidden px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
                <span className="relative z-10">Send Us Your Resume</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Click Modal */}
        {selectedPosition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-black rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-900">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPosition.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {selectedPosition.department}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  title="Close modal"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <HiX className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Position Details */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                    <HiLocationMarker className="h-4 w-4" />
                    {selectedPosition.location}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                    <HiBriefcase className="h-4 w-4" />
                    {selectedPosition.type}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                    <HiAcademicCap className="h-4 w-4" />
                    {selectedPosition.experience}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    About This Role
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedPosition.description}
                  </p>
                </div>

                {/* Sample Requirements/Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What You'll Do
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lead product development and feature implementation
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborate with cross-functional teams
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Drive innovation and technical excellence
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(selectedPosition.title)}&dept=${encodeURIComponent(selectedPosition.department)}&location=${encodeURIComponent(selectedPosition.location)}&type=${encodeURIComponent(selectedPosition.type)}`}
                    className="flex-1 text-center relative overflow-hidden px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={closeModal}
                  >
                    <span className="relative z-10">Apply Now</span>
                  </Link>
                  <button 
                    onClick={closeModal}
                    className="flex-1 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
