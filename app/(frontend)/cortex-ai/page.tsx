import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTAModalProvider } from "@/components/cta-modals"
import { CortexHero } from "@/components/cortex-ai/hero"
import { BusinessProblems } from "@/components/cortex-ai/business-problems"
import { WhatIsCortex } from "@/components/cortex-ai/what-is-cortex"
import { HowItWorks } from "@/components/cortex-ai/how-it-works"
import { AIAssistantShowcase } from "@/components/cortex-ai/ai-assistant-showcase"
import { MeetingsShowcase } from "@/components/cortex-ai/meetings-showcase"
import { DocumentsShowcase } from "@/components/cortex-ai/documents-showcase"
import { TasksShowcase } from "@/components/cortex-ai/tasks-showcase"
import { CoreModules } from "@/components/cortex-ai/core-modules"
import { CEODashboardShowcase } from "@/components/cortex-ai/ceo-dashboard-showcase"
import { RealUseCases } from "@/components/cortex-ai/real-use-cases"
import { WhoItIsFor } from "@/components/cortex-ai/who-it-is-for"
import { FirstVersion } from "@/components/cortex-ai/first-version"
import { IntegrationLogic } from "@/components/cortex-ai/integration-logic"
import { WhyNow } from "@/components/cortex-ai/why-now"
import { CortexFinalCTA } from "@/components/cortex-ai/final-cta"
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('cortex-ai')
}

export default function CortexAIPage() {
  return (
    <CTAModalProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero with "Главная" screenshot */}
          <CortexHero />
          
          {/* Problem statement */}
          <BusinessProblems />
          
          {/* What is Cortex AI */}
          <WhatIsCortex />
          
          {/* How it works flow */}
          <HowItWorks />
          
          {/* AI Assistant showcase */}
          <AIAssistantShowcase />
          
          {/* Meetings showcase - transcript, summary, tasks */}
          <MeetingsShowcase />
          
          {/* Documents showcase - extraction, workflow, approval */}
          <DocumentsShowcase />
          
          {/* Tasks showcase - execution, control, follow-up */}
          <TasksShowcase />
          
          {/* Core modules overview */}
          <CoreModules />
          
          {/* CEO Dashboard showcase */}
          <CEODashboardShowcase />
          
          {/* Real use cases */}
          <RealUseCases />
          
          {/* Target audiences */}
          <WhoItIsFor />
          
          {/* First version features */}
          <FirstVersion />
          
          {/* Integration approach */}
          <IntegrationLogic />
          
          {/* Why now */}
          <WhyNow />
          
          {/* Final CTA */}
          <CortexFinalCTA />
        </main>
        <Footer />
      </div>
    </CTAModalProvider>
  )
}
