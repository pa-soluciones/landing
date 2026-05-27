import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pasoluciones.com.ar";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#proyectos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#nosotros`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
