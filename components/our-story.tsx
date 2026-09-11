import { HeartHandshake, Sparkles, Target } from "lucide-react"
import { companyStory, mission, vision } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function OurStory() {
  return (
    <section id="historia" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={companyStory.eyebrow}
          title={companyStory.title}
        />

        <div className="mt-10 space-y-5">
          {companyStory.paragraphs.map((paragraph, i) => (
            <Reveal
              key={paragraph.slice(0, 24)}
              delay={i * 90}
              className="text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyStory.milestones.map((milestone, i) => (
            <Reveal
              key={milestone.year}
              delay={i * 80}
              className="rounded-2xl border border-border/70 bg-card p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                {milestone.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {milestone.text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-7">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <Target className="size-6" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-primary">Misión</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{mission}</p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-7">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <Sparkles className="size-6" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-primary">Visión</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{vision}</p>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="mt-8 flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-5 text-sm text-foreground"
        >
          <HeartHandshake className="size-5 shrink-0 text-accent-foreground" />
          <p>
            Somos una empresa familiar: eso significa atención cercana, oficio transmitido
            de generación en generación y el mismo cuidado por cada artículo que recibimos.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
