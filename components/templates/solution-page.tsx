import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { TrustBarSection } from "@/components/sections/trust-bar"
import { ProductsSection } from "@/components/sections/products"
import { PlatformStorySection } from "@/components/sections/platform-story"
import { ArchitectureSection } from "@/components/sections/architecture"
import { SolutionsSection } from "@/components/sections/solutions"
import { AIUseCasesSection } from "@/components/sections/ai-use-cases"
import { TodoEnterpriseSection } from "@/components/sections/todo-enterprise"
import { ImplementationFlexibilitySection } from "@/components/sections/implementation-flexibility"
import { SecuritySection } from "@/components/sections/security"
import { MigrationSection } from "@/components/sections/migration"
import { CompanySection } from "@/components/sections/company"
import { FinalCTASection } from "@/components/sections/final-cta"
import { LeadFormsSection } from "@/components/sections/lead-forms"
import { Footer } from "@/components/footer"

export default function SolutionTemplatePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustBarSection />
      <ProductsSection />
      <PlatformStorySection />
      <ArchitectureSection />
      <SolutionsSection />
      <AIUseCasesSection />
      <TodoEnterpriseSection />
      <ImplementationFlexibilitySection />
      <SecuritySection />
      <MigrationSection />
      <CompanySection />
      <FinalCTASection />
      <LeadFormsSection />
      <Footer />
    </>
  )
}