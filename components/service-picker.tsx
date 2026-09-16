"use client"

import { useState } from "react"
import { RotateCcw } from "lucide-react"
import { serviceTools, type ServiceToolId } from "@/lib/service-tools"
import { WhatsAppButton } from "./whatsapp-button"
import { cn } from "@/lib/utils"

export function ServicePicker({ tool }: { tool: ServiceToolId }) {
  const data = serviceTools[tool]
  const [selected, setSelected] = useState<string | null>(null)
  const [followUp, setFollowUp] = useState<string | null>(null)

  const option = data.options.find((o) => o.id === selected) ?? null
  const followUpOption = data.followUp?.options.find((o) => o.id === followUp) ?? null

  return (
    <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-primary">{data.heading}</h2>
      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{data.intro}</p>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {data.question}
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {data.options.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === selected}
            onClick={() => {
              setSelected(item.id === selected ? null : item.id)
              setFollowUp(null)
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none",
              item.id === selected
                ? "border-accent bg-accent/15 text-accent-foreground"
                : "border-border bg-background text-foreground/80 hover:border-accent/60 hover:text-primary",
            )}
          >
            {item.emoji && (
              <span aria-hidden="true" className="text-base">
                {item.emoji}
              </span>
            )}
            {item.label}
          </button>
        ))}
      </div>

      {option && (
        <div className="mt-6 space-y-5 rounded-2xl border border-border/70 bg-background p-5 sm:p-6">
          <p className="text-pretty leading-relaxed text-foreground">{option.summary}</p>

          {option.points && (
            <ul className="space-y-2">
              {option.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-pretty text-sm leading-relaxed text-foreground/90"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {option.note && (
            <p className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-pretty text-sm leading-relaxed text-foreground">
              {option.note}
            </p>
          )}

          {data.followUp && (
            <div className="border-t border-border/70 pt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {data.followUp.question}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {data.followUp.options.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={item.id === followUp}
                    onClick={() => setFollowUp(item.id === followUp ? null : item.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none",
                      item.id === followUp
                        ? "border-accent bg-accent/15 text-accent-foreground"
                        : "border-border bg-card text-foreground/80 hover:border-accent/60 hover:text-primary",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {followUpOption && (
                <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground">
                  {followUpOption.summary}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <WhatsAppButton context={data.whatsappContext} className="flex-1">
              {data.cta}
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => {
                setSelected(null)
                setFollowUp(null)
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <RotateCcw className="size-4" />
              Limpiar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
