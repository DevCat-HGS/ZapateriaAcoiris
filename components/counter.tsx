"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  to: number
  duration?: number
  suffix?: string
  className?: string
}

export function Counter({ to, duration = 1600, suffix = "", className }: CounterProps) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to)
      return
    }

    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [to, duration])

  return (
    <span className={className}>
      {value}
      {suffix}
    </span>
  )
}
