"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Counter } from "./counter"
import { HeroBeforeAfter } from "./hero-before-after"

export function HeroVisual() {
  const [videoAvailable, setVideoAvailable] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.35 })
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotionRef.current) {
      videoRef.current?.pause()
      return
    }
    const onMove = (e: PointerEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  const parallax = (strength: number) => {
    if (reducedMotionRef.current) return undefined
    const x = (pointer.x - 0.5) * strength
    const y = (pointer.y - 0.5) * strength
    return { transform: `translate(${x}px, ${y}px)` }
  }

  return (
    <>
      <div className="absolute inset-0 -z-20">
        {videoAvailable && (
          <video
            ref={videoRef}
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero.png"
            onError={() => setVideoAvailable(false)}
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        {!videoAvailable && (
          <Image
            src="/images/hero.png"
            alt="Artesano restaurando un zapato de cuero en su taller"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/65 to-primary/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(480px circle at ${pointer.x * 100}% ${pointer.y * 100}%, color-mix(in oklch, var(--color-accent) 30%, transparent), transparent 70%)`,
        }}
      />
      <div style={parallax(16)} aria-hidden="true" className="pointer-events-none absolute -right-16 top-10 -z-10 size-72">
        <div className="animate-blob size-full rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div style={parallax(-12)} aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-10 -z-10 size-64">
        <div className="animate-blob-delay size-full rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="animate-gentle-float absolute right-4 top-28 z-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:right-6 lg:right-10 lg:top-36">
        <span className="font-serif text-3xl font-semibold text-primary">
          <Counter to={40} />
        </span>
        <span className="text-sm font-medium leading-tight text-muted-foreground">
          años transformando
          <br />
          vida a tus artículos
        </span>
      </div>

      <HeroBeforeAfter />
    </>
  )
}

