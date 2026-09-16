import { ComparisonSlider } from "@/components/comparison-slider"
import { beforeAfterCases } from "@/lib/site"

export function ServiceCases({
  category,
  title,
}: {
  category: string
  title: string
}) {
  const cases = beforeAfterCases.filter((item) => item.category === category).slice(0, 4)
  if (cases.length === 0) return null

  return (
    <section className="mt-16 border-t border-border/70 pt-14">
      <h2 className="font-serif text-2xl font-semibold text-primary">
        Casos reales de {title.toLowerCase()}
      </h2>
      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        Fotografías del taller. Cada par muestra el artículo como llegó y como salió.
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {cases.map((item) => (
          <figure key={item.id} className="space-y-3">
            <ComparisonSlider
              before={item.before}
              after={item.after}
              beforeAlt={`${item.title} — antes de la reparación en Arcoiris Zapatería, Medellín`}
              afterAlt={`${item.title} — después de la reparación en Arcoiris Zapatería, Medellín`}
            />
            <figcaption>
              <p className="font-serif text-lg font-semibold text-primary">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
