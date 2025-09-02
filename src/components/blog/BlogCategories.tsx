'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  { name: 'All Posts', slug: 'all' },
  { name: 'AI & Education', slug: 'ai-education' },
  { name: 'Product Updates', slug: 'product-updates' },
  { name: 'Learning Science', slug: 'learning-science' },
  { name: 'Customer Stories', slug: 'customer-stories' },
  { name: 'Industry Insights', slug: 'industry-insights' }
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.slug
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
