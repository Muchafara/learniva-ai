
import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { FAQ } from '@/components/contact/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us - Learniva AI',
  description: 'Get in touch with the Learniva AI team. We\'re here to answer your questions and help you transform your learning experience.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <ContactHero />
      <div className="w-[80vw] max-w-5xl mx-auto py-16">
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
