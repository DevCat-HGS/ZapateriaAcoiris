import { business, faqs, locations, schedule } from "./site"
import { serviceSegments, capitalizeServiceTitle } from "./repair-catalog"
import { WHATSAPP_DISPLAY } from "./whatsapp"

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

export const siteName = business.name

export const defaultTitle =
  "Arcoiris Zapatería Especializada | Reparación de Calzado y Cuero en Medellín"

export const defaultDescription =
  "Reparación y restauración de calzado, tenis, bolsos, chaquetas y artículos de cuero en Medellín. Remontas, cambio de suelas, tacones, teñido de cuero y prendas, y lavandería de calzado con 40 años de experiencia. Sedes en Laureles y El Poblado, con recogida y entrega en el Área Metropolitana."

/** Municipios que atendemos con recogida y entrega (coincide con la sección de FAQ). */
export const servedCities = [
  "Medellín",
  "Envigado",
  "Itagüí",
  "Sabaneta",
  "Caldas",
  "La Estrella",
  "Bello",
  "Copacabana",
]

export const primaryKeywords = [
  "reparación de calzado Medellín",
  "zapatería especializada Medellín",
  "remonta de calzado Medellín",
  "cambio de suelas Medellín",
  "cambio de tacones Medellín",
  "reparación de tenis Medellín",
  "lavandería de calzado Medellín",
  "teñido de cuero Medellín",
  "teñido de ropa Medellín",
  "reparación de bolsos Medellín",
  "reparación de chaquetas de cuero Medellín",
  "restauración de calzado Laureles",
  "zapatería El Poblado",
  "arreglo de zapatos a domicilio Medellín",
]

/** Fotografías reales usadas como imágenes de referencia del negocio. */
const showcaseImages = [
  "/content/17-despues.jpg",
  "/content/9-despues.jpg",
  "/content/15-despues.jpg",
  "/content/49-despues.jpg",
]

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`
}

function mapsUrl(mapsQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
}

function openingHours() {
  return schedule.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek:
      item.days === "Sábados"
        ? ["Saturday"]
        : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: item.days === "Sábados" ? "09:00" : "08:30",
    closes: item.days === "Sábados" ? "14:00" : "17:30",
  }))
}

/**
 * Catálogo de servicios construido con los datos reales de services.json.
 * La cobertura y el proveedor se declaran una sola vez en el negocio para no
 * repetirlos en cada servicio e inflar el HTML.
 */
function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Servicios de reparación y restauración",
    itemListElement: serviceSegments.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: capitalizeServiceTitle(service.servicio),
        description: service.description,
      },
    })),
  }
}

export function localBusinessSchema() {
  const [laureles] = locations

  return {
    "@context": "https://schema.org",
    "@type": "ShoeStore",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    alternateName: business.shortName,
    slogan: business.slogan,
    url: siteUrl,
    logo: absoluteUrl("/logo-empresa.png"),
    image: showcaseImages.map(absoluteUrl),
    description: defaultDescription,
    telephone: WHATSAPP_DISPLAY,
    priceRange: "$$",
    currenciesAccepted: "COP",
    address: {
      "@type": "PostalAddress",
      streetAddress: laureles.address,
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    hasMap: mapsUrl(laureles.mapsQuery),
    areaServed: servedCities.map((city) => ({ "@type": "City", name: city })),
    knowsAbout: [
      "Reparación de calzado",
      "Remontas y cambio de suelas",
      "Tacones y tapas",
      "Restauración de cuero",
      "Teñido de cuero y prendas",
      "Lavandería especializada de calzado",
      "Reparación de bolsos y maletines",
    ],
    sameAs: [business.instagram.url, business.facebook.url],
    openingHoursSpecification: openingHours(),
    hasOfferCatalog: offerCatalog(),
    department: locations.map((location) => ({
      "@type": "ShoeStore",
      "@id": `${siteUrl}/#sede-${location.id}`,
      name: location.name,
      telephone: location.phoneDisplay,
      url: `${siteUrl}/#sedes`,
      image: absoluteUrl(showcaseImages[0]),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: "Medellín",
        addressRegion: "Antioquia",
        addressCountry: "CO",
      },
      hasMap: mapsUrl(location.mapsQuery),
      openingHoursSpecification: openingHours(),
    })),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    description: defaultDescription,
    inLanguage: "es-CO",
    publisher: { "@id": `${siteUrl}/#business` },
  }
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Inicio", path: "/" },
      ...trail,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
