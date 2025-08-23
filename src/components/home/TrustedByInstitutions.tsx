'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function TrustedByInstitutions() {
  const institutions = [
    { name: 'University of Zambia', logo: '/Instituions/UNZA.svg' },
    { name: 'Copperbelt University', logo: '/Instituions/CBU.svg' },
    { name: 'African Leadership University', logo: '/Instituions/ALU.svg' },
    { name: 'Whitman College', logo: '/Instituions/WHITMAN COLLEGE.svg' },
    { name: 'Harvard University', logo: '/Instituions/HARVARD.svg' },
    { name: 'University of Lusaka', logo: '/Instituions/UNILUS.svg' }
  ]

  // Duplicate the array for seamless looping
  const duplicatedInstitutions = [...institutions, ...institutions]

  return (
    <section className="section-padding-sm bg-white dark:bg-black relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Students and educators from prestigious universities and colleges worldwide choose Learniva AI to enhance their learning experiences.
          </p>
        </motion.div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-white via-white to-transparent dark:from-black dark:via-black z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-white via-white to-transparent dark:from-black dark:via-black z-10 pointer-events-none" />
          
          {/* Scrolling Animation */}
          <motion.div
            className="flex items-center space-x-8 sm:space-x-12 md:space-x-16"
            animate={{
              x: [0, -2200] // Adjusted for better spacing
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            style={{ width: 'max-content' }}
          >
            {duplicatedInstitutions.map((institution, index) => (
              <motion.div
                key={`${institution.name}-${index}`}
                className="flex-shrink-0 transition-all duration-300"
                whileHover={{ scale: 1.05, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-16 h-8 sm:w-28 sm:h-14 md:w-32 md:h-16 flex items-center justify-center mx-2 sm:mx-4">
                  <Image
                    src={institution.logo}
                    alt={`${institution.name} logo`}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
