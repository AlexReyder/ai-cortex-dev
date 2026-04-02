import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnersHeroSection } from "@/components/partners/hero"
import { WhyPartnerSection } from "@/components/partners/why-partner"
import { PartnerTypesSection } from "@/components/partners/partner-types"
import { PartnerValueSection } from "@/components/partners/partner-value"
import { PartnerScenariosSection } from "@/components/partners/partner-scenarios"
import { EnterpriseDealsSection } from "@/components/partners/enterprise-deals"
import { PlatformEcosystemSection } from "@/components/partners/platform-ecosystem"
import { ImplementationModelSection } from "@/components/partners/implementation-model"
import { PartnerFormSection } from "@/components/partners/partner-form"
import { PartnerFinalCTASection } from "@/components/partners/final-cta"
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('partners')
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PartnersHeroSection />
      <WhyPartnerSection />
      <PartnerTypesSection />
      <PartnerValueSection />
      <PartnerScenariosSection />
      <EnterpriseDealsSection />
      <PlatformEcosystemSection />
      <ImplementationModelSection />
      <PartnerFormSection />
      <PartnerFinalCTASection />
      <Footer />
    </main>
  )
}
