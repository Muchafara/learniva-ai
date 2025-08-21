'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { useState, useEffect, useRef } from 'react'

const stats = [
  { number: '50K+', label: 'Students Worldwide' },
  { number: '100+', label: 'Educational Institutions' },
  { number: '1M+', label: 'Notes Transformed' },
  { number: '98%', label: 'Learning Improvement' },
]

const testimonials = [
  {
    quote: "LearnivaAI completely transformed how I study. My static notes now come alive with interactive animations that make complex medical concepts actually stick. It's like having a personal tutor who understands exactly how I learn.",
    author: "Sarah Chen",
    role: "Medical Student, Stanford University",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "As an educator, I've never seen such remarkable student engagement. The AI-generated practice exercises are perfectly tailored to each topic, and my students actually enjoy studying now. LearnivaAI has revolutionized my teaching approach.",
    author: "Dr. Michael Rodriguez",
    role: "Professor of Chemistry, MIT",
    avatar: "/avatars/michael.jpg"
  },
  {
    quote: "Our institution adopted LearnivaAI Enterprise and saw a 40% increase in student performance within one semester. The analytics insights help us identify learning gaps early and provide personalized support. It's truly game-changing.",
    author: "Jennifer Park",
    role: "Dean of Academic Affairs, UC Berkeley",
    avatar: "/avatars/jennifer.jpg"
  },
]

export function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-advance functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000) // Change testimonial every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  // Pause auto-play temporarily when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)
  }

  const nextTestimonial = () => {
    pauseAutoPlay()
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    pauseAutoPlay()
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    pauseAutoPlay()
    setCurrentTestimonial(index)
  }

  return (
    <section className="section-padding-sm bg-white dark:bg-black relative">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
            What People Are Saying About LearnivaAI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories and feedback from students, educators, and institutions using LearnivaAI.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => { setIsHovered(true); setIsAutoPlaying(false); }}
          onMouseLeave={() => { setIsHovered(false); setIsAutoPlaying(true); }}
        >
          
          {/* Carousel Container */}
          <div className="relative h-96 flex items-center justify-center">
            {/* All Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentTestimonial
                const offset = index - currentTestimonial
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out ${
                      isActive ? 'z-20' : 'z-10'
                    }`}
                    animate={{
                      x: offset * 300,
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.3,
                      filter: isActive ? 'blur(0px)' : 'blur(2px)',
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className={`min-h-[240px] min-w-[240px] max-w-xs bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-5 flex flex-col items-center justify-center ${
                      isActive ? 'shadow-2xl' : 'shadow-xl'
                    }`}>
                      {/* Quote Icon */}
                      <div className="flex-shrink-0 flex justify-center items-center mb-2">
                        <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <blockquote className="text-sm italic text-gray-700 dark:text-gray-300 mb-3 leading-snug">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col items-center">
                          <div className="font-bold text-gray-900 dark:text-white text-xs mb-0.5">
                            {testimonial.author}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Navigation Controls - Only visible on hover (without play/pause) */}
          <motion.div 
            className="flex items-center justify-center mt-8 space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2 hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-4">
                {testimonials.map((_, index) => {
                  const isActive = currentTestimonial === index
                  return (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={isActive ? 'true' : undefined}
                      className="group w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 bg-black/10 dark:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {isActive ? (
                        <HiCheck className="w-3.5 h-3.5 text-black dark:text-white" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2 hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
        </div>
      </div>
    </section>
  )
}