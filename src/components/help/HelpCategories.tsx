'use client'

import { motion } from 'framer-motion'
import { HiUpload, HiSparkles, HiCog, HiCreditCard, HiDeviceMobile, HiSupport, HiBookOpen, HiUsers } from 'react-icons/hi'

const categories = [
  {
    icon: HiUpload,
    title: 'Getting Started',
    description: 'Learn the basics of using Learniva AI',
    articleCount: 12,
    color: 'blue',
    articles: [
      'How to create your first account',
      'Uploading your first notes',
      'Understanding the dashboard',
      'Basic AI features overview'
    ]
  },
  {
    icon: HiSparkles,
    title: 'AI Features',
    description: 'Discover all AI-powered capabilities',
    articleCount: 18,
    color: 'purple',
    articles: [
      'Creating AI flashcards',
      'Generating practice questions',
      'Using smart summarization',
      'AI-powered animations'
    ]
  },
  {
    icon: HiCog,
    title: 'Account & Settings',
    description: 'Manage your account and preferences',
    articleCount: 8,
    color: 'green',
    articles: [
      'Profile settings',
      'Privacy controls',
      'Notification preferences',
      'Data export options'
    ]
  },
  {
    icon: HiCreditCard,
    title: 'Billing & Plans',
    description: 'Subscription and payment information',
    articleCount: 10,
    color: 'yellow',
    articles: [
      'Choosing the right plan',
      'Payment methods',
      'Subscription management',
      'Billing troubleshooting'
    ]
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App',
    description: 'Using Learniva AI on mobile devices',
    articleCount: 15,
    color: 'indigo',
    articles: [
      'Mobile app installation',
      'Syncing across devices',
      'Offline functionality',
      'Mobile-specific features'
    ]
  },
  {
    icon: HiUsers,
    title: 'Collaboration',
    description: 'Working with teams and sharing content',
    articleCount: 9,
    color: 'red',
    articles: [
      'Creating study groups',
      'Sharing notes and flashcards',
      'Team permissions',
      'Collaborative features'
    ]
  },
  {
    icon: HiBookOpen,
    title: 'Integrations',
    description: 'Connect with other tools and platforms',
    articleCount: 7,
    color: 'teal',
    articles: [
      'LMS integrations',
      'Google Drive sync',
      'Notion connection',
      'API documentation'
    ]
  },
  {
    icon: HiSupport,
    title: 'Troubleshooting',
    description: 'Solve common issues and problems',
    articleCount: 14,
    color: 'orange',
    articles: [
      'Login issues',
      'Upload problems',
      'Performance optimization',
      'Error messages'
    ]
  }
]

const colorMap = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', bgLight: 'bg-blue-50 dark:bg-blue-900/20' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', bgLight: 'bg-purple-50 dark:bg-purple-900/20' },
  green: { bg: 'bg-green-500', text: 'text-green-600 dark:text-green-400', bgLight: 'bg-green-50 dark:bg-green-900/20' },
  yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-400', bgLight: 'bg-yellow-50 dark:bg-yellow-900/20' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', bgLight: 'bg-indigo-50 dark:bg-indigo-900/20' },
  red: { bg: 'bg-red-500', text: 'text-red-600 dark:text-red-400', bgLight: 'bg-red-50 dark:bg-red-900/20' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', bgLight: 'bg-teal-50 dark:bg-teal-900/20' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600 dark:text-orange-400', bgLight: 'bg-orange-50 dark:bg-orange-900/20' }
}

export function HelpCategories() {
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
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find the help you need organized by topic and feature area
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="simple-card simple-glow rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
            >
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full simple-card text-gray-600 dark:text-gray-300">
                  {category.articleCount} articles
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {category.description}
              </p>

              {/* Popular Articles */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Popular Articles:
                </h4>
                <ul className="space-y-1">
                  {category.articles.slice(0, 3).map((article, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors duration-200">
                      • {article}
                    </li>
                  ))}
                </ul>
                {category.articles.length > 3 && (
                  <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline">
                    View all {category.articleCount} articles
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center simple-card simple-glow rounded-2xl p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Chat with Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Email Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
