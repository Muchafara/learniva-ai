import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { FAQ } from '@/components/contact/FAQ'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ContactHero />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
