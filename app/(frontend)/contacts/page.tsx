import type { Metadata } from "next"
import ContactsTemplatePage from "@/components/templates/contact-page"
import { buildPageMetadata } from "@/lib/get-page-seo"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('contacts')
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactsTemplatePage />
    </main>
  )
}
