'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export function AboutHero() {
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
        className="relative min-h-screen w-full overflow-hidden cursor-none bg-white dark:bg-black"
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

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-2">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Building the Future of{' '}
          <span className="block text-gray-900 dark:text-white">
            African Education
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We're on a mission to revolutionize education across Africa through AI-powered learning solutions that make quality education accessible to everyone, everywhere.
        </motion.p>
      </div>
    </section>
    </>
  )
}
