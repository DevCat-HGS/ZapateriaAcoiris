import { Star } from "lucide-react"
import { testimonials } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 90}>
              <TiltCard className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-0.5 text-accent" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star key={star} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent-foreground">
                    {testimonial.initials}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.source}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

