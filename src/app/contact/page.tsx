import { Navigation } from '@/components/layout/Navigation'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { FAQ } from '@/components/contact/FAQ'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <FAQ />
    </main>
  )
}
