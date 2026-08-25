import { WhatsAppButton } from "./whatsapp-button"

export function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-primary py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-accent) 0, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-accent) 0, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          ¿Tu artículo necesita una segunda oportunidad?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Envíanos una foto por WhatsApp y cuéntanos qué necesita. Nuestro
          equipo te orientará.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton context="asesor" size="lg">
            Hablar con un asesor
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
