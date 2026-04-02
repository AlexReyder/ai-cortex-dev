import type { Metadata } from 'next'
import DemoTemplatePage from "@/components/templates/demo-page"
import { buildPageMetadata } from '@/lib/get-page-seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('demo')
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <DemoTemplatePage/>
    </main>
  )
}
