import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TodoEnterpriseHero } from "@/components/todo-enterprise/hero"
import { WhyTodoSection } from "@/components/todo-enterprise/why-todo"
import { CapabilitiesSection } from "@/components/todo-enterprise/capabilities"
import { MigrationSection } from "@/components/todo-enterprise/migration"
import { SecurityDeploymentSection } from "@/components/todo-enterprise/security-deployment"
import { CustomizationSection } from "@/components/todo-enterprise/customization"
import { IndustriesSection } from "@/components/todo-enterprise/industries"
import { EcosystemSection } from "@/components/todo-enterprise/ecosystem"
import { ImplementationStepsSection } from "@/components/todo-enterprise/implementation-steps"
import { FinalCTASection } from "@/components/todo-enterprise/final-cta"
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await buildPageMetadata('todo-enterprise')

  return {
    ...metadata,
    keywords: [
      "ToDo Enterprise",
      "управление задачами",
      "enterprise",
      "Kanban",
      "Scrum",
      "российская платформа",
      "импортозамещение",
      "Jira альтернатива",
    ],
  }
}

export default function TodoEnterprisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TodoEnterpriseHero />
      <WhyTodoSection />
      <CapabilitiesSection />
      <MigrationSection />
      <SecurityDeploymentSection />
      <CustomizationSection />
      <IndustriesSection />
      <EcosystemSection />
      <ImplementationStepsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
