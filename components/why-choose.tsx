import {
  Award,
  Boxes,
  HeartHandshake,
  Layers,
  MessageCircle,
  Truck,
  type LucideIcon,
} from "lucide-react"
import { benefits } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const iconMap: Record<string, LucideIcon> = {
  Award,
  HeartHandshake,
  Layers,
  Boxes,
  Truck,
  MessageCircle,
}

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="¿Por qué elegir Arcoiris?"
          title="Sabemos reparar lo que tú valoras."
          description="Cuidamos, recuperamos, restauramos y prolongamos la vida útil de tus artículos con atención personalizada."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Award
            return (
              <Reveal
                key={benefit.title}
                delay={i * 70}
                className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-accent/50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
