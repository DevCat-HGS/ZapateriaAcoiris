import { beforeAfterCases } from "@/lib/site"
import { ComparisonSlider } from "./comparison-slider"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"
import { Reveal } from "./reveal"

const featuredCases = beforeAfterCases.slice(0, 12)

export function BeforeAfter() {
  return (
    <section
      id="antes-despues"
      className="bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Antes y Después"
          title="Mira la diferencia."
          description="Cada reparación cuenta una historia. Descubre cómo podemos devolverle vida a tus artículos. Observa cómo el Antes se transforma automáticamente en Después."
        />

        <div className="mt-14 flex flex-col gap-14">
          {featuredCases.map((item, i) => (
            <Reveal
              key={item.id}
              variant={i % 2 === 1 ? "right" : "left"}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ComparisonSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={`${item.title} — antes de la reparación`}
                  afterAlt={`${item.title} — después de la reparación`}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  {item.category}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-primary sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.status === "ilustrativo" && (
                  <p className="mt-4 text-xs italic text-muted-foreground/80">
                    Imagen ilustrativa de referencia.
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton context="asesor" size="lg">
            Quiero reparar mi artículo
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
