
import { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { FAQ } from '@/components/contact/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us - Learniva AI',
  description: 'Get in touch with the Learniva AI team. We\'re here to answer your questions and help you transform your learning experience.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="w-[80vw] max-w-5xl mx-auto pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or need support? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
        
        {/* FAQ Section */}
        <div className="mt-16">
          <FAQ />
        </div>
      </div>
    </div>
  )
}
