'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI-Powered Learning: Transforming Education with Intelligent Systems',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we learn, from personalized study paths to automated content generation.',
    category: 'AI & Education',
    author: 'Anthony Maniko',
    publishDate: '2024-12-15',
    readTime: '8 min read',
    image: '/Learniva Covers/Image 12.png',
    featured: true
  },
  {
    id: 2, 
    title: 'Introducing Note-to-Animation: Revolutionary Learning Technology',
    excerpt: 'Discover our groundbreaking feature that transforms static notes into engaging, interactive animations.',
    category: 'Product Updates',
    author: 'Dabwitso Mweemba',
    publishDate: '2024-12-10',
    readTime: '6 min read',
    image: '/Learniva Covers/Image 13.png',
    featured: true
  },
  {
    id: 3,
    title: 'How Personalized Flashcards Boost Memory Retention by 85%',
    excerpt: 'Research-backed insights into how AI-generated flashcards improve learning outcomes for students worldwide.',
    category: 'Learning Science',
    author: 'Marlyn Estrada',
    publishDate: '2024-12-05',
    readTime: '5 min read',
    image: '/Learniva Covers/Image 14.png',
    featured: false
  },
  {
    id: 4,
    title: 'Customer Success Story: Stanford University Transforms Online Learning',
    excerpt: 'Learn how Stanford University increased student engagement by 300% using Learniva AI\'s platform.',
    category: 'Customer Stories',
    author: 'Anthony Maniko',
    publishDate: '2024-11-28',
    readTime: '7 min read',
    image: '/Learniva Covers/Image 15.png',
    featured: false
  },
  {
    id: 5,
    title: 'The Science Behind Spaced Repetition and AI Learning',
    excerpt: 'Deep dive into how our AI algorithms optimize spaced repetition for maximum knowledge retention.',
    category: 'Learning Science',
    author: 'Dabwitso Mweemba',
    publishDate: '2024-11-22',
    readTime: '9 min read',
    image: '/Learniva Covers/Image 16.png',
    featured: false
  },
  {
    id: 6,
    title: 'EdTech Trends 2025: What\'s Next for Digital Learning',
    excerpt: 'Industry analysis of emerging trends in educational technology and their impact on learners.',
    category: 'Industry Insights',
    author: 'Marlyn Estrada',
    publishDate: '2024-11-15',
    readTime: '6 min read',
    image: '/Learniva Covers/Image 17.png',
    featured: false
  },
  {
    id: 7,
    title: 'Building Accessible Learning Experiences for All Students',
    excerpt: 'Our commitment to creating inclusive educational technology that works for learners with diverse needs.',
    category: 'Product Updates',
    author: 'Anthony Maniko',
    publishDate: '2024-11-08',
    readTime: '4 min read',
    image: '/Learniva Covers/Image 18.png',
    featured: false
  },
  {
    id: 8,
    title: 'From Classroom to Cloud: Migration Success Stories',
    excerpt: 'Real-world examples of educational institutions successfully transitioning to AI-powered learning platforms.',
    category: 'Customer Stories',
    author: 'Dabwitso Mweemba',
    publishDate: '2024-11-01',
    readTime: '8 min read',
    image: '/Learniva Covers/Image 19.png',
    featured: false
  },
  {
    id: 9,
    title: 'The Psychology of Interactive Learning: Why Animation Works',
    excerpt: 'Scientific research on how visual and interactive content improves comprehension and retention.',
    category: 'Learning Science',
    author: 'Marlyn Estrada',
    publishDate: '2024-10-25',
    readTime: '7 min read',
    image: '/Learniva Covers/Image 20.png',
    featured: false
  }
]

export function BlogGrid() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="w-[95vw] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-medium mr-3">
                          {post.category}
                        </span>
                        <span>{post.publishDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-medium mr-3">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Load More Posts
          </button>
        </motion.div>
      </div>
    </section>
  )
}
