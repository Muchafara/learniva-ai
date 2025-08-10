'use client'

import { motion } from 'framer-motion'

export function FAQ() {
  const faqs = [
    {
      question: "What is Learniva AI?",
      answer: "Learniva AI is a comprehensive learning management system that transforms traditional education through AI-powered features like note-to-animation technology, personalized flashcards, and intelligent assessment tools."
    },
    {
      question: "How does the note-to-animation technology work?",
      answer: "Our AI analyzes your notes and automatically converts key concepts into interactive animations and visual content, making complex topics easier to understand and remember."
    },
    {
      question: "Is Learniva AI suitable for all education levels?",
      answer: "Yes! Learniva AI is designed for K-12 education, higher education, corporate training, and professional development. Our platform adapts to different learning needs and educational contexts."
    },
    {
      question: "What platforms does Learniva AI support?",
      answer: "Learniva AI is accessible across all platforms including web browsers, iOS, Android, and desktop applications, ensuring seamless learning experiences anywhere."
    },
    {
      question: "How secure is my data on Learniva AI?",
      answer: "We take data security seriously. All user data is encrypted, and we comply with educational privacy standards including FERPA and GDPR to protect student and educator information."
    },
    {
      question: "Can I integrate Learniva AI with other educational tools?",
      answer: "Yes, Learniva AI offers robust integration capabilities with popular LMS platforms, Google Workspace, Microsoft 365, and other educational tools through our API."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including 24/7 technical assistance, onboarding guidance, training resources, and dedicated account management for institutional clients."
    },
    {
      question: "How can I request a demo?",
      answer: "You can request a personalized demo by filling out our contact form, calling us directly, or visiting our website's demo page. Our team will schedule a convenient time to showcase the platform."
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about Learniva AI
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-8 bg-white dark:bg-black rounded-lg"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:support@learniva.ai"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
