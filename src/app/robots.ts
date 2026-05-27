import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://pasoluciones.com.ar/sitemap.xml",
    host: "https://pasoluciones.com.ar",
  };
}
