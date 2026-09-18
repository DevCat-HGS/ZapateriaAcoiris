import serviceSegments from "@/public/data/services.json"
import { whatsappLink } from "@/lib/whatsapp"
import { repairCategory } from "@/lib/repair-catalog"
import { servicePageHrefForCategory, servicePageLinks } from "@/lib/service-pages"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { ServiceComparisonCard, type ServiceComparisonImage } from "./service-comparison-card"
import { TiltCard } from "./tilt-card"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WhatsAppButton } from "./whatsapp-button"
import { ArrowRight } from "lucide-react"

const segmentedServices = serviceSegments.map((service) => {
  const category = repairCategory(service.servicio)
  return {
    title: service.servicio.charAt(0).toUpperCase() + service.servicio.slice(1),
    description: service.description,
    href: servicePageHrefForCategory(category),
    images: service.imagenes.map<ServiceComparisonImage>((image) => ({
      before: `/content/${image.antes}`,
      after: `/content/${image.despues}`,
      hasComparison: image.antes !== image.despues,
    })),
  }
})

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Reparamos mucho más que zapatos."
          description="Guías completas de cada oficio y el catálogo con fotos reales del taller."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {servicePageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-accent/60 hover:text-primary"
            >
              {link.label}
              <ArrowRight className="size-3.5" />
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segmentedServices.map((service, index) => (
            <Reveal key={service.title} delay={Math.min(index * 45, 360)}>
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <ServiceComparisonCard title={service.title} images={service.images} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-col items-start gap-3">
                    {service.href && (
                      <a
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
                      >
                        Ver la guía de este servicio
                        <ArrowRight className="size-4" />
                      </a>
                    )}
                    <WhatsAppButton context="general" size="sm">
                      Consultar por WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
          <Reveal delay={360}>
            <TiltCard className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-accent/10 p-6 text-center">
              <p className="font-serif text-xl font-semibold text-primary">
                ¿No encuentras el servicio que buscas?
              </p>
              <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
                Escríbenos por WhatsApp y cuéntanos qué necesitas. Te ayudamos a evaluar tu caso.
              </p>
              <a
                href={whatsappLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <WhatsAppIcon className="size-4" />
                Consultar
              </a>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
