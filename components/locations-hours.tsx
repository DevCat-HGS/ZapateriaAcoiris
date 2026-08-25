import { Clock, MapPin, Navigation, Phone } from "lucide-react"
import { locations, schedule } from "@/lib/site"
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

export function LocationsHours() {
  return (
    <section id="sedes" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sedes"
          title="Encuéntranos en Medellín."
          description="Dos sedes para atenderte. La atención digital está centralizada en un único WhatsApp."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Tarjetas de sedes */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <MapPin className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">
                {loc.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {loc.address}
                <br />
                {loc.city}
              </p>
              <a
                href={`https://wa.me/${loc.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
              >
                <WhatsAppIcon className="size-4" />
                {loc.phoneDisplay}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
              >
                <Navigation className="size-4" />
                Cómo llegar
              </a>
            </div>
          ))}

          {/* Horarios + contacto */}
          <div className="flex flex-col rounded-2xl border border-border/70 bg-primary p-7 text-primary-foreground shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
              <Clock className="size-6" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold">
              Horario de atención
            </h3>
            <dl className="mt-4 space-y-3">
              {schedule.map((s) => (
                <div key={s.days}>
                  <dt className="text-sm font-medium text-primary-foreground/70">
                    {s.days}
                  </dt>
                  <dd className="text-base font-semibold">{s.hours}</dd>
                </div>
              ))}
            </dl>
            
          </div>
        </div>
      </div>
    </section>
  )
}
