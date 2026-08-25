"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

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
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4))
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-border/70 shadow-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Después (fondo) */}
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

      {/* Antes (recortado) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
          Antes
        </span>
      </div>

      {/* Divisor + manija */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-background/90"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Comparar antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-lg outline-none transition-transform focus-visible:ring-4 focus-visible:ring-accent/40 group-hover:scale-105"
        >
          <MoveHorizontal className="size-5" />
        </button>
      </div>
    </div>
  )
}
