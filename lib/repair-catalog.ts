import serviceSegments from "@/public/data/services.json"

export interface BeforeAfter {
  id: string
  category: string
  title: string
  description: string
  before: string
  after: string
  status: "ilustrativo" | "real"
}

export interface GalleryItem {
  id: string
  category: string
  title: string
  image: string
  status: "ilustrativo" | "real"
}

export type RepairService = (typeof serviceSegments)[number]

export function contentImagePath(filename: string) {
  return `/content/${filename}`
}

export function capitalizeServiceTitle(servicio: string) {
  return servicio.charAt(0).toUpperCase() + servicio.slice(1)
}

/** Agrupa reparaciones para la galería y los casos de antes/después. */
export function repairCategory(servicio: string): string {
  const s = servicio.toLowerCase()

  if (s.includes("bolso")) return "Bolsos"
  if (s.includes("lavado") || s.includes("blanque")) return "Lavandería"
  if (s.includes("teñido") || s.includes("tenida")) {
    if (
      s.includes("tela") ||
      s.includes("tenis") ||
      s.includes("algod") ||
      s.includes("jean") ||
      s.includes("prenda") ||
      s.includes("pantal") ||
      s.includes("camis")
    ) {
      return "Teñido de tela"
    }
    return "Teñido de cuero"
  }
  if (s.includes("remonta") || s.includes("suela") || s.includes("guayo")) {
    return "Remontas y suelas"
  }
  if (
    s.includes("cuello") ||
    s.includes("plantilla") ||
    s.includes("talonera") ||
    (s.includes("forro") && !s.includes("tacón") && !s.includes("tacon"))
  ) {
    return "Cuellos y plantillas"
  }
  if (
    s.includes("pilón") ||
    s.includes("pilon") ||
    s.includes("tacón") ||
    s.includes("tacon") ||
    (s.includes("tapa") && !s.includes("tapete"))
  ) {
    return "Tacones y tapas"
  }
  return "Capelladas y piezas"
}

export function hasBeforeAfterPair(antes: string, despues: string) {
  return antes !== despues
}

/** Un par antes/después por servicio, en el orden de public/data/services.json. */
export function buildBeforeAfterCases(): BeforeAfter[] {
  const cases: BeforeAfter[] = []

  for (const service of serviceSegments) {
    const image = service.imagenes.find((item) =>
      hasBeforeAfterPair(item.antes, item.despues),
    )
    if (!image) continue

    cases.push({
      id: `ba-${service.servicio.replace(/\s+/g, "-")}`,
      category: repairCategory(service.servicio),
      title: capitalizeServiceTitle(service.servicio),
      description: service.description,
      before: contentImagePath(image.antes),
      after: contentImagePath(image.despues),
      status: "real",
    })
  }

  return cases
}

/** Una vista por servicio con la primera foto comparable disponible. */
export function buildGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = []

  for (const service of serviceSegments) {
    const comparable = service.imagenes.find((image) =>
      hasBeforeAfterPair(image.antes, image.despues),
    )
    const fallback = service.imagenes[0]
    const pick = comparable ?? fallback
    if (!pick) continue

    items.push({
      id: `g-${service.servicio.replace(/\s+/g, "-")}`,
      category: repairCategory(service.servicio),
      title: capitalizeServiceTitle(service.servicio),
      image: contentImagePath(pick.despues),
      status: "real",
    })
  }

  return items
}

export { serviceSegments }
