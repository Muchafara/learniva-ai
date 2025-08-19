import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { FeaturesSidebar } from '@/components/features/FeaturesSidebar'

export const metadata = {
  title: 'Features | Learniva AI',
  description: 'Explore Learniva AI\'s capabilities: Note-to-Animation, Personalized Flashcards, Learning Analytics, Multimodal Input, Cross-Platform Access, and AI Grading & Assessment.'
}

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-black overflow-hidden">
        <FeaturesSidebar />
      </main>
      <Footer />
    </>
  )
}


