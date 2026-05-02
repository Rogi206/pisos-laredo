import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Properties } from "@/components/properties"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Properties />
      <ContactForm />
      <Footer />
      <WhatsAppButton phoneNumber="34654108332" />
    </main>
  )
}
