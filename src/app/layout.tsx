import type { Metadata } from "next";
import { poppins, outfit } from "@/lib/fonts";
import "./globals.css";
import { localBusinessSchema, organizationSchema, webSiteSchema } from "@/lib/schema";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://pasoluciones.com.ar"),
  title: {
    default: "Perforaciones en Hormigón Armado Buenos Aires | PAS Piedra Angular Solutions",
    template: "%s | PAS Piedra Angular Solutions",
  },
  description:
    "Especialistas en perforaciones y cortes de hormigón armado en Buenos Aires y CABA. Tecnología diamantada refrigerada por agua. Anclajes, bocas de ataque y sellado de juntas. Cotizamos sin cargo en 24hs.",
  keywords: [
    "Perforaciones en hormigón armado",
    "sellado de juntas",
    "anclajes químicos",
    "anclajes mecánicos",
    "corte de hormigón",
    "Buenos Aires",
    "CABA",
    "Gran Buenos Aires",
    "perforación diamantada",
    "boca de ataque",
  ],
  authors: [{ name: "PAS Piedra Angular Solutions" }],
  creator: "PAS Piedra Angular Solutions",
  publisher: "PAS Piedra Angular Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://pasoluciones.com.ar",
    languages: { "es-AR": "https://pasoluciones.com.ar" },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://pasoluciones.com.ar",
    siteName: "PAS Piedra Angular Solutions",
    title: "PAS | Perforaciones y Cortes en Hormigón Armado",
    description:
      "Especialistas en perforaciones, cortes y anclajes en hormigón armado en Buenos Aires y CABA. Precisión, tecnología diamantada y resultados profesionales.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "PAS Piedra Angular Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAS | Perforaciones y Cortes en Hormigón Armado",
    description:
      "Especialistas en perforaciones, cortes y anclajes en hormigón armado en Buenos Aires y CABA.",
    images: ["/opengraph.png"],
  },
  icons: {
    icon: [
      { url: "/ico/favicon.svg", type: "image/svg+xml" },
      { url: "/ico/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/ico/favicon.ico" },
    ],
    apple: [{ url: "/ico/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/ico/site.webmanifest",
  appleWebApp: { title: "PAS" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${outfit.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero-bg.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema()),
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
