"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/site"
import { SectionHeading } from "./section-heading"

export function Gallery() {
  const [active, setActive] = useState<string>("Todos")
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  )

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestro trabajo habla por nosotros."
          description="Diferentes tipos de artículos que reparamos y restauramos. Filtra por categoría para ver más."
        />

        <div
          role="tablist"
          aria-label="Filtrar galería por categoría"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {galleryCategories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none",
                  isActive
                    ? "scale-105 border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/75 hover:-translate-y-0.5 hover:border-accent/60 hover:text-primary",
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              aria-label={`Ver imagen ampliada: ${item.title}`}
              style={{ animationDelay: `${i * 45}ms` }}
              className="animate-gallery-item group relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:opacity-100">
                <ZoomIn className="size-8 scale-75 text-primary-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-primary-foreground">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Pronto agregaremos más trabajos de esta categoría.
          </p>
        )}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
          className="animate-modal-in fixed inset-0 z-[70] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/10 text-primary-foreground transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            <X className="size-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              sizes="(max-width: 640px) 100vw, 32rem"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-5">
              <p className="text-base font-semibold text-primary-foreground">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

