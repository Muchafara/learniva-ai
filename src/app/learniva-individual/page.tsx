import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { HiCheck, HiSparkles, HiLightningBolt, HiBookOpen } from 'react-icons/hi'

export const metadata = {
  title: 'Learniva Individual | Learniva AI',
  description: 'Personalized AI learning for individuals: Note-to-Animation, flashcards, analytics, and more.',
}

const highlights = [
  { icon: HiSparkles, title: 'Note-to-Animation', description: 'Turn static notes into dynamic, animated explanations that make concepts stick.' },
  { icon: HiLightningBolt, title: 'Smart Flashcards', description: 'Auto-generated flashcards with spaced repetition and adaptive difficulty.' },
  { icon: HiBookOpen, title: 'Multimodal Input', description: 'Ingest PDFs, images, slides, handwriting, and plain text seamlessly.' },
]

const benefits: string[] = [
  'Personalized flashcards with spaced repetition',
  'Note-to-Animation (standard usage)',
  'Multimodal input (PDF, images, slides, text)',
  'Learning analytics (personal insights)',
  'Cross-platform access (sync across devices)'
]

export default function LearnivaIndividualPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-black overflow-hidden">
        {/* Hero */}
        <section className="pt-28 pb-16">
          <div className="w-[80vw] max-w-5xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
              Learniva Individual
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your personal AI learning companion—generate flashcards, animate your notes, and track your progress across devices.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/pricing" className="btn-primary text-sm px-6 py-2.5 !rounded-full">Get Started</Link>
              <Link href="/demo" className="btn-modern-secondary text-sm px-6 py-2.5 !rounded-full">See a Demo</Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="pb-14">
          <div className="w-[80vw] max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg w-fit mb-4">
                    <h.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-24">
          <div className="w-[80vw] max-w-5xl mx-auto">
            <div className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What you get</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 p-1 bg-black/10 dark:bg-white/10 rounded">
                      <HiCheck className="w-4 h-4 text-black dark:text-white" />
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


