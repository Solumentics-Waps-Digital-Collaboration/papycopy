import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AuthoritySection } from "@/components/authority-section"
import { FashionShowcase } from "@/components/fashion-showcase"
import { BusinessServices } from "@/components/business-services"
import { ValueProposition } from "@/components/value-proposition"
import { FAQSection } from "@/components/faq-section"
import { ContactFooter } from "@/components/contact-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <FashionShowcase />
      <BusinessServices />
      <ValueProposition />
      <FAQSection />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  )
}
