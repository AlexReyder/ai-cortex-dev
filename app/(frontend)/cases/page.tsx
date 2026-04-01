"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CasesHero } from "@/components/cases/hero"
import { ScenarioSelector } from "@/components/cases/scenario-selector"
import { MigrationCase } from "@/components/cases/migration-case"
import { PmoCase } from "@/components/cases/pmo-case"
import { ItTeamsCase } from "@/components/cases/it-teams-case"
import { DistributedCase } from "@/components/cases/distributed-case"
import { SecurityCase } from "@/components/cases/security-case"
import { CustomizationCase } from "@/components/cases/customization-case"
import { IndustryUseCases } from "@/components/cases/industry-use-cases"
import { HowToStart } from "@/components/cases/how-to-start"
import { CasesFinalCta } from "@/components/cases/final-cta"

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CasesHero />
      <ScenarioSelector />
      <MigrationCase />
      <PmoCase />
      <ItTeamsCase />
      <DistributedCase />
      <SecurityCase />
      <CustomizationCase />
      <IndustryUseCases />
      <HowToStart />
      <CasesFinalCta />
      <Footer />
    </main>
  )
}
