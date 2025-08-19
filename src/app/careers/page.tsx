import { WhyJoinUs } from '@/components/careers/WhyJoinUs'
import { OpenPositions } from '@/components/careers/OpenPositions'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <div className="overflow-hidden">
        <WhyJoinUs />
        <OpenPositions />
      </div>
      <Footer />
    </>
  )
}
