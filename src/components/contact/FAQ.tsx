'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Learniva AI?",
      answer: "Learniva AI is a comprehensive learning platform that transforms traditional education through intelligent features like note-to-animation technology, personalized flashcards, and adaptive assessment tools."
    },
    {
      question: "How does the note-to-animation technology work?",
      answer: "Our system analyzes your notes and automatically converts key concepts into interactive animations and visual content, making complex topics easier to understand and remember."
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
      answer: "We provide comprehensive support including technical assistance, onboarding guidance, training resources, and dedicated account management for institutional clients."
    },
    {
      question: "How can I request a demo?",
      answer: "You can request a personalized demo by visiting our demo page, filling out our contact form, or reaching out to our team directly. We'll schedule a convenient time to showcase the platform."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our platform and features
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                {faq.question}
              </h3>
              <HiChevronDown 
                className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12 p-8 simple-card simple-glow rounded-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <a
          href="mailto:support@learniva.ai"
          className="btn-primary text-sm px-6 py-2.5 !rounded-full inline-block"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  )
}
