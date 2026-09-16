"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { galleryItems } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const slides = galleryItems.slice(0, 12)
const AUTOPLAY_MS = 4200
const DRAG_THRESHOLD = 60

// Un anillo por cada distancia respecto a la tarjeta activa; más allá del tercero no se pinta nada.
const rings = [
  { x: 0, z: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 30 },
  { x: 54, z: -180, rotate: 26, scale: 0.84, opacity: 0.75, zIndex: 20 },
  { x: 92, z: -340, rotate: 32, scale: 0.66, opacity: 0.32, zIndex: 10 },
]

/** Distancia más corta entre dos índices en un anillo circular. */
function shortestOffset(index: number, active: number, total: number) {
  let offset = index - active
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

export function ShowcaseCarousel() {
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)

  const stageRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const dragMoved = useRef(false)
  const reducedMotion = useRef(false)

  const total = slides.length

  const step = useCallback(
    (direction: number) => {
      setActive((current) => (current + direction + total) % total)
    },
    [total],
  )

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  useEffect(() => {
    const node = stageRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || paused || dragging || reducedMotion.current) return
    const timer = window.setInterval(() => step(1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [inView, paused, dragging, step])

  useEffect(() => {
    if (!dragging) return
    const onMove = (event: PointerEvent) => {
      if (Math.abs(event.clientX - dragStartX.current) > 6) dragMoved.current = true
    }
    const onUp = (event: PointerEvent) => {
      const delta = event.clientX - dragStartX.current
      if (Math.abs(delta) > DRAG_THRESHOLD) step(delta < 0 ? 1 : -1)
      setDragging(false)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [dragging, step])

  if (total < 3) return null

  return (
    <section id="carrusel" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nuestro taller"
          title="Recorre nuestras reparaciones."
          description="Arrastra, usa las flechas o toca una foto para explorar casos reales que salieron de nuestro taller."
        />

        <Reveal delay={80} className="mt-14">
          <div
            ref={stageRef}
            role="group"
            aria-roledescription="carrusel"
            aria-label="Reparaciones reales de Arcoiris"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault()
                step(-1)
              }
              if (event.key === "ArrowRight") {
                event.preventDefault()
                step(1)
              }
            }}
            onPointerDown={(event) => {
              dragStartX.current = event.clientX
              dragMoved.current = false
              setDragging(true)
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className={cn(
              "relative mx-auto h-[290px] w-full max-w-3xl touch-none select-none rounded-3xl focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none sm:h-[360px] lg:h-[420px]",
              dragging ? "cursor-grabbing" : "cursor-grab",
            )}
            style={{ perspective: "1200px" }}
          >
            {slides.map((item, index) => {
              const offset = shortestOffset(index, active, total)
              const ring = rings[Math.abs(offset)]
              if (!ring) return null

              const side = Math.sign(offset)
              const isActive = offset === 0

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${item.title} — ${item.category}`}
                  aria-current={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => {
                    if (!dragMoved.current) setActive(index)
                  }}
                  // La altura manda para que la tarjeta nunca desborde el escenario;
                  // el aspecto 4/3 deriva el ancho.
                  className="absolute left-1/2 top-1/2 aspect-[4/3] h-[82%] overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg transition-[transform,opacity] duration-500 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${side * ring.x}%) translateZ(${ring.z}px) rotateY(${-side * ring.rotate}deg) scale(${ring.scale})`,
                    opacity: ring.opacity,
                    zIndex: ring.zIndex,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category} realizado en Arcoiris Zapatería Especializada, Medellín`}
                    fill
                    sizes="(max-width: 640px) 60vw, 460px"
                    className="object-cover"
                    draggable={false}
                  />
                  {isActive && (
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-primary/85 px-4 py-3 text-left">
                      <span className="truncate text-sm font-semibold text-primary-foreground">
                        {item.title}
                      </span>
                      <span className="truncate text-xs text-primary-foreground/75">
                        {item.category}
                      </span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Reparación anterior"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent/60 hover:text-accent-foreground focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir a ${item.title}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none",
                  index === active ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-accent/50",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Siguiente reparación"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent/60 hover:text-accent-foreground focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
