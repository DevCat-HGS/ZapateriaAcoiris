import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { DiagnoseTool } from "@/components/diagnose-tool"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { OurStory } from "@/components/our-story"
import { WhyChoose } from "@/components/why-choose"
import { Process } from "@/components/process"
import { PickupDelivery } from "@/components/pickup-delivery"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { LocationsHours } from "@/components/locations-hours"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { business, faqs, locations, schedule, services } from "@/lib/site"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ShoeStore",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/images/hero.png`,
  logo: `${siteUrl}/logo-empresa.png`,
  description:
    "Reparación profesional de calzado, bolsos, chaquetas y artículos de cuero en Medellín. Cambio de suelas, teñido, costuras y más.",
  telephone: "+57 311 630 1609",
  priceRange: "$$",
  currenciesAccepted: "COP",
  areaServed: ["Medellín", "Valle de Aburrá"],
  sameAs: [business.instagram.url, business.facebook.url],
  openingHoursSpecification: schedule.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.days === "Sábados" ? "Saturday" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: item.days === "Sábados" ? "09:00" : "08:30",
    closes: item.days === "Sábados" ? "14:00" : "17:30",
  })),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `${service.title} - reparación y restauración`,
      areaServed: "Medellín, Colombia",
    },
  })),
  location: locations.map((location) => ({
    "@type": "ShoeStore",
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    telephone: location.phone,
  })),
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <DiagnoseTool />
        <Services />
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
