import type { MetadataRoute } from "next"
import { absoluteUrl, siteUrl } from "@/lib/seo"
import { beforeAfterCases } from "@/lib/site"
import { servicePages } from "@/lib/service-pages"

export const dynamic = "force-static"

const homeImages = [
  ...new Set(beforeAfterCases.map((item) => absoluteUrl(item.after))),
].slice(0, 24)

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: homeImages,
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/servicios/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/oficio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/garantia`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/tenido-riesgos`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
