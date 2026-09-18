"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { galleryItems } from "@/lib/site"

const afterImages = Array.from(new Set(galleryItems.map((item) => item.image)))
const SLIDE_MS = 1000

export function HeroVisual() {
  const [phase, setPhase] = useState<"video" | "slides">("video")
  const [slide, setSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.35 })
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotionRef.current) {
      setPhase("slides")
      return
    }
    setShowVideo(true)
    const onMove = (e: PointerEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  useEffect(() => {
    if (phase !== "slides" || afterImages.length <= 1 || reducedMotionRef.current) return
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % afterImages.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [phase])

  const parallax = (strength: number) => {
    if (reducedMotionRef.current) return undefined
    const x = (pointer.x - 0.5) * strength
    const y = (pointer.y - 0.5) * strength
    return { transform: `translate(${x}px, ${y}px)` }
  }

  function startSlides() {
    setShowVideo(false)
    setPhase("slides")
  }

  const current = afterImages[slide] ?? "/content/17-despues.jpg"
  const next = afterImages[(slide + 1) % afterImages.length] ?? current

  return (
    <>
      <div className="absolute inset-0 -z-20">
        {showVideo && phase === "video" ? (
          <video
            className="size-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={current}
            onEnded={startSlides}
            onError={(event) => {
              if (event.target === event.currentTarget) startSlides()
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <>
            <Image
              src={current}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {next !== current && (
              <Image
                src={next}
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none object-cover opacity-0"
              />
            )}
          </>
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
    </>
  )
}
