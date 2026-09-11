"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { beforeAfterCases } from "@/lib/site"

// Rotates through a handful of real cases so the hero video isn't the only motion on screen.
const showcaseItems = beforeAfterCases.slice(0, 6)
const CYCLE_MS = 8400

export function HeroBeforeAfter() {
  const [active, setActive] = useState(0)
  const [cycleKey, setCycleKey] = useState(0)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotionRef.current || showcaseItems.length <= 1) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % showcaseItems.length)
      setCycleKey((key) => key + 1)
    }, CYCLE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const item = showcaseItems[active]
  if (!item) return null

  return (
    <div className="animate-gentle-float absolute bottom-28 right-4 z-10 hidden w-44 overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-lg backdrop-blur-sm sm:block sm:w-52 sm:bottom-32 sm:right-6 lg:bottom-24 lg:right-10 lg:w-60">
      <div key={cycleKey} className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.before}
          alt={`${item.title} — antes`}
          fill
          sizes="240px"
          className="before-after-before object-cover"
        />
        <Image
          src={item.after}
          alt={`${item.title} — después`}
          fill
          sizes="240px"
          className="before-after-reveal object-cover"
        />
        <span
          aria-hidden="true"
          className="before-after-line pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-background/90"
        />
        <span className="pointer-events-none absolute left-2 top-2 z-10 rounded-full bg-background/85 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-foreground">
          Antes
        </span>
        <span className="pointer-events-none absolute right-2 top-2 z-10 rounded-full bg-primary/85 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-primary-foreground">
          Después
        </span>
      </div>
      <div className="px-3 py-2.5">
        <p className="truncate text-xs font-semibold text-primary">{item.title}</p>
        <p className="truncate text-[0.65rem] text-muted-foreground">{item.category}</p>
      </div>
    </div>
  )
}
