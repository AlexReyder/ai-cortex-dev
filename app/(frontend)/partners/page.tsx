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

export const metadata = {
  title: "Партнерам — Cortex ToDo",
  description: "Партнерская модель для внедрения и развития Cortex ToDo. Интеграторы, облачные провайдеры, ЦОД и enterprise-партнеры.",
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
