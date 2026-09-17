import type { MetadataRoute } from "next";
import { CORTES_PATH, SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-09-16",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${CORTES_PATH}`,
      lastModified: "2026-09-16",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/politica-de-privacidad`,
      lastModified: "2026-09-03",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terminos-y-condiciones`,
      lastModified: "2026-09-03",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
