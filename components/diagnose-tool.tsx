"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle2, Clock, Layers, ListChecks } from "lucide-react"
import { diagnosisCategories, diagnosisSolutions } from "@/lib/diagnosis"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { WhatsAppButton } from "./whatsapp-button"
import { cn } from "@/lib/utils"

type Step = 1 | 2 | 3

export function DiagnoseTool() {
  const [step, setStep] = useState<Step>(1)
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [problemId, setProblemId] = useState<string | null>(null)

  const category = diagnosisCategories.find((c) => c.id === categoryId) ?? null
  const solution = problemId ? diagnosisSolutions[problemId] : null

  function reset() {
    setStep(1)
    setCategoryId(null)
    setProblemId(null)
  }

  function goBack() {
    if (step === 3) setStep(2)
    else if (step === 2) {
      setCategoryId(null)
      setStep(1)
    }
  }

  return (
    <section id="diagnostico" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diagnostica tu artículo"
          title="Cuéntanos qué tienes y qué le pasa."
          description="Un pequeño recorrido de 3 pasos para entender cómo podemos ayudarte, antes de escribirnos por WhatsApp."
        />

        <div className="mt-10 flex items-center justify-center gap-2">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={cn(
                "h-1.5 w-10 rounded-full transition-colors duration-300",
                step >= n ? "bg-accent" : "bg-border",
              )}
            />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
          {step > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Volver
            </button>
          )}

          {step === 1 && (
            <>
              <h3 className="font-serif text-xl font-semibold text-primary">
                Paso 1 · ¿Qué quieres reparar?
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {diagnosisCategories.map((cat, i) => (
                  <Reveal key={cat.id} delay={i * 60}>
                    <button
                      type="button"
                      onClick={() => {
                        setCategoryId(cat.id)
                        setStep(2)
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl border border-border/70 bg-background p-5 text-left transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md"
                    >
                      <span className="text-3xl">{cat.emoji}</span>
                      <span className="font-serif text-lg font-semibold text-primary">
                        {cat.label}
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {step === 2 && category && (
            <>
              <h3 className="font-serif text-xl font-semibold text-primary">
                Paso 2 · ¿Qué problema tiene tu {category.label.toLowerCase()}?
              </h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.problems.map((problem) => (
                  <button
                    key={problem.id}
                    type="button"
                    onClick={() => {
                      setProblemId(problem.id)
                      setStep(3)
                    }}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-primary"
                  >
                    {problem.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && category && solution && (
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  {category.emoji} {category.label}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-primary">
                  {solution.title}
                </h3>
              </div>

              <div className="space-y-1.5">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Qué es
                </p>
                <p className="text-pretty leading-relaxed text-foreground">{solution.what}</p>
              </div>

              <div className="space-y-1.5">
                <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  <ListChecks className="size-4" /> Cómo lo reparamos
                </p>
                <p className="text-pretty leading-relaxed text-foreground">{solution.how}</p>
              </div>

              <div className="space-y-1.5">
                <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  <Layers className="size-4" /> Materiales que podemos utilizar
                </p>
                <ul className="flex flex-wrap gap-2">
                  {solution.materials.map((material) => (
                    <li
                      key={material}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm text-foreground/80"
                    >
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  <Clock className="size-4" /> Tiempo aproximado
                </p>
                <p className="text-pretty leading-relaxed text-foreground">{solution.duration}</p>
              </div>

              <div className="space-y-1.5 rounded-2xl border border-accent/30 bg-accent/10 p-4">
                <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground">
                  <CheckCircle2 className="size-4" /> Qué puede afectar el resultado
                </p>
                <p className="text-pretty text-sm leading-relaxed text-foreground">
                  {solution.factors}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <WhatsAppButton context={category.context} size="lg" className="flex-1">
                  Enviar fotos y evaluar mi caso
                </WhatsAppButton>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground/80 transition-colors hover:border-accent/60 hover:text-primary"
                >
                  Empezar de nuevo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
