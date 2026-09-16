import { servicePages, type ServiceBlock, type ServicePage } from "@/lib/service-pages"
import { ServicePicker } from "@/components/service-picker"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

function Block({ block }: { block: ServiceBlock }) {
  if (block.kind === "tool") {
    return <ServicePicker tool={block.tool} />
  }

  if (block.kind === "text") {
    return (
      <section>
        {block.heading && (
          <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
        )}
        <div className={cn(block.heading && "mt-4", "space-y-4")}>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    )
  }

  if (block.kind === "list") {
    return (
      <section>
        <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
        {block.intro && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{block.intro}</p>
        )}
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-pretty text-sm leading-relaxed text-foreground"
            >
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (block.kind === "steps") {
    return (
      <section>
        <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
        {block.intro && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{block.intro}</p>
        )}
        <ol className="mt-6 space-y-4">
          {block.steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border/70 bg-background p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-primary">{step.title}</h3>
              {step.body && (
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              )}
              {step.items && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>
    )
  }

  if (block.kind === "flow") {
    return (
      <section>
        <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
        {block.intro && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{block.intro}</p>
        )}
        <ol className="mt-6 flex flex-wrap items-center gap-2">
          {block.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground">
                {step}
              </span>
              {index < block.steps.length - 1 && (
                <span aria-hidden="true" className="text-muted-foreground">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>
    )
  }

  if (block.kind === "definitions") {
    return (
      <section>
        <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
        {block.intro && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{block.intro}</p>
        )}
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.term} className="rounded-2xl border border-border/70 bg-background p-5">
              <dt className="font-serif text-lg font-semibold text-primary">{item.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    )
  }

  return (
    <section className="rounded-3xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-primary">{block.heading}</h2>
      <div className="mt-4 space-y-3">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-pretty leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
      {block.items && (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-pretty text-sm leading-relaxed text-foreground"
            >
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export function ServicePageContent({ page }: { page: ServicePage }) {
  return (
    <article className="space-y-12">
      {page.blocks.map((block, index) => (
        <Reveal key={`${page.slug}-${index}`} delay={Math.min(index * 40, 240)}>
          <Block block={block} />
        </Reveal>
      ))}

      <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-primary">
          ¿Quieres que evaluemos tu caso?
        </h2>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Envíanos fotos por WhatsApp. Diagnosticamos el artículo antes de proponer cualquier
          intervención.
        </p>
        <div className="mt-6">
          <WhatsAppButton context={page.whatsappContext} size="lg">
            Enviar fotos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      <nav aria-label="Otros servicios" className="border-t border-border/70 pt-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Más servicios
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {servicePages
            .filter((item) => item.slug !== page.slug)
            .map((item) => (
              <li key={item.slug}>
                <a
                  href={`/servicios/${item.slug}`}
                  className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-accent/60 hover:text-primary"
                >
                  {item.eyebrow}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </article>
  )
}
