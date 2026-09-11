"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 left-5 z-50 flex size-11 items-center justify-center rounded-full border border-border/70 bg-card text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:text-accent-foreground focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none sm:bottom-7 sm:left-7",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
