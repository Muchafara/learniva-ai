import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { MissionVision } from '@/components/about/MissionVision'
import { Values } from '@/components/about/Values'
import { Team } from '@/components/about/Team'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="overflow-hidden">
        <MissionVision />
        <Values />
        <Team />
      </div>
      <Footer />
    </>
  )
}
