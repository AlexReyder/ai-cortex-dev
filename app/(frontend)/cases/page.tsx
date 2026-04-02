import type { Metadata } from 'next'
import CasesTemplatePage from "@/components/templates/cases-page"
import { buildPageMetadata } from '@/lib/get-page-seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('cases')
}

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-background">
      <CasesTemplatePage/>
    </main>
  )
}
