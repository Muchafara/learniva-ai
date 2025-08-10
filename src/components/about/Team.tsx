'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Team() {
  const teamMembers = [
    {
      name: 'Anthony Maniko',
      role: 'Founder | CEO',
      image: '/Team/Team-Light.jpg',
      bio: 'Visionary leader driving the future of AI-powered education and transforming learning experiences globally.'
    },
    {
      name: 'Dabwitso Mweemba',
      role: 'Co-Founder | CTO',
      image: '/Team/Team-Light.jpg',
      bio: 'Technology expert leading the development of innovative AI solutions for personalized learning platforms.'
    },
    {
      name: 'Marlyn Estrada',
      role: 'Co-founder | Product Manager',
      image: '/Team/Team-Light.jpg',
      bio: 'Product strategist focused on creating intuitive and impactful learning experiences for students and educators.'
    },
    {
      name: 'Valjete Hoxha',
      role: 'Co-founder | Program Developer',
      image: '/Team/Team-Light.jpg',
      bio: 'Program development specialist designing comprehensive educational programs and learning pathways.'
    }
  ]

  return (
    <section className="section-padding-sm bg-white dark:bg-black relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our diverse team of educators, engineers, and innovators is dedicated to transforming the future of learning through AI-powered technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-h-[300px] bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-md p-6"
            >
              <div className="flex flex-col h-full space-y-6">
                <div className="relative mx-auto">
                  <div className="relative w-20 h-20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="80px"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 text-center">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
