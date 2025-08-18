'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'

export function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerNavigation = {
    features: [
      { name: 'Note-to-Animation Technology', href: '/#features' },
      { name: 'Personalized Flashcards', href: '/#features' },
      { name: 'Learning Analytics', href: '/#features' },
      { name: 'Multimodal Input Support', href: '/#features' },
      { name: 'Cross-Platform Access', href: '/#features' },
      { name: 'AI Grading & Assessment', href: '/#features' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Getting Started', href: '/getting-started' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Community', href: '/community' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
  }

  const socialMediaLinks = [
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    // Removed GitHub icon
  ]

  function ThemeToggle() {
    return (
      <div className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-md p-1">
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'light' 
              ? 'bg-white shadow-sm text-gray-900' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
          aria-label="Light mode"
        >
          <HiSun className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'dark' 
              ? 'bg-gray-800 shadow-sm text-white' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
          aria-label="Dark mode"
        >
          <HiMoon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'system' 
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
          aria-label="System mode"
        >
          <HiDesktopComputer className="w-4 h-4" />
        </button>
      </div>
    )
  }

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="w-[95vw] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 lg:gap-x-1 lg:gap-y-2">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="mb-2">
                <Link href="/" className="flex items-center">
                  {mounted && (
                    <Image
                      src={theme === 'dark' ? '/Logo/LearnivaAI - Logo Symbol - White.svg' : '/Logo/LearnivaAI - Logo Symbol - black.svg'}
                      alt="Learniva AI"
                      width={140}
                      height={32}
                      className="h-8 w-auto"
                    />
                  )}
                  {!mounted && (
                    <span className="text-2xl font-bold text-black dark:text-white font-poppins">
                      Learniva
                    </span>
                  )}
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2 max-w-md leading-relaxed">
                Transforming Education through personalized intelligence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1 mb-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm">support@learniva.ai</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm">Educational Technology Hub, San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 mb-2">
                {socialMediaLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Second cell */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Features */}
                <div className="mb-3 flex-1">
                  <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-3">
                    Features
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {footerNavigation.features.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Resources */}
                <div className="mb-3 flex-1">
                  <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-3">
                    Resources
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {footerNavigation.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Company */}
                <div className="mb-3 flex-1">
                  <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-3">
                    Company
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {footerNavigation.company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 gap-y-2">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} Learniva AI, Inc.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
