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
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('about')
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
