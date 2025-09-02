import { PartnersHero } from '@/components/partners/PartnersHero'
import { PartnershipTypes } from '@/components/partners/PartnershipTypes'
import { ExistingPartners } from '@/components/partners/ExistingPartners'
import { PartnershipBenefits } from '@/components/partners/PartnershipBenefits'
import { PartnerApplication } from '@/components/partners/PartnerApplication'

export const metadata = {
  title: 'Partners - Learniva AI',
  description: 'Join our partner ecosystem and help transform education with AI-powered learning solutions.',
}

export default function PartnersPage() {
  return (
    <>
      <div className="overflow-hidden">
        <PartnersHero />
        <PartnershipTypes />
        <ExistingPartners />
        <PartnershipBenefits />
        <PartnerApplication />
      </div>
    </>
  )
}
