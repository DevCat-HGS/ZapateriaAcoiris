"use client"

import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ComparisonSliderProps {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  className?: string
  /** Úsalo solo en la primera comparación visible para mejorar el LCP. */
  priority?: boolean
}

export function ComparisonSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
  priority = false,
}: ComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (reduced) {
          setIntroDone(true)
          return
        }
        setPosition(72)
        const t1 = setTimeout(() => setPosition(30), 550)
        const t2 = setTimeout(() => {
          setPosition(50)
          setIntroDone(true)
        }, 1150)
        return () => {
          clearTimeout(t1)
          clearTimeout(t2)
        }
      },
      { threshold: 0.55 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const updateFromClientX = useCallback((clientX: number) => {
    const element = containerRef.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [dragging, updateFromClientX])

  const beginDrag = (clientX: number) => {
    setIntroDone(true)
    setDragging(true)
    updateFromClientX(clientX)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-border/70 shadow-sm",
        className,
      )}
      onPointerDown={(e) => beginDrag(e.clientX)}
    >
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={afterAlt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-primary/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
          Después
        </span>
      </div>

      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          !dragging && "transition-[clip-path] duration-500 ease-out",
        )}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground sm:left-8 sm:top-8">
          Antes
        </span>
      </div>

      <div
        role="slider"
        aria-label="Deslizar para comparar antes y después"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onPointerDown={(e) => {
          e.stopPropagation()
          beginDrag(e.clientX)
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4))
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4))
        }}
        className={cn(
          "absolute inset-y-0 z-20 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center focus-visible:outline-none",
          !dragging && "transition-[left] duration-500 ease-out",
        )}
        style={{ left: `${position}%` }}
      >
        <span className="pointer-events-none absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-background/90" />
        <span
          className={cn(
            "relative flex size-9 items-center justify-center rounded-full border border-border/70 bg-background text-primary shadow-md transition-transform",
            dragging ? "scale-110" : "group-hover:scale-105",
          )}
        >
          <ArrowLeftRight className="size-4" />
        </span>
      </div>

      {!introDone && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground opacity-80 transition-opacity duration-500 group-hover:opacity-0">
          Arrastra para comparar
        </span>
      )}
    </div>
  )
}

