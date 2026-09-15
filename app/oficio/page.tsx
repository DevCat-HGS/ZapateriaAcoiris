import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Conoce el oficio: diccionario del calzado y materiales",
  description:
    "Diccionario del calzado y de los materiales que utilizamos en Arcoiris Zapatería Especializada: remonta, capellada, cuello, talonera, crupón, crepé, neolite y más.",
  keywords: [
    "diccionario del calzado",
    "partes del zapato",
    "materiales para reparación de calzado",
    "qué es una remonta",
    "qué es la capellada",
    "crupón crepé neolite",
    "Arcoiris Zapatería Especializada",
  ],
  alternates: {
    canonical: "/oficio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Conoce el oficio | Diccionario del calzado y materiales | Arcoiris",
    description:
      "Diccionario del calzado y de los materiales que utilizamos en Arcoiris Zapatería Especializada.",
    url: `${siteUrl}/oficio`,
    siteName: "Arcoiris Zapatería Especializada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conoce el oficio | Diccionario del calzado y materiales | Arcoiris",
    description:
      "Diccionario del calzado y de los materiales que utilizamos en Arcoiris Zapatería Especializada.",
  },
}

const shoeTerms = [
  { term: "Remonta", definition: "Proceso de reconstrucción o sustitución de los componentes de la parte inferior del calzado que se encuentran deteriorados." },
  { term: "Capellada", definition: "Parte superior del calzado que cubre y envuelve el pie. Puede estar fabricada en cuero, sintético, textil, gamuza, nobuck o combinaciones de materiales." },
  { term: "Cuello", definition: "Zona superior que rodea la abertura del calzado y entra en contacto con el tobillo." },
  { term: "Talonera", definition: "Pieza o sección ubicada alrededor del talón, especialmente el material interno que protege y estructura esa zona." },
  { term: "Cambrión", definition: "Elemento estructural situado en la zona media del calzado, entre el talón y la parte delantera, que contribuye al soporte y estabilidad de la suela." },
  { term: "Suela", definition: "Parte inferior del calzado que está en contacto directo con el suelo y absorbe el impacto de cada paso." },
  { term: "Tapa", definition: "Componente que entra directamente en contacto con el suelo en la parte inferior del tacón." },
  { term: "Tacón", definition: "Elemento que eleva y sostiene la parte trasera del calzado, aportando altura y estabilidad." },
  { term: "Plantilla", definition: "Pieza interna que cubre la base del calzado y aporta comodidad, soporte y ajuste al pie." },
  { term: "Cordonera", definition: "Zona o conjunto de elementos —ojales, ganchos y refuerzos— donde se alojan los cordones del calzado." },
  { term: "Entresuela", definition: "Capa ubicada entre la plantilla y la suela exterior, que aporta amortiguación y estructura al calzado." },
  { term: "Contrafuerte", definition: "Refuerzo interno ubicado en la parte trasera del calzado, que le da forma y firmeza al talón." },
]

const materialTerms = [
  { term: "Crupón", definition: "Material de cuero de estructura densa y resistente, tradicionalmente utilizado en determinadas construcciones y reparaciones donde se necesita estabilidad y resistencia." },
  { term: "Crepé", definition: "Material utilizado en suelas que proporciona flexibilidad, confort y absorción. Existen diferentes calibres y formulaciones; el espesor se selecciona según la construcción del calzado." },
  { term: "Neolite", definition: "Material sintético tradicionalmente utilizado en reparación de calzado por su versatilidad, resistencia al desgaste y facilidad para ser trabajado." },
  { term: "Caucho expandido", definition: "Material de estructura celular que permite obtener soluciones ligeras y flexibles, especialmente interesantes para calzado casual y de confort." },
  { term: "Cuero", definition: "Material natural obtenido de la piel curtida de origen animal, valorado por su resistencia, flexibilidad y capacidad de adaptarse con el uso." },
  { term: "Gamuza", definition: "Cuero con acabado aterciopelado en su cara externa, que requiere productos y técnicas de limpieza específicas." },
  { term: "Nobuck", definition: "Cuero de acabado similar a la gamuza pero con una superficie más fina, obtenido al lijar ligeramente la flor del cuero." },
  { term: "EVA", definition: "Material sintético de estructura celular, ligero y flexible, utilizado en plantillas y componentes de calzado casual y deportivo." },
  { term: "Sintéticos", definition: "Materiales fabricados a partir de polímeros que buscan imitar las propiedades del cuero u otros materiales naturales." },
  { term: "Textiles", definition: "Materiales elaborados a partir de fibras tejidas, utilizados en distintos componentes del calzado y las prendas." },
]

export default function OficioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Conoce el oficio", path: "/oficio" }])}
      />
      <SiteHeader />
      <main className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8 lg:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Conoce el oficio
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-7 text-muted-foreground">
              Un zapato, un bolso o una prenda no son una sola pieza. Aquí explicamos, en un lenguaje
              sencillo, las partes del calzado y los materiales que utilizamos para que entiendas mejor
              cómo trabajamos cada reparación.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-foreground">Diccionario del calzado</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {shoeTerms.map((item) => (
                <div key={item.term} className="rounded-2xl border border-border/70 bg-background p-5">
                  <dt className="font-serif text-lg font-semibold text-primary">{item.term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.definition}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-14 text-2xl font-semibold text-foreground">Diccionario de materiales</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {materialTerms.map((item) => (
                <div key={item.term} className="rounded-2xl border border-border/70 bg-background p-5">
                  <dt className="font-serif text-lg font-semibold text-primary">{item.term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
