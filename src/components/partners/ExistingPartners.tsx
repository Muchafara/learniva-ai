'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Harvard University',
    logo: '/Instituions/HARVARD.svg',
    type: 'Educational Institution',
    description: 'Pioneering AI-enhanced learning methodologies'
  },
  {
    name: 'University of Zambia',
    logo: '/Instituions/UNZA.svg',
    type: 'Educational Institution', 
    description: 'Advancing education technology in Africa'
  },
  {
    name: 'African Leadership University',
    logo: '/Instituions/ALU.svg',
    type: 'Educational Institution',
    description: 'Developing next-generation African leaders'
  },
  {
    name: 'Copperbelt University',
    logo: '/Instituions/CBU.svg',
    type: 'Educational Institution',
    description: 'Innovation in mining and engineering education'
  },
  {
    name: 'University of Lusaka',
    logo: '/Instituions/UNILUS.svg',
    type: 'Educational Institution',
    description: 'Excellence in business and technology education'
  },
  {
    name: 'Whitman College',
    logo: '/Instituions/WHITMAN COLLEGE.svg',
    type: 'Educational Institution',
    description: 'Liberal arts education enhanced by AI'
  }
]

export function ExistingPartners() {
  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're proud to work with leading institutions and organizations worldwide
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-6 h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain filter dark:invert group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-3">
                  {partner.type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
