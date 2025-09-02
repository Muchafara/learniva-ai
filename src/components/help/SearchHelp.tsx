'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiSearch, HiSparkles } from 'react-icons/hi'

const popularSearches = [
  'How to upload notes',
  'AI flashcards',
  'Account settings',
  'Billing questions',
  'Mobile app',
  'Integration setup'
]

export function SearchHelp() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query)
    // Trigger search
    console.log('Searching for:', query)
  }

  return (
    <section className="section-padding-sm bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className={`relative transition-all duration-300 ${
              isFocused ? 'transform scale-105' : ''
            }`}>
              <HiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search for help articles, guides, or ask a question..."
                className="w-full pl-16 pr-16 py-6 text-lg simple-border rounded-2xl focus:ring-4 focus:ring-black/20 dark:focus:ring-white/20 simple-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-all duration-300 group"
              >
                <HiSparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </form>

          {/* AI Search Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0.7 }}
            className="text-center mt-4"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
              <HiSparkles className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
              Powered by AI - Ask questions in natural language
            </p>
          </motion.div>
        </motion.div>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Popular searches
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {popularSearches.map((search, index) => (
              <motion.button
                key={search}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePopularSearch(search)}
                className="px-6 py-3 simple-card text-gray-700 dark:text-gray-300 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium"
              >
                {search}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="simple-card simple-glow rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-2">
              Can't find what you're looking for?
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get in touch with our support team
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
          
          <div className="simple-card simple-glow rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-2">
              Want to learn more?
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Check out our comprehensive guides
            </p>
            <button className="btn-secondary">
              View Guides
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
