'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { 
  HiUpload, 
  HiSparkles, 
  HiAcademicCap,
  HiLightningBolt,
  HiBookOpen,
  HiClipboardCheck,
  HiChartBar,
  HiChatAlt
} from 'react-icons/hi'
import { Navigation } from '@/components/layout/Navigation'

export function Hero() {
  const [dragActive, setDragActive] = useState(false)
  const [currentStage, setCurrentStage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Floating patterns for shapes
  const shapes = {
    circle: {
      path: {
        y: [0, -80, -40, -100, 0],
        x: [0, 60, -50, 30, 0],
      },
      position: "left-[25%] top-[30%]"
    },
    square: {
      path: {
        y: [0, -60, -120, -60, 0],
        x: [0, -70, 0, 70, 0],
      },
      position: "right-[25%] top-[25%]"
    },
    triangle: {
      path: {
        y: [0, -100, -50, -150, 0],
        x: [0, 80, -80, 40, 0],
      },
      position: "left-[30%] bottom-[35%]"
    },
    rectangle: {
      path: {
        y: [0, -140, -60, -120, 0],
        x: [0, -60, 60, -30, 0],
      },
      position: "right-[20%] bottom-[25%]"
    },
    diamond: {
      path: {
        y: [0, -120, -40, -80, 0],
        x: [0, 50, -70, 60, 0],
      },
      position: "left-[45%] top-[30%]"
    }
  }

  const floatingTransition = {
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }

  const glowingStrokeClass = "border-[2px] shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]"
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll('.interactive-shape');
      shapes.forEach((shape) => {
        const rect = shape.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance between mouse and shape center
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Move shapes based on mouse proximity (closer = more movement)
        const maxDistance = 300; // Maximum distance for interaction
        if (distance < maxDistance) {
          const factor = (maxDistance - distance) / maxDistance; // 1 when close, 0 when far
          const moveX = (deltaX / distance) * factor * 20; // Max 20px movement
          const moveY = (deltaY / distance) * factor * 20;
          
          (shape as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (shape as HTMLElement).style.transform = 'translate(0, 0)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] dark:bg-[#000000]">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        {/* Random stars using radial gradients */}
        <div className="absolute inset-0 dark:opacity-100 opacity-30" 
          style={{ 
            background: `
              radial-gradient(circle at 15% 25%, rgba(0,0,0,0.2) 1px, transparent 1px),
              radial-gradient(circle at 85% 45%, rgba(0,0,0,0.2) 1px, transparent 1px),
              radial-gradient(circle at 35% 75%, rgba(0,0,0,0.2) 1px, transparent 1px),
              radial-gradient(circle at 65% 15%, rgba(0,0,0,0.2) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '250px 250px'
          }}
        />
        
        {/* Larger glowing stars */}
        <div className="absolute inset-0 dark:opacity-100 opacity-40" 
          style={{ 
            background: `
              radial-gradient(circle at 25% 35%, rgba(0,0,0,0.3) 1px, transparent 2px),
              radial-gradient(circle at 75% 65%, rgba(0,0,0,0.3) 1px, transparent 2px)
            `,
            backgroundSize: '350px 350px'
          }}
        />
      </div>

      {/* Cosmic Elements Container */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Orbital Paths - now gray for both light and dark mode */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="25"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="0.5"
            strokeDasharray="4,4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          />
          <motion.ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="20"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="0.5"
            strokeDasharray="4,4"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          />
        </svg>

        {/* Floating Planets - now gray for all modes */}
        <motion.div
          className="absolute left-[15%] top-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-gray-400/70 to-gray-600/70 backdrop-blur-sm"
          style={{ 
            boxShadow: '0 0 40px rgba(163,163,163,0.3), inset 2px 2px 20px rgba(163,163,163,0.4)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute right-[25%] top-[35%] w-32 h-32 rounded-full bg-gradient-to-br from-gray-300/80 to-gray-500/80 backdrop-blur-md"
          style={{ 
            boxShadow: '0 0 50px rgba(163,163,163,0.4), inset 2px 2px 20px rgba(163,163,163,0.4)'
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Planet Ring - gray border */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-400/40 -rotate-45 scale-[1.4] blur-[1px]" />
          <div className="absolute inset-0 rounded-full border-2 border-gray-300/30 rotate-45 scale-[1.2]" />
        </motion.div>

        <motion.div
          className="absolute left-[35%] bottom-[25%] w-28 h-28 rounded-full bg-gradient-to-br from-gray-200/70 to-gray-400/70 backdrop-blur-md"
          style={{ 
            boxShadow: '0 0 45px rgba(163,163,163,0.3), inset 2px 2px 20px rgba(163,163,163,0.4)'
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 20% 30% L 30% 40% L 40% 25% L 50% 35% L 60% 30%"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4,4"
            fill="none"
            className="text-black/10 dark:text-white/10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </motion.div>
      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60 dark:via-black/40 dark:to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/30 dark:to-black/30" />
      </div>

      {/* Navigation - positioned absolutely at top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navigation />
      </div>

      {/* Hero Content - positioned lower in viewport */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 md:pt-32 text-white">
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
                            <span className="relative z-10">Book Demo</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
