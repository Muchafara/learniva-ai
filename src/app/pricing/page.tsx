import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { HiCheck } from 'react-icons/hi'

export const metadata = {
  title: 'Pricing | Learniva AI',
  description: 'Choose a Learniva AI plan: Individual ($20) or Enterprise ($200). Compare features and get started.',
}

const individualFeatures: string[] = [
  'Personalized flashcards with spaced repetition',
  'Note-to-Animation (standard usage)',
  'Multimodal input (PDF, images, slides, text)',
  'Learning analytics (personal insights)',
  'Cross-platform access (sync across devices)'
]

const enterpriseFeatures: string[] = [
  'All Individual features',
  'Advanced analytics and reporting',
  'Team workspaces and content sharing',
  'SSO and role-based access control',
  'Priority support and SLA',
  'API access and integrations'
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-black overflow-hidden">
        <section className="pt-28 pb-20">
          <div className="w-[80vw] max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that fits your needs today and scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Individual Plan */}
              <article className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Individual</h2>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$20</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">/ month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {individualFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 p-1 bg-black/10 dark:bg-white/10 rounded">
                        <HiCheck className="w-4 h-4 text-black dark:text-white" />
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <Link href="/demo" className="btn-primary text-sm px-6 py-2.5 !rounded-full">
                    Get Started
                  </Link>
                  <Link href="/signin" className="btn-modern-secondary text-sm px-6 py-2.5 !rounded-full">
                    Sign In
                  </Link>
                </div>
              </article>

              {/* Enterprise Plan */}
              <article className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Enterprise</h2>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Best for teams</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$200</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">/ month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {enterpriseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 p-1 bg-black/10 dark:bg-white/10 rounded">
                        <HiCheck className="w-4 h-4 text-black dark:text-white" />
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <Link href="/contact" className="btn-primary text-sm px-6 py-2.5 !rounded-full">
                    Contact Sales
                  </Link>
                  <Link href="/demo" className="btn-modern-secondary text-sm px-6 py-2.5 !rounded-full">
                    Get Demo
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


