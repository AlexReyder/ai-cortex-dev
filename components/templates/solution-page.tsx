import { Header } from "@/components/header"
import { SolutionsHero } from "@/components/solutions/hero"
import { SolutionsOverview } from "@/components/solutions/overview"
import { SolutionsByTeam } from "@/components/solutions/by-team"
import { IndustriesSection } from "@/components/solutions/industries"
import { ImportSubstitution } from "@/components/solutions/import-substitution"
import { DistributedTeams } from "@/components/solutions/distributed-teams"
import { EnterpriseCustomization } from "@/components/solutions/enterprise-customization"
import { WhyChoose } from "@/components/solutions/why-choose"
import { SolutionsFinalCTA } from "@/components/solutions/final-cta"
import { Footer } from "@/components/footer"

export default function SolutionTemplatePage() {
  return (
    <>
      <Header />
      <SolutionsHero />
      <SolutionsOverview />
      <SolutionsByTeam />
      <IndustriesSection />
      <ImportSubstitution />
      <DistributedTeams />
      <EnterpriseCustomization />
      <WhyChoose />
      <SolutionsFinalCTA />
      <Footer />
    </>
  )
}