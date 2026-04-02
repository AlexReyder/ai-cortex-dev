import type { Metadata } from "next"
import { Header } from "@/components/header"
import { CompareHero } from "@/components/compare/hero"
import { WhySwitch } from "@/components/compare/why-switch"
import { KeyDifferences } from "@/components/compare/key-differences"
import { FeatureTable } from "@/components/compare/feature-table"
import { VsJira } from "@/components/compare/vs-jira"
import { VsTrello } from "@/components/compare/vs-trello"
import { VsAsanaTracker } from "@/components/compare/vs-asana-tracker"
import { WhenBestChoice } from "@/components/compare/when-best-choice"
import { EnterpriseDifferentiator } from "@/components/compare/enterprise-differentiator"
import { CompareFinalCTA } from "@/components/compare/final-cta"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('compare')
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CompareHero />
      <WhySwitch />
      <KeyDifferences />
      <FeatureTable />
      <VsJira />
      <VsTrello />
      <VsAsanaTracker />
      <WhenBestChoice />
      <EnterpriseDifferentiator />
      <CompareFinalCTA />
      <Footer />
    </main>
  )
}
