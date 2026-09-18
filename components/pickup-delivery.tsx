import Image from "next/image"
import { MapPin } from "lucide-react"
import { business } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

export function PickupDelivery() {
  return (
    <section id="recogida" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <Image
              src="/content/delivery.png"
              alt="Tenis después de un lavado especializado en Arcoiris"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <span className="mb-3 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Recogida y entrega
            </span>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              ¿No puedes acercarte a nosotros?
            </h2>
            <p className="mt-3 text-pretty text-lg font-medium text-accent-foreground">
              Nosotros podemos recoger y entregar tu artículo.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Si te encuentras dentro de nuestra zona de cobertura, puedes
              solicitar el servicio de recogida y entrega de tu artículo.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary/60 p-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary">Cobertura</p>
                <p className="text-sm text-muted-foreground">
                  {business.coverage}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppButton context="recogida" size="lg">
                Solicitar recogida por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
