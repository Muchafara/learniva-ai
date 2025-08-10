'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiUpload, HiSparkles, HiAcademicCap } from 'react-icons/hi'
import { Navigation } from '@/components/layout/Navigation'

export function Hero() {
  const [dragActive, setDragActive] = useState(false)
  const [currentStage, setCurrentStage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const stages = [
    { label: 'Students', index: 0 },
    { label: 'Educators', index: 1 },
    { label: 'Institutions', index: 2 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background using framer-motion, black/white based on theme */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Black/white animated circles for light/dark mode */}
        <motion.div
          className="absolute rounded-full blur-2xl bg-black/10 dark:bg-white/10"
          style={{ width: 400, height: 400, top: 40, left: -100 }}
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl bg-black/5 dark:bg-white/5"
          style={{ width: 300, height: 300, bottom: 0, right: -80 }}
          animate={{ x: [0, 60, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl bg-black/20 dark:bg-white/20"
          style={{ width: 200, height: 200, top: 200, right: 100 }}
          animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </motion.div>
      {/* Overlay gradients for light/dark mode */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-black/60 dark:to-black" />
      </div>

      {/* Navigation - positioned absolutely at top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navigation />
      </div>

      {/* Hero Content - positioned lower in viewport */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 md:pt-32">
        {/* Onboarding Stages - Animated Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8 flex flex-col items-center space-y-4"
        >
          {/* Dynamic Stage Label */}
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {stages[currentStage].label}
            </span>
          </motion.div>

          {/* Stage Dots */}
          <div className="flex items-center space-x-2">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentStage 
                    ? 'w-8 bg-black dark:bg-white' // Current stage - wider and active color
                    : index < currentStage
                    ? 'w-2 bg-gray-400 dark:bg-gray-600' // Completed stages
                    : 'w-2 bg-gray-300 dark:bg-gray-700' // Future stages
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8 drop-shadow-lg"
        >
          Unlock Smarter Learning with <br />
          AI Innovation.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          AI-powered platform for personalized, interactive learning with adaptive content, smart assessments, and real-time insights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/signin" className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Sign In
          </Link>
          <Link href="/demo" className="relative overflow-hidden px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="relative z-10">Get Demo</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
