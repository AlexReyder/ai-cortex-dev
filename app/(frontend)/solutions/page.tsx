import type { Metadata } from 'next'
import SolutionTemplatePage from "@/components/templates/solution-page"
import { buildPageMetadata } from '@/lib/get-page-seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('solutions')
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
     <SolutionTemplatePage/>
    </main>
  )
}
