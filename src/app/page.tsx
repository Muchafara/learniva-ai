import { Hero } from '@/components/home/Hero'
import { TrustedByInstitutions } from '@/components/home/TrustedByInstitutions'
import { SocialProof } from '@/components/home/SocialProof'
import { Features } from '@/components/home/Features'
import { UseCases } from '@/components/home/UseCases'
import LearnivaAIDashboard from '@/components/home/LearnivaAIDashboard'



export default function HomePage() {
  return (
    <>

      <div className="overflow-hidden">
        <Hero />
        <TrustedByInstitutions />
        <LearnivaAIDashboard />
        <SocialProof />
        <Features />
        <UseCases />
      </div>

    </>
  )
}
