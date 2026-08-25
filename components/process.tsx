import { processSteps } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"
import { Reveal } from "./reveal"

export function Process() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tu reparación comienza por WhatsApp."
          description="Un proceso simple y directo, pensado para que resolver tu caso sea fácil desde el primer mensaje."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 80}
              className="relative flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6"
            >
              <span className="font-serif text-3xl font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton context="general" size="lg">
            Solicitar reparación
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
