"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ComparisonSliderProps {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
}

export function ComparisonSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: ComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.55 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/70 shadow-sm"
    >
      <div
        className={`absolute inset-0 overflow-hidden ${
          isVisible ? "before-after-before" : "before-after-before-reset"
        }`}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground sm:left-8 sm:top-8">
          Antes
        </span>
      </div>
      <div
        className={`absolute inset-0 overflow-hidden ${
          isVisible ? "before-after-reveal" : "before-after-reset"
        }`}
      >
        <Image
          src={after}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
          Después
        </span>
      </div>
      <div
        className={`pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-background/90 ${
          isVisible ? "before-after-line" : "before-after-line-reset"
        }`}
      />
    </div>
  )
}
