import type { WhatsAppContext } from "./whatsapp"
import {
  buildBeforeAfterCases,
  buildGalleryItems,
  type BeforeAfter,
  type GalleryItem,
} from "./repair-catalog"

export type { BeforeAfter, GalleryItem }

export const business = {
  name: "Arcoiris Zapatería Especializada",
  shortName: "Arcoiris",
  slogan: "Damos nueva vida a tus favoritos.",
  experienceYears: "40 años de experiencia",
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
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#problema" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nuestra historia", href: "/#historia" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Sedes", href: "/#sedes" },
  { label: "Contacto", href: "/#contacto" },
]

// Enlaces adicionales que solo se muestran en el pie de página, para no saturar el menú principal.
export const footerExtraLinks = [
  { label: "Diagnostica tu artículo", href: "/#diagnostico" },
  { label: "Antes y después", href: "/#antes-despues" },
  { label: "Galería", href: "/#galeria" },
  { label: "Conoce el oficio", href: "/oficio" },
]

// TODO: reemplazar con los datos reales del fundador y los hitos exactos de la empresa.
export const companyStory = {
  eyebrow: "Nuestra historia",
  title: "Una empresa familiar que lleva 40 años devolviendo vida a tus artículos.",
  paragraphs: [
    "Arcoiris Zapatería Especializada nació en Medellín como un pequeño taller familiar dedicado a la reparación de calzado, en un momento en que reparar y cuidar los artículos que se tenían era tan importante como saberlos elegir.",
    "Con el paso de los años, el oficio se fue perfeccionando de generación en generación: nuevas técnicas, nuevos materiales y un conocimiento cada vez más profundo de cómo tratar el cuero, el calzado deportivo, los bolsos y las prendas de vestir.",
    "Hoy, cuatro décadas después, seguimos siendo una empresa familiar. Esa cercanía es la que nos ha permitido consolidarnos como uno de los talleres de reparación y restauración más reconocidos de Medellín, atendiendo a varias generaciones de una misma familia en nuestras sedes de Laureles y El Poblado.",
  ],
  milestones: [
    { year: "Inicios", text: "Un taller familiar de reparación de calzado abre sus puertas en Medellín." },
    { year: "Crecimiento", text: "Incorporamos lavandería especializada, teñido de cuero y teñido de prendas." },
    { year: "Consolidación", text: "Abrimos una segunda sede y ampliamos el equipo de maestros artesanos." },
    { year: "Hoy", text: "40 años de experiencia respaldando a clientes de todo el Valle de Aburrá." },
  ],
}

export const mission =
  "Restaurar y prolongar la vida útil del calzado, los bolsos, las prendas y los artículos de cuero de nuestros clientes, mediante un diagnóstico honesto, técnicas artesanales y materiales adecuados para cada caso."

export const vision =
  "Ser reconocidos como la zapatería y taller de restauración de referencia en Medellín, transmitiendo el oficio familiar a nuevas generaciones y demostrando que reparar bien también es una forma de cuidar lo que valoramos."

export interface ArticleNeed {
  id: string
  title: string
  before: string
  after: string
  description: string
  solutions: string[]
  context: WhatsAppContext
}

// Casos reales usados en "¿Qué necesita tu artículo?" — cada tarjeta abre sus propias soluciones.
export const articleNeeds: ArticleNeed[] = [
  {
    id: "jeans-destenidos",
    title: "Jeans desteñidos",
    before: "/content/94-antes.jpg",
    after: "/content/94-despues.jpg",
    description:
      "Recupera el color original de tu jean o dale un tono completamente nuevo mediante teñido industrial.",
    solutions: [
      "Teñido industrial de prendas de algodón y mezclilla",
      "Evaluación de composición antes de teñir",
      "Igualación de color y acabado uniforme",
      "Reparación de costuras y roturas asociadas",
    ],
    context: "ropa",
  },
  {
    id: "cambio-color-cuero",
    title: "Cuero que quieres cambiar de color",
    before: "/content/16-antes.jpg",
    after: "/content/16-despues.jpg",
    description:
      "Zapatos, botas o bolsos de cuero recuperan su color original o estrenan uno nuevo con teñido especializado.",
    solutions: [
      "Diagnóstico e identificación del cuero",
      "Limpieza y preparación de la superficie",
      "Igualación y aplicación de color",
      "Acabado y protección final",
    ],
    context: "cuero",
  },
  {
    id: "taloneras-danadas",
    title: "Taloneras dañadas",
    before: "/content/24-antes.jpg",
    after: "/content/24-despues.jpg",
    description:
      "El forro y la espuma interna del talón se desgastan por fricción constante y pueden sustituirse.",
    solutions: [
      "Retiro del material deteriorado",
      "Selección de nuevo forro y espuma",
      "Instalación y costura según construcción",
      "Acabado y revisión de comodidad",
    ],
    context: "calzado",
  },
  {
    id: "aseo-calzado",
    title: "Aseo para calzado",
    before: "/content/49-antes.jpg",
    after: "/content/49-despues.jpg",
    description:
      "Limpieza especializada para recuperar la apariencia de la suela y la parte superior del calzado.",
    solutions: [
      "Limpieza superficial o profunda según el material",
      "Tratamiento de manchas puntuales",
      "Limpieza de suelas",
      "Acondicionamiento del cuero cuando corresponde",
    ],
    context: "calzado",
  },
  {
    id: "bolsos-danados",
    title: "Bolsos dañados",
    before: "/content/40-antes.jpg",
    after: "/content/40-despues.jpg",
    description:
      "Cierres, asas, forros, bases o el color del cuero: evaluamos y restauramos cada parte de tu bolso.",
    solutions: [
      "Cambio de cierres, asas o herrajes",
      "Reparación de costuras y forros",
      "Restauración y teñido de cuero",
      "Cambio de base cuando está desgastada",
    ],
    context: "bolsos",
  },
  {
    id: "zapatos-sucios",
    title: "Zapatos sucios (lavandería)",
    before: "/content/29-antes.jpg",
    after: "/content/29-despues.jpg",
    description:
      "Tus tenis y zapatos merecen un lavado especializado, distinto al de una lavadora convencional.",
    solutions: [
      "Lavado superficial o profundo",
      "Limpieza de gamuza y nobuck",
      "Limpieza y acondicionamiento de cuero",
      "Secado controlado para evitar olores y daños",
    ],
    context: "calzado",
  },
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
    slug: "cambio-suelas",
    title: "Cambio de suelas",
    description:
      "Reemplazo de suelas desgastadas con materiales de alta resistencia.",
    image: "/images/service-calzado.png",
    context: "calzado",
  },
  {
    slug: "costura-profesional",
    title: "Costura profesional",
    description:
      "Restauración de costuras rotas con hilo de alta resistencia.",
    image: "/images/service-calzado.png",
    context: "calzado",
  },
  {
    slug: "restauracion-cuero",
    title: "Restauración de cuero",
    description:
      "Tratamiento y reparación de superficies de cuero dañado.",
    image: "/images/service-cuero.png",
    context: "cuero",
  },
  {
    slug: "reparacion-botas",
    title: "Reparación de botas",
    description:
      "Servicio especializado para botas de trabajo y moda.",
    image: "/images/service-calzado.png",
    context: "calzado",
  },
  {
    slug: "ajustes-calzado",
    title: "Ajustes de calzado",
    description:
      "Adaptación de calzado para mayor comodidad y ajuste.",
    image: "/images/service-calzado.png",
    context: "calzado",
  },
  {
    slug: "reparacion-bolsos",
    title: "Reparación de bolsos",
    description:
      "Restauración de bolsos de cuero, costuras, cremalleras y asas dañadas.",
    image: "/images/service-bolsos.png",
    context: "bolsos",
  },
  {
    slug: "reparacion-chaquetas",
    title: "Reparación de chaquetas",
    description:
      "Arreglo de chaquetas de cuero: cierres, costuras y restauración de superficies.",
    image: "/images/service-ropa.png",
    context: "ropa",
  },
  {
    slug: "reparacion-carteras",
    title: "Reparación de carteras",
    description:
      "Reparación de carteras y billeteras de cuero, costuras y cierres.",
    image: "/images/service-bolsos.png",
    context: "bolsos",
  },
  {
    slug: "tenido-cuero",
    title: "Teñido de cuero",
    description:
      "Teñido profesional de cuero para restaurar o cambiar el color de tus prendas y accesorios.",
    image: "/images/service-cuero.png",
    context: "cuero",
  },
  {
    slug: "tenido-tela",
    title: "Teñido de tela",
    description:
      "Teñimos camisas y prendas de tela devolviéndoles el color original o un nuevo estilo.",
    image: "/images/service-ropa.png",
    context: "ropa",
  },
  {
    slug: "otros-articulos-cuero",
    title: "Otros artículos de cuero",
    description:
      "Reparación y restauración de cinturones, maletines y todo tipo de artículos de cuero.",
    image: "/images/service-otros.png",
    context: "otros",
  },
]

export const beforeAfterCases: BeforeAfter[] = buildBeforeAfterCases()

export const galleryCategories = [
  "Todos",
  "Remontas y suelas",
  "Cuellos y plantillas",
  "Capelladas y piezas",
  "Tacones y tapas",
  "Teñido de cuero",
  "Teñido de tela",
  "Lavandería",
  "Bolsos",
] as const

export const galleryItems: GalleryItem[] = buildGalleryItems()

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
    title: "Trae tus artículos",
    description:
      "Visítanos en nuestro taller o envíanos fotos por WhatsApp para una evaluación inicial.",
  },
  {
    number: "02",
    title: "Evaluamos el daño",
    description:
      "Analizamos el estado de tu artículo y te proporcionamos un presupuesto detallado.",
  },
  {
    number: "03",
    title: "Realizamos la reparación",
    description:
      "Nuestro equipo experto restaura tu artículo con materiales de primera calidad.",
  },
  {
    number: "04",
    title: "Recibe como nuevo",
    description: "Retira tus artículos restaurados y disfrútalos como el primer día.",
  },
]

export interface Testimonial {
  initials: string
  name: string
  source: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    initials: "MP",
    name: "María P.",
    source: "Google Reviews",
    rating: 5,
    quote:
      "Sin duda la zapatería a la que siempre acudo, ya que además de su buena calidad y precios, el trato es exquisito. Siempre que realizo algún trabajo termino encantada.",
  },
  {
    initials: "CF",
    name: "Carlos F.",
    source: "Google Reviews",
    rating: 5,
    quote:
      "Llevo años trayendo mi calzado aquí y el trato siempre ha sido estupendo. La calidad del trabajo es excelente, parecen nuevos. Sin duda volveré a traer más.",
  },
  {
    initials: "DG",
    name: "Daniel G.",
    source: "Google Reviews",
    rating: 5,
    quote:
      "Pedido acorde con lo esperado. Trabajo de calidad y muy buen precio. El servicio fue rápido y sin problemas. Volveré a traer mis zapatos sin duda.",
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "¿Hacen domicilios en Medellín y otros municipios?",
    answer:
      "Sí, hacemos domicilios en Medellín, Envigado, Itagüí, Sabaneta, Caldas, La Estrella, Bello y Copacabana. Recogemos y entregamos tus artículos directamente.",
  },
  {
    question: "¿Cuánto tiempo toma una reparación de calzado?",
    answer:
      "Depende del tipo de reparación, pero generalmente entre 2 a 5 días hábiles. Te informaremos el tiempo exacto al evaluar tu artículo.",
  },
  {
    question: "¿Qué tipos de artículos reparan además de zapatos?",
    answer:
      "Reparamos bolsos, chaquetas de cuero, carteras, billeteras, cinturones, maletines y todo tipo de artículos de cuero. También hacemos teñido de cuero y tela.",
  },
  {
    question: "¿Cómo puedo cotizar mi reparación?",
    answer:
      "Puedes enviarnos fotos por WhatsApp y te daremos un presupuesto sin compromiso. También puedes visitarnos en Laureles o El Poblado.",
  },
  {
    question: "¿Ofrecen garantía en sus reparaciones?",
    answer:
      "Sí, todas nuestras reparaciones tienen garantía. Utilizamos materiales de alta calidad para asegurar que tus artículos queden como nuevos.",
  },
]

export const benefits = [
  {
    title: "40 años de experiencia",
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
    title: "Reparación y cuidado del cuero",
    description:
      "Especialistas en reparación de artículos de cuero, teñido industrial de toda clase de artículos de cuero y venta de artículos para su renovación y cuidado.",
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
