import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"

export function Experience() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experiencia"
          title="40 años devolviendo vida a tus artículos."
          description="En Arcoiris Zapatería Especializada combinamos experiencia, cuidado y atención personalizada para ayudarte a recuperar tus artículos y prolongar su vida útil."
          inverted
        />
        <div className="mt-8 flex justify-center">
          <WhatsAppButton context="general" size="lg" variant="light">
            Hablar con un asesor
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
