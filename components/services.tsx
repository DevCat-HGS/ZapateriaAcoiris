import serviceSegments from "@/public/data/services.json"
import { whatsappLink } from "@/lib/whatsapp"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { ServiceComparisonCard, type ServiceComparisonImage } from "./service-comparison-card"
import { TiltCard } from "./tilt-card"
import { WhatsAppIcon } from "./whatsapp-icon"

const segmentedServices = serviceSegments.map((service) => ({
  title: service.servicio.charAt(0).toUpperCase() + service.servicio.slice(1),
  description: service.description,
  images: service.imagenes.map<ServiceComparisonImage>((image) => ({
    before: `/content/${image.antes}`,
    after: `/content/${image.despues}`,
    hasComparison: image.antes !== image.despues,
  })),
}))

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Reparamos mucho más que zapatos."
          description="Explora nuestras especialidades. Cada tarjeta muestra un caso real elegido al azar de ese servicio y anima la comparación únicamente cuando está en pantalla."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segmentedServices.map((service, index) => (
            <Reveal key={service.title} delay={Math.min(index * 45, 360)}>
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <ServiceComparisonCard title={service.title} images={service.images} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink("general")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
                  >
                    <WhatsAppIcon className="size-4 text-whatsapp" />
                    Consultar por WhatsApp
                  </a>
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
