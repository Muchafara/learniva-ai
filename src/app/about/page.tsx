import { Navigation } from '@/components/layout/Navigation'
import { AboutHero } from '@/components/about/AboutHero'
import { MissionVision } from '@/components/about/MissionVision'
import { Values } from '@/components/about/Values'
import { Team } from '@/components/about/Team'

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
    </div>
  )
}
