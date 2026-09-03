import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pasoluciones.com.ar",
      lastModified: "2026-09-03",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://pasoluciones.com.ar/politica-de-privacidad",
      lastModified: "2026-09-03",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://pasoluciones.com.ar/terminos-y-condiciones",
      lastModified: "2026-09-03",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
