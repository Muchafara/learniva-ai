import { CareersHero } from '@/components/careers/CareersHero'
import { WhyJoinUs } from '@/components/careers/WhyJoinUs'
import { OpenPositions } from '@/components/careers/OpenPositions'
import { Culture } from '@/components/careers/Culture'
import { Navigation } from '@/components/layout/Navigation'

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <CareersHero />
      <WhyJoinUs />
      <Culture />
      <OpenPositions />
    </div>
  )
}
