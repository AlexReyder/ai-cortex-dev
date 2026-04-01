import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SecurityHero } from "@/components/security/hero"
import { SecurityPrinciples } from "@/components/security/principles"
import { DeploymentOptions } from "@/components/security/deployment-options"
import { WhyRussianEnterprise } from "@/components/security/why-russian"
import { MigrationSection } from "@/components/security/migration"
import { FamiliarWorkflow } from "@/components/security/familiar-workflow"
import { CustomizationSection } from "@/components/security/customization"
import { SecurityFAQ } from "@/components/security/faq"
import { ImplementationPath } from "@/components/security/implementation-path"
import { SecurityFinalCTA } from "@/components/security/final-cta"

export const metadata: Metadata = {
  title: "Безопасность, Развертывание, Миграция — ToDo Enterprise | Cortex ToDo",
  description: "Безопасное внедрение ToDo Enterprise в контуре клиента. Сервер клиента, private cloud, российский ЦОД. Migration-friendly логика и управляемое внедрение для enterprise-команд.",
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SecurityHero />
      <SecurityPrinciples />
      <DeploymentOptions />
      <WhyRussianEnterprise />
      <MigrationSection />
      <FamiliarWorkflow />
      <CustomizationSection />
      <SecurityFAQ />
      <ImplementationPath />
      <SecurityFinalCTA />
      <Footer />
    </main>
  )
}
