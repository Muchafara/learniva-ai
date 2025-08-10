'use client'

import React, { ReactNode, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface ModernCardProps {
  children?: ReactNode
  className?: string
  enableHover?: boolean
  gradient?: boolean
  icon?: React.ComponentType<{ className?: string }>
  title?: string
  description?: string
  darkInLight?: boolean // New prop to make cards black in light mode
}

export function ModernCard({ 
  children, 
  className = '', 
  enableHover = true, 
  gradient = false,
  icon,
  title,
  description,
  darkInLight = false
}: ModernCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableHover || !cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    if (enableHover) setIsHovering(true)
  }

  const handleMouseLeave = () => {
    if (enableHover) setIsHovering(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative p-8 rounded-md backdrop-blur-md
        ${darkInLight 
          ? 'bg-white/95 dark:bg-black/95' 
          : 'bg-white/95 dark:bg-black/95'
        }
        shadow-lg shadow-black/5 dark:shadow-white/5
        transition-all duration-300 overflow-hidden border border-gray-100/50 dark:border-gray-800/50
        ${enableHover ? 'hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10 hover:-translate-y-1' : 'shadow-lg'}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={enableHover ? { y: -2, scale: 1.02 } : undefined}
    >
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-6">
            {/* Icon container matching features section style */}
            <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
              <div className="text-black dark:text-white">
                {React.createElement(icon, { className: "w-6 h-6" })}
              </div>
            </div>
          </div>
        )}
        
        {title && (
          <h3 className={`text-xl font-semibold mb-3 font-poppins ${
            darkInLight 
              ? 'text-gray-900 dark:text-white' 
              : 'text-gray-900 dark:text-white'
          }`}>
            {title}
          </h3>
        )}
        
        {description && (
          <p className={`mb-6 text-base leading-relaxed ${
            darkInLight 
              ? 'text-gray-600 dark:text-gray-300' 
              : 'text-gray-600 dark:text-gray-300'
          }`}>
            {description}
          </p>
        )}
        
        {children}
      </div>
    </motion.div>
  )
}
