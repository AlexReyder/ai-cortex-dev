import type { Metadata } from 'next'
import InvestorsTemplatePage from "@/components/templates/investors-page"
import { buildPageMetadata } from '@/lib/get-page-seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('investors')
}

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <InvestorsTemplatePage/>
    </main>
  )
}
