'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  index?: number
}

export function Card({ children, className = '', hover = true, gradient = false, index = 0 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover || !cardRef.current || !shadowRef.current) return
    
    const { left, top } = cardRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    shadowRef.current.style.top = `${y}px`
    shadowRef.current.style.left = `${x}px`
    shadowRef.current.style.transform = "translate(-50%, -50%)";
    (cardRef.current as any).style = `--cursor-x: ${x}px; --cursor-y: ${y}px`
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative z-0 group overflow-hidden h-full rounded-md transition-all duration-300 ${className}`}
    >
      {/* No gradient overlay on hover */}
      
      <div className="relative z-10 p-6 h-full">
        {children}
      </div>
      
      {/* No hover gradient effect */}
      
      <div className="absolute inset-[1px] -z-10 rounded-md bg-white dark:bg-black" />
    </div>
  )
}

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight?: string
  index?: number
}

export function IconCard({ icon: Icon, title, description, highlight, index = 0 }: IconCardProps) {
  return (
    <Card index={index} className="min-h-[240px] bg-white/10 dark:bg-white/5 backdrop-blur-md">
      <div className="flex flex-col h-full space-y-6">
        <div className="relative">
          {/* Icon container matching active course card style */}
          <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit">
            <Icon className="w-6 h-6 text-black dark:text-white" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
              {title}
            </h3>
            {highlight && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                {highlight}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  )
}
