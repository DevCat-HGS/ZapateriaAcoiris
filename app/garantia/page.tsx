import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Política de garantía de reparaciones",
  description:
    "Condiciones de garantía de las reparaciones y restauraciones realizadas por Arcoiris Zapatería Especializada.",
  keywords: [
    "política de garantía",
    "garantía de reparación de calzado",
    "Arcoiris Zapatería Especializada",
    "garantía Medellín",
  ],
  alternates: {
    canonical: "/garantia",
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
    title: "Política de garantía | Arcoiris Zapatería Especializada",
    description:
      "Condiciones de garantía de las reparaciones y restauraciones realizadas por Arcoiris Zapatería Especializada.",
    url: `${siteUrl}/garantia`,
    siteName: "Arcoiris Zapatería Especializada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de garantía | Arcoiris Zapatería Especializada",
    description:
      "Condiciones de garantía de las reparaciones y restauraciones realizadas por Arcoiris Zapatería Especializada.",
  },
}

export default function GarantiaPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Política de garantía", path: "/garantia" },
        ])}
      />
      <SiteHeader />
      <main className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8 lg:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              POLÍTICA DE GARANTÍA
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Última actualización: 9 de septiembre de 2026
            </p>

            <article className="mt-10 max-w-none space-y-6 text-foreground [&>h2]:mt-2 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h3]:mt-2 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>p]:leading-7 [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul_li]:leading-7 [&>ol_li]:leading-7 [&>p_strong]:text-foreground">
              <h2>1. Alcance de la garantía</h2>
              <p>
                Arcoiris Zapatería Especializada ofrece garantía sobre la mano de obra y los materiales
                utilizados en cada reparación, restauración o intervención realizada en calzado, bolsos,
                prendas y demás artículos de cuero recibidos en nuestro taller.
              </p>
              <p>
                La garantía cubre defectos directamente relacionados con el trabajo realizado, como despegue de
                una suela recién instalada, descosido de una costura recién elaborada o desprendimiento de un
                componente recién sustituido, siempre que el uso del artículo haya sido normal.
              </p>

              <h2>2. Duración</h2>
              <p>
                El término de garantía se informa al cliente en el momento de recibir el artículo y queda
                registrado en la orden de servicio. De manera general:
              </p>
              <ul>
                <li><strong>Remontas, cambio de suela, tapas y pegado:</strong> 30 días calendario.</li>
                <li><strong>Costuras, cambio de cuello, talonera, cambrión y cordonera:</strong> 30 días calendario.</li>
                <li><strong>Lavandería y limpieza de calzado:</strong> no aplica garantía por tratarse de un servicio de una sola aplicación, salvo defecto atribuible al proceso.</li>
                <li><strong>Teñido de cuero y teñido de prendas:</strong> sujeto a la Política de teñido y riesgos, dada la naturaleza técnica del proceso.</li>
              </ul>

              <h2>3. Qué no cubre la garantía</h2>
              <p>La garantía no cubre:</p>
              <ul>
                <li>Desgaste normal por el uso del artículo después de la reparación.</li>
                <li>Daños originados por golpes, mal uso, exposición a humedad excesiva o agentes externos.</li>
                <li>Deterioro de componentes del artículo que no fueron intervenidos en la reparación.</li>
                <li>Defectos derivados del estado previo del artículo que fueron informados al cliente antes de la intervención.</li>
                <li>Variaciones de tono, textura o acabado propias de procesos de teñido, cubiertas por la Política de teñido y riesgos.</li>
                <li>Artículos no reclamados dentro de los plazos informados por el taller.</li>
              </ul>

              <h2>4. Condición para hacer válida la garantía</h2>
              <p>Para hacer válida la garantía, el cliente debe:</p>
              <ol>
                <li>Presentar el comprobante o número de orden de servicio.</li>
                <li>Permitir que el taller inspeccione el artículo antes de determinar la procedencia de la garantía.</li>
                <li>Informar el inconveniente dentro del término de garantía correspondiente.</li>
              </ol>
              <p>
                Si el diagnóstico determina que el daño no está relacionado con el trabajo realizado, se
                informará al cliente y se cotizará la intervención adicional que se requiera.
              </p>

              <h2>5. Diagnóstico previo</h2>
              <p>
                Como se explica en nuestro proceso de reparación, cada artículo se evalúa antes de intervenirlo.
                Cuando el estado general del artículo, su construcción o los materiales disponibles limiten el
                alcance de la garantía, esto se comunicará al cliente antes de iniciar el trabajo.
              </p>

              <h2>6. Contacto</h2>
              <p>Para reclamaciones de garantía, puede comunicarse con:</p>
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
