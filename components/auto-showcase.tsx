"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  {
    before: "/images/ba-1-before.png",
    after: "/images/ba-1-after.png",
    eyebrow: "Restauración de calzado",
    title: "Tus favoritos vuelven a caminar contigo.",
    message: "Reparamos zapatos y tenis deportivos para darles una nueva vida.",
  },
  {
    before: "/images/ba-2-before.png",
    after: "/images/ba-2-after.png",
    eyebrow: "Bolsos y accesorios",
    title: "Cuidamos cada detalle.",
    message: "Costura, cambio de asas, cierres y herrajes para tus bolsos.",
  },
  {
    before: "/images/ba-3-before.png",
    after: "/images/ba-3-after.png",
    eyebrow: "Teñido de cuero",
    title: "El color también puede volver.",
    message: "Teñido industrial para renovar toda clase de artículos de cuero.",
  },
]

export function AutoShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 8400)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-[560px] overflow-hidden bg-primary sm:min-h-[620px] lg:min-h-[680px]">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={activeSlide !== index}
        >
          <Image src={slide.before} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          <div
            className={`absolute inset-0 ${
              activeSlide === index ? "before-after-reveal" : ""
            }`}
          >
            <Image src={slide.after} alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-primary/45" />
          <span className="absolute left-4 top-5 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground sm:left-8 sm:top-8">
            Antes
          </span>
          <span className="absolute right-4 top-5 z-10 rounded-full bg-primary/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground sm:right-8 sm:top-8">
            Después
          </span>
          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-end px-4 pb-20 sm:min-h-[620px] sm:px-6 sm:pb-24 lg:min-h-[680px] lg:px-8">
            <div className="max-w-2xl text-primary-foreground drop-shadow-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {slide.eyebrow}
              </p>
              <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
                {slide.message}
              </p>
            </div>
          </div>
        </div>
      ))}

      <p className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
        Antes y después
      </p>
    </div>
  )
}