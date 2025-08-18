'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMenu, HiX, HiSparkles, HiChevronDown } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navigation = [
  {
    title: 'Product',
    path: '/product',
    hasDropdown: true,
    items: [
      { title: 'Learniva Individual', path: '/learniva-individual', description: 'Personal learning companion powered by AI' },
      { title: 'Learniva Enterprise', path: '/learniva-enterprise', description: 'Team collaboration and knowledge management' },
      { title: 'Features Overview', path: '/features-overview', description: 'Complete feature breakdown and integrations' },
      { title: 'API Documentation', path: '/api-docs', description: 'Integrate Learniva into your workflow' },
    ]
  },
  { title: 'Pricing', path: '/pricing' },
  {
    title: 'Resources',
    path: '/resources',
    hasDropdown: true,
    items: [
      { title: 'Blog', path: '/blog', description: 'Latest insights and learning strategies' },
      { title: 'Documentation', path: '/docs', description: 'Complete guides and tutorials' },
      { title: 'Help Center', path: '/help', description: 'Find answers to common questions' },
      { title: 'Community', path: '/community', description: 'Connect with other learners' },
      { title: 'Case Studies', path: '/case-studies', description: 'Success stories from our users' },
    ]
  },
  {
    title: 'Company',
    path: '/company',
    hasDropdown: true,
    items: [
      { title: 'About', path: '/about', description: 'Learn about our mission and team' },
      { title: 'Careers', path: '/careers', description: 'Join our team and build the future of learning' },
      { title: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      { title: 'Partners', path: '/partners', description: 'Explore our partnership opportunities' },
    ]
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
      if (!(event.target as HTMLElement).closest('.menu-btn')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (title: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const cancelMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  return (
    <header className="h-14 relative z-50">
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-lg transition-all duration-300 z-[100] nav-shadow ${
          mobileMenuOpen ? "shadow-2xl" : ""
        } ${activeDropdown ? "md:rounded-t-full" : "md:rounded-full"}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {/* Desktop Logo */}
                <Image
                  src="/Logo/LearnivaAI Logo - Black.svg"
                  alt="Learniva AI"
                  width={140}
                  height={32}
                  className="hidden md:block h-8 w-auto dark:hidden"
                  priority
                />
                <Image
                  src="/Logo/LearnivaAI Logo - White.svg"
                  alt="Learniva AI"
                  width={140}
                  height={32}
                  className="hidden md:dark:block h-8 w-auto"
                  priority
                />
                {/* Mobile Logo */}
                <Image
                  src="/Logo/LearnivaAI - Logo Symbol - black.svg"
                  alt="Learniva AI"
                  width={140}
                  height={32}
                  className="block md:hidden h-8 w-auto dark:hidden"
                  priority
                />
                <Image
                  src="/Logo/LearnivaAI - Logo Symbol - White.svg"
                  alt="Learniva AI"
                  width={140}
                  height={32}
                  className="hidden dark:block md:hidden h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <ThemeToggle />
              <button
                aria-label="Toggle mobile menu"
                className="menu-btn group p-2 ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <HiX className="w-5 h-5 pointer-events-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                ) : (
                  <HiMenu className="w-5 h-5 pointer-events-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                )}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-center flex-1" ref={dropdownRef}>
              <ul className="flex items-center space-x-8">
                {navigation.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
                    onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                  >
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 flex items-center gap-1 py-2 transition-all cursor-pointer"
                          onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                          aria-expanded={activeDropdown === item.title}
                          aria-label={`View ${item.title} options`}
                        >
                          {item.title}
                          <HiChevronDown className={`w-4 h-4 transition-all duration-300 ${
                            activeDropdown === item.title ? 'rotate-180 text-black dark:text-white' : ''
                          }`} />
                        </button>
                      </>
                    ) : (
                      <Link 
                        href={item.path} 
                        className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 block py-2 transition-all"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Link href="/signin" className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Sign In
              </Link>
              <Link href="/demo" className="relative overflow-hidden px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10">Get Demo</span>
              </Link>
            </div>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 right-0 bg-white dark:bg-black backdrop-blur-md rounded-b-2xl shadow-xl dropdown-shadow overflow-hidden"
                onMouseEnter={cancelMouseLeave}
                onMouseLeave={handleMouseLeave}
              >
                <div className="container-custom py-6">
                  {navigation.map((item, idx) => (
                    item.hasDropdown && activeDropdown === item.title && (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {item.items?.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group block p-4 rounded-xl backdrop-blur-sm transition-all duration-200"
                          >
                            <div className="font-medium text-gray-600 dark:text-gray-400 text-sm group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                              {subItem.title}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors leading-relaxed">
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {navigation.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <button
                        className="flex items-center justify-between w-full font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200 py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      >
                        {item.title}
                        {item.hasDropdown && (
                          <HiChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {item.hasDropdown && activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-800"
                          >
                            {item.items?.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-all duration-200"
                              >
                                <div className="font-medium mb-1">{subItem.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                    <Link
                      href="/signin"
                      className="block w-full text-center px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/demo"
                      className="block w-full text-center px-3 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}