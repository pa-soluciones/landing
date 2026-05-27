import type { Metadata } from "next";
import { poppins, outfit } from "@/lib/fonts";
import "./globals.css";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pasoluciones.com.ar"),
  title: {
    default: "PAS Piedra Angular Solutions | Perforaciones en Hormigón Armado",
    template: "%s | PAS Piedra Angular Solutions",
  },
  description:
    "PAS (Piedra Angular Solutions) ofrece servicios profesionales de perforaciones en hormigón armado, sellado de juntas, y anclajes químicos/mecánicos en Buenos Aires y CABA.",
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
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PBZCGJDV');`,
          }}
        />
        <Script
          id="hotjar-init"
          strategy="lazyOnload"
          src="https://t.contentsquare.net/uxa/016fd7df4d13e.js"
        />
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
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBZCGJDV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
