import { HelpHero } from '@/components/help/HelpHero'
import { SearchHelp } from '@/components/help/SearchHelp'
import { HelpCategories } from '@/components/help/HelpCategories'
import { PopularArticles } from '@/components/help/PopularArticles'
import { ContactSupport } from '@/components/help/ContactSupport'

export const metadata = {
  title: 'Help Center - Learniva AI',
  description: 'Find answers to your questions and get the most out of Learniva AI with our comprehensive help center.',
}

export default function HelpPage() {
  return (
    <>
      <div className="overflow-hidden">
        <HelpHero />
        <SearchHelp />
        <HelpCategories />
        <PopularArticles />
        <ContactSupport />
      </div>
    </>
  )
}
