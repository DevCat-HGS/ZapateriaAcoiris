import type { WhatsAppContext } from "./whatsapp"

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
    before: "/content/IMG-20260908-WA0080.jpg",
    after: "/content/IMG-20260908-WA0080.jpg",
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
    before: "/content/IMG-20260908-WA0333.jpg",
    after: "/content/IMG-20260908-WA0333.jpg",
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
    before: "/content/IMG-20260908-WA0097.jpg",
    after: "/content/IMG-20260908-WA0097.jpg",
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
    before: "/content/IMG-20260908-WA0181.jpg",
    after: "/content/IMG-20260908-WA0181.jpg",
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
    title: "Cambio de talonera en tenis",
    description:
      "Reconstruimos la talonera desgastada devolviendo firmeza y buena apariencia al calzado.",
    before: "/content/1-antes.jpg",
    after: "/content/1-despues.jpg",
    status: "real",
  },
  {
    id: "ba-2",
    category: "Calzado",
    title: "Restauración de suela amarillenta",
    description:
      "Recuperamos el color original de la suela eliminando el amarillamiento por uso y tiempo.",
    before: "/content/2-antes.jpg",
    after: "/content/2-despues.jpg",
    status: "real",
  },
  {
    id: "ba-3",
    category: "Calzado",
    title: "Blanqueo de suela deportiva",
    description:
      "Un tratamiento especializado devuelve el blanco original a suelas muy desgastadas.",
    before: "/content/3-antes.jpg",
    after: "/content/3-despues.jpg",
    status: "real",
  },
  {
    id: "ba-4",
    category: "Calzado",
    title: "Lavado profundo de tenis",
    description:
      "Suciedad acumulada en malla y suela se elimina con un proceso de lavandería especializada.",
    before: "/content/5-antes.jpg",
    after: "/content/5-despues.jpg",
    status: "real",
  },
  {
    id: "ba-5",
    category: "Cuero",
    title: "Limpieza y cuidado de gamuza",
    description:
      "Manchas y suciedad en gamuza se tratan con productos y técnicas específicas para este material.",
    before: "/content/7-antes.jpg",
    after: "/content/7-despues.jpg",
    status: "real",
  },
  {
    id: "ba-6",
    category: "Cuero",
    title: "Cambio de suela en zapato de cuero",
    description:
      "Una suela agrietada y perforada se sustituye por una nueva, respetando la construcción original.",
    before: "/content/8-antes.jpg",
    after: "/content/8-despues.jpg",
    status: "real",
  },
  {
    id: "ba-7",
    category: "Calzado",
    title: "Refuerzo de costuras en tenis",
    description:
      "Reforzamos las zonas debilitadas de la capellada para evitar que la rotura avance.",
    before: "/content/9-antes.jpg",
    after: "/content/9-despues.jpg",
    status: "real",
  },
  {
    id: "ba-8",
    category: "Cuero",
    title: "Pegado y remonta de botín",
    description:
      "La suela separada se vuelve a pegar y prensar para recuperar solidez y comodidad.",
    before: "/content/10-antes.jpg",
    after: "/content/10-despues.jpg",
    status: "real",
  },
  {
    id: "ba-9",
    category: "Ropa",
    title: "Reparación y ajuste de pantalón",
    description:
      "Costuras y detalles deteriorados se reparan para que la prenda vuelva a usarse con normalidad.",
    before: "/content/11-antes.jpg",
    after: "/content/11-despues.jpg",
    status: "real",
  },
  {
    id: "ba-10",
    category: "Calzado",
    title: "Reparación de capellada en tenis",
    description:
      "Un desgarro en la malla se repara devolviendo resistencia y buena apariencia al tenis.",
    before: "/content/12-antes.jpg",
    after: "/content/12-despues.jpg",
    status: "real",
  },
  {
    id: "ba-11",
    category: "Calzado",
    title: "Cambio de suela deportiva",
    description:
      "Sustituimos una suela desgastada por una nueva, adecuada al tipo de calzado deportivo.",
    before: "/content/13-antes.jpg",
    after: "/content/13-despues.jpg",
    status: "real",
  },
  {
    id: "ba-12",
    category: "Calzado",
    title: "Reparación de capellada en tenis de running",
    description:
      "Una perforación en el tejido se repara cuidando la flexibilidad propia del material.",
    before: "/content/14-antes.jpg",
    after: "/content/14-despues.jpg",
    status: "real",
  },
  {
    id: "ba-13",
    category: "Calzado",
    title: "Reparación de capellada deportiva",
    description:
      "Pequeños desgarros en el tejido se corrigen antes de que comprometan todo el calzado.",
    before: "/content/15-antes.jpg",
    after: "/content/15-despues.jpg",
    status: "real",
  },
  {
    id: "ba-14",
    category: "Calzado",
    title: "Cambio de cuello en tenis",
    description:
      "Sustituimos el cuello deteriorado devolviendo protección y comodidad al tobillo.",
    before: "/content/16-antes.jpg",
    after: "/content/16-despues.jpg",
    status: "real",
  },
  {
    id: "ba-15",
    category: "Ropa",
    title: "Reparación y restauración de jean",
    description:
      "Roturas y desgaste en la mezclilla se intervienen para prolongar la vida útil de la prenda.",
    before: "/content/17-antes.jpg",
    after: "/content/17-despues.jpg",
    status: "real",
  },
  {
    id: "ba-16",
    category: "Cuero",
    title: "Restauración de color en botas de cuero",
    description:
      "Igualamos el color y recuperamos el aspecto original de un cuero desgastado por el uso.",
    before: "/content/18-antes.jpg",
    after: "/content/18-despues.jpg",
    status: "real",
  },
  {
    id: "ba-17",
    category: "Cuero",
    title: "Reparación de tacón en botín",
    description:
      "Recubrimos y perfilamos un tacón deteriorado devolviéndole solidez y buen acabado.",
    before: "/content/19-antes.jpg",
    after: "/content/19-despues.jpg",
    status: "real",
  },
  {
    id: "ba-18",
    category: "Calzado",
    title: "Restauración de color en tenis de lona",
    description:
      "Un tenis de lona amarillenta recupera su tono original mediante lavado y tratamiento especializado.",
    before: "/content/20-antes.jpg",
    after: "/content/20-despues.jpg",
    status: "real",
  },
  {
    id: "ba-19",
    category: "Calzado",
    title: "Cambio de suela en tenis",
    description:
      "Una suela perforada se reemplaza devolviendo protección y estabilidad al andar.",
    before: "/content/21-antes.jpg",
    after: "/content/21-despues.jpg",
    status: "real",
  },
  {
    id: "ba-20",
    category: "Calzado",
    title: "Reparación de forro interno y talonera",
    description:
      "El forro y la espuma interna deteriorados se sustituyen para eliminar la fricción incómoda.",
    before: "/content/24-antes.jpg",
    after: "/content/24-despues.jpg",
    status: "real",
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
  "Remontas y suelas",
  "Cuellos y taloneras",
  "Capellada y costuras",
  "Tacones y tapas",
  "Teñido de cuero",
  "Teñido de ropa",
  "Lavandería",
  "Bolsos",
] as const

// Fotografías reales de trabajos realizados, agrupadas por tipo de reparación.
export const galleryItems: GalleryItem[] = [
  { id: "g-1", category: "Cuellos y taloneras", title: "Cambio de talonera en tenis", image: "/content/1-despues.jpg", status: "real" },
  { id: "g-24", category: "Cuellos y taloneras", title: "Reparación de forro y talonera interna", image: "/content/24-despues.jpg", status: "real" },
  { id: "g-16", category: "Cuellos y taloneras", title: "Cambio de cuello en tenis", image: "/content/16-despues.jpg", status: "real" },

  { id: "g-8", category: "Remontas y suelas", title: "Cambio de suela en zapato de cuero", image: "/content/8-despues.jpg", status: "real" },
  { id: "g-10", category: "Remontas y suelas", title: "Pegado y remonta de botín", image: "/content/10-despues.jpg", status: "real" },
  { id: "g-13", category: "Remontas y suelas", title: "Cambio de suela deportiva", image: "/content/13-despues.jpg", status: "real" },
  { id: "g-21", category: "Remontas y suelas", title: "Cambio de suela en tenis", image: "/content/21-despues.jpg", status: "real" },
  { id: "g-27", category: "Remontas y suelas", title: "Remonta de bota con cambio de suela", image: "/content/27-despues.jpg", status: "real" },

  { id: "g-9", category: "Capellada y costuras", title: "Refuerzo de costuras en tenis", image: "/content/9-despues.jpg", status: "real" },
  { id: "g-12", category: "Capellada y costuras", title: "Reparación de capellada en tenis", image: "/content/12-despues.jpg", status: "real" },
  { id: "g-14", category: "Capellada y costuras", title: "Reparación de capellada en tenis de running", image: "/content/14-despues.jpg", status: "real" },
  { id: "g-15", category: "Capellada y costuras", title: "Reparación de capellada deportiva", image: "/content/15-despues.jpg", status: "real" },
  { id: "g-31", category: "Capellada y costuras", title: "Reparación de capellada en slip-on", image: "/content/31-despues.jpg", status: "real" },

  { id: "g-19", category: "Tacones y tapas", title: "Reparación de tacón en botín", image: "/content/19-despues.jpg", status: "real" },
  { id: "g-45", category: "Tacones y tapas", title: "Reparación de tacón en zapato de cuero", image: "/content/45-despues.jpg", status: "real" },
  { id: "g-50", category: "Tacones y tapas", title: "Reparación de sandalia de tacón", image: "/content/50-despues.jpg", status: "real" },

  { id: "g-18", category: "Teñido de cuero", title: "Restauración de color en botas de cuero", image: "/content/18-despues.jpg", status: "real" },
  { id: "g-25", category: "Teñido de cuero", title: "Teñido de mocasines de cuero", image: "/content/25-despues.jpg", status: "real" },

  { id: "g-17", category: "Teñido de ropa", title: "Reparación y restauración de jean", image: "/content/17-despues.jpg", status: "real" },
  { id: "g-11", category: "Teñido de ropa", title: "Reparación y ajuste de pantalón", image: "/content/11-despues.jpg", status: "real" },
  { id: "g-55", category: "Teñido de ropa", title: "Teñido de camiseta de algodón", image: "/content/55-despues.jpg", status: "real" },

  { id: "g-2", category: "Lavandería", title: "Restauración de suela amarillenta", image: "/content/2-despues.jpg", status: "real" },
  { id: "g-3", category: "Lavandería", title: "Blanqueo de suela deportiva", image: "/content/3-despues.jpg", status: "real" },
  { id: "g-5", category: "Lavandería", title: "Lavado profundo de tenis", image: "/content/5-despues.jpg", status: "real" },
  { id: "g-7", category: "Lavandería", title: "Limpieza y cuidado de gamuza", image: "/content/7-despues.jpg", status: "real" },
  { id: "g-20", category: "Lavandería", title: "Restauración de color en tenis de lona", image: "/content/20-despues.jpg", status: "real" },
  { id: "g-29", category: "Lavandería", title: "Lavado de tenis deportivos", image: "/content/29-despues.jpg", status: "real" },
  { id: "g-33", category: "Lavandería", title: "Limpieza de sandalia de cuero", image: "/content/33-despues.jpg", status: "real" },
  { id: "g-60", category: "Lavandería", title: "Limpieza de sandalias blancas", image: "/content/60-despues.jpg", status: "real" },

  { id: "g-40", category: "Bolsos", title: "Restauración y cambio de color en bolso de cuero", image: "/content/40-despues.jpg", status: "real" },
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
