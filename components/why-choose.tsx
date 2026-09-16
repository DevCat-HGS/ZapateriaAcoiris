import { Search, Award, HeartHandshake, Layers, type LucideIcon } from "lucide-react"
import { benefits } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"

const iconMap: Record<string, LucideIcon> = {
  Award,
  HeartHandshake,
  Layers,
  Search,
}

export function WhyChoose() {
  return (
    <section id="por-que-arcoiris" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="¿Por qué Arcoiris?"
          title="No reparamos todo de la misma manera."
          description="Cada zapato, tenis, bolso o prenda tiene una construcción, unos materiales, un desgaste y una historia diferente. Por eso primero observamos, después diagnosticamos y finalmente elegimos la técnica y los materiales."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Award
            return (
              <Reveal key={benefit.title} delay={i * 70}>
                <TiltCard className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-accent/50">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
