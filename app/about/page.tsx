import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/hero"
import { WhyNowSection } from "@/components/about/why-now"
import { MissionSection } from "@/components/about/mission"
import { EcosystemSection } from "@/components/about/ecosystem"
import { DifferentiatorsSection } from "@/components/about/differentiators"
import { TeamSection } from "@/components/about/team"
import { MaturitySection } from "@/components/about/maturity"
import { AudienceSection } from "@/components/about/audience"
import { RoadmapSection } from "@/components/about/roadmap"
import { TrustSection } from "@/components/about/trust"
import { FinalCTASection } from "@/components/about/final-cta"

export const metadata: Metadata = {
  title: "О компании — Cortex ToDo | Российская технологическая платформа",
  description: "Cortex ToDo — российская технологическая платформа для управления работой и развития enterprise-экосистемы. Строим отечественную экосистему продуктов для компаний.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <WhyNowSection />
        <MissionSection />
        <EcosystemSection />
        <DifferentiatorsSection />
        <TeamSection />
        <MaturitySection />
        <AudienceSection />
        <RoadmapSection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
