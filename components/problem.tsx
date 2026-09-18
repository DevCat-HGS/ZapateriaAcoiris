"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import { articleNeeds } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { WhatsAppButton } from "./whatsapp-button"
import { ComparisonSlider } from "./comparison-slider"
import { cn } from "@/lib/utils"

export function Problem() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="problema" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="¿Qué necesita tu artículo?"
          title="Dinos qué le pasa. Nosotros te mostramos la solución."
          description="Selecciona el caso que más se parezca al tuyo y descubre cómo lo resolvemos."
        />

        <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articleNeeds.map((need, i) => {
            const isOpen = openId === need.id
            return (
              <Reveal
                key={need.id}
                delay={i * 70}
                className={cn(
                  "self-start overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent hover:bg-accent/10 hover:shadow-lg",
                  isOpen ? "border-accent/70 shadow-md" : "border-border/70",
                )}
              >
                <ComparisonSlider
                  before={need.before}
                  after={need.after}
                  beforeAlt={`${need.title} — antes de la reparación en Arcoiris Zapatería, Medellín`}
                  afterAlt={`${need.title} — después de la reparación en Arcoiris Zapatería, Medellín`}
                  className="rounded-none border-0 shadow-none"
                  priority={i === 0}
                />
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : need.id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left"
                >
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {need.title}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-accent-foreground",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4 px-5 pb-5">
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {need.description}
                      </p>
                      <ul className="space-y-2">
                        {need.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                      <WhatsAppButton context={need.context} size="sm" className="w-full">
                        Cotizar este caso
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-12 text-center text-pretty font-serif text-xl italic text-muted-foreground">
          ¿No sabes qué necesita? <strong className="text-primary not-italic">Envíanos una foto. Nosotros diagnosticamos el problema.</strong>
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton context="cotizar" size="lg">
            Enviar fotos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
