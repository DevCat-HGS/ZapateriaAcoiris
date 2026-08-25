import Image from "next/image"
import { services } from "@/lib/site"
import { whatsappLink } from "@/lib/whatsapp"
import { WhatsAppIcon } from "./whatsapp-icon"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Reparamos mucho más que zapatos."
          description="Trabajamos diferentes tipos de artículos y materiales, buscando devolverles funcionalidad, apariencia y vida útil."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 80}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`Servicio de reparación de ${service.title.toLowerCase()}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={whatsappLink(service.context)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
                >
                  <WhatsAppIcon className="size-4 text-whatsapp" />
                  Consultar por WhatsApp
                </a>
              </div>
            </Reveal>
          ))}

          {/* Tarjeta CTA final */}
          <Reveal
            delay={services.length * 80}
            className="flex flex-col justify-center rounded-2xl border border-dashed border-accent/50 bg-accent/10 p-6 text-center"
          >
            <p className="text-pretty font-serif text-lg font-semibold text-primary">
              ¿Tu artículo no aparece en la lista?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Escríbenos por WhatsApp y cuéntanos qué necesitas reparar.
            </p>
            <a
              href={whatsappLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <WhatsAppIcon className="size-4" />
              Consultar
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
