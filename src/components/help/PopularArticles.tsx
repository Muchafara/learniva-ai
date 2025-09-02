'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiEye, HiThumbUp } from 'react-icons/hi'

const popularArticles = [
  {
    title: 'How to Upload and Process Your First Notes',
    description: 'A complete step-by-step guide to getting started with Learniva AI, from account creation to processing your first set of notes.',
    readTime: '5 min read',
    views: '12.5k',
    helpful: 245,
    category: 'Getting Started',
    lastUpdated: '2 days ago',
    blogId: 2 // Links to Note-to-Animation blog post
  },
  {
    title: 'Creating Effective AI Flashcards from Your Notes',
    description: 'Learn how to leverage our AI to generate intelligent flashcards that adapt to your learning style and improve retention.',
    readTime: '8 min read',
    views: '9.2k',
    helpful: 189,
    category: 'AI Features',
    lastUpdated: '1 week ago',
    blogId: 3 // Links to Personalized Flashcards blog post
  },
  {
    title: 'Understanding Your Learning Analytics Dashboard',
    description: 'Make sense of your progress data and learning patterns to optimize your study sessions and track improvement over time.',
    readTime: '6 min read',
    views: '7.8k',
    helpful: 156,
    category: 'Analytics',
    lastUpdated: '3 days ago',
    blogId: 1 // Links to AI-Powered Learning blog post
  },
  {
    title: 'Troubleshooting Common Upload Issues',
    description: 'Quick solutions to the most common problems users face when uploading handwritten or digital notes to the platform.',
    readTime: '4 min read',
    views: '15.3k',
    helpful: 298,
    category: 'Troubleshooting',
    lastUpdated: '5 days ago',
    blogId: 7 // Links to Accessible Learning Experiences blog post
  },
  {
    title: 'Setting Up Team Collaboration and Sharing',
    description: 'Guide to creating study groups, sharing notes and flashcards, and collaborating effectively with classmates or colleagues.',
    readTime: '7 min read',
    views: '6.1k',
    helpful: 134,
    category: 'Collaboration',
    lastUpdated: '1 week ago',
    blogId: 8 // Links to Migration Success Stories blog post
  },
  {
    title: 'Mobile App Features and Offline Study',
    description: 'Discover how to use Learniva AI on your mobile device and access your study materials even without an internet connection.',
    readTime: '5 min read',
    views: '8.9k',
    helpful: 167,
    category: 'Mobile App',
    lastUpdated: '4 days ago',
    blogId: 9 // Links to Psychology of Interactive Learning blog post
  }
]

export function PopularArticles() {
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
            Popular Help Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The most helpful and frequently accessed articles from our knowledge base
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
            >
              <Link href={`/blog/${article.blogId}`}>
                {/* Category and Update Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium simple-card text-gray-600 dark:text-gray-300 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {article.lastUpdated}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <HiClock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <HiEye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <HiThumbUp className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                    {article.helpful}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Help Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
