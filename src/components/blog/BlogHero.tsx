'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export function BlogHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  return (
    <>
      <style jsx>{`
        .cursor-spotlight {
          mask-image: ${isHovering 
            ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 100%)`};
          -webkit-mask-image: ${isHovering 
            ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)`
            : `radial-gradient(circle 0px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 100%)`};
          transition: mask-image 0.3s ease-out, -webkit-mask-image 0.3s ease-out;
        }
        .custom-cursor {
          left: ${mousePosition.x - 8}px;
          top: ${mousePosition.y - 8}px;
        }
      `}</style>
      <section 
        className="relative pt-24 md:pt-0 bg-white dark:bg-black min-h-screen flex items-center overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 cursor-spotlight z-0">
          <Image
            src="/Hero/Hero Pattern - 2.svg"
            alt=""
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
        </div>

        {/* Custom Cursor */}
        {isHovering && (
          <div className="absolute pointer-events-none z-20 w-4 h-4 bg-black dark:bg-white rounded-full transition-transform duration-100 scale-125 custom-cursor" />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6"
          >
            The Learniva AI{' '}
            <span className="text-black dark:text-white">
              Blog
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Insights, updates, and thought leadership on AI-powered education, learning technologies, 
            and the future of digital learning experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-80 px-6 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <button className="absolute right-2 top-2 px-4 py-1 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
