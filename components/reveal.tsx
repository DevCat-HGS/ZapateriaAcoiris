"use client"

import { useEffect, useRef, useState, type ElementType } from "react"
import { cn } from "@/lib/utils"

type RevealVariant = "up" | "zoom" | "left" | "right"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: ElementType
  variant?: RevealVariant
}

const variantClasses: Record<RevealVariant, { base: string; visible: string }> = {
  up: { base: "reveal", visible: "reveal-visible" },
  zoom: { base: "reveal-zoom", visible: "reveal-zoom-visible" },
  left: { base: "reveal-left", visible: "reveal-left-visible" },
  right: { base: "reveal-right", visible: "reveal-right-visible" },
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const { base, visible: visibleClass } = variantClasses[variant]

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(base, visible && visibleClass, className)}
    >
      {children}
    </Tag>
  )
}

