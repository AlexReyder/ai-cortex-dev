import { Header } from "@/components/header"
import { DemoHero } from "@/components/demo/hero"
import { StartOptionSelector } from "@/components/demo/start-option-selector"
import { WhyStartSection } from "@/components/demo/why-start"
import { ComparisonMatrix } from "@/components/demo/comparison-matrix"
import { DiscussTopics } from "@/components/demo/discuss-topics"
import { MigrationBlock } from "@/components/demo/migration-block"
import { SecurityBlock } from "@/components/demo/security-block"
import { CustomizationBlock } from "@/components/demo/customization-block"
import { MainForm } from "@/components/demo/main-form"
import { ProcessSteps } from "@/components/demo/process-steps"
import { DemoFinalCTA } from "@/components/demo/final-cta"
import { Footer } from "@/components/footer"

export default function DemoTemplatePage() {
  return (
    <>
      <Header />
      <DemoHero />
      <StartOptionSelector />
      <WhyStartSection />
      <ComparisonMatrix />
      <DiscussTopics />
      <MigrationBlock />
      <SecurityBlock />
      <CustomizationBlock />
      <MainForm />
      <ProcessSteps />
      <DemoFinalCTA />
      <Footer />
    </>
  )
}
