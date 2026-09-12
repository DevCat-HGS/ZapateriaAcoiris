"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export interface ServiceComparisonImage {
  before: string
  after: string
  hasComparison: boolean
}

interface ServiceComparisonCardProps {
  title: string
  images: ServiceComparisonImage[]
}

export function ServiceComparisonCard({ title, images }: ServiceComparisonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const image = images[imageIndex]

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && images.length > 1) {
          setImageIndex((current) => {
            const offset = 1 + Math.floor(Math.random() * (images.length - 1))
            return (current + offset) % images.length
          })
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [images.length])

  const animateComparison = isVisible && !reducedMotion && image.hasComparison

  return (
    <div ref={cardRef} className="relative aspect-[5/3] overflow-hidden">
      <Image
        src={image.after}
        alt={`${title} después de la reparación`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {animateComparison && (
        <Image
          key={imageIndex}
          src={image.before}
          alt={`${title} antes de la reparación`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="before-after-before object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      {animateComparison && <span className="before-after-line pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-background/90" />}
      {image.hasComparison && (
        <>
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-background/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground">
            Antes
          </span>
          <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-primary/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground">
            Después
          </span>
        </>
      )}
    </div>
  )
}
