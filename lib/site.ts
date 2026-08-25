import type { WhatsAppContext } from "./whatsapp"

export const business = {
  name: "Arcoiris Zapatería Especializada",
  shortName: "Arcoiris",
  slogan: "Damos nueva vida a tus favoritos.",
  experienceYears: "Más de 10 años",
  coverage: "Área Metropolitana de Medellín / Valle de Aburrá",
  instagram: {
    handle: "@arcoiris_zapateria",
    url: "https://instagram.com/arcoiris_zapateria",
  },
  facebook: {
    handle: "Arcoiris Zapatería Medellín",
    url: "https://facebook.com/arcoiriszapateriamedellin",
  },
}

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Antes y Después", href: "#antes-despues" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Recogida y entrega", href: "#recogida" },
  { label: "Sedes", href: "#sedes" },
  { label: "Contacto", href: "#contacto" },
]

export interface Service {
  slug: string
  title: string
  description: string
  image: string
  context: WhatsAppContext
}

export const services: Service[] = [
  {
    slug: "calzado",
    title: "Calzado",
    description:
      "Reparación, mantenimiento y restauración de diferentes tipos de calzado.",
    image: "/images/service-calzado.png",
    context: "calzado",
  },
  {
    slug: "bolsos",
    title: "Bolsos",
    description: "Reparación y restauración de bolsos y accesorios.",
    image: "/images/service-bolsos.png",
    context: "bolsos",
  },
  {
    slug: "cuero",
    title: "Cuero",
    description:
      "Tratamiento, reparación y restauración de artículos elaborados en cuero.",
    image: "/images/service-cuero.png",
    context: "cuero",
  },
  {
    slug: "ropa",
    title: "Ropa",
    description: "Reparaciones y ajustes en prendas y artículos textiles.",
    image: "/images/service-ropa.png",
    context: "ropa",
  },
  {
    slug: "otros",
    title: "Otros materiales",
    description:
      "También trabajamos artículos elaborados en materiales sintéticos y otros materiales.",
    image: "/images/service-otros.png",
    context: "otros",
  },
]

export interface BeforeAfter {
  id: string
  category: string
  title: string
  description: string
  before: string
  after: string
  // "ilustrativo" mientras no existan fotografías reales de Arcoiris.
  status: "ilustrativo" | "real"
}

export const beforeAfterCases: BeforeAfter[] = [
  {
    id: "ba-1",
    category: "Calzado",
    title: "Zapato de cuero restaurado",
    description:
      "Un zapato desgastado recupera color, brillo y una suela como nueva.",
    before: "/images/ba-1-before.png",
    after: "/images/ba-1-after.png",
    status: "ilustrativo",
  },
  {
    id: "ba-2",
    category: "Bolsos",
    title: "Bolso de cuero recuperado",
    description:
      "Devolvemos suavidad, color parejo y firmeza a un bolso desgastado.",
    before: "/images/ba-2-before.png",
    after: "/images/ba-2-after.png",
    status: "ilustrativo",
  },
  {
    id: "ba-3",
    category: "Restauraciones",
    title: "Bota de cuero reparada",
    description:
      "Cuero reseco y suela deteriorada vuelven a la vida con un tratamiento completo.",
    before: "/images/ba-3-before.png",
    after: "/images/ba-3-after.png",
    status: "ilustrativo",
  },
]

export interface GalleryItem {
  id: string
  category: string
  title: string
  image: string
  status: "ilustrativo" | "real"
}

export const galleryCategories = [
  "Todos",
  "Calzado",
  "Bolsos",
  "Cuero",
  "Ropa",
  "Restauraciones",
  "Otros",
] as const

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Calzado", title: "Mocasines restaurados", image: "/images/gallery-1.png", status: "ilustrativo" },
  { id: "g2", category: "Bolsos", title: "Bolso cruzado recuperado", image: "/images/gallery-2.png", status: "ilustrativo" },
  { id: "g3", category: "Restauraciones", title: "Cambio de suela", image: "/images/gallery-3.png", status: "ilustrativo" },
  { id: "g4", category: "Cuero", title: "Cinturón y billetera", image: "/images/gallery-4.png", status: "ilustrativo" },
  { id: "g5", category: "Calzado", title: "Tenis restaurados", image: "/images/gallery-5.png", status: "ilustrativo" },
  { id: "g6", category: "Ropa", title: "Chaqueta de gamuza", image: "/images/gallery-6.png", status: "ilustrativo" },
]

export interface Location {
  id: string
  name: string
  address: string
  city: string
  phone: string
  phoneDisplay: string
  mapsQuery: string
}

export const locations: Location[] = [
  {
    id: "laureles",
    name: "Sede Laureles",
    address: "Av. 33 # 82-14",
    city: "Medellín, Colombia",
    phone: "+573116301609",
    phoneDisplay: "+57 311 630 1609",
    mapsQuery: "Av. 33 %23 82-14, Medellín, Colombia",
  },
  {
    id: "poblado",
    name: "Sede El Poblado",
    address: "Cra. 42 # 9-6",
    city: "Medellín, Colombia",
    phone: "+573046103512",
    phoneDisplay: "+57 304 610 3512",
    mapsQuery: "Cra. 42 %23 9-6, El Poblado, Medellín, Colombia",
  },
]

export const schedule = [
  { days: "Lunes a viernes", hours: "8:30 a. m. – 5:30 p. m." },
  { days: "Sábados", hours: "9:00 a. m. – 2:00 p. m." },
]

export const processSteps = [
  {
    number: "01",
    title: "Escríbenos",
    description: "Contáctanos por WhatsApp cuando quieras.",
  },
  {
    number: "02",
    title: "Envíanos fotos",
    description:
      "Puedes enviar fotografías del artículo y explicar qué necesitas reparar.",
  },
  {
    number: "03",
    title: "Evaluamos tu caso",
    description:
      "El asesor revisa la información y te orienta sobre el proceso.",
  },
  {
    number: "04",
    title: "Coordinamos la reparación",
    description: "Se define cómo proceder con el artículo.",
  },
  {
    number: "05",
    title: "Recogemos y entregamos",
    description:
      "Si lo solicitas, coordinamos la recogida y posterior entrega dentro de nuestra zona de cobertura.",
  },
]

export const benefits = [
  {
    title: "Más de 10 años de experiencia",
    description:
      "Experiencia en reparación y restauración de diferentes artículos.",
    icon: "Award",
  },
  {
    title: "Atención personalizada",
    description: "Cada artículo puede requerir una solución diferente.",
    icon: "HeartHandshake",
  },
  {
    title: "Especialistas en cuero",
    description: "Experiencia trabajando con productos elaborados en cuero.",
    icon: "Layers",
  },
  {
    title: "Trabajamos diferentes materiales",
    description:
      "Además del cuero, recibimos artículos en materiales sintéticos y otros materiales.",
    icon: "Boxes",
  },
  {
    title: "Recogida y entrega",
    description:
      "Servicio disponible para clientes del Área Metropolitana de Medellín.",
    icon: "Truck",
  },
  {
    title: "Atención directa por WhatsApp",
    description:
      "Envía fotografías y consulta directamente con un asesor.",
    icon: "MessageCircle",
  },
]
