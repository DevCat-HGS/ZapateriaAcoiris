import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Política de teñido de cuero y prendas: alcance y riesgos",
  description:
    "Condiciones, alcance y riesgos técnicos del teñido de cuero y de prendas de algodón en Arcoiris Zapatería Especializada.",
  keywords: [
    "política de teñido",
    "riesgos del teñido de ropa",
    "teñido de cuero Medellín",
    "teñido de prendas Medellín",
    "Arcoiris Zapatería Especializada",
  ],
  alternates: {
    canonical: "/tenido-riesgos",
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
    title: "Política de teñido y riesgos | Arcoiris Zapatería Especializada",
    description:
      "Condiciones, alcance y riesgos técnicos del teñido de cuero y de prendas de algodón en Arcoiris Zapatería Especializada.",
    url: `${siteUrl}/tenido-riesgos`,
    siteName: "Arcoiris Zapatería Especializada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de teñido y riesgos | Arcoiris Zapatería Especializada",
    description:
      "Condiciones, alcance y riesgos técnicos del teñido de cuero y de prendas de algodón en Arcoiris Zapatería Especializada.",
  },
}

export default function TenidoRiesgosPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Política de teñido y riesgos", path: "/tenido-riesgos" },
        ])}
      />
      <SiteHeader />
      <main className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8 lg:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              POLÍTICA DE TEÑIDO DE ARTÍCULOS Y RIESGOS
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Última actualización: 9 de septiembre de 2026
            </p>

            <article className="mt-10 max-w-none space-y-6 text-foreground [&>h2]:mt-2 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h3]:mt-2 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>p]:leading-7 [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul_li]:leading-7 [&>ol_li]:leading-7 [&>p_strong]:text-foreground">
              <h2>1. Por qué existe esta política</h2>
              <p>
                El teñido, tanto de artículos de cuero como de prendas de algodón, es un proceso técnico que
                implica calor, agua, productos químicos y movimiento mecánico. Por eso no podemos garantizar que
                todos los artículos reaccionen exactamente igual, y consideramos importante explicar con
                transparencia qué se puede esperar antes de realizar este servicio.
              </p>

              <h2>2. Teñido y restauración de cuero</h2>
              <p>
                Restaurar un artículo de cuero no significa hacer que parezca nuevo a cualquier costo. Significa
                recuperar, dentro de lo técnicamente posible, su funcionalidad, apariencia y carácter. El
                proceso incluye diagnóstico, identificación del material, limpieza, preparación, corrección,
                igualación de color, aplicación, acabado y protección.
              </p>
              <p>Antes de teñir un artículo de cuero, evaluamos:</p>
              <ul>
                <li>Tipo de cuero y su estado de conservación.</li>
                <li>Grietas, resequedad o daños estructurales previos.</li>
                <li>Compatibilidad del color solicitado con el color e historial del artículo.</li>
                <li>Herrajes, costuras y otros materiales combinados que puedan verse afectados.</li>
              </ul>

              <h2>3. Teñido de prendas de algodón</h2>
              <p>
                Cambiar el color de una prenda puede darle una segunda vida y evitar reemplazarla cuando la tela
                y la construcción todavía se encuentran en buenas condiciones. Sin embargo, el teñido no elimina
                daños estructurales, manchas permanentes, desgaste de la fibra ni decoloraciones que hayan
                alterado profundamente el tejido.
              </p>
              <p>
                Nuestro proceso de teñido industrial incluye clasificación (composición, color, peso,
                construcción y estado), preparación, baño de teñido, control de temperatura, tiempo y
                movimiento, fijación, lavado posterior, secado y acabado.
              </p>

              <h2>4. Riesgos posibles del teñido de prendas</h2>
              <p>
                El teñido industrial es un proceso técnico y, por su naturaleza, existen variables que pueden
                presentarse y que no dependen del cuidado con el que se realice el trabajo:
              </p>
              <ul>
                <li>Encogimiento.</li>
                <li>Cambio de textura.</li>
                <li>Variación de tono respecto al color esperado.</li>
                <li>Diferencias de color entre los distintos materiales de una misma prenda.</li>
                <li>Alteración de estampados.</li>
                <li>Alteración de bordados.</li>
                <li>Cambios en los hilos de costura.</li>
                <li>Afectación de accesorios (botones, cremalleras, apliques).</li>
                <li>Diferencias de absorción del color entre fibras.</li>
                <li>Cambios en el acabado original de la tela.</li>
              </ul>
              <p>
                <strong>Esto es especialmente relevante cuando una prenda combina materiales distintos:</strong> una
                prenda puede estar compuesta por algodón, poliéster, elastano, hilo de otro material y estampado.
                El algodón puede absorber el color de una manera diferente a los demás componentes, generando
                variaciones de tono entre partes de la misma prenda.
              </p>

              <h2>5. Antes de teñir, evaluamos</h2>
              <p>
                Para reducir el riesgo de un resultado inesperado, antes de teñir una prenda te preguntamos qué
                tipo de artículo es (camiseta, pantalón, vestido, chaqueta u otro) y, si es posible, su
                composición (100&nbsp;% algodón, algodón + sintético, con elastano, o si no la conoces).
              </p>
              <p>
                Si no conoces la composición de tu prenda, puedes enviarnos una fotografía de la etiqueta de
                composición y de la prenda por WhatsApp para ayudarte a evaluarla antes de decidir si el teñido
                es la opción adecuada.
              </p>

              <h2>6. Responsabilidad del cliente y del taller</h2>
              <p>
                Antes de iniciar un proceso de teñido, informamos al cliente sobre el estado del artículo y los
                riesgos aplicables a su caso particular. Al autorizar el servicio, el cliente acepta que el
                resultado puede presentar las variaciones descritas en esta política, propias de la naturaleza
                técnica del proceso y no atribuibles a un error del taller.
              </p>
              <p>
                Arcoiris Zapatería Especializada se compromete a utilizar los productos y procesos adecuados
                según el material y a informar con honestidad cuando un artículo no sea un buen candidato para
                el teñido.
              </p>

              <h2>7. Contacto</h2>
              <p>Para consultas sobre esta política, puede comunicarse con:</p>
              <p><strong>Arcoiris Zapatería Especializada</strong></p>
              <p><strong>WhatsApp:</strong> +57 311 630 1609</p>
              <p><strong>Correo electrónico:</strong> danielllano_87@hotmail.com</p>
              <p><strong>Dirección:</strong> Laureles: Av. 33 # 82-14, Medellín, Colombia - Poblado: Cra. 42 # 9-6, Medellín, Colombia</p>

              <hr />

              <p><strong>Fecha de entrada en vigencia:</strong> 9 de septiembre de 2026</p>
              <p><strong>Última actualización:</strong> 9 de septiembre de 2026</p>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
