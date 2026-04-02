import { Header } from "@/components/header"
import { ContactsHero } from "@/components/contacts/hero"
import { ContactPathSelector } from "@/components/contacts/path-selector"
import { ContactForm } from "@/components/contacts/form"
import { WhyContactUs } from "@/components/contacts/why-contact"
import { DirectContact } from "@/components/contacts/direct-contact"
import { EnterpriseTrust } from "@/components/contacts/enterprise-trust"
import { ContactsFinalCTA } from "@/components/contacts/final-cta"
import { Footer } from "@/components/footer"

export default function ContactsTemplatePage() {
  return (
    <>
      <Header />
      <ContactsHero />
      <ContactPathSelector />
      <ContactForm />
      <WhyContactUs />
      <DirectContact />
      <EnterpriseTrust />
      <ContactsFinalCTA />
      <Footer />
    </>
  )
}
