'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
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
      { title: 'Features Overview', path: '/features', description: 'Complete feature breakdown and integrations' },
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
  const { theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      // Check if click is outside any desktop dropdown
      const clickedOutsideDropdown = Object.values(dropdownRefs.current).every(
        ref => !ref || !ref.contains(target)
      )
      
      // Close desktop dropdowns if clicked outside
      if (clickedOutsideDropdown && window.innerWidth >= 768) {
        setActiveDropdown(null)
      }
      
      // Close mobile menu if clicked outside menu button and nav area
      if (!target.closest('.menu-btn') && !target.closest('nav')) {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    // Close mobile menu when screen size changes to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
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
          mobileMenuOpen ? "shadow-2xl rounded-t-2xl" : "rounded-full"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {mounted ? (
                  <>
                    {/* Desktop full logo */}
                    <Image
                      src={theme === 'dark' ? '/Logo/LearnivaAI Logo - White.svg' : '/Logo/LearnivaAI Logo - Black.svg'}
                      alt="Learniva AI"
                      width={140}
                      height={32}
                      className="hidden md:block h-8 w-auto"
                      priority
                    />
                    {/* Mobile symbol */}
                    <Image
                      src={theme === 'dark' ? '/Logo/LearnivaAI - Logo Symbol - White.svg' : '/Logo/LearnivaAI - Logo Symbol - black.svg'}
                      alt="Learniva AI"
                      width={32}
                      height={32}
                      className="block md:hidden h-8 w-8"
                      priority
                    />
                  </>
                ) : (
                  <span className="text-xl font-bold text-black dark:text-white">Learniva</span>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <ThemeToggle />
              <button
                aria-label="Toggle mobile menu"
                className="menu-btn group p-2 ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-[101]"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen)
                  if (mobileMenuOpen) {
                    setActiveDropdown(null)
                  }
                }}
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
                    <HiMenu className="w-5 h-5 pointer-events-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  </span>
                  <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
                    <HiX className="w-5 h-5 pointer-events-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-8">
                {navigation.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
                    onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                  >
                    {item.hasDropdown ? (
                      <div
                        className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 flex items-center gap-1 py-2 transition-all cursor-pointer"
                        aria-label={`View ${item.title} options`}
                      >
                        {item.title}
                        <HiChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          activeDropdown === item.title ? 'rotate-180 text-black dark:text-white' : ''
                        }`} />
                      </div>
                    ) : (
                      <Link 
                        href={item.path} 
                        className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 block py-2 transition-all"
                      >
                        {item.title}
                      </Link>
                    )}

                    {/* Individual Dropdown Menu */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            ref={(el) => { dropdownRefs.current[item.title] = el; }}
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-black backdrop-blur-md rounded-xl shadow-xl dropdown-shadow overflow-hidden min-w-[280px] max-w-[400px] z-[110]"
                            onMouseEnter={cancelMouseLeave}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="py-4 px-2">
                              <div className="grid grid-cols-1 gap-1">
                                {item.items?.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={subItem.path}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                                  >
                                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm group-hover:text-black dark:group-hover:text-white transition-colors mb-1">
                                      {subItem.title}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-relaxed">
                                      {subItem.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

                      {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="md:hidden overflow-hidden bg-white/60 dark:bg-black/60 backdrop-blur-md"
                style={{
                  marginLeft: '-1rem',
                  marginRight: '-1rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem'
                }}
              >
                <div className="border-t border-gray-200/50 dark:border-gray-700/50 py-6 space-y-2 px-4">
                  {navigation.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      {item.hasDropdown ? (
                        <button
                          className="flex items-center justify-between w-full font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200 py-3 px-2 rounded-lg hover:bg-white/40 dark:hover:bg-black/40 transition-all"
                          onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        >
                          {item.title}
                          <HiChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                          className="block w-full font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200 py-3 px-2 rounded-lg hover:bg-white/40 dark:hover:bg-black/40 transition-all"
                        >
                          {item.title}
                        </Link>
                      )}
                      
                      <AnimatePresence>
                        {item.hasDropdown && activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-4 space-y-1 border-l-2 border-gray-300/50 dark:border-gray-600/50 pl-4 overflow-hidden"
                          >
                            {item.items?.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.path}
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                                className="block py-3 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-black hover:bg-white/30 dark:hover:text-white dark:hover:bg-black/30 transition-all duration-200"
                              >
                                <div className="font-medium mb-1">{subItem.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  
                  {/* CTA Buttons for Mobile */}
                  <div className="pt-8 mt-6 border-t border-gray-300/50 dark:border-gray-600/50 space-y-3">
                    <Link
                      href="/signin"
                      className="block w-full text-center px-4 py-3 text-sm font-medium bg-white/50 dark:bg-black/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-200 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveDropdown(null)
                      }}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/demo"
                      className="block w-full text-center px-4 py-3 text-sm font-medium bg-black/90 dark:bg-white/90 text-white dark:text-black rounded-xl hover:bg-black dark:hover:bg-white transition-all duration-200 shadow-lg"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveDropdown(null)
                      }}
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