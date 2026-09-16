import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JsonLd } from "@/components/json-ld"
import { ServicePageContent } from "@/components/service-page-content"
import { ServiceCases } from "@/components/service-cases"
import {
  findServicePage,
  servicePageSlugs,
} from "@/lib/service-pages"
import { breadcrumbSchema, siteName, siteUrl } from "@/lib/seo"

export const dynamic = "force-static"

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = findServicePage(slug)
  if (!page) return {}

  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/servicios/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "es_CO",
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}/servicios/${page.slug}`,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  }
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = findServicePage(slug)
  if (!page) notFound()

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    url: `${siteUrl}/servicios/${page.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "City", name: "Medellín" },
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Servicios", path: "/#servicios" },
            { name: page.eyebrow, path: `/servicios/${page.slug}` },
          ]),
          serviceSchema,
        ]}
      />
      <SiteHeader />
      <main className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {page.lead}
          </p>

          <div className="mt-14">
            <ServicePageContent page={page} />
          </div>

          {page.galleryCategory && (
            <ServiceCases category={page.galleryCategory} title={page.eyebrow} />
          )}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
