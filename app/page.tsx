import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ShowcaseCarousel } from "@/components/showcase-carousel"
import { Problem } from "@/components/problem"
import { DiagnoseTool } from "@/components/diagnose-tool"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { OurStory } from "@/components/our-story"
import { WhyChoose } from "@/components/why-choose"
import { Process } from "@/components/process"
import { PickupDelivery } from "@/components/pickup-delivery"
import { BeforeAfter } from "@/components/before-after"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { LocationsHours } from "@/components/locations-hours"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, localBusinessSchema, websiteSchema } from "@/lib/seo"

export default function Page() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema()]} />
      <SiteHeader />
      <main>
        <Hero />
        <ShowcaseCarousel />
        <Problem />
        <DiagnoseTool />
        <Services />
        <BeforeAfter />
        <Experience />
        <OurStory />
        <WhyChoose />
        <Process />
        <PickupDelivery />
        <Gallery />
        <Testimonials />
        <Faq />
        <LocationsHours />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  )
}
