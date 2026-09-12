import { ArrowRight, ChevronDown, ShieldCheck, Sparkles } from "lucide-react"
import { business } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"
import { HeroVisual } from "./hero-visual"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-[760px] lg:items-center lg:pb-24"
    >
      <HeroVisual />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col">
          <Reveal as="span" variant="zoom" className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
            <Sparkles className="size-3.5" />
            {business.experienceYears} en Medellín
          </Reveal>

          <Reveal as="h1" delay={80} className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Damos nueva vida a tus <span className="text-shimmer">favoritos.</span>
          </Reveal>

          <Reveal as="p" delay={160} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Reparamos y restauramos calzado, bolsos, prendas y artículos de cuero.
            También ofrecemos teñido de ropa y lavandería especializada de calzado,
            respaldados por 40 años de experiencia.
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton context="cotizar" size="lg">
              Cotizar por WhatsApp
            </WhatsAppButton>
            <a
              href="/#servicios"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
            >
              Ver nuestros trabajos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" />
              Reparación y cuidado del cuero
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" />
              Recogida y entrega a domicilio
            </span>
          </Reveal>
        </div>
      </div>

      <a
        href="/#problema"
        aria-label="Desplázate para ver más"
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden w-fit flex-col items-center gap-1 text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
          Descubre más
        </span>
        <ChevronDown className="animate-scroll-cue size-5" />
      </a>
    </section>
  )
}

