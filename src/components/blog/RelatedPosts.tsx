'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const relatedPosts = [
  {
    id: 2,
    title: 'Introducing Note-to-Animation: Revolutionary Learning Technology',
    excerpt: 'Discover our groundbreaking feature that transforms static notes into engaging, interactive animations.',
    category: 'Product Updates',
    author: 'Dabwitso Mweemba',
    publishDate: '2024-12-10',
    readTime: '6 min read',
    image: '/Learniva Covers/Image 13.png'
  },
  {
    id: 3,
    title: 'How Personalized Flashcards Boost Memory Retention by 85%',
    excerpt: 'Research-backed insights into how AI-generated flashcards improve learning outcomes for students worldwide.',
    category: 'Learning Science',
    author: 'Marlyn Estrada',
    publishDate: '2024-12-05',
    readTime: '5 min read',
    image: '/Learniva Covers/Image 14.png'
  },
  {
    id: 4,
    title: 'Customer Success Story: Stanford University Transforms Online Learning',
    excerpt: 'Learn how Stanford University increased student engagement by 300% using Learniva AI\'s platform.',
    category: 'Customer Stories',
    author: 'Anthony Maniko',
    publishDate: '2024-11-28',
    readTime: '7 min read',
    image: '/Learniva Covers/Image 15.png'
  }
]

export function RelatedPosts() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="w-[95vw] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Related Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Continue exploring our latest insights and updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
