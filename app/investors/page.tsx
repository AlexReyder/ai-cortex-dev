"use client"

import { Header } from "@/components/header"
import { InvestorsHero } from "@/components/investors/hero"
import { ThesisSummary } from "@/components/investors/thesis-summary"
import { WhyNow } from "@/components/investors/why-now"
import { WedgeSection } from "@/components/investors/wedge-section"
import { EcosystemExpansion } from "@/components/investors/ecosystem-expansion"
import { RevenueEngine } from "@/components/investors/revenue-engine"
import { MarketGTM } from "@/components/investors/market-gtm"
import { DefensibilityMoat } from "@/components/investors/defensibility-moat"
import { ProductMaturity } from "@/components/investors/product-maturity"
import { GrowthRoadmap } from "@/components/investors/growth-roadmap"
import { WhyInvestable } from "@/components/investors/why-investable"
import { InvestorContact } from "@/components/investors/investor-contact"
import { Footer } from "@/components/footer"

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InvestorsHero />
      <ThesisSummary />
      <WhyNow />
      <WedgeSection />
      <EcosystemExpansion />
      <RevenueEngine />
      <MarketGTM />
      <DefensibilityMoat />
      <ProductMaturity />
      <GrowthRoadmap />
      <WhyInvestable />
      <InvestorContact />
      <Footer />
    </main>
  )
}
