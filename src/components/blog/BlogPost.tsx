'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiCalendar, HiClock, HiUser } from 'react-icons/hi'

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: 'The Future of AI-Powered Learning: Transforming Education with Intelligent Systems',
      content: `
        <p>Artificial Intelligence is fundamentally transforming how we approach education, creating unprecedented opportunities for personalized, efficient, and engaging learning experiences. As we stand at the intersection of technology and pedagogy, we're witnessing a revolution that promises to make quality education more accessible than ever before.</p>

        <h2>The Current Landscape of AI in Education</h2>
        <p>Today's educational technology landscape is rapidly evolving, with AI-powered systems becoming increasingly sophisticated. From intelligent tutoring systems to automated content generation, AI is enabling educators to provide more personalized instruction while reducing administrative burdens.</p>

        <p>At Learniva AI, we've seen firsthand how these technologies can transform learning outcomes. Our platform's note-to-animation feature, for example, helps students visualize complex concepts in ways that traditional textbooks simply cannot match.</p>

        <h2>Personalization at Scale</h2>
        <p>One of the most significant advantages of AI in education is its ability to provide personalized learning experiences at scale. Traditional classroom settings often struggle to accommodate different learning styles, paces, and preferences. AI changes this dynamic entirely.</p>

        <p>Through sophisticated algorithms, AI can analyze how individual students learn best, identifying patterns in their study habits, comprehension rates, and areas of difficulty. This data-driven approach allows for the creation of truly customized learning paths that adapt in real-time to student progress.</p>

        <h2>The Role of Interactive Content</h2>
        <p>Static content is becoming a thing of the past. Modern learners expect interactive, engaging materials that respond to their actions and provide immediate feedback. AI enables the creation of dynamic content that can adjust its complexity, presentation style, and focus based on learner needs.</p>

        <p>Our research shows that students using AI-generated interactive content show 85% better retention rates compared to traditional study methods. This isn't just about making learning more fun – it's about making it more effective.</p>

        <h2>Looking Ahead: The Next Frontier</h2>
        <p>As we look toward the future, several exciting developments are on the horizon. Natural language processing is becoming more sophisticated, enabling AI tutors that can engage in meaningful conversations with students. Computer vision is making it possible for AI to understand and respond to visual learning materials in new ways.</p>

        <p>The integration of AR and VR technologies with AI promises to create immersive learning environments that were once the stuff of science fiction. Imagine studying ancient Rome by walking through a historically accurate virtual reconstruction, or learning molecular chemistry by manipulating 3D models with your hands.</p>

        <h2>Challenges and Considerations</h2>
        <p>Of course, this transformation isn't without its challenges. Privacy concerns, the digital divide, and the need for teacher training are all important considerations as we implement AI in educational settings. At Learniva AI, we're committed to addressing these challenges head-on, ensuring that our technology enhances rather than replaces human instruction.</p>

        <p>The future of education is bright, and AI will play a central role in shaping it. By embracing these technologies thoughtfully and responsibly, we can create learning experiences that are more effective, engaging, and accessible for everyone.</p>
      `,
      category: 'AI & Education',
      author: 'Anthony Maniko',
      publishDate: '2024-12-15',
      readTime: '8 min read',
      image: '/Learniva Covers/Image 12.png'
    }
  }
  
  return posts[id as keyof typeof posts] || null
}

interface BlogPostProps {
  id: string
}

export function BlogPost({ id }: BlogPostProps) {
  const post = getBlogPost(id)

  if (!post) {
    return (
      <section className="py-20 bg-white dark:bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">The blog post you're looking for doesn't exist.</p>
        </div>
      </section>
    )
  }

  return (
    <article className="pt-24 md:pt-32 pb-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-medium mr-4">
              {post.category}
            </span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <HiCalendar className="w-4 h-4 mr-1" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center">
                <HiClock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <HiUser className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-8 leading-tight">
            {post.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 md:h-96 mb-12 rounded-xl overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                {post.author}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {post.author === 'Anthony Maniko' && 'Founder & CEO at Learniva AI. Passionate about transforming education through AI and making learning more accessible for everyone.'}
                {post.author === 'Dabwitso Mweemba' && 'Co-Founder & CTO at Learniva AI. Leading our technical innovation in AI-powered learning platforms and educational technology.'}
                {post.author === 'Marlyn Estrada' && 'Co-Founder & Product Manager at Learniva AI. Focused on creating user-centered learning experiences and educational research.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
