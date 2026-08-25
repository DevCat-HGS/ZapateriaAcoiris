"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { galleryCategories, galleryItems } from "@/lib/site"
import { SectionHeading } from "./section-heading"

export function Gallery() {
  const [active, setActive] = useState<string>("Todos")

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  )

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
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/75 hover:border-accent/60 hover:text-primary",
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {filtered.map((item) => (
            <figure
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <figcaption className="text-sm font-semibold text-primary-foreground">
                  {item.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Pronto agregaremos más trabajos de esta categoría.
          </p>
        )}

        <p className="mt-10 text-center text-xs italic text-muted-foreground/80">
          Imágenes ilustrativas de referencia mientras incorporamos fotografías
          reales de nuestros trabajos.
        </p>
      </div>
    </section>
  )
}
