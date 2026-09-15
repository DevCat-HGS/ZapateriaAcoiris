import type { MetadataRoute } from "next"
import { business } from "@/lib/site"
import { defaultDescription } from "@/lib/seo"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.shortName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5efe5",
    theme_color: "#3a2a1c",
    lang: "es-CO",
    icons: [
      { src: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
