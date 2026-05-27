import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
      },
      {
        userAgent: ["CCBot", "anthropic-ai", "cohere-ai"],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://pasoluciones.com.ar/sitemap.xml",
  };
}
