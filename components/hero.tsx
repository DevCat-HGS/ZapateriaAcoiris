import Image from "next/image"
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { business } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8">
        {/* Texto */}
        <div className="flex flex-col">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
            <Sparkles className="size-3.5" />
            {business.experienceYears} en Medellín
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Damos nueva vida a tus{" "}
            <span className="text-accent">favoritos.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Reparamos y restauramos calzado, bolsos, ropa y artículos de cuero y
            otros materiales, con más de 10 años de experiencia artesanal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton context="cotizar" size="lg">
              Cotizar por WhatsApp
            </WhatsAppButton>
            <a
              href="#antes-despues"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary/20 px-8 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Ver nuestros trabajos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" />
              Especialistas en cuero
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" />
              Recogida y entrega a domicilio
            </span>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/60 shadow-xl shadow-primary/10 sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="Artesano restaurando un zapato de cuero en su taller"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          {/* Tarjeta flotante */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:left-6">
            <span className="font-serif text-3xl font-semibold text-primary">
              +10
            </span>
            <span className="text-sm font-medium leading-tight text-muted-foreground">
              años devolviendo
              <br />
              vida a tus artículos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
